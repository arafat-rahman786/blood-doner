import React from "react";

export default function DonerCard() {
  return (
    <>
      <section id="donors" className="bg-[#1c0e13] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-widest text-[#ed2441]">
              OUR COMMUNITY
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              মানবতার পাশে, রক্তদানের বন্ধনে
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500">
              আমাদের স্বেচ্ছাসেবী রক্তদাতাদের সাথে পরিচিত হন। একজন রক্তদাতা হতে
              পারেন কারও জীবনের আশার আলো।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed2441] text-sm font-bold text-white shadow-lg shadow-red-900/20">
                  A+
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-white">
                    Md Khotibhar Rahman
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    রক্তদানে প্রস্তুত
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-400">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <p className="text-gray-500">বিভাগ</p>
                    <p className="mt-1 text-gray-300">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">এলাকা</p>
                    <p className="mt-1 text-gray-300">কেরানীগঞ্জ</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gray-500"></span>
                  <p>সর্বশেষ অনুদান: ৩ মাস আগে</p>
                </div>
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#101116] py-3 text-xs font-semibold text-gray-300 transition hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z"
                  />
                </svg>
                যোগাযোগ করুন
              </button>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed2441] text-sm font-bold text-white shadow-lg shadow-red-900/20">
                  O+
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-white">
                    Md. Imran Hossain
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    রক্তদানে প্রস্তুত
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-400">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <p className="text-gray-500">বিভাগ</p>
                    <p className="mt-1 text-gray-300">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">এলাকা</p>
                    <p className="mt-1 text-gray-300">মিরপুর</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-500"></span>
                  <p>যোগাযোগের জন্য প্রস্তুত</p>
                </div>
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#101116] py-3 text-xs font-semibold text-gray-300 transition hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z"
                  />
                </svg>
                যোগাযোগ করুন
              </button>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed2441] text-sm font-bold text-white shadow-lg shadow-red-900/20">
                  B+
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-white">
                    Md. Arafat Ali
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    রক্তদানে প্রস্তুত
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-400">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <p className="text-gray-500">বিভাগ</p>
                    <p className="mt-1 text-gray-300">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">এলাকা</p>
                    <p className="mt-1 text-gray-300">কেরানীগঞ্জ</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gray-500"></span>
                  <p>সর্বশেষ অনুদান: ২ মাস আগে</p>
                </div>
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#101116] py-3 text-xs font-semibold text-gray-300 transition hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z"
                  />
                </svg>
                যোগাযোগ করুন
              </button>
            </div>

            <div className="group rounded-2xl border border-white/[0.07] bg-[#15161c] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed2441] text-sm font-bold text-white shadow-lg shadow-red-900/20">
                  AB+
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-white">
                    Md. Priom Alam
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    রক্তদানে প্রস্তুত
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-400">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <p className="text-gray-500">বিভাগ</p>
                    <p className="mt-1 text-gray-300">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ed2441]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">এলাকা</p>
                    <p className="mt-1 text-gray-300">উত্তরা</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gray-500"></span>
                  <p>সর্বশেষ অনুদান: ৪ মাস আগে</p>
                </div>
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#101116] py-3 text-xs font-semibold text-gray-300 transition hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z"
                  />
                </svg>
                যোগাযোগ করুন
              </button>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#all-donors"
              className="inline-flex items-center gap-2 rounded-full bg-[#ed2441] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700"
            >
              সকল রক্তদাতা দেখুন
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
