import React from 'react'

export default function ContactInformation() {
  return (
    <>
        
<section className="relative overflow-hidden bg-[#0d0e12] px-4 py-20 text-white sm:px-6 lg:px-8">

  <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]"></div>
  <div className="pointer-events-none absolute right-[-100px] bottom-0 h-80 w-80 rounded-full bg-red-700/10 blur-[120px]"></div>

  <div className="relative mx-auto max-w-7xl">

    <div data-aos="zoom-in-down" className="mx-auto mb-14 max-w-2xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-[#ed2441]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed2441]"></span>
        যোগাযোগের মাধ্যম
      </span>

      <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
        আমাদের সাথে
        <span className="text-[#ed2441]"> যোগাযোগ করুন</span>
      </h2>

      <p className="text-base leading-8 text-gray-400 sm:text-lg">
        আপনার যেকোনো প্রশ্ন, পরামর্শ কিংবা সহযোগিতার প্রয়োজনে
        আমরা সবসময় আপনার পাশে আছি।
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">

     
      <div data-aos="fade-right" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#ed2441]/50 hover:shadow-[0_15px_50px_rgba(237,36,65,0.12)]">

        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-600/10 blur-3xl transition-all duration-500 group-hover:bg-red-600/20"></div>

        <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-[#ed2441] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#ed2441] group-hover:text-white">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>

        <h3 className="relative mb-3 text-2xl font-bold text-white">ফোনে যোগাযোগ</h3>

        <p className="relative mb-6 leading-7 text-gray-400">
          জরুরি প্রয়োজনে সরাসরি আমাদের সাথে কথা বলুন। আমরা আপনাকে সহযোগিতা করার চেষ্টা করব।
        </p>

        <div className="relative mb-6 h-px bg-white/10"></div>

        <span className="relative mb-2 block text-sm text-gray-500">আমাদের হেল্পলাইন</span>

        <a href="tel:+8801000000000" className="relative inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-[#ed2441]">
          +৮৮০ ১০০০-০০০০০০
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17 17 7M7 7h10v10"/>
          </svg>
        </a>

        <div className="relative mt-7 flex items-center gap-2 text-sm text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          সহযোগিতার জন্য প্রস্তুত
        </div>
      </div>

    
      <div data-aos="fade-up" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#ed2441]/50 hover:shadow-[0_15px_50px_rgba(237,36,65,0.12)]">

        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-600/10 blur-3xl transition-all duration-500 group-hover:bg-red-600/20"></div>

        <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-[#ed2441] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#ed2441] group-hover:text-white">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </div>

        <h3 className="relative mb-3 text-2xl font-bold text-white">ইমেইলে যোগাযোগ</h3>

        <p className="relative mb-6 leading-7 text-gray-400">
          আপনার মতামত, অভিযোগ কিংবা যেকোনো বিস্তারিত বিষয়ে আমাদের ইমেইল করতে পারেন।
        </p>

        <div className="relative mb-6 h-px bg-white/10"></div>

        <span className="relative mb-2 block text-sm text-gray-500">আমাদের ইমেইল ঠিকানা</span>

        <a href="mailto:hmyasinarafat74@gmail.com" target="_blank" className="relative inline-flex items-center gap-2 break-all text-lg font-bold text-white transition-colors hover:text-[#ed2441]">
          hmyasinarafat74@gmail.com
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17 17 7M7 7h10v10"/>
          </svg>
        </a>

        <div className="relative mt-7 flex items-center gap-2 text-sm text-gray-400">
          <span className="h-2 w-2 rounded-full bg-[#ed2441]"></span>
          যেকোনো সময় ইমেইল করতে পারেন
        </div>
      </div>

    
      <div data-aos="fade-left" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#15161c] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#ed2441]/50 hover:shadow-[0_15px_50px_rgba(237,36,65,0.12)]">

        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-600/10 blur-3xl transition-all duration-500 group-hover:bg-red-600/20"></div>

        <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-[#ed2441] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#ed2441] group-hover:text-white">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </div>

        <h3 className="relative mb-3 text-2xl font-bold text-white">হোয়াটসঅ্যাপ</h3>

        <p className="relative mb-6 leading-7 text-gray-400">
          দ্রুত যোগাযোগ এবং প্রয়োজনীয় তথ্য জানতে আমাদের হোয়াটসঅ্যাপে মেসেজ পাঠান।
        </p>

        <div className="relative mb-6 h-px bg-white/10"></div>

        <span className="relative mb-2 block text-sm text-gray-500">হোয়াটসঅ্যাপ নম্বর</span>

        <a href="https://wa.me/8801718945989" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-[#ed2441]">
          +৮৮০ ১০০০-০০০০০০
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17 17 7M7 7h10v10"/>
          </svg>
        </a>

        <div className="relative mt-7 flex items-center gap-2 text-sm text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          সরাসরি মেসেজ পাঠান
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}
