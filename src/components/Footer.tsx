

import { TfiGithub } from "react-icons/tfi";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#0d0e12] px-4 pt-16 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 animate-pulse rounded-full bg-red-600/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 animate-pulse rounded-full bg-red-600/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="animate-[fadeUp_0.9s_ease-out_both]">
              <Link to={"/"} className="group flex w-fit items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed2441] text-2xl shadow-lg shadow-red-500/20 transition duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-red-500/40">
                  <span className="animate-[float_3s_ease-in-out_infinite]">
                    🩸
                  </span>
                </div>
                <span className="text-2xl font-bold transition duration-300 group-hover:text-red-400">
                  রক্ত<span className="text-[#ed2441]"> বন্ধন</span>
                </span>
              </Link>

              <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
                রক্তের প্রয়োজনে মানুষ যেন অসহায় না হয়। রক্তদাতা ও রক্তগ্রহীতার
                মধ্যে সহজ যোগাযোগ তৈরি করাই আমাদের লক্ষ্য।
              </p>

              <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61594222403712"
                    className="flex h-10 w-10 animate-[fadeUp_0.8s_ease-out_both] items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:-translate-y-2 hover:rotate-6 hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white hover:shadow-lg hover:shadow-red-500/20"
                  >
                    <span className="font-bold">
                      f
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yasin-arafat-dev/"
                    className="flex h-10 w-10 animate-[fadeUp_0.8s_ease-out_both] items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:-translate-y-2 hover:rotate-6 hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white hover:shadow-lg hover:shadow-red-500/20"
                  >
                    <span className="font-bold">
                      in
                    </span>
                  </a>
                  <a
                    href="https://github.com/arafat-rahman786"
                    className="flex h-10 w-10 animate-[fadeUp_0.8s_ease-out_both] items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-300 hover:-translate-y-2 hover:rotate-6 hover:border-[#ed2441] hover:bg-[#ed2441] hover:text-white hover:shadow-lg hover:shadow-red-500/20"
                  >
                    <span className="font-bold">
                      <TfiGithub />
                    </span>
                  </a>
              </div>
            </div>

            <div className="animate-[fadeUp_0.9s_0.15s_ease-out_both]">
              <h3 className="mb-6 text-lg font-bold transition-colors duration-300 hover:text-[#ed2441]">
                গুরুত্বপূর্ণ লিংক
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link
                    to={"/"}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-2 hover:text-[#ed2441]"
                  >
                    <span className="h-1 w-0 rounded-full bg-[#ed2441] transition-all duration-300 group-hover:w-2" />
                    হোম
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/DonorPage"}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-2 hover:text-[#ed2441]"
                  >
                    <span className="h-1 w-0 rounded-full bg-[#ed2441] transition-all duration-300 group-hover:w-2" />
                    রক্তদাতা খুঁজুন
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/BecomeDonor"}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-2 hover:text-[#ed2441]"
                  >
                    <span className="h-1 w-0 rounded-full bg-[#ed2441] transition-all duration-300 group-hover:w-2" />
                    রক্তদাতা হোন
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Importences"}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-2 hover:text-[#ed2441]"
                  >
                    <span className="h-1 w-0 rounded-full bg-[#ed2441] transition-all duration-300 group-hover:w-2" />
                    রক্তদানের উপকারিতা
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/AwarenessPage"}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-2 hover:text-[#ed2441]"
                  >
                    <span className="h-1 w-0 rounded-full bg-[#ed2441] transition-all duration-300 group-hover:w-2" />
                    সচেতনতামূলক তথ্য
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-[fadeUp_0.9s_0.3s_ease-out_both]">
              <h3 className="mb-6 text-lg font-bold transition-colors duration-300 hover:text-[#ed2441]">
                প্রয়োজনীয় তথ্য
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                {[
                  "সাধারণ জিজ্ঞাসা",
                  "রক্তদানের নিয়মাবলি",
                  "রক্তের গ্রুপ সম্পর্কে জানুন",
                  "গোপনীয়তা নীতি",
                  "ব্যবহারের শর্তাবলি",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 transition duration-300 hover:translate-x-2 hover:text-[#ed2441]"
                    >
                      <span className="h-1 w-0 rounded-full bg-[#ed2441] transition-all duration-300 group-hover:w-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-[fadeUp_0.9s_0.45s_ease-out_both]">
              <h3 className="mb-6 text-lg font-bold transition-colors duration-300 hover:text-[#ed2441]">
                যোগাযোগ করুন
              </h3>

              <div className="space-y-5 text-sm text-gray-400">
                <div className="group flex items-start gap-3">
                  <span className="text-xl text-[#ed2441] transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(237,36,65,0.8)]">
                    📍
                  </span>
                  <p className="leading-7 transition-colors duration-300 group-hover:text-gray-200">
                    বাংলাদেশের যেকোনো প্রান্ত থেকে আমাদের সঙ্গে যুক্ত হোন।
                  </p>
                </div>

                <div className="group flex items-center gap-3">
                  <span className="text-xl text-[#ed2441] transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(237,36,65,0.8)]">
                    ✉
                  </span>
                  <a
                    target="_blank"
                    href="mailto:hmyasinarafat74@gmail.com"
                    className="transition duration-300 hover:translate-x-1 hover:text-[#ed2441]"
                  >
                    hmyasinarafat74@gmail.com
                  </a>
                </div>

                <div className="group flex items-center gap-3">
                  <span className="text-xl text-[#ed2441] transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(237,36,65,0.8)]">
                    ☎
                  </span>
                  <a
                    href="https://wa.me/8801718945989?text=আসসালামু%20আলাইকুম%20!"
                    target="_blank"
                    className="transition duration-300 hover:translate-x-1 hover:text-[#ed2441]"
                  >
                    +৮৮০ ১৭১৮৯৪৫৯৮৯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-[fadeUp_1s_0.6s_ease-out_both] border-t border-white/10 py-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <p className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300">
                © ২০২৬ রক্তবন্ধন। সর্বস্বত্ব সংরক্ষিত।
              </p>

              <p className="text-sm text-gray-500">
                মানুষের পাশে, রক্তের বন্ধনে{" "}
                <span className="inline-block animate-[heartbeat_1.5s_ease-in-out_infinite] text-[#ed2441]">
                  ❤️
                </span>
              </p>
            </div>
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

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            15% {
              transform: scale(1.2);
            }
            30% {
              transform: scale(1);
            }
            45% {
              transform: scale(1.15);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}





