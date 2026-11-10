import CountUp from "react-countup";
import Form from "./Form";
import { Link } from "react-router";

export default function DonorHero() {
  const banglaNumber = (number: number) => number.toLocaleString("bn-BD");
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0d0e12] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-xs font-semibold text-red-400 sm:text-sm">
                রক্তদানে এগিয়ে আসুন, জীবন বাঁচান
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              আপনার এক ব্যাগ রক্ত,
              <span className="mt-2 block text-[#ed2441]">
                বাঁচাতে পারে একটি প্রাণ।
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
              রক্তের প্রয়োজনে আর দুশ্চিন্তা নয়। আপনার আশেপাশে থাকা স্বেচ্ছায়
              রক্তদাতাদের খুঁজে নিন সহজেই। আপনার সামান্য সহযোগিতাই হতে পারে কারও
              নতুন জীবনের কারণ।
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to={"/DonorFindPage"}
                className="inline-flex items-center gap-2 rounded-xl bg-[#ed2441] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-600"
              >
                রক্তদাতা খুঁজুন
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <a
                href="#about"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-red-500/40 hover:text-white"
              >
                আরও জানুন
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  <CountUp
                    start={0}
                    end={1200}
                    duration={3}
                    separator=","
                    formattingFn={banglaNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  নিবন্ধিত রক্তদাতা
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  <CountUp
                    start={0}
                    end={800}
                    duration={3}
                    formattingFn={banglaNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  সফল রক্তদান
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  <CountUp
                    start={0}
                    end={64}
                    duration={3}
                    formattingFn={banglaNumber}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  জেলা জুড়ে
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-red-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#17181e] p-5 shadow-2xl sm:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                    রক্তের সন্ধানে
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    রক্তদাতা খুঁজুন
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    আপনার প্রয়োজনীয় তথ্য দিয়ে অনুসন্ধান করুন
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.5C10.2 5.3 5 11.2 5 15.5a7 7 0 0014 0c0-4.3-5.2-10.2-7-13z" />
                  </svg>
                </div>
              </div>

              <div id="donor-search">
                <Form />
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-500/10 bg-green-500/5 p-4">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                <p className="text-xs leading-6 text-gray-400">
                  আপনার দেওয়া তথ্য ব্যবহার করে আপনার এলাকার রক্তদাতাদের খুঁজে
                  পেতে সাহায্য করবে রক্তবন্ধন।
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#202127] p-4 shadow-xl sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-lg font-bold text-red-400">
                A+
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  আপনার রক্তই কারও আশা
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  আজই রক্তদানে এগিয়ে আসুন
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
