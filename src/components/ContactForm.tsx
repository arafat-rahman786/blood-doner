import { useForm, type SubmitHandler } from "react-hook-form";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};
export default function ContactForm() {
    const {register,handleSubmit,formState:{errors}} = useForm<ContactFormValues>()
    const onSubmit: SubmitHandler<ContactFormValues> = (data)=> console.log(data)
   return (
    <>
      <section className="relative overflow-hidden bg-[#0d0e12] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[130px]"></div>
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-700/10 blur-[130px]"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span
              data-aos="zoom-in-down"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-[#ed2441]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed2441]"></span>
              আমাদের বার্তা পাঠান
            </span>

            <h2
              data-aos="zoom-in-up"
              className="mb-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl"
            >
              আপনার কথা
              <span className="text-[#ed2441]">আমাদের জানান</span>
            </h2>

            <p
              data-aos="zoom-in-up"
              className="mx-auto max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              আপনার যেকোনো প্রশ্ন, মতামত কিংবা পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ।
              নিচের ফর্মটি পূরণ করে আমাদের কাছে বার্তা পাঠান।
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#15161c] shadow-2xl lg:grid-cols-5">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#7f101f] via-[#4b0d19] to-[#190d13] p-8 sm:p-10 lg:col-span-2 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"></div>
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"></div>
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl"></div>

              <div className="relative z-10">
                <span
                  data-aos="zoom-in-left"
                  className="mb-5 inline-flex rounded-xl border border-white/20 bg-white/10 p-3 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.7"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>

                <h3
                  data-aos="fade-right"
                  className="mb-4 text-3xl font-extrabold leading-snug"
                >
                  আপনার একটি বার্তাই হতে পারে কারও সহযোগিতার কারণ।
                </h3>

                <p
                  data-aos="fade-right"
                  className="mb-10 leading-8 text-red-100/70"
                >
                  রক্তদাতা খোঁজা, স্বেচ্ছাসেবক হওয়া কিংবা আমাদের কার্যক্রম
                  সম্পর্কে জানতে যেকোনো প্রয়োজনে যোগাযোগ করুন।
                </p>

                <div className="space-y-6">
                  <div data-aos="fade-right" className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-red-100/60">ফোন নম্বর</p>
                      <p className="font-semibold">+৮৮০ ১০০০-০০০০০০</p>
                    </div>
                  </div>

                  <div data-aos="fade-right" className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-red-100/60">
                        ইমেইল ঠিকানা
                      </p>
                      <p className="break-all font-semibold">
                        info@example.com
                      </p>
                    </div>
                  </div>

                  <div data-aos="fade-right" className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                      >
                        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-red-100/60">
                        আমাদের অবস্থান
                      </p>
                      <p className="font-semibold">বাংলাদেশ</p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  className="mt-12 border-t border-white/15 pt-7"
                >
                  <p className="mb-4 text-sm font-semibold text-red-100/70">
                    মানুষের পাশে, রক্তের বন্ধনে
                  </p>

                  <div
                    data-aos="fade-up"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-red-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 21s-8-4.8-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.2-10 11-10 11Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-7 sm:p-10 lg:col-span-3 lg:p-12"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <div
                className="mb-9"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                <h3 className="mb-2 text-2xl font-bold sm:text-3xl">
                  বার্তা পাঠান
                </h3>
                <p className="text-sm leading-7 text-gray-400">
                  নিচের তথ্যগুলো সঠিকভাবে পূরণ করুন। আমরা আপনার বার্তার উত্তর
                  দেওয়ার চেষ্টা করব।
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-300"
                    >
                      আপনার নাম <span className="text-[#ed2441]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name",{required:"Full filed this input",maxLength:15})}
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#ed2441] focus:ring-2 focus:ring-[#ed2441]/10"
                    />
                    <p className="text-xs text-red-600">{errors.name?.message}</p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="200">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-300"
                    >
                      মোবাইল নম্বর <span className="text-[#ed2441]">*</span>
                    </label>
                    <input
                      type="tel"
                       {...register("phone",{required:"Full filed this input",maxLength:11})}
                      placeholder="০১XXXXXXXXX"
                      className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#ed2441] focus:ring-2 focus:ring-[#ed2441]/10"
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    ইমেইল ঠিকানা <span className="text-[#ed2441]">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Full filed this input",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#ed2441] focus:ring-2 focus:ring-[#ed2441]/10"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="150">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    যোগাযোগের বিষয় <span className="text-[#ed2441]">*</span>
                  </label>

                  <select
                    id="subject"
                     {...register("subject",{required:"Full filed this input"})}
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-4 text-sm text-gray-400 outline-none transition-all focus:border-[#ed2441] focus:ring-2 focus:ring-[#ed2441]/10"
                  >
                    <option value="" disabled>
                      বিষয় নির্বাচন করুন
                    </option>
                    <option
                      value="blood-donor"
                      className="bg-[#15161c] text-white"
                    >
                      রক্তদাতা খুঁজতে সহযোগিতা
                    </option>
                    <option
                      value="join-donor"
                      className="bg-[#15161c] text-white"
                    >
                      রক্তদাতা হিসেবে যুক্ত হতে চাই
                    </option>
                    <option
                      value="volunteer"
                      className="bg-[#15161c] text-white"
                    >
                      স্বেচ্ছাসেবক হতে চাই
                    </option>
                    <option
                      value="complaint"
                      className="bg-[#15161c] text-white"
                    >
                      অভিযোগ বা পরামর্শ
                    </option>
                    <option value="other" className="bg-[#15161c] text-white">
                      অন্যান্য
                    </option>
                  </select>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    আপনার বার্তা <span className="text-[#ed2441]">*</span>
                  </label>

                  <textarea
                    id="message"
                    {...register("message",{required:"full filled the input."})}
                    rows={5}
                    placeholder="আপনার প্রয়োজন বা বিস্তারিত বার্তা এখানে লিখুন..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-4 text-sm leading-7 text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#ed2441] focus:ring-2 focus:ring-[#ed2441]/10"
                  ></textarea>
                </div>

                <div
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <input
                    type="checkbox"
                    id="contact-agree"
                    {...register("consent",{required:"filed this..."})}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#ed2441]"
                  />
                  <label
                    htmlFor="contact-agree"
                    className="cursor-pointer text-sm leading-6 text-gray-400"
                  >
                    আমি নিশ্চিত করছি যে, আমার দেওয়া তথ্যগুলো সঠিক এবং প্রয়োজনে
                    যোগাযোগের জন্য সম্মতি প্রদান করছি।
                  </label>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#ed2441] px-6 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-red-600/30 active:translate-y-0 sm:w-auto"
                  >
                    বার্তা পাঠান
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <p className="text-xs leading-6 text-gray-500">
                  <span className="text-[#ed2441]">*</span> চিহ্নিত ঘরগুলো পূরণ
                  করা আবশ্যক। আপনার ব্যক্তিগত তথ্যের গোপনীয়তা আমরা গুরুত্বের
                  সাথে বিবেচনা করি।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
