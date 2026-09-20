"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navMenus = [
  { label: "Home", href: "/", isCta: false },
  { label: "About", href: "/about", isCta: false },
  { label: "Services", href: "/website", isCta: false },
  { label: "Marketing", href: "/marketing", isCta: false },
  { label: "Software", href: "/software", isCta: false },
  { label: "Team", href: "/team", isCta: false },
  { label: "Careers", href: "/careers", isCta: false },
  { label: "Training", href: "/training", isCta: false },
  { label: "Contact Us", href: "/contact", isCta: true },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div className="sticky top-0 left-0 right-0 z-[99]">
        {sidebarOpen && (
          <aside className="fixed inset-y-0 left-0 w-72 bg-[#1a1a1a] shadow-2xl z-50 overflow-y-auto md:hidden transform transition-transform translate-x-0 border-r border-gray-800">
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">Menu</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-[#f97316] transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4 space-y-2 font-display uppercase tracking-wide">
              {navMenus.map((menu, idx) => (
                <div key={idx} className={menu.isCta ? "pt-6 pb-2" : ""}>
                  <Link
                    href={menu.href}
                    className={
                      menu.isCta
                        ? "block text-center bg-[#f97316] text-white py-3 px-4 rounded-md font-bold text-sm transition-colors hover:bg-white hover:text-[#1a1a1a] shadow-lg"
                        : "block px-4 py-2 text-sm font-semibold text-neutral-300 hover:text-[#f97316] hover:bg-white/5 rounded transition-all"
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    {menu.label}
                  </Link>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Top accent line */}
        <div className="h-1 bg-[#f97316]"></div>

        {/* Main Navbar */}
        <nav className="relative w-full border-b border-gray-800 bg-[#1a1a1a] shadow-lg">
          <div className="max-w-[90rem] mx-auto p-2 md:px-6 lg:px-9">
            <div className="flex items-center justify-between h-[60px] md:h-[80px]">
              
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0">
                <div className="text-3xl font-black tracking-tight text-[#f97316] uppercase italic">
                  SRS<span className="text-white">IT</span>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden xl:flex items-center gap-x-5 lg:gap-x-6 font-display text-[13px] lg:text-sm font-bold uppercase tracking-wide">
                {navMenus.filter(m => !m.isCta).map((menu, idx) => (
                  <Link key={idx} href={menu.href} className="text-neutral-300 hover:text-[#f97316] transition-colors duration-200 whitespace-nowrap">
                    {menu.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden xl:flex shrink-0">
                {navMenus.filter(m => m.isCta).map((menu, idx) => (
                  <Link key={idx} href={menu.href} className="bg-[#f97316] text-white px-6 py-2.5 rounded font-bold hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-sm uppercase shadow-md transform hover:-translate-y-0.5">
                    {menu.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button className="text-white xl:hidden p-2 hover:text-[#f97316] transition-colors ml-auto" onClick={() => setSidebarOpen(true)}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
