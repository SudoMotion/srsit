"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navMenus = [
  { label: "Home", href: "/", isCta: false },
  { label: "About Us", href: "/about", isCta: false },
  { label: "Services", href: "/website", isCta: false },
  { label: "Products", href: "#", isCta: false },
  { label: "Portfolio", href: "#", isCta: false },
  { label: "Blog", href: "#", isCta: false },
  { label: "Get In Touch", href: "/contact", isCta: true },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div className="sticky top-0 left-0 right-0 z-[99]">
        {sidebarOpen && (
          <aside className="fixed inset-y-0 left-0 w-72 bg-white shadow-lg z-50 overflow-y-auto md:hidden transform transition-transform translate-x-0">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Menu</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-[#f97316]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-2 space-y-1 font-display uppercase tracking-wide">
              {navMenus.map((menu, idx) => (
                <div key={idx} className={menu.isCta ? "pt-2 px-4" : ""}>
                  <Link
                    href={menu.href}
                    className={
                      menu.isCta
                        ? "block text-center bg-[#f97316] text-white py-2 px-4 rounded-md font-bold text-sm"
                        : "flex items-center px-4 py-3 text-xs font-semibold text-[#1a1a1a] hover:text-[#f97316]"
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

        <div className="h-1 bg-[#f97316]"></div>

        <nav className="relative w-full border-b border-neutral-200 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto p-2 md:px-9">
            <div className="flex items-center justify-between h-[48px] md:h-auto">
              <button className="text-[#1a1a1a] md:hidden p-2" onClick={() => setSidebarOpen(true)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
              </button>
              
              <Link href="/">
                <div className="text-2xl font-black tracking-tight text-[#f97316] uppercase italic">
                  SRS<span className="text-[#1a1a1a]">IT</span>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-x-6 gap-y-3 font-display text-xs font-semibold uppercase tracking-wide">
                {navMenus.filter(m => !m.isCta).map((menu, idx) => (
                  <Link key={idx} href={menu.href} className="text-[#1a1a1a] hover:text-[#f97316] transition-all duration-200 text-sm">
                    {menu.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex space-x-4">
                {navMenus.filter(m => m.isCta).map((menu, idx) => (
                  <Link key={idx} href={menu.href} className="bg-[#1a1a1a] text-white px-5 py-2 rounded font-bold hover:bg-[#f97316] transition-colors text-sm uppercase">
                    {menu.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

