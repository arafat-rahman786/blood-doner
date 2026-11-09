import { ArrowDown, ArrowRight, Heart, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d0e12] px-4 py-24 text-white sm:px-6 lg:px-8">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: .3; transform: scale(.9); }
          50% { opacity: .75; transform: scale(1.15); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.16); }
          30% { transform: scale(1); }
          45% { transform: scale(1.1); }
        }
        .contact-float { animation: float 4s ease-in-out infinite; }
        .contact-glow { animation: pulseGlow 4s ease-in-out infinite; }
        .contact-reveal { animation: reveal .9s ease-out both; }
        .contact-orbit { animation: orbit 24s linear infinite; }
        .contact-heart { animation: heartbeat 2s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="contact-glow absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#ed2441]/20 blur-[110px]" />
        <div className="contact-glow absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="contact-reveal relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            <MessageCircle size={16} />
            আমরা আছি আপনার পাশে
          </span>

          <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            যেকোনো প্রয়োজনে
            <span className="mt-2 block text-[#ed2441]">যোগাযোগ করুন</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            রক্তদান, রক্তদাতা খোঁজা কিংবা আমাদের সেবা সম্পর্কে কোনো প্রশ্ন থাকলে
            নির্দ্বিধায় যোগাযোগ করুন। আপনার পাশে থাকতে রক্তবন্ধন সবসময় প্রস্তুত।
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#ed2441] px-6 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-600"
            >
              বার্তা পাঠান
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact-info"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-bold text-gray-200 transition duration-300 hover:border-red-500/40 hover:bg-red-500/10"
            >
              যোগাযোগের তথ্য
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-black text-white">২৪/৭</p>
              <p className="mt-1 text-sm text-gray-500">সহযোগিতার চেষ্টা</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">একসাথে</p>
              <p className="mt-1 text-sm text-gray-500">মানবতার সেবায়</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-lg items-center justify-center">
          <div className="contact-glow absolute h-72 w-72 rounded-full bg-red-600/20 blur-[80px]" />

          <div className="contact-orbit absolute h-[330px] w-[330px] rounded-full border border-dashed border-red-500/20 sm:h-[390px] sm:w-[390px]">
            <span className="absolute left-10 top-12 h-3 w-3 rounded-full bg-red-500 shadow-[0_0_20px_#ed2441]" />
            <span className="absolute bottom-10 right-12 h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_18px_#ed2441]" />
          </div>

          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-red-500/20 bg-gradient-to-br from-[#ed2441]/15 to-transparent shadow-[0_0_80px_rgba(237,36,65,0.12)]">
            <div className="absolute inset-5 rounded-full border border-white/10" />
            <div className="contact-heart flex h-32 w-32 items-center justify-center rounded-[36px] bg-gradient-to-br from-[#ed2441] to-red-800 shadow-2xl shadow-red-600/40">
              <Heart size={66} fill="white" strokeWidth={1.5} />
            </div>
            <span className="absolute -right-3 top-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#1b1c23] text-red-400 shadow-xl">
              <Mail size={22} />
            </span>
            <span className="absolute -bottom-2 left-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#1b1c23] text-red-400 shadow-xl">
              <Phone size={22} />
            </span>
          </div>

          <div className="contact-float absolute left-0 top-12 rounded-2xl border border-white/10 bg-[#191a21]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                <MessageCircle size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">আমাদের লিখুন</p>
                <p className="mt-1 text-xs text-gray-500">আপনার কথা শুনতে প্রস্তুত</p>
              </div>
            </div>
          </div>

          <div className="contact-float absolute bottom-12 right-0 rounded-2xl border border-white/10 bg-[#191a21]/95 p-4 shadow-2xl backdrop-blur-xl sm:-right-4" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                <MapPin size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">মানবতার বন্ধনে</p>
                <p className="mt-1 text-xs text-gray-500">রক্তবন্ধন আপনার পাশে</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}