

export default function ContactFaq() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0d0e12] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]"></div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="mb-14 text-center"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-[#ed2441]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed2441]"></span>
              আপনার জিজ্ঞাসা
            </span>

            <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              যোগাযোগ নিয়ে
              <span className="text-[#ed2441]">সাধারণ প্রশ্ন</span>
            </h2>

            <p
              className="mx-auto max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              আমাদের সাথে যোগাযোগ এবং সহযোগিতা সম্পর্কে আপনার মনে থাকা সাধারণ
              প্রশ্নগুলোর উত্তর এখানে খুঁজে পাবেন।
            </p>
          </div>

          <div className="space-y-4">
            <details
              open
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
              className="group overflow-hidden rounded-2xl border border-[#ed2441]/30 bg-[#15161c] shadow-[0_10px_35px_rgba(237,36,65,0.06)] transition-all duration-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-[#ed2441]">
                    ০১
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    আপনাদের সাথে কীভাবে যোগাযোগ করতে পারি?
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ed2441] transition-all duration-300 group-open:rotate-180 group-open:border-[#ed2441]/40 group-open:bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-6 sm:px-6">
                <div className="mb-4 h-px bg-white/10"></div>
                <p className="pl-0 text-sm leading-8 text-gray-400 sm:pl-14">
                  আপনি আমাদের যোগাযোগ ফর্ম পূরণ করে, ইমেইল পাঠিয়ে অথবা প্রদত্ত
                  ফোন নম্বর ও হোয়াটসঅ্যাপের মাধ্যমে সরাসরি যোগাযোগ করতে পারেন।
                </p>
              </div>
            </details>

            <details
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] transition-all duration-300 hover:border-[#ed2441]/40 hover:shadow-[0_10px_35px_rgba(237,36,65,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-[#ed2441]">
                    ০২
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    বার্তা পাঠানোর পর কতক্ষণে উত্তর পাব?
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ed2441] transition-all duration-300 group-open:rotate-180 group-open:border-[#ed2441]/40 group-open:bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-6 sm:px-6">
                <div className="mb-4 h-px bg-white/10"></div>
                <p className="pl-0 text-sm leading-8 text-gray-400 sm:pl-14">
                  আমরা যত দ্রুত সম্ভব আপনার বার্তার উত্তর দেওয়ার চেষ্টা করি। তবে
                  উত্তর দেওয়ার সময় আমাদের কার্যক্রম ও বার্তার পরিমাণের ওপর
                  নির্ভর করতে পারে।
                </p>
              </div>
            </details>

            <details
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] transition-all duration-300 hover:border-[#ed2441]/40 hover:shadow-[0_10px_35px_rgba(237,36,65,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-[#ed2441]">
                    ০৩
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    রক্তদাতা হিসেবে কীভাবে যুক্ত হতে পারি?
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ed2441] transition-all duration-300 group-open:rotate-180 group-open:border-[#ed2441]/40 group-open:bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-6 sm:px-6">
                <div className="mb-4 h-px bg-white/10"></div>
                <p className="pl-0 text-sm leading-8 text-gray-400 sm:pl-14">
                  আমাদের ওয়েবসাইটের রক্তদাতা হিসেবে যুক্ত হওয়ার পেজে গিয়ে
                  প্রয়োজনীয় তথ্য পূরণ করে নিবন্ধন করতে পারবেন।
                </p>
              </div>
            </details>

            <details
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] transition-all duration-300 hover:border-[#ed2441]/40 hover:shadow-[0_10px_35px_rgba(237,36,65,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-[#ed2441]">
                    ০৪
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    আমি কি স্বেচ্ছাসেবক হিসেবে কাজ করতে পারব?
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ed2441] transition-all duration-300 group-open:rotate-180 group-open:border-[#ed2441]/40 group-open:bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-6 sm:px-6">
                <div className="mb-4 h-px bg-white/10"></div>
                <p className="pl-0 text-sm leading-8 text-gray-400 sm:pl-14">
                  অবশ্যই! আমাদের কার্যক্রমে যুক্ত হওয়ার আগ্রহ জানিয়ে যোগাযোগ
                  ফর্মের মাধ্যমে আপনার বিস্তারিত তথ্য পাঠাতে পারেন।
                </p>
              </div>
            </details>

            <details
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="800"
              data-aos-once="true"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] transition-all duration-300 hover:border-[#ed2441]/40 hover:shadow-[0_10px_35px_rgba(237,36,65,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-[#ed2441]">
                    ০৫
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    আমার ব্যক্তিগত তথ্য কি নিরাপদ থাকবে?
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ed2441] transition-all duration-300 group-open:rotate-180 group-open:border-[#ed2441]/40 group-open:bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-6 sm:px-6">
                <div className="mb-4 h-px bg-white/10"></div>
                <p className="pl-0 text-sm leading-8 text-gray-400 sm:pl-14">
                  আপনার ব্যক্তিগত তথ্যের গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। তথ্য
                  ব্যবহারের ক্ষেত্রে আমাদের গোপনীয়তা নীতি অনুসরণ করা হয়।
                </p>
              </div>
            </details>

            <details
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] transition-all duration-300 hover:border-[#ed2441]/40 hover:shadow-[0_10px_35px_rgba(237,36,65,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-[#ed2441]">
                    ০৬
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    ওয়েবসাইটে কোনো সমস্যা পেলে কোথায় জানাব?
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ed2441] transition-all duration-300 group-open:rotate-180 group-open:border-[#ed2441]/40 group-open:bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-6 sm:px-6">
                <div className="mb-4 h-px bg-white/10"></div>
                <p className="pl-0 text-sm leading-8 text-gray-400 sm:pl-14">
                  ওয়েবসাইটে কোনো সমস্যা, ভুল তথ্য কিংবা নতুন কোনো পরামর্শ থাকলে
                  যোগাযোগ ফর্মের মাধ্যমে আমাদের জানাতে পারেন।
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
