'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from "./Button";
import Logo from "./Logo";

const navigation = [
  {
    name: 'Services',
    href: '/services',
    items: [
      { name: 'Custom Websites', href: '/services/websites' },
      { name: 'Web Applications', href: '/services/applications' },
      { name: 'Local SEO', href: '/services/seo' },
      { name: 'E-commerce', href: '/services/ecommerce' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    items: [
      { name: 'Increase Online Visibility', href: '/solutions/visibility' },
      { name: 'Generate More Leads', href: '/solutions/leads' },
      { name: 'Streamline Operations', href: '/solutions/operations' },
      { name: 'Scale Your Business', href: '/solutions/scale' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const desktopCloseTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const dropdownId = useMemo(() => {
    if (!openDesktopDropdown) return null;
    return `nav-dropdown-${openDesktopDropdown.toLowerCase().replace(/\s+/g, "-")}`;
  }, [openDesktopDropdown]);

  const clearDesktopCloseTimer = () => {
    if (desktopCloseTimer.current) {
      window.clearTimeout(desktopCloseTimer.current);
      desktopCloseTimer.current = null;
    }
  };

  const closeDesktopDropdownSoon = () => {
    clearDesktopCloseTimer();
    desktopCloseTimer.current = window.setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 120);
  };

  const handleMobileDropdownToggle = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  // Close dropdowns when navigating
  useEffect(() => {
    setOpenDesktopDropdown(null);
    setOpenMobileDropdown(null);
  }, [pathname]);

  // Close desktop dropdown on outside click + Escape
  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setOpenDesktopDropdown(null);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktopDropdown(null);
        setOpenMobileDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav
        ref={navRef as any}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Logo href="/" className="h-16 lg:h-20 w-auto" />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const isDropdownOpen = openDesktopDropdown === item.name;
              
              if (item.items) {
                const thisDropdownId = `nav-dropdown-${item.name.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => {
                      clearDesktopCloseTimer();
                      setOpenDesktopDropdown(item.name);
                    }}
                    onMouseLeave={() => {
                      closeDesktopDropdownSoon();
                    }}
                  >
                    {isDropdownOpen ? (
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-controls={thisDropdownId}
                        onFocus={() => setOpenDesktopDropdown(item.name)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setOpenDesktopDropdown(null);
                          }
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpenDesktopDropdown(item.name);
                            // Focus first item next tick
                            window.setTimeout(() => {
                              const first = document.querySelector(
                                `#${thisDropdownId} a`
                              ) as HTMLAnchorElement | null;
                              first?.focus();
                            }, 0);
                          }
                        }}
                        className={`text-sm font-semibold leading-6 transition-colors duration-200 border-b-2 pb-1 px-4 py-2 ${
                          isActive
                            ? 'text-blue-700 border-blue-700'
                            : 'text-gray-900 border-transparent hover:text-blue-700 hover:border-gray-300'
                        }`}
                      >
                        {item.name}
                        <svg
                          className="ml-1 h-4 w-4 inline-block transition-transform duration-200 rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls={thisDropdownId}
                        onFocus={() => setOpenDesktopDropdown(item.name)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setOpenDesktopDropdown(item.name);
                          }
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpenDesktopDropdown(item.name);
                            // Focus first item next tick
                            window.setTimeout(() => {
                              const first = document.querySelector(
                                `#${thisDropdownId} a`
                              ) as HTMLAnchorElement | null;
                              first?.focus();
                            }, 0);
                          }
                        }}
                        className={`text-sm font-semibold leading-6 transition-colors duration-200 border-b-2 pb-1 px-4 py-2 ${
                          isActive
                            ? 'text-blue-700 border-blue-700'
                            : 'text-gray-900 border-transparent hover:text-blue-700 hover:border-gray-300'
                        }`}
                      >
                        {item.name}
                        <svg
                          className="ml-1 h-4 w-4 inline-block transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full w-56 z-50 pt-1">
                        <ul
                          id={thisDropdownId}
                          aria-label={item.name}
                          className="rounded-xl bg-white shadow-xl border border-slate-200 py-2"
                          onMouseEnter={() => {
                            clearDesktopCloseTimer();
                          }}
                          onMouseLeave={() => {
                            closeDesktopDropdownSoon();
                          }}
                        >
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                aria-current={pathname === subItem.href ? "page" : undefined}
                                className={`mx-2 block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 outline-none ${
                                  pathname === subItem.href
                                    ? "bg-slate-50 text-blue-700"
                                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-700 focus:bg-slate-50 focus:text-blue-700"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors duration-200 border-b-2 pb-1 px-4 py-2 ${
                    isActive
                      ? 'text-blue-700 border-blue-700'
                      : 'text-gray-900 border-transparent hover:text-blue-700 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href="/contact" size="sm">
              Book a Quick Call
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Logo href="/" className="h-12 w-auto" />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                      const isMobileDropdownOpen = openMobileDropdown === item.name;
                      
                      if (item.items) {
                        return (
                          <div key={item.name}>
                            <button
                              type="button"
                              onClick={() => handleMobileDropdownToggle(item.name)}
                              className={`-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                                isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {item.name}
                              <svg
                                className={`h-5 w-5 transition-transform duration-200 ${
                                  isMobileDropdownOpen ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {isMobileDropdownOpen && (
                              <div className="mt-2 space-y-1 pl-6">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                                      pathname === subItem.href
                                        ? "bg-slate-50 text-blue-700"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                      
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                            isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="py-6">
                    <Button
                      href="/contact"
                      size="md"
                      className="w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book a Quick Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
