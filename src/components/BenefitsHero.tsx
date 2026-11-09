
import React from "react";

export default function BenefitsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d0e12] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-pulse rounded-full bg-red-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-pulse rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0b_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div className="animate-[fadeIn_1s_ease-out]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            রক্তদানের অসাধারণ উপকারিতা
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
            এক ব্যাগ রক্ত,
            <span className="mt-2 block bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
              বদলে দিতে পারে
            </span>
            একটি জীবন
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            রক্তদান শুধু একজন মানুষের জীবন বাঁচায় না, এটি আপনার নিজের
            শরীরের জন্যও উপকারী হতে পারে। আসুন, রক্তদানের উপকারিতা
            জানি এবং মানবতার পাশে দাঁড়াই।
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#benefits"
              className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              উপকারিতাগুলো জানুন
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#donate"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-gray-200 backdrop-blur transition duration-300 hover:border-red-500/40 hover:bg-red-500/10"
            >
              রক্তদাতা হোন
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500">১ জীবন</h3>
              <p className="mt-1 text-sm text-gray-500">বাঁচানোর সুযোগ</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <h3 className="text-2xl font-bold text-white">৩ জন</h3>
              <p className="mt-1 text-sm text-gray-500">উপকৃত হতে পারেন</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <h3 className="text-2xl font-bold text-white">স্বেচ্ছায়</h3>
              <p className="mt-1 text-sm text-gray-500">মানবতার সেবা</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-10">

          <div className="absolute h-[320px] w-[320px] animate-pulse rounded-full border border-red-500/10 sm:h-[420px] sm:w-[420px]" />
          <div className="absolute h-[260px] w-[260px] animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-red-500/20 sm:h-[350px] sm:w-[350px]" />

          <div className="relative flex h-64 w-64 animate-[float_5s_ease-in-out_infinite] items-center justify-center rounded-full border border-red-500/20 bg-gradient-to-br from-red-500/20 via-[#17181e] to-[#0d0e12] shadow-[0_0_100px_rgba(239,68,68,0.15)] sm:h-80 sm:w-80">
            <div className="absolute inset-5 rounded-full border border-red-500/10" />
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 100 100"
                className="h-32 w-32 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] sm:h-40 sm:w-40"
                fill="none"
              >
                <path
                  d="M50 88C50 88 12 64 12 35C12 14 39 7 50 29C61 7 88 14 88 35C88 64 50 88 50 88Z"
                  fill="#ed2441"
                />
                <path
                  d="M20 50H37L45 35L57 66L65 49H80"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mt-3 text-xl font-bold tracking-widest text-white">রক্তবন্ধন</span>
              <span className="mt-1 text-xs text-gray-500">মানবতার বন্ধনে আমরা</span>
            </div>
          </div>

          <div className="absolute -left-1 top-12 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#191a20]/90 p-4 shadow-2xl backdrop-blur-xl sm:left-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-2xl text-red-500">
                ♥
              </div>
              <div>
                <p className="text-sm font-bold text-white">জীবন বাঁচান</p>
                <p className="text-xs text-gray-500">মানবতার সেবায় এগিয়ে আসুন</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-1 bottom-16 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#191a20]/90 p-4 shadow-2xl backdrop-blur-xl sm:right-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                ✓
              </div>
              <div>
                <p className="text-sm font-bold text-white">মহৎ উদ্যোগ</p>
                <p className="text-xs text-gray-500">আপনার রক্ত, অন্যের জীবন</p>
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-0 h-3 w-3 animate-ping rounded-full bg-red-500" />
          <div className="absolute bottom-5 left-12 h-2 w-2 animate-pulse rounded-full bg-red-400" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
