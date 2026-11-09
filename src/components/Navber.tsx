import { Link } from 'react-router';

export default function Navber() {
  return (
    <>
    
<nav  className="font-display sticky top-0 z-50 border-b border-white/5 bg-[#0d0e12]/95 backdrop-blur-xl">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

    <Link to={"/"} className="flex shrink-0 items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#281018] text-[#ed2441]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.5 6.2 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-4.5-8.8-7-13Z"/>
        </svg>
      </div>
      <span className="text-lg font-bold text-white">
        Blood <span className="text-[#ed2441]">Donor</span>
      </span>
    </Link>

    <div className="hidden items-center gap-7 text-sm text-gray-400 lg:flex">
      <Link to={"/"} className="transition hover:text-[#ed2441]">হোম</Link>
      <Link to={"/DonorFindPage"} className="transition hover:text-[#ed2441]">রক্তদাতা খুঁজুন</Link>
      <Link to={"/DonorListPage"} className="transition hover:text-[#ed2441]">রক্তদাতা গণ</Link>
      <Link to={"/Importences"} className="transition hover:text-[#ed2441]">কেন রক্তদান জরুরি</Link>
      <Link to={"/AwarenessPage"} className="transition hover:text-[#ed2441]">সচেতনতা</Link>
      <Link to={"/FaqPage"} className="transition hover:text-[#ed2441]">সাধারণ প্রশ্ন</Link>
      <Link to={"/Contact"} className="transition hover:text-[#ed2441]">যোগাযোগ</Link>
    </div>

    <div className="flex items-center gap-2">

      <Link to={"/BecomeDonor"} className="rounded-full bg-[#ed2441] px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700">
        রক্তদাতা হন
      </Link>

      <button className="flex h-9 w-9 items-center justify-center rounded-lg text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

  </div>
</nav>

    </>
  )
}
