/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw, 
  Sidebar as SidebarIcon,
  Menu,
  X,
  Type as TypeIcon,
  ListChecks,
  Check,
  AlertCircle
} from 'lucide-react';
import { LISTENING_DATA, Part1Exercise, Part2Exercise, Part1Question, Part2Question } from './data';

// --- Utils ---

const isStrictlyCorrect = (input: string, target: string) => {
  return input === target;
};

// --- Components ---

const Sidebar = ({ 
  currentPart, 
  currentExerciseId, 
  onSelect, 
  isOpen, 
  onClose 
}: { 
  currentPart: 'part1' | 'part2', 
  currentExerciseId: string, 
  onSelect: (part: 'part1' | 'part2', id: string) => void,
  isOpen: boolean,
  onClose: () => void
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        className={`fixed inset-y-0 left-0 w-72 bg-zinc-900 border-r border-zinc-800 z-50 flex flex-col transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-zinc-100 tracking-tight leading-none">Listening App</h1>
              <p className="text-[9px] text-zinc-500 mt-1 leading-tight">Tác giả: Thanh Tài</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          {/* Part 1 Section */}
          <section>
            <div className="flex items-center gap-2 px-3 mb-3 text-zinc-500 uppercase text-xs font-bold tracking-widest">
              <TypeIcon className="w-3 h-3" />
              <span>Phần 1: Điền từ</span>
            </div>
            <div className="space-y-1">
              {LISTENING_DATA.part1.map(ex => (
                <button
                  key={ex.id}
                  onClick={() => { onSelect('part1', ex.id); onClose(); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${
                    currentPart === 'part1' && currentExerciseId === ex.id 
                      ? 'bg-indigo-600/10 text-indigo-400 font-medium border border-indigo-600/20' 
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  <span>{ex.title}</span>
                  <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${currentPart === 'part1' && currentExerciseId === ex.id ? 'opacity-100' : ''}`} />
                </button>
              ))}
            </div>
          </section>

          {/* Part 2 Section */}
          <section>
            <div className="flex items-center gap-2 px-3 mb-3 text-zinc-500 uppercase text-xs font-bold tracking-widest">
              <ListChecks className="w-3 h-3" />
              <span>Phần 2: Trắc nghiệm</span>
            </div>
            <div className="space-y-1">
              {LISTENING_DATA.part2.map(ex => (
                <button
                  key={ex.id}
                  onClick={() => { onSelect('part2', ex.id); onClose(); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${
                    currentPart === 'part2' && currentExerciseId === ex.id 
                      ? 'bg-indigo-600/10 text-indigo-400 font-medium border border-indigo-600/20' 
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  <span>{ex.title}</span>
                  <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${currentPart === 'part2' && currentExerciseId === ex.id ? 'opacity-100' : ''}`} />
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="p-4 border-t border-zinc-800">
          <div className="bg-zinc-800/50 rounded-xl p-3">
            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Trạng thái</p>
            <p className="text-xs text-zinc-300">Sẵn sàng học tập</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

const Part1View = ({ exercise, onComplete }: { exercise: Part1Exercise, onComplete: (score: number) => void }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setUserAnswers({});
    setShowAnswers(false);
  }, [exercise]);

  const handleInputChange = (id: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleRetry = () => {
    setUserAnswers({});
    setShowAnswers(false);
  };

  const handleFinish = () => {
    const score = exercise.questions.reduce((acc, q) => {
      const userAns = userAnswers[q.id] || '';
      return acc + (isStrictlyCorrect(userAns, q.answer) ? 1 : 0);
    }, 0);
    onComplete(score);
  };

  const shakeAnimation = {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 }
  };

  const flashAnimation = {
    scale: [1, 1.02, 1],
    backgroundColor: ["rgba(52, 211, 153, 0)", "rgba(52, 211, 153, 0.2)", "rgba(52, 211, 153, 0)"],
    transition: { duration: 0.5 }
  };

  const renderPassage = () => {
    const parts = exercise.passage.split(/(\[\d+\])/);
    return (
      <div className="text-lg lg:text-xl leading-loose text-zinc-300 font-medium whitespace-pre-wrap">
        {parts.map((part, index) => {
          const match = part.match(/\[(\d+)\]/);
          if (match) {
            const id = parseInt(match[1]);
            const question = exercise.questions.find(q => q.id === id);
            if (!question) return part;

            const userAns = userAnswers[id] || '';
            const isCorrect = isStrictlyCorrect(userAns, question.answer);
            const isWrong = userAns.trim() !== '' && !isCorrect;

            let borderClass = "border-zinc-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400";
            let textClass = "text-zinc-100";
            let bgClass = "bg-zinc-900";
            
            if (isCorrect) {
              borderClass = "border-green-400";
              textClass = "text-green-300 font-medium";
              bgClass = "bg-green-900/20";
            } else if (isWrong) {
              borderClass = "border-red-400";
              textClass = "text-red-300";
              bgClass = "bg-red-900/20";
            }

            return (
              <motion.span 
                key={index} 
                animate={isCorrect ? flashAnimation : isWrong ? shakeAnimation : {}}
                className="inline-flex flex-col items-center align-middle mx-1 relative group"
              >
                <input
                  type="text"
                  value={userAns}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                  placeholder={`(${id})`}
                  className={`${bgClass} border-2 ${borderClass} ${textClass} px-2 py-1 outline-none transition-all text-center min-w-[80px] rounded-md`}
                  style={{ width: `${Math.max(80, (userAns.length || 4) * 12)}px` }}
                />
              </motion.span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </div>
    );
  };

  const currentScore = exercise.questions.reduce((acc, q) => {
    const userAns = userAnswers[q.id] || '';
    return acc + (isStrictlyCorrect(userAns, q.answer) ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 relative">
      <div className="flex-1 space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-white">{exercise.title}</h2>
          <p className="text-zinc-400 italic">{exercise.description}</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-8 lg:p-12 rounded-3xl shadow-2xl relative">
          <div className="absolute top-6 right-8 flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700 text-xs font-bold text-zinc-400">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            {currentScore} / {exercise.questions.length}
          </div>
          {renderPassage()}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all border ${
              showAnswers 
                ? "bg-indigo-600 text-white border-indigo-500" 
                : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700"
            }`}
          >
            <AlertCircle className="w-5 h-5" />
            {showAnswers ? "Ẩn đáp án" : "Hiện đáp án"}
          </button>
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3 rounded-2xl font-bold transition-all border border-zinc-700"
          >
            <RotateCcw className="w-5 h-5" />
            Làm lại
          </button>
          <button
            onClick={handleFinish}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20"
          >
            Hoàn thành
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Answer Panel */}
      <AnimatePresence>
        {showAnswers && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="w-full lg:w-64 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl h-fit sticky top-24"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-zinc-100 uppercase tracking-wider text-sm">Đáp án chi tiết</h3>
            </div>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
              {exercise.questions.map((q) => (
                <div key={q.id} className="flex items-start gap-3 group">
                  <span className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-colors">
                    {q.id}
                  </span>
                  <p className="text-sm text-zinc-300 font-medium leading-tight pt-0.5">
                    {q.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Part2View = ({ exercise, onComplete }: { exercise: Part2Exercise, onComplete: (score: number) => void }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setUserAnswers({});
    setShowResults(false);
    setShowAnswers(false);
  }, [exercise]);

  const handleSelect = (questionId: number, option: string) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleFinish = () => {
    setShowResults(true);
    const score = exercise.questions.reduce((acc, q) => {
      return acc + (userAnswers[q.id] === q.answer ? 1 : 0);
    }, 0);
    setTimeout(() => {
      onComplete(score);
    }, 3000);
  };

  const handleRetry = () => {
    setUserAnswers({});
    setShowResults(false);
    setShowAnswers(false);
  };

  const groupedQuestions = useMemo(() => {
    const groups: Record<string, Part2Question[]> = {};
    exercise.questions.forEach(q => {
      const title = q.groupTitle || "General Questions";
      if (!groups[title]) groups[title] = [];
      groups[title].push(q);
    });
    return groups;
  }, [exercise]);

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 relative">
      <div className="flex-1 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">{exercise.title}</h2>
          <p className="text-zinc-500 uppercase tracking-widest font-bold text-xs">
            Tổng số: {exercise.questions.length} câu hỏi
          </p>
        </div>

        {Object.entries(groupedQuestions).map(([title, questions], gIdx) => (
          <div key={gIdx} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-800" />
              <h3 className="text-indigo-400 font-bold text-sm uppercase tracking-widest">{title}</h3>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            <div className="grid gap-6">
              {(questions as Part2Question[]).map((q, qIdx) => (
                <div key={q.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-xl space-y-6">
                  <h4 className="text-lg text-zinc-200 font-medium leading-relaxed">
                    <span className="text-zinc-500 mr-2">{q.id}.</span>
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {q.options.map((opt, idx) => {
                      const label = optionLabels[idx];
                      const isSelected = userAnswers[q.id] === label;
                      const isCorrect = label === q.answer;
                      
                      let stateClass = "bg-zinc-800 border-zinc-600 text-zinc-400 hover:bg-zinc-700";
                      if (showResults) {
                        if (isCorrect) stateClass = "bg-green-600/20 border-green-400 text-green-300 font-medium";
                        else if (isSelected) stateClass = "bg-red-600/20 border-red-400 text-red-300";
                        else stateClass = "bg-zinc-800/20 border-zinc-800 text-zinc-600 opacity-50";
                      } else if (isSelected) {
                        stateClass = "bg-indigo-500/20 border-indigo-500/50 text-indigo-400";
                      }

                      return (
                        <motion.button
                          key={idx}
                          whileHover={!showResults ? { scale: 1.05 } : {}}
                          whileTap={!showResults ? { scale: 0.98 } : {}}
                          onClick={() => handleSelect(q.id, label)}
                          disabled={showResults}
                          className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-center gap-3 group ${stateClass}`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                            showResults && isCorrect ? 'bg-green-500 text-white' : 
                            showResults && isSelected ? 'bg-red-500 text-white' : 
                            isSelected ? 'bg-indigo-500 text-white' :
                            'bg-zinc-800 group-hover:bg-zinc-700 text-zinc-400'
                          }`}>
                            {label}
                          </div>
                          <span className="flex-1 text-sm font-medium">{opt}</span>
                          {showResults && isCorrect && <Check className="w-4 h-4 text-green-400" />}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all border ${
              showAnswers 
                ? "bg-indigo-600 text-white border-indigo-500" 
                : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700"
            }`}
          >
            <AlertCircle className="w-5 h-5" />
            {showAnswers ? "Ẩn đáp án" : "Hiện đáp án"}
          </button>
          <button
            onClick={handleRetry}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-2xl font-bold transition-all border border-zinc-700"
          >
            Làm lại
          </button>
          <button
            onClick={handleFinish}
            disabled={showResults}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-12 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20"
          >
            {showResults ? "Đang chấm điểm..." : "Nộp bài"}
          </button>
        </div>
      </div>

      {/* Answer Panel */}
      <AnimatePresence>
        {showAnswers && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="w-full lg:w-64 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl h-fit sticky top-24"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-zinc-100 uppercase tracking-wider text-sm">Đáp án chi tiết</h3>
            </div>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
              {exercise.questions.map((q) => (
                <div key={q.id} className="flex items-start gap-3 group">
                  <span className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-colors">
                    {q.id}
                  </span>
                  <p className="text-sm text-zinc-300 font-medium leading-tight pt-0.5">
                    {q.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResultView = ({ score, total, onRetry, onNext }: { score: number, total: number, onRetry: () => void, onNext: () => void }) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto text-center space-y-8 py-12 px-6"
    >
      <div className="relative inline-block">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-zinc-800"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={553}
            initial={{ strokeDashoffset: 553 }}
            animate={{ strokeDashoffset: 553 - (553 * percentage) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-indigo-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-black text-white">{percentage}%</span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Hoàn thành</span>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white">Tuyệt vời!</h2>
        <p className="text-zinc-400">
          Bạn đã trả lời đúng <span className="text-white font-bold">{score}</span> trên tổng số <span className="text-white font-bold">{total}</span> câu hỏi.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-2xl font-bold transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          Làm lại
        </button>
        <button
          onClick={onNext}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20"
        >
          <ChevronRight className="w-5 h-5" />
          Tiếp theo
        </button>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPart, setCurrentPart] = useState<'part1' | 'part2'>('part1');
  const [currentExerciseId, setCurrentExerciseId] = useState<string>(LISTENING_DATA.part1[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  const currentExercise = useMemo(() => {
    if (currentPart === 'part1') {
      return LISTENING_DATA.part1.find(ex => ex.id === currentExerciseId) as Part1Exercise;
    }
    return LISTENING_DATA.part2.find(ex => ex.id === currentExerciseId) as Part2Exercise;
  }, [currentPart, currentExerciseId]);

  const handleSelectExercise = (part: 'part1' | 'part2', id: string) => {
    setCurrentPart(part);
    setCurrentExerciseId(id);
    setIsFinished(false);
  };

  const handleComplete = (score: number) => {
    setFinalScore(score);
    setIsFinished(true);
  };

  const handleRetry = () => {
    setIsFinished(false);
  };

  const handleNextExercise = () => {
    const currentPartList = LISTENING_DATA[currentPart];
    const currentIndex = currentPartList.findIndex(ex => ex.id === currentExerciseId);
    
    if (currentIndex < currentPartList.length - 1) {
      // Go to next exercise in same part
      setCurrentExerciseId(currentPartList[currentIndex + 1].id);
      setIsFinished(false);
    } else if (currentPart === 'part1') {
      // Go to first exercise of part 2
      setCurrentPart('part2');
      setCurrentExerciseId(LISTENING_DATA.part2[0].id);
      setIsFinished(false);
    } else {
      // End of all exercises, maybe just reset or stay
      setIsFinished(false);
      setCurrentPart('part1');
      setCurrentExerciseId(LISTENING_DATA.part1[0].id);
    }
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30">
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className={`fixed left-4 top-4 z-40 p-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 hover:bg-zinc-800 rounded-xl text-zinc-400 shadow-2xl transition-all duration-300 ${isSidebarOpen ? 'opacity-0 pointer-events-none -translate-x-10' : 'opacity-100 translate-x-0'}`}
      >
        <Menu className="w-6 h-6" />
      </button>

      <Sidebar 
        currentPart={currentPart} 
        currentExerciseId={currentExerciseId} 
        onSelect={handleSelectExercise}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className={`flex-1 flex flex-col overflow-hidden relative transition-all duration-300 ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'}`}>
        {/* Header */}
        <header className={`h-16 border-b border-zinc-900 flex items-center justify-between transition-all duration-300 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-30 ${isSidebarOpen ? 'px-6' : 'pl-16 pr-6'}`}>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-zinc-500">
              <span className="capitalize">{currentPart === 'part1' ? 'Phần 1' : 'Phần 2'}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-zinc-300 font-medium">{currentExercise.title}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end text-[10px] text-zinc-500 leading-tight text-right">
              <p>Tác giả: <span className="text-zinc-400 font-bold">Thanh Tài</span></p>
              <p className="italic opacity-60 max-w-[200px]">Tự làm web tự học đa chức năng. Không chịu trách nhiệm về nội dung ôn luyện</p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-full border border-zinc-800">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-zinc-400">Học tập trực tuyến</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {isFinished ? (
              <ResultView 
                score={finalScore} 
                total={currentExercise.questions.length} 
                onRetry={handleRetry} 
                onNext={handleNextExercise}
              />
            ) : currentPart === 'part1' ? (
              <motion.div
                key={`part1-${currentExerciseId}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Part1View 
                  exercise={currentExercise as Part1Exercise} 
                  onComplete={handleComplete} 
                />
              </motion.div>
            ) : (
              <motion.div
                key={`part2-${currentExerciseId}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Part2View 
                  exercise={currentExercise as Part2Exercise} 
                  onComplete={handleComplete} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>
    </div>
  );
}
