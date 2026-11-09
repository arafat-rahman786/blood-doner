import React from "react";

export default function Benifits() {
  return (
    <>
      <section
        id="benefits"
        className="relative overflow-hidden bg-[#0d0e12] py-16 sm:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]"></div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#ed2441]">
              <span className="h-2 w-2 rounded-full bg-[#ed2441]"></span>
              WHY DONATE BLOOD
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              কেন রক্তদান করবেন?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              রক্তদান শুধু একটি মহৎ কাজ নয়, এটি একজন মানুষের জীবনে নতুন করে
              বেঁচে থাকার সুযোগ তৈরি করে। আপনার সামান্য উদ্যোগই হতে পারে কারও
              জীবনের সবচেয়ে বড় উপহার।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-[#191a21]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-[#ed2441] transition group-hover:bg-[#ed2441] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21s-8-4-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 7-8 11-8 11Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h2l1.5-3 2 6 1.5-3H17"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                জীবন বাঁচানোর সুযোগ
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                আপনার এক ব্যাগ রক্ত একজন মুমূর্ষু রোগীর জীবন বাঁচাতে সাহায্য
                করতে পারে। আপনার রক্তই হতে পারে কারও নতুন জীবনের আশা।
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ed2441]">
                মানবতার সেবা
                <span>→</span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-[#191a21]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-[#ed2441] transition group-hover:bg-[#ed2441] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v18m-9-9h18"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                স্বাস্থ্য সচেতনতা
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                নিয়মিত রক্তদানের আগে স্বাস্থ্য পরীক্ষা করার সুযোগ তৈরি হয়। এর
                মাধ্যমে নিজের স্বাস্থ্য সম্পর্কেও সচেতন থাকা যায়।
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ed2441]">
                সুস্থ থাকার সচেতনতা
                <span>→</span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-[#191a21]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-[#ed2441] transition group-hover:bg-[#ed2441] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a4 4 0 0 0-5-3.87M17 20H7m10 0v-2c0-1.31-.84-2.43-2-2.83M7 20H2v-2a4 4 0 0 1 5-3.87M7 20v-2c0-1.31.84-2.43 2-2.83m0 0a5 5 0 0 1 6 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                মানবিক বন্ধন তৈরি
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                রক্তদানের মাধ্যমে অপরিচিত মানুষের সাথেও তৈরি হয় মানবিক সম্পর্ক।
                একে অপরের পাশে দাঁড়ানোর সুন্দর সুযোগ তৈরি হয়।
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ed2441]">
                ভালোবাসার বন্ধন
                <span>→</span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-[#191a21]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-[#ed2441] transition group-hover:bg-[#ed2441] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                জরুরি সময়ে সহায়তা
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                দুর্ঘটনা, অস্ত্রোপচার কিংবা জরুরি চিকিৎসার প্রয়োজনে রক্তের
                ব্যবস্থা করতে আপনার মতো স্বেচ্ছাসেবীরাই গুরুত্বপূর্ণ ভূমিকা
                রাখেন।
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ed2441]">
                সময়মতো সহযোগিতা
                <span>→</span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-[#191a21]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-[#ed2441] transition group-hover:bg-[#ed2441] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 12 2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                সামাজিক দায়িত্ববোধ
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                রক্তদান আমাদের মধ্যে সহমর্মিতা, দায়িত্ববোধ এবং অন্যের বিপদে
                এগিয়ে আসার মানসিকতা গড়ে তুলতে সাহায্য করে।
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ed2441]">
                সুন্দর সমাজ গঠন
                <span>→</span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-[#191a21]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-[#ed2441] transition group-hover:bg-[#ed2441] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21s-8-4-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 7-8 11-8 11Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v6m-3-3h6"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                আত্মিক প্রশান্তি
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                কারও কঠিন সময়ে পাশে দাঁড়ানোর আনন্দ ও তৃপ্তি সত্যিই অন্যরকম। একটি
                ভালো কাজ আপনার মনেও এনে দিতে পারে প্রশান্তি।
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ed2441]">
                ভালো কাজের আনন্দ
                <span>→</span>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-r from-[#281018] via-[#35101b] to-[#1b1118] p-7 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15 text-[#ed2441]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C9.5 6.2 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-4.5-8.8-7-13Z" />
              </svg>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
              আপনার রক্ত, অন্যের জীবনের গল্প
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
              রক্তের কোনো বিকল্প নেই। আজই একজন স্বেচ্ছাসেবী রক্তদাতা হিসেবে
              যুক্ত হোন এবং মানবতার পাশে দাঁড়ান।
            </p>

            <a
              href="#register"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#ed2441] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"
            >
              রক্তদাতা হিসেবে যুক্ত হোন
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
