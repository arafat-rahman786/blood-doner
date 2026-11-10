import { Link } from "react-router";


export default function Awareness() {
  return (
    <section data-aos="zoom-in" className="relative overflow-hidden bg-[#0d0e12] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-[130px]"></div>
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-[130px]"></div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl animate-[fadeUp_0.8s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold text-[#ed2441]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed2441]"></span>
            রক্তদান সম্পর্কে জানুন
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">
            সচেতনতাই পারে
            <span className="text-[#ed2441]"> বাঁচাতে একটি প্রাণ</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            রক্তদান সম্পর্কে সঠিক তথ্য জানুন, ভুল ধারণা দূর করুন
            এবং নিরাপদ রক্তদানে অন্যকে উৎসাহিত করুন।
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="group relative flex min-h-[440px] animate-[fadeUp_0.8s_0.15s_ease-out_both] flex-col justify-between overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-[#42121e] via-[#271018] to-[#17181e] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_20px_60px_rgba(237,36,65,0.12)] sm:p-10 lg:col-span-5">
            <div className="absolute -right-16 top-10 h-64 w-64 rounded-full border-[35px] border-red-500/10 transition duration-700 group-hover:scale-125 group-hover:rotate-45"></div>
            <div className="absolute -right-4 top-24 h-40 w-40 rounded-full border border-red-400/20 transition duration-700 group-hover:scale-125"></div>

            <div className="relative z-10">
              <img src="https://i.postimg.cc/WbGLSZpv/ea5340f1b4e3e47678e2207ceeb4c226-removebg-preview.png"
               className="inline-block animate-[float_3s_ease-in-out_infinite] w-25"/>

              <p className="mt-8 text-sm font-semibold tracking-wider text-red-300">
                মানবতার সবচেয়ে সুন্দর উপহার
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                আপনার রক্ত
                <br />
                কারও বেঁচে থাকার
                <br />
                <span className="text-[#ed2441]">নতুন আশা।</span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-8 text-gray-300">
                প্রতিদিন অসংখ্য মানুষ রক্তের অভাবে কঠিন সময় পার করেন।
                আপনার স্বেচ্ছায় দেওয়া রক্ত তাদের চিকিৎসায় গুরুত্বপূর্ণ
                ভূমিকা রাখতে পারে।
              </p>
            </div>

            <Link to={"/BecomeDonor"}
              className="relative z-10 mt-10 inline-flex w-fit items-center gap-3 rounded-xl bg-[#ed2441] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20"
            >
              রক্তদাতা হিসেবে যুক্ত হোন
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                icon: "https://i.postimg.cc/G2Lx0ZGv/5f8930e83b6ef81209a3df86e1247a36-removebg-preview.png",
                number: "০১",
                title: "কারা রক্তদান করতে পারবেন?",
                description: "নির্ধারিত বয়স, ওজন ও স্বাস্থ্যগত যোগ্যতা পূরণকারী সুস্থ ব্যক্তিরা চিকিৎসকের পরীক্ষা-নিরীক্ষার পর রক্তদান করতে পারেন।",
                link: "বিস্তারিত জানুন",
              },
              {
                icon: "https://i.postimg.cc/rwvtC7f5/16f7606093eea92c2c7e3142bc84ae26-removebg-preview.png",
                number: "০২",
                title: "রক্তদানের আগে প্রস্তুতি",
                description: "পর্যাপ্ত ঘুমান, পুষ্টিকর খাবার খান, পানি পান করুন এবং নিজের শারীরিক অবস্থা সম্পর্কে চিকিৎসককে সঠিক তথ্য দিন।",
                link: "প্রয়োজনীয় পরামর্শ",
              },
              {
                icon: "https://i.postimg.cc/7hMpmv1Z/d83dedddec2dc81d15bd72a6e5f788a1-removebg-preview.png",
                number: "০৩",
                title: "রক্তদানের পর করণীয়",
                description: "কিছুক্ষণ বিশ্রাম নিন, পর্যাপ্ত পানি পান করুন, পুষ্টিকর খাবার খান এবং রক্তদান কেন্দ্রের নির্দেশনা মেনে চলুন।",
                link: "সুস্থ থাকার পরামর্শ",
              },
              {
                icon: "https://i.postimg.cc/445LL1kf/9f8dc061c14d66a7340c5393ccf0bc34-removebg-preview.png",
                number: "০৪",
                title: "রক্তের গ্রুপ সম্পর্কে জানুন",
                description: "নিজের রক্তের গ্রুপ জানা থাকলে জরুরি প্রয়োজনে উপযুক্ত রক্তদাতার সঙ্গে যোগাযোগ করতে সুবিধা হয়।",
                link: "রক্তের গ্রুপ জানুন",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                className="group animate-[fadeUp_0.8s_ease-out_both] rounded-3xl border border-white/[0.07]  p-7 transition duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_15px_40px_rgba(237,36,65,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <img src={item.icon} className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl transition duration-500 group-hover:rotate-12 group-hover:scale-110"/>
                  <span className="text-3xl font-bold text-white/10 transition duration-300 group-hover:text-red-500/30">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold transition-colors duration-300 group-hover:text-red-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ed2441]">
                  {item.link}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="group flex animate-[fadeUp_0.8s_0.8s_ease-out_both] flex-col justify-between gap-6 rounded-3xl border border-white/[0.07] bg-[#17181e] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_15px_40px_rgba(237,36,65,0.08)] sm:flex-row sm:items-center sm:p-9">
            <div>
              <span className="inline-block text-3xl transition duration-500 group-hover:scale-125">
                <img src="https://i.postimg.cc/sXKYcwBP/5835f777378b562cd69bb5c51f37bb85-removebg-preview.png" alt="" />
              </span>
              <h3 className="mt-4 text-xl font-bold group-hover:text-red-400">
                ভুল ধারণা দূর করুন
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                রক্তদান নিয়ে প্রচলিত ভুল ধারণার পরিবর্তে সঠিক
                তথ্য জানুন। নিরাপদ রক্তদান সম্পর্কে নিজে সচেতন
                হোন এবং অন্যকেও সচেতন করুন।
              </p>
            </div>
            <span className="hidden text-6xl text-white/5 sm:block">০৫</span>
          </div>

          <div className="group flex animate-[fadeUp_0.8s_0.95s_ease-out_both] flex-col justify-between gap-6 rounded-3xl border border-white/[0.07] bg-[#17181e] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_15px_40px_rgba(237,36,65,0.08)] sm:flex-row sm:items-center sm:p-9">
            <div>
              <span className="inline-block text-3xl transition duration-500 group-hover:scale-125">
                <img src="https://i.postimg.cc/BbKT2DFt/c93aedb26d9d9cffbdadfef9f9109f6e-removebg-preview.png" alt="" />
              </span>
              <h3 className="mt-4 text-xl font-bold group-hover:text-red-400">
                গড়ে তুলুন রক্তদানের সংস্কৃতি
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                পরিবার, বন্ধু ও পরিচিতদের রক্তদানে উৎসাহিত করুন।
                সম্মিলিত প্রচেষ্টায় তৈরি হতে পারে একটি
                মানবিক ও সচেতন সমাজ।
              </p>
            </div>
            <span className="hidden text-6xl text-white/5 sm:block">০৬</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}