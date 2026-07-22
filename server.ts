import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client if API key exists
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// AI Medical Career Advisor Endpoint
app.post('/api/gemini/career-advisor', async (req, res) => {
  try {
    const { qualification, experienceYears, currentRole, targetGoal } = req.body;

    if (!ai) {
      return res.json({
        recommendation: `Based on your ${qualification || 'medical'} background and ${experienceYears || 0} years of experience, enrolling in DEFEB's PGDEMS (Post Graduate Diploma in Emergency Medical Services) or ACLS/Airway Masterclass will significantly enhance your clinical confidence in handling acute ED & ICU cases, opening doors to senior ER Officer and ICU Registrar positions across top tertiary hospitals in India with estimated 35-60% salary enhancement.`,
        suggestedCourses: ['PGDEMS', 'ACLS', 'Airway Management Workshop', 'ECG Masterclass'],
        projectedGrowth: '35% - 65% Salary Boost',
        recommendedPath: 'PGDEMS (1-Year Hybrid Program with 600 Hours Hospital Internship)',
        keySkillsToFocus: ['Advanced Airway & Mechanical Ventilation', 'Rapid Trauma FAST Assessment', '12-Lead ECG STEMI Localization', 'Defibrillation & Resuscitation Protocols']
      });
    }

    const prompt = `You are the Lead Medical Faculty Advisor for DEFEB (India's Premier Emergency Medicine & Clinical Excellence Academy).
A candidate provided the following details:
- Qualification: ${qualification}
- Experience: ${experienceYears} years
- Current Role: ${currentRole}
- Career Goal: ${targetGoal}

Provide a concise, highly professional, encouraging medical career recommendation in strict JSON format with keys:
{
  "recommendation": string (2-3 sentences explaining career advancement, clinical respect, and why DEFEB PGDEMS/Courses are ideal),
  "suggestedCourses": string array (e.g. ["PGDEMS", "ACLS", "Airway Masterclass"]),
  "projectedGrowth": string (e.g. "40% - 70% Salary Hike & ER Lead Roles"),
  "recommendedPath": string (e.g. "PGDEMS + Critical Care Essentials"),
  "keySkillsToFocus": string array (4 actionable emergency clinical skills)
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error('Error in career advisor API:', error);
    return res.status(500).json({
      error: 'Failed to generate recommendation',
      message: error.message,
    });
  }
});

// AI Clinical Case Simulation Assistant
app.post('/api/gemini/clinical-case', async (req, res) => {
  try {
    const { topic } = req.body;

    if (!ai) {
      return res.json({
        patientProfile: '45-year-old male presenting with acute retrosternal crushing chest pain radiating to left jaw, diaphoresis, and BP 90/60 mmHg.',
        initialVitals: { HR: 110, BP: '90/60', SpO2: '92%', RR: 24, GCS: 15 },
        question: 'What is the immediate priority 1-minute intervention in the ER?',
        options: [
          'High-flow Oxygen + 12-Lead ECG within 10 mins + Aspirin 325mg chewable + Dual Antiplatelet + Call Cath Lab',
          'Immediate IV Morphine 10mg without ECG',
          'Nebulization with Duolin and Budecort',
          'Start IV Antibiotics and wait for Troponin I result'
        ],
        correctAnswerIndex: 0,
        explanation: 'In suspected Acute Coronary Syndrome (STEMI), a 12-lead ECG must be obtained within 10 minutes, accompanied by immediate antiplatelet loading and resuscitation readiness as taught in DEFEB PGDEMS Module 3 (Cardiology).'
      });
    }

    const prompt = `Generate a realistic Emergency Department clinical case scenario for topic: "${topic || 'Acute Emergency'}".
Return strict JSON:
{
  "patientProfile": string,
  "initialVitals": { "HR": number, "BP": string, "SpO2": string, "RR": number, "GCS": number },
  "question": string,
  "options": array of 4 strings,
  "correctAnswerIndex": number (0-3),
  "explanation": string (explain why the correct answer saves lives based on ACLS/ATLS/PGDEMS clinical guidelines)
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error('Error in clinical case API:', error);
    return res.status(500).json({
      error: 'Failed to generate clinical case',
      message: error.message,
    });
  }
});

// Vite Middleware for Dev vs Production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DEFEB Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
