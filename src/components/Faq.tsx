
import React from "react";
import {faqs} from "../../data/faqs"


export default function Faq() {
  return (
    <section className="relative overflow-hidden bg-[#0d0e12] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 animate-pulse rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 animate-pulse rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 animate-[fadeUp_0.8s_ease-out_both] text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#ed2441]">
            সাধারণ জিজ্ঞাসা
          </span>

          <h2 className="text-3xl font-bold sm:text-4xl">
            আপনার মনে কিছু প্রশ্ন?
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            রক্তদাতা ও রক্তদান সম্পর্কে আপনার প্রয়োজনীয় তথ্যগুলো জেনে নিন।
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              style={{ animationDelay: `${0.15 + index * 0.12}s` }}
              className="group animate-[fadeUp_0.8s_ease-out_both] rounded-3xl border border-white/10 bg-[#0d0e12] px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#17181e] hover:shadow-[0_10px_35px_rgba(237,36,65,0.08)] sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-[#ed2441] transition duration-500 group-hover:rotate-[20deg] group-hover:scale-125"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.5 9a2.5 2.5 0 1 1 4.5 1.5c-1.2.8-2 1.2-2 2.5M12 16.5h.01"
                    />
                  </svg>

                  <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-red-400 sm:text-lg">
                    {faq.question}
                  </h3>
                </div>

                <svg
                  className="h-5 w-5 shrink-0 text-white transition-all duration-500 group-open:rotate-180 group-open:text-[#ed2441]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </summary>

              <p className="animate-[fadeUp_0.4s_ease-out_both] pl-8 pt-6 text-sm leading-8 text-gray-400 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
