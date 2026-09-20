"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const mainNavMenus = [
  { label: "Home", href: "/", isDropdown: false },
  { label: "About", href: "/about", isDropdown: false },
  { 
    label: "Services", 
    href: "/website", 
    isDropdown: true,
    dropdownWidth: 'w-[325px]',
    children: [
      { label: "Web Development", href: "/website" },
      { label: "Software Development", href: "/software" },
      { label: "Digital Marketing", href: "/marketing" },
      { label: "UI/UX Design", href: "/website" },
    ]
  },
  { 
    label: "Products", 
    href: "/software", 
    isDropdown: true,
    dropdownWidth: 'w-[325px]',
    children: [
      { label: "ERP Software", href: "/software" },
      { label: "HRM Software", href: "/software" },
      { label: "Inventory Management", href: "/software" },
    ]
  },
  { label: "Team", href: "/team", isDropdown: false },
  { label: "Contact", href: "/contact", isDropdown: false },
];

const ctaNavMenus = [
  { label: "Get In Touch", href: "/contact" }
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div className="sticky top-0 left-0 right-0 z-[99]">
        {/* Mobile Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-72 bg-white shadow-lg z-50 overflow-y-auto md:hidden transform transition-transform ease-in-out duration-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Menu</h3>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-brand-orange">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="p-2">
            <div className="space-y-1 font-display uppercase tracking-wide">
              {mainNavMenus.map((menu, idx) => {
                const isActive = pathname === menu.href;
                const categoryKey = `menu-${idx}`;
                
                if (menu.isDropdown) {
                  return (
                    <div key={idx}>
                      <div className="flex items-center">
                        <Link
                          href={menu.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`flex-1 px-4 py-3 text-xs font-semibold ${isActive ? 'text-brand-orange' : 'text-brand-black hover:text-brand-orange'}`}
                        >
                          {menu.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(activeCategory === categoryKey ? null : categoryKey)}
                          className="px-3 py-3 text-brand-black hover:text-brand-orange"
                        >
                          <svg className={`h-4 w-4 transform transition-transform ${activeCategory === categoryKey ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                        </button>
                      </div>
                      <div className={`mt-1 space-y-1 pl-6 uppercase ${activeCategory === categoryKey ? 'block' : 'hidden'}`}>
                        {menu.children.map((child, cIdx) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link 
                              key={cIdx} 
                              href={child.href} 
                              onClick={() => setSidebarOpen(false)}
                              className={`block px-4 py-2 text-xs ${isChildActive ? 'text-brand-orange font-semibold' : 'text-gray-600 hover:text-brand-orange'}`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={menu.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center px-4 py-3 text-xs font-semibold ${isActive ? 'text-brand-orange' : 'text-brand-black hover:text-brand-orange'}`}
                  >
                    <span>{menu.label}</span>
                  </Link>
                );
              })}

              {ctaNavMenus.map((menu, idx) => (
                <div key={`cta-${idx}`} className="pt-2 px-4">
                  <Link href={menu.href} onClick={() => setSidebarOpen(false)} className="btn-secondary block text-center">
                    {menu.label}
                  </Link>
                </div>
              ))}
            </div>
            
            <img src="/images/md.webp" alt="Managing Director" className="rounded-md mt-3" width="320" height="180" loading="lazy" decoding="async" />
            
            <div className="mt-3 flex justify-center items-end gap-x-2">
              <a href="#" target="_blank" className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center text-brand-black hover:text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" target="_blank" className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center text-brand-black hover:text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </nav>
        </aside>

        {/* Overlay backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="h-1 bg-brand-orange"></div>

        <nav className="relative sticky top-0 z-40 w-full border-b border-neutral-200 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto p-2 md:px-9">
            <div className="flex items-center justify-between">
              <button className="text-brand-black md:hidden" onClick={() => setSidebarOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
              </button>
              
              <Link href="/">
                <img src="/images/SRS IT LOGO.png" alt="SRS IT" className="h-11 w-auto md:h-12" width="180" height="48" decoding="async" />
              </Link>
              
              <div className="hidden md:flex absolute left-0 top-[49px] w-full flex-col items-center justify-center gap-x-6 gap-y-3 bg-white font-display text-xs font-semibold uppercase tracking-wide shadow-md md:static md:w-auto md:flex-row md:bg-transparent md:shadow-none md:text-sm">
                {mainNavMenus.map((menu, idx) => {
                  const isActive = pathname === menu.href;
                  
                  if (menu.isDropdown) {
                    return (
                      <div key={idx} className="group relative hidden md:block">
                        <div className="flex items-center gap-x-1.5 cursor-pointer py-4">
                          <Link
                            href={menu.href}
                            className={`${isActive ? 'text-brand-orange font-bold' : 'text-brand-black hover:text-brand-orange'} text-sm font-semibold transition-all duration-200`}
                          >
                            {menu.label}
                          </Link>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none text-current transition-transform duration-200 group-hover:rotate-180">
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </div>

                        <div className={`absolute top-[90%] left-0 mt-0 ${menu.dropdownWidth} bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100`}>
                          <div className="grid grid-cols-1 uppercase max-h-[650px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                            {menu.children.map((child, cIdx) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link 
                                  key={cIdx} 
                                  href={child.href} 
                                  className={`${isChildActive ? 'block px-4 py-2 text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover' : 'block px-4 py-2 text-sm text-brand-black hover:bg-brand-orange-light hover:text-brand-orange'} transition-colors duration-150`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={idx}
                      href={menu.href}
                      className={`${isActive ? 'text-brand-orange font-bold' : 'text-brand-black hover:text-brand-orange'} transition-all duration-200`}
                    >
                      {menu.label}
                    </Link>
                  );
                })}
              </div>
              
              <div className="space-x-4 hidden md:block">
                {ctaNavMenus.length > 0 ? ctaNavMenus.map((menu, idx) => (
                  <Link key={idx} href={menu.href} className="btn-secondary">
                    {menu.label}
                  </Link>
                )) : (
                  <Link href="/contact" className="btn-secondary">Get In Touch</Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
