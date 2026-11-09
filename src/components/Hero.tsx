import React from "react";
import Form from "./Form";

export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#0d0e12] px-5 py-16 sm:py-20 lg:py-24"
      >
        <div data-aos="zoom-in" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]"></div>
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-red-900/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-red-950/20 blur-[100px]"></div>
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[8%] top-[35%] h-8 w-12 rotate-[-25deg] rounded-[50%] bg-gradient-to-br from-red-300 via-red-500 to-red-900 opacity-30 blur-[1px]"></div>
          <div className="absolute left-[20%] top-[22%] h-7 w-11 rotate-12 rounded-[50%] bg-gradient-to-br from-red-300 via-red-500 to-red-900 opacity-30"></div>
          <div className="absolute right-[15%] top-[18%] h-10 w-14 rotate-[-20deg] rounded-[50%] bg-gradient-to-br from-red-300 via-red-500 to-red-900 opacity-40"></div>
          <div className="absolute right-[8%] top-[38%] h-8 w-12 rotate-12 rounded-[50%] bg-gradient-to-br from-red-300 via-red-500 to-red-900 opacity-30"></div>
          <div className="absolute left-[35%] top-[50%] h-6 w-10 rotate-[-15deg] rounded-[50%] bg-gradient-to-br from-red-300 via-red-500 to-red-900 opacity-20"></div>
          <div className="absolute right-[35%] top-[55%] h-8 w-12 rotate-12 rounded-[50%] bg-gradient-to-br from-red-300 via-red-500 to-red-900 opacity-25"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
              রক্তদান করুন, জীবন বাঁচান
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.4] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
              আপনার এক ব্যাগ রক্ত, কারও জীবনে 
              <span className="text-[#ed2441]"> নতুন আশার আলো</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              জরুরি মুহূর্তে একজন রক্তদাতাই হতে পারে কারও বেঁচে থাকার শেষ ভরসা।
              আপনার সামান্য সহযোগিতায় বেঁচে যেতে পারে একটি মূল্যবান জীবন।
              মানবতার সেবায় এগিয়ে আসুন, রক্তদানের মাধ্যমে ছড়িয়ে দিন ভালোবাসা।
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-[#17181e]/95 p-3 shadow-2xl shadow-red-950/20 sm:p-4">
            <Form />
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#17181e] p-5 transition hover:border-red-500/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-[#ed2441]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  লোকেশনভিত্তিক অনুসন্ধান
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  নিজের এলাকার রক্তদাতা খুঁজুন
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#17181e] p-5 transition hover:border-red-500/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-[#ed2441]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  যাচাইকৃত প্রোফাইল
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  বিশ্বস্ত রক্তদাতার তথ্য নিশ্চিত করুন
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#17181e] p-5 transition hover:border-red-500/30 sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-[#ed2441]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  স্বেচ্ছাসেবী কমিউনিটি
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  মানবতার সেবায় একসাথে এগিয়ে চলুন
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
