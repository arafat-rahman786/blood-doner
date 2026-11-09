
import { useState } from "react";
import { Link } from "react-router";

export default function Navber() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "রক্তদাতা খুঁজুন", path: "/DonorFindPage" },
    { name: "রক্তদাতা গণ", path: "/DonorListPage" },
    { name: "কেন রক্তদান জরুরি", path: "/Importences" },
    { name: "সচেতনতা", path: "/AwarenessPage" },
    { name: "সাধারণ প্রশ্ন", path: "/FaqPage" },
    { name: "যোগাযোগ", path: "/Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0d0e12]/95 font-display backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#281018] text-[#ed2441]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9.5 6.2 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-4.5-8.8-7-13Z" />
            </svg>
          </div>

          <span className="text-lg font-bold text-white">
            Blood <span className="text-[#ed2441]">Donor</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-gray-400 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition hover:text-[#ed2441]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/BecomeDonor"
            className="rounded-full bg-[#ed2441] px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
          >
            রক্তদাতা হন
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-[#281018] hover:text-[#ed2441]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/BecomeDonor"
            onClick={closeMenu}
            className="mt-2 rounded-lg bg-[#ed2441] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
          >
            রক্তদাতা হন
          </Link>
        </div>
      </div>
    </nav>
  );
}
