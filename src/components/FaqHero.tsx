


export default function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d0e12] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[130px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose-600/10 blur-[130px]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0b_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="animate-[fadeIn_1s_ease-out]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            আপনার প্রশ্নের উত্তর এখানেই
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-tight sm:text-5xl lg:text-6xl">
            মনে যত প্রশ্ন,
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
              উত্তর সব এক
            </span>
            জায়গায়
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            রক্তদান, নিবন্ধন, রক্তদাতা খোঁজা কিংবা প্রয়োজনীয় নিয়ম সম্পর্কে আপনার
            মনে থাকা সাধারণ প্রশ্নগুলোর উত্তর সহজেই জেনে নিন।
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#faq"
              className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              সাধারণ প্রশ্ন দেখুন
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-gray-200 backdrop-blur transition duration-300 hover:border-red-500/40 hover:bg-red-500/10"
            >
              যোগাযোগ করুন
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500">সহজ</h3>
              <p className="mt-1 text-sm text-gray-500">প্রশ্নের উত্তর</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold text-white">দ্রুত</h3>
              <p className="mt-1 text-sm text-gray-500">তথ্য খুঁজে পাওয়া</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold text-white">সহজবোধ্য</h3>
              <p className="mt-1 text-sm text-gray-500">ব্যাখ্যা ও নির্দেশনা</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-12">
          <div className="absolute h-[330px] w-[330px] animate-pulse rounded-full bg-red-600/10 blur-3xl sm:h-[440px] sm:w-[440px]" />

          <div className="absolute h-[300px] w-[300px] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-red-500/20 sm:h-[390px] sm:w-[390px]" />

          <div className="relative flex h-64 w-64 animate-[float_5s_ease-in-out_infinite] items-center justify-center rounded-full border border-red-500/20 bg-gradient-to-br from-red-500/20 via-[#17181e] to-[#0d0e12] shadow-[0_0_100px_rgba(239,68,68,0.2)] sm:h-80 sm:w-80">
            <div className="absolute inset-5 rounded-full border border-red-500/10" />

            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-red-500/10 text-8xl font-bold text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] sm:h-44 sm:w-44 sm:text-9xl">
              ?
            </div>
          </div>

          <div className="absolute -left-2 top-10 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#191a20]/95 p-4 shadow-2xl backdrop-blur-xl sm:left-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-2xl text-red-500">
                ?
              </div>
              <div>
                <p className="text-sm font-bold">রক্তদান</p>
                <p className="text-xs text-gray-500">আপনার প্রশ্নের উত্তর</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-12 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#191a20]/95 p-4 shadow-2xl backdrop-blur-xl sm:right-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                ✓
              </div>
              <div>
                <p className="text-sm font-bold">নির্ভরযোগ্য তথ্য</p>
                <p className="text-xs text-gray-500">সহজ ভাষায় বুঝুন</p>
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
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(3deg); }
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    15% { transform: scale(1.15); }
    30% { transform: scale(1); }
    45% { transform: scale(1.1); }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes glow {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 0.8; transform: scale(1.15); }
  }

  @keyframes drift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(12px, -18px); }
  }

  @keyframes reveal {
    from { opacity: 0; transform: translateX(-35px); }
    to { opacity: 1; transform: translateX(0); }
  }
`}</style>
    </section>
  );
}
