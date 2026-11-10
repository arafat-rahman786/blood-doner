import { Link } from "react-router";


export default function AwarenessHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d0e12] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-600/15 blur-[130px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose-600/10 blur-[130px]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0b_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="animate-[fadeIn_1s_ease-out]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            সচেতনতাই পারে জীবন বাঁচাতে
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-tight sm:text-5xl lg:text-6xl">
            রক্তদান নিয়ে
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
              জানুন, সচেতন
            </span>
            হোন, এগিয়ে আসুন
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            রক্তদানের সঠিক নিয়ম, প্রয়োজনীয় সতর্কতা এবং প্রচলিত ভুল ধারণা
            সম্পর্কে জানুন। নিজের সচেতনতা বাড়ান, অন্যকেও সচেতন করুন।
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to={"/AwarenessPage"}
              className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              সচেতনতামূলক তথ্য জানুন
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="#myths"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-gray-200 backdrop-blur transition duration-300 hover:border-red-500/40 hover:bg-red-500/10"
            >
              ভুল ধারণা দূর করুন
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-xl font-bold text-red-500 sm:text-2xl">জানুন</h3>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">সঠিক নিয়ম</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">মানুন</h3>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">প্রয়োজনীয় সতর্কতা</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">ছড়ান</h3>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">সচেতনতার বার্তা</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-12">
          <div className="absolute h-[330px] w-[330px] animate-pulse rounded-full bg-red-600/10 blur-3xl sm:h-[440px] sm:w-[440px]" />

          <div className="absolute h-[300px] w-[300px] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-red-500/20 sm:h-[390px] sm:w-[390px]" />

          <div className="absolute h-[250px] w-[250px] animate-[spin_20s_linear_infinite_reverse] rounded-full border border-red-500/10 sm:h-[330px] sm:w-[330px]" />

          <div className="relative flex h-64 w-64 animate-[float_5s_ease-in-out_infinite] items-center justify-center rounded-full border border-red-500/20 bg-gradient-to-br from-red-500/20 via-[#17181e] to-[#0d0e12] shadow-[0_0_100px_rgba(239,68,68,0.2)] sm:h-80 sm:w-80">
            <div className="absolute inset-5 rounded-full border border-red-500/10" />

            <div className="relative flex flex-col items-center">
              <svg
                viewBox="0 0 100 100"
                className="h-36 w-36 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)] sm:h-44 sm:w-44"
                fill="none"
              >
                <path
                  d="M50 88C50 88 12 64 12 35C12 14 39 7 50 29C61 7 88 14 88 35C88 64 50 88 50 88Z"
                  fill="#ed2441"
                  className="animate-[heartbeat_1.5s_ease-in-out_infinite]"
                />
                <path
                  d="M20 50H37L45 35L57 66L65 49H80"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h2 className="mt-3 text-xl font-bold tracking-wider">রক্তবন্ধন</h2>
              <p className="mt-1 text-xs text-gray-400">সচেতনতায়, মানবতায়</p>
            </div>
          </div>

          <div className="absolute -left-2 top-10 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#191a20]/90 p-4 shadow-2xl backdrop-blur-xl sm:left-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-2xl text-red-500">
                ♥
              </div>
              <div>
                <p className="text-sm font-bold">রক্তদান</p>
                <p className="text-xs text-gray-500">মহৎ একটি উদ্যোগ</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-12 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#191a20]/90 p-4 shadow-2xl backdrop-blur-xl sm:right-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                ✓
              </div>
              <div>
                <p className="text-sm font-bold">সঠিক তথ্য</p>
                <p className="text-xs text-gray-500">সচেতন সিদ্ধান্ত নিন</p>
              </div>
            </div>
          </div>

          <div className="absolute right-12 top-0 h-3 w-3 animate-ping rounded-full bg-red-500" />
          <div className="absolute bottom-4 left-12 h-2 w-2 animate-pulse rounded-full bg-rose-400" />
          <div className="absolute left-1/2 top-0 h-2 w-2 animate-bounce rounded-full bg-red-400" />
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
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); transform-origin: center; }
          15% { transform: scale(1.08); transform-origin: center; }
          30% { transform: scale(1); transform-origin: center; }
          45% { transform: scale(1.05); transform-origin: center; }
        }
      `}</style>
    </section>
  );
}
