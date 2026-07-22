export interface CourseModule {
  number: number;
  title: string;
  hours: number;
  topics: string[];
  practicalSkills: string[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: 'Diploma' | 'Certification' | 'Workshop' | 'Masterclass';
  duration: string;
  totalHours: number;
  theoryHours: number;
  practicalHours: number;
  internshipHours: number;
  eligibility: string[];
  modules: CourseModule[];
  keySkills: string[];
  certificateType: string;
  feeINR: number;
  emiMonthlyINR: number;
  rating: number;
  badge?: string;
  description: string;
  iconName: string;
}

export interface Faculty {
  id: string;
  name: string;
  qualification: string;
  hospital: string;
  role: string;
  experienceYears: number;
  speciality: string;
  bio: string;
  avatarUrl: string;
  coursesTaught: string[];
  rating: number;
}

export interface HospitalPartner {
  id: string;
  name: string;
  category: 'Government' | 'Private Tertiary' | 'Trauma Center' | 'Medical College';
  city: string;
  state: string;
  stipendRange: string;
  internshipSlots: number;
  highlights: string[];
  logo: string;
}

export interface AnatomyRegion {
  id: string;
  name: string;
  system: string;
  anatomicalFocus: string;
  keyModules: string[];
  emergencyCases: string[];
  description: string;
  color: string;
  svgCoordinates: { cx: number; cy: number; r: number };
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  simulationRole: string;
  icon: string;
  description: string;
}

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface StudentTestimonial {
  id: string;
  name: string;
  beforeRole: string;
  currentRole: string;
  hospital: string;
  salaryIncrease: string;
  course: string;
  photoUrl: string;
  quote: string;
}

export interface EnrollmentData {
  fullName: string;
  email: string;
  phone: string;
  qualification: string;
  experienceYears: string;
  currentRole: string;
  city: string;
  courseId: string;
  batchMode: 'Full-time' | 'Weekend' | 'Hybrid Online + Hands-On';
  documentName?: string;
  paymentOption: 'One-time Full Payment' | 'Easy Monthly EMI (0% Interest)' | 'Pay Booking Amount (₹5,000)';
}
