import React from 'react';
import { Exercise } from './types';

export const exercises: Exercise[] = [
  {
    id: 'a',
    label: 'ក',
    equationDisplay: <span>y = <span className="inline-flex flex-col items-center align-middle"><span className="border-b border-current px-1 text-sm">1</span><span className="px-1 text-sm">x - 3</span></span></span>,
    steps: [
      {
        id: 'domain',
        title: '១. ដែនកំណត់ (Domain)',
        tip: 'អនុគមន៍ប្រភាគមានន័យ កាលណាភាគបែងខុសពីសូន្យ។ យកភាគបែងកំណត់ឲ្យខុសពី 0។',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div>
            <p className="mb-2">អនុគមន៍មានន័យលុះត្រាតែ គណនា <span className="font-serif italic font-medium text-[#4A6741]">x - 3 ≠ 0 ⇒ x ≠ 3</span></p>
            <p className="p-3 bg-white rounded-lg border border-[#E2E8D5] text-sm font-mono text-[#4A6741] inline-block shadow-sm">D = ℝ \ {'{3}'} ឬ D = (-∞, 3) ∪ (3, +∞)</p>
          </div>
        ),
      },
      {
        id: 'limits',
        title: '២. លីមីត និង អាស៊ីមតូត (Limits & Asymptotes)',
        tip: 'រកលីមីតត្រង់ចុងដែនកំណត់ (-∞, +∞) និងត្រង់ចំណុចដែលអនុគមន៍គ្មានន័យ (x = 3) ។',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div className="space-y-4">
            <div>
              <p className="font-bold text-[#2D342B] mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8DA47E]"></span> ក. អាស៊ីមតូតដេក៖</p>
              <p className="ml-4 font-serif">lim (x→±∞) y = lim (x→±∞) <span className="text-sm">1 / (x-3)</span> = 0</p>
              <p className="mt-2 ml-4 p-2 bg-[#F1F3ED] rounded border-l-2 border-[#8DA47E] text-sm">⇒ បន្ទាត់ <span className="font-serif italic font-bold text-[#4A6741]">y = 0</span> ជាអាស៊ីមតូតដេក។</p>
            </div>
            <div className="pt-3 border-t border-dashed border-[#E2E8D5]">
              <p className="font-bold text-[#2D342B] mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8DA47E]"></span> ខ. អាស៊ីមតូតឈរ៖</p>
              <div className="ml-4 space-y-1 font-serif">
                <p>lim (x→3⁻) y = 1 / 0⁻ = -∞</p>
                <p>lim (x→3⁺) y = 1 / 0⁺ = +∞</p>
              </div>
              <p className="mt-2 ml-4 p-2 bg-[#F1F3ED] rounded border-l-2 border-[#8DA47E] text-sm">⇒ បន្ទាត់ <span className="font-serif italic font-bold text-[#4A6741]">x = 3</span> ជាអាស៊ីមតូតឈរ។</p>
            </div>
          </div>
        ),
      },
      {
        id: 'derivative',
        title: '៣. ដេរីវេ និង ភាពចុះឡើង (Derivative & Variations)',
        tip: 'ប្រើរូបមន្ត (u/v)′ = (u′v - uv′) / v²។ រួចសិក្សាសញ្ញាដេរីវេ ដោយសារភាគបែងជាការ៉េវាតែងតែវិជ្ជមាន។',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div className="space-y-3">
            <p className="font-serif">y′ = <span className="text-sm border-b border-[#2D342B] pb-0.5">(1)′(x-3) - 1(x-3)′</span> / (x-3)² = -1 / (x-3)²</p>
            <p className="text-sm text-[#5C6356]">ដោយ <span className="font-serif">(x-3)² &gt; 0</span> គ្រប់មេគុណ x ∈ D</p>
            <p className="p-3 bg-white rounded-lg border border-[#E2E8D5] text-[#4A6741] font-bold shadow-sm text-sm">នាំឲ្យ y′ &lt; 0 ជានិច្ច។ ដូច្នេះ អនុគមន៍ចុះជានិច្ច លើដែនកំណត់របស់វា។</p>
          </div>
        ),
      },
      {
        id: 'graph_prep',
        title: '៤. ចំណុចប្រសព្វអ័ក្ស (Intercepts)',
        tip: 'រកចំណុចប្រសព្វអ័ក្ស (អ័ក្សអរដោនេ y: ឲ្យ x=0, អ័ក្សអាប់ស៊ីស x: ឲ្យ y=0)។',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <ul className="space-y-3">
            <li className="flex gap-2 text-sm leading-relaxed text-[#5C6356]">
               <span className="text-[#8DA47E] mt-0.5">•</span> 
               <span>ជួបអ័ក្សអរដោនេ (oy): យក x = 0 ⇒ y = 1/(0-3) = -1/3 ។ <br/><span className="font-serif font-bold text-[#4A6741]">ចំណុច (0, -1/3)</span></span>
            </li>
            <li className="flex gap-2 text-sm leading-relaxed text-[#5C6356]">
               <span className="text-[#8DA47E] mt-0.5">•</span> 
               <span>ជួបអ័ក្សអាប់ស៊ីស (ox): យក y = 0 ⇒ 1/(x-3) = 0 អត់ប្ញសមែនទេ? <br/><span className="font-serif font-bold text-[#4A6741]">ក្រាបមិនកាត់អ័ក្ស ox ទេ</span> (ព្រោះ y=0 ជាអាស៊ីមតូត)។</span>
            </li>
          </ul>
        ),
      }
    ]
  },
  {
    id: 'b',
    label: 'ខ',
    equationDisplay: <span>y = <span className="inline-flex flex-col items-center align-middle"><span className="border-b border-current px-1 text-sm">x + 1</span><span className="px-1 text-sm">x - 1</span></span></span>,
    steps: [
      {
        id: 'domain',
        title: '១. ដែនកំណត់ (Domain)',
        tip: 'ភាគបែងខុសពីសូន្យ (x - 1 ≠ 0)',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <p className="p-3 bg-white rounded-lg border border-[#E2E8D5] text-sm font-mono text-[#4A6741] inline-block shadow-sm">D = ℝ \ {'{1}'}</p>
        ),
      },
      {
        id: 'limits',
        title: '២. លីមីត និង អាស៊ីមតូត',
        tip: 'យក x កម្រិតខ្ពស់បំផុតចែកគ្នាសម្រាប់លីមីតអានន្ត។',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div className="space-y-3 font-serif">
            <p>lim (x→±∞) y = lim (x→±∞) (x/x) = 1 ⇒ <strong className="font-sans text-[#4A6741]">អាស៊ីមតូតដេក y = 1</strong></p>
            <p>lim (x→1⁻) y = 2/0⁻ = -∞ និង lim (x→1⁺) y = 2/0⁺ = +∞ <br/><strong className="font-sans text-[#4A6741] mt-1 inline-block">⇒ អាស៊ីមតូតឈរ x = 1</strong></p>
          </div>
        ),
      },
      {
        id: 'derivative',
        title: '៣. ដេរីវេ y′',
        tip: 'y = (ax+b)/(cx+d) មានដេរីវេ y′ = (ad-bc)/(cx+d)²',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div className="space-y-3">
            <p className="font-serif">y′ = <span className="text-sm">(1)(-1) - (1)(1)</span> / (x-1)² = -2 / (x-1)²</p>
            <p className="p-3 bg-white rounded-lg border border-[#E2E8D5] text-[#4A6741] font-bold shadow-sm text-sm">y′ &lt; 0 ជានិច្ច គ្រប់ x ∈ D។ អនុគមន៍ចុះជានិច្ច។</p>
          </div>
        ),
      }
    ]
  },
  {
    id: 'c',
    label: 'គ',
    equationDisplay: <span>y = <span className="inline-flex flex-col items-center align-middle"><span className="border-b border-current px-1 text-sm">2x</span><span className="px-1 text-sm">x + 1</span></span></span>,
    steps: [
      {
        id: 'domain',
        title: '១. ដែនកំណត់ (Domain)',
        tip: 'ភាគបែងខុសពីសូន្យ (x + 1 ≠ 0)',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <p className="p-3 bg-white rounded-lg border border-[#E2E8D5] text-sm font-mono text-[#4A6741] inline-block shadow-sm">D = ℝ \ {'{-1}'}</p>
        ),
      },
      {
        id: 'limits',
        title: '២. អាស៊ីមតូត',
        tip: 'រកលីមីតត្រង់អានន្ត (-∞, +∞) និងត្រង់ -1 ។',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div className="space-y-3 font-serif">
            <p>lim (x→±∞) y = 2 ⇒ <strong className="font-sans text-[#4A6741]">អាស៊ីមតូតដេក y = 2</strong></p>
            <p>lim (x→-1) y = ±∞ ⇒ <strong className="font-sans text-[#4A6741]">អាស៊ីមតូតឈរ x = -1</strong></p>
          </div>
        ),
      },
      {
        id: 'derivative',
        title: '៣. ដេរីវេ',
        tip: 'អនុវត្តរូបមន្ត y′ = (ad-bc)/(cx+d)²',
        answerTitle: 'ចម្លើយ៖',
        answerContent: (
          <div className="space-y-3">
             <p className="font-serif">y′ = <span className="text-sm border-b border-[#2D342B] pb-0.5">2(1) - 0(1)</span> / (x+1)² = 2 / (x+1)²</p>
             <p className="p-3 bg-white rounded-lg border border-[#E2E8D5] text-[#4A6741] font-bold shadow-sm text-sm">y′ &gt; 0 ។ អនុគមន៍កើនឡើងជានិច្ចលើដែនកំណត់។</p>
          </div>
        ),
      }
    ]
  }
];
