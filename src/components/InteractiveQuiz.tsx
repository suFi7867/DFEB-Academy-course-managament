import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import confetti from 'canvas-confetti';
import { Activity, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface InteractiveQuizProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ onOpenEnroll }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);

    if (selectedOption === currentQ.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section id="quiz" className="py-24 bg-[#071936] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>EMERGENCY CLINICAL DECISION QUIZ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Test Your <span className="text-cyan-300">Resuscitation Skills</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Put your clinical reflexes to the test with real-world ECG tracings and emergency department case scenarios.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#091f42] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">

          {!quizCompleted ? (
            <div className="space-y-6">

              {/* Progress & Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  QUESTION {currentQuestionIndex + 1} OF {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  TOPIC: {currentQ.topic}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  let buttonStyle = 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200';

                  if (selectedOption === idx) {
                    buttonStyle = 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold';
                  }

                  if (isSubmitted) {
                    if (idx === currentQ.correctAnswerIndex) {
                      buttonStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold';
                    } else if (selectedOption === idx) {
                      buttonStyle = 'bg-red-500/20 border-red-400 text-red-200 font-bold';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm transition-all border flex items-center justify-between ${buttonStyle}`}
                    >
                      <span>{option}</span>
                      {isSubmitted && idx === currentQ.correctAnswerIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {isSubmitted && selectedOption === idx && idx !== currentQ.correctAnswerIndex && (
                        <XCircle className="w-5 h-5 text-red-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isSubmitted && (
                <div className="bg-[#030e20] p-4 rounded-xl border border-cyan-500/30 space-y-1 animate-fadeIn text-xs">
                  <p className="font-mono font-bold text-cyan-400 uppercase">CLINICAL EXPLANATION:</p>
                  <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Bottom Buttons */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400">Current Score: {score} / {currentQuestionIndex + (isSubmitted ? 1 : 0)}</span>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-2.5 bg-cyan-500 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl shadow"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1"
                  >
                    <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Skill Result'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Quiz Completion Card & Badge */
            <div className="text-center space-y-6 py-6 animate-fadeIn">
              <Award className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />

              <h3 className="text-2xl font-black text-white">
                Clinical Quiz Completed!
              </h3>

              <div className="bg-[#030e20] p-6 rounded-2xl border border-cyan-500/30 max-w-sm mx-auto space-y-2">
                <p className="text-xs font-mono text-cyan-400 uppercase">YOUR CLINICAL SCORE:</p>
                <p className="text-4xl font-black text-white font-mono">{score} / {QUIZ_QUESTIONS.length}</p>
                <p className="text-xs text-emerald-400 font-semibold">
                  {score >= 4 ? '🌟 Excellent Clinical Judgment!' : '👍 Good Effort! Master these in PGDEMS.'}
                </p>
              </div>

              <div className="flex justify-center space-x-4 pt-2">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retry Quiz</span>
                </button>

                <button
                  onClick={() => onOpenEnroll('pgdems')}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center space-x-1.5"
                >
                  <span>Master All 100+ Skills in PGDEMS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
