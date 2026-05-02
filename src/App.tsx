import { useState, useEffect } from 'react';
import { exercises } from './data';
import { Exercise, Step } from './types';
import { ChevronRight, Lightbulb, BookOpenCheck, Menu, X, ArrowRight, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function StepCard({ step, index, forceShowAll }: { key?: string | number, step: Step; index: number, forceShowAll?: boolean }) {
  const [showTip, setShowTip] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const isTipVisible = showTip || forceShowAll;
  const isAnswerVisible = showAnswer || forceShowAll;

  return (
    <div className="bg-white p-5 rounded-xl border border-[#E2E8D5] flex flex-col mb-6 shadow-sm overflow-hidden relative break-inside-avoid">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4A6741]"></div>
      <div className="flex items-center gap-3 mb-4 pl-2">
        <span className="w-8 h-8 rounded-full bg-[#8DA47E] text-white flex items-center justify-center text-sm font-bold shadow-sm">{index + 1}</span>
        <h3 className="text-lg font-bold text-[#2D342B]">{step.title}</h3>
      </div>
      
      <div className="pl-2 space-y-4">
        <div className="flex gap-3 print:hidden">
          <button 
            onClick={() => setShowTip(!showTip)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#4A6741] bg-[#EAECE4] hover:bg-[#DDE0D4] border border-[#DDE0D4] rounded-lg transition-colors shadow-sm"
          >
            <Lightbulb size={18} />
            គន្លឹះគិត (Tip)
          </button>
          
          <button 
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#4A6741] hover:bg-[#3D5535] rounded-lg transition-colors shadow-inner"
          >
            <BookOpenCheck size={18} />
            បង្ហាញចម្លើយ
          </button>
        </div>

        <AnimatePresence>
          {isTipVisible && (
            <motion.div 
              initial={forceShowAll ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-4 bg-[#EAECE4] rounded-2xl border border-[#DDE0D4] text-[#5C6356]">
                <p className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-[#4A6741] mt-0.5 shrink-0" />
                  <span>{step.tip}</span>
                </p>
              </div>
            </motion.div>
          )}

          {isAnswerVisible && (
            <motion.div 
              initial={forceShowAll ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-5 bg-[#F1F3ED] rounded-xl border-l-4 border-[#8DA47E] border-y border-r border-y-[#E2E8D5] border-r-[#E2E8D5]">
                <h4 className="font-bold text-[#4A6741] mb-3 text-[11px] uppercase tracking-widest">{step.answerTitle}</h4>
                <div className="text-[#2D342B] leading-relaxed custom-math">
                  {step.answerContent}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(exercises[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const activeExercise = exercises.find(e => e.id === activeId) || exercises[0];

  const handlePrint = () => {
    setIsPrinting(true);
    // Wait for state to update and animations to complete before printing
    setTimeout(() => {
      window.print();
    }, 500);
  };

  useEffect(() => {
    const handleAfterPrint = () => setIsPrinting(false);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D342B] flex flex-col md:flex-row overflow-x-hidden w-full print:bg-white">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-[#E2E8D5] p-4 flex items-center justify-between sticky top-0 z-20 shadow-sm w-full print:hidden">
        <h1 className="text-xl font-bold tracking-tight text-[#2D342B] flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4A6741] rounded-md flex items-center justify-center text-white font-bold text-lg">f</div>
          <span>សិក្សា<span className="text-[#8DA47E]">អនុគមន៍</span></span>
        </h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#5C6356] hover:bg-[#F1F3ED] rounded-lg"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`
        fixed inset-y-0 left-0 z-10 w-72 bg-white border-r border-[#E2E8D5] transform transition-transform duration-300 md:translate-x-0 md:static md:flex-shrink-0 flex flex-col shadow-sm md:shadow-none
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        print:hidden
      `}>
        <div className="p-8 border-b border-[#E2E8D5] hidden md:block">
           <h1 className="text-2xl font-bold tracking-tight text-[#2D342B] flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4A6741] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">f</div>
              <div className="flex flex-col">
                <span>គណិតវិទ្យា</span>
                <span className="text-[#8DA47E] text-base font-medium">សិក្សាអនុគមន៍</span>
              </div>
           </h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <h2 className="text-xs font-bold text-[#4A6741] uppercase tracking-widest mb-4 px-2">បញ្ជីលំហាត់</h2>
          {exercises.map((ex) => (
            <button
              key={ex.id}
              onClick={() => {
                setActiveId(ex.id);
                setMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left transition-all duration-200
                ${activeId === ex.id 
                  ? 'bg-[#F1F3ED] text-[#4A6741] font-bold border-l-4 border-[#8DA47E] shadow-sm' 
                  : 'text-[#5C6356] hover:bg-[#FAF9F6] border-l-4 border-transparent hover:border-[#E2E8D5]'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors ${activeId === ex.id ? 'bg-[#8DA47E] text-white shadow-sm' : 'bg-[#E2E8D5] text-[#5C6356]'}`}>
                  {ex.label}
                </span>
                <span className="text-lg pb-1 font-serif italic">{ex.equationDisplay}</span>
              </div>
              <ChevronRight size={18} className={activeId === ex.id ? 'text-[#8DA47E]' : 'text-[#DDE0D4] opacity-50'} />
            </button>
          ))}
        </div>
        
        <div className="p-6 border-t border-[#E2E8D5] bg-[#F1F3ED]">
          <div className="text-xs text-[#7A8271] font-medium flex items-center justify-between">
            <span>© ២០២៤ បណ្ណាល័យគណិតវិទ្យា</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full p-4 md:p-8 lg:p-12 relative print:p-0">
        <div className="max-w-3xl mx-auto w-full pb-20 print:pb-0">
          
          <motion.div
            key={activeExercise.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="mb-8 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E2E8D5] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4A6741]"></div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[11px] font-bold text-[#4A6741] uppercase tracking-widest pl-2">ប្រធានលំហាត់ទី {activeExercise.label}</h2>
                <div className="text-2xl md:text-3xl font-bold text-[#2D342B] flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 pl-2">
                  <span>សិក្សាអថេរភាពនៃ </span>
                  <span className="font-serif italic bg-[#FAF9F6] border border-[#E2E8D5] px-4 py-2 rounded-xl text-[#2D342B] shadow-sm">{activeExercise.equationDisplay}</span>
                </div>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#4A6741] bg-[#EAECE4] hover:bg-[#DDE0D4] border border-[#E2E8D5] rounded-xl transition-colors shadow-sm ml-2 print:hidden shrink-0 self-start sm:self-auto"
              >
                <Printer size={18} />
                ទាញយក PDF
              </button>
            </div>

            <div className="space-y-6">
              {activeExercise.steps.map((step, index) => (
                <StepCard key={step.id} step={step} index={index} forceShowAll={isPrinting} />
              ))}
            </div>
            
            <div className="mt-8 bg-[#EAECE4] p-6 rounded-2xl border border-[#DDE0D4] flex-none relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
                  <BookOpenCheck size={120} />
               </div>
              <h3 className="flex items-center gap-2 font-bold text-[#4A6741] mb-3 text-sm tracking-wide">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                ចុងបញ្ចប់នៃការទាញតារាងអថេរភាព
              </h3>
              <p className="text-[#5C6356] text-sm leading-relaxed pl-7 max-w-xl">
                នៅពេលប្រឡង បន្ទាប់ពីជំហាននេះ អ្នកត្រូវបន្តសង់ក្រាប និងបញ្ជាក់ចំណុចប្រសព្វអ័ក្ស ឬផ្ចិតឆ្លុះ និង អាស៊ីមតូតទ្រេត ផ្សេងៗប្រសិនបើគេសួរ។
              </p>
            </div>
          </motion.div>
          
        </div>
      </main>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#2D342B]/30 backdrop-blur-sm z-0 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
