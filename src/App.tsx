import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InteractiveAnatomy } from './components/InteractiveAnatomy';
import { CourseShowcase } from './components/CourseShowcase';
import { CourseDetailModal } from './components/CourseDetailModal';
import { WhyDifferentComparison } from './components/WhyDifferentComparison';
import { SkillsTimeline } from './components/SkillsTimeline';
import { VirtualSimLab } from './components/VirtualSimLab';
import { FacultySpotlight } from './components/FacultySpotlight';
import { CareerCalculator } from './components/CareerCalculator';
import { HospitalPartnersMap } from './components/HospitalPartnersMap';
import { StudentDashboardPreview } from './components/StudentDashboardPreview';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { CertificateVerification } from './components/CertificateVerification';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { AICourseAdvisorModal } from './components/AICourseAdvisorModal';
import { EnrollmentWizard } from './components/EnrollmentWizard';
import { Course } from './types';

export function App() {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [isEnrollWizardOpen, setIsEnrollWizardOpen] = useState<boolean>(false);
  const [enrollCourseId, setEnrollCourseId] = useState<string>('pgdems');
  const [isAIAdvisorOpen, setIsAIAdvisorOpen] = useState<boolean>(false);

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnroll = (courseId?: string) => {
    if (courseId) setEnrollCourseId(courseId);
    setIsEnrollWizardOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#041026] text-white font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 1. Command Center Navbar */}
      <Navbar
        onNavigateSection={handleNavigateSection}
        onOpenEnroll={() => handleOpenEnroll('pgdems')}
        onOpenAdvisor={() => setIsAIAdvisorOpen(true)}
      />

      {/* 2. Hero Section with Live Vitals Simulation */}
      <Hero
        onOpenEnroll={handleOpenEnroll}
        onOpenAdvisor={() => setIsAIAdvisorOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* 3. Live Animated Stats Counter */}
      <StatsCounter />

      {/* 4. Why Doctors Choose DEFEB Glass Cards */}
      <WhyChooseUs />

      {/* 5. Unique Interactive 3D Anatomy Explorer */}
      <InteractiveAnatomy
        onOpenEnroll={handleOpenEnroll}
        onNavigateSection={handleNavigateSection}
      />

      {/* 6. Comprehensive Course Showcase & Bento Cards */}
      <CourseShowcase
        onSelectCourse={(course) => setSelectedCourseForModal(course)}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* 7. Why DEFEB Training Is Different (Lab Equipment vs Comparison Table) */}
      <WhyDifferentComparison />

      {/* 8. 100+ Emergency Skills Competency Timeline */}
      <SkillsTimeline />

      {/* 9. 360° High-Fidelity Virtual Simulation Room */}
      <VirtualSimLab />

      {/* 10. Renowned Doctor Faculty Spotlight */}
      <FacultySpotlight onOpenEnroll={handleOpenEnroll} />

      {/* 11. Interactive Medical Career & Salary Growth Calculator */}
      <CareerCalculator onOpenEnroll={handleOpenEnroll} />

      {/* 12. Hospital Partners & 600 Hours Internship Slots */}
      <HospitalPartnersMap onOpenEnroll={handleOpenEnroll} />

      {/* 13. Student Dashboard & LMS Preview */}
      <StudentDashboardPreview />

      {/* 14. Emergency Clinical Decision & ECG Quiz */}
      <InteractiveQuiz onOpenEnroll={handleOpenEnroll} />

      {/* 15. Official Certificate Credential Verification */}
      <CertificateVerification />

      {/* 16. Verified Alumni Success Testimonials */}
      <Testimonials />

      {/* 17. Frequently Asked Questions (FAQ Accordion) */}
      <FAQ />

      {/* 18. Grand Command Center Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* 19. Floating Sticky CTA Bar */}
      <StickyCTA
        onOpenEnroll={handleOpenEnroll}
        onOpenAdvisor={() => setIsAIAdvisorOpen(true)}
      />

      {/* MODALS */}

      {/* Course Detail Syllabus Modal */}
      <CourseDetailModal
        course={selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Gemini AI Medical Career Advisor Modal */}
      <AICourseAdvisorModal
        isOpen={isAIAdvisorOpen}
        onClose={() => setIsAIAdvisorOpen(false)}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Step-by-Step Interactive Enrollment Wizard */}
      <EnrollmentWizard
        isOpen={isEnrollWizardOpen}
        initialCourseId={enrollCourseId}
        onClose={() => setIsEnrollWizardOpen(false)}
      />

    </div>
  );
}

export default App;
