"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    Menu,
    X, Home, ArrowRight,
    Sparkles, Info, Store
} from "lucide-react";
import { useState } from "react";

import Logo from "./logo";
// import { SimpleModeToggle } from "@/components/simple-mode-toggle";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Features",
      icon: Sparkles,
      href: "https://www.nyxhora.com/features",
      active: pathname === "/features",
    },
    {
        label: "UI",
        icon: Sparkles,
        href: "/docs",
        active: pathname === "/docs",
    },
    {
      label: "Template",
      icon: Store,
      href: "https://www.nyxhora.com/market",
      active: pathname === "/market" || pathname === "/templates",
    },
    {
      label: "About",
      icon: Info,
      href: "https://www.nyxhora.com/about",
      active: pathname === "/about",
    },
  ];

  return (
    <nav className="fixed top-0 mb-10 w-full z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="transition-transform duration-200 group-hover:scale-105">
                <Logo />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
                Nyxhora UI
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out",
                    "hover:shadow-sm hover:scale-105",
                    route.active
                      ? "shadow-sm"
                      : "text-neutral-600  hover:text-blue-900/50 dark:text-neutral-300  dark:hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-2">{route.label}</div>
                  {route.active && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">

            
           
              <>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="flex flex-row cursor-pointer z-50 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 gap-2"
                >
                  <Link href="/app">
                    Enter Nyxhora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                
              </>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">

            {/* <SimpleModeToggle /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline-none hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              <div className="transition-transform duration-200">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 rotate-90" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 transition-all duration-500 ease-out",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{ zIndex: 60 }}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-500",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "relative bg-linear-to-b from-white via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950",
            "border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl",
            "transition-all duration-500 ease-out",
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
          style={{
            borderRadius: "0 0 24px 24px",
            maxHeight: "calc(100vh - 4rem)",
            overflowY: "auto",
          }}
        >
          <div className="px-5 pt-6 pb-8">
            {/* Navigation Links */}
            <div className="space-y-2 mb-6">
              {routes.map((route, index) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl text-base font-semibold",
                    "transition-all duration-300 ease-out overflow-hidden",
                    route.active
                      ? "bg-linear-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-blue-950/40 text-blue-700 dark:text-blue-400 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/5"
                      : "text-neutral-700 hover:text-blue-700 dark:text-neutral-300 dark:hover:text-blue-400 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animation: mobileMenuOpen
                      ? "slideInMobile 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                      : "none",
                  }}
                >
                  {/* Icon with gradient background */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                      route.active
                        ? "bg-linear-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30"
                        : "bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:bg-linear-to-br group-hover:from-blue-500/20 group-hover:to-purple-600/20"
                    )}
                  >
                    <route.icon
                      className={cn(
                        "h-5 w-5 transition-all duration-300",
                        route.active
                          ? "text-white"
                          : "text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      )}
                    />
                  </div>

                  {/* Label */}
                  <span className="flex-1">{route.label}</span>

                  {/* Active Indicator */}
                  {route.active && (
                    <div className="w-2 h-2 rounded-full bg-linear-to-br from-blue-500 to-purple-600 animate-pulse" />
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </Link>
              ))}
            </div>

            {/* Decorative Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-linear-to-b from-white via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 px-4 text-xs text-neutral-500 dark:text-neutral-500">
                  Get Started
                </span>
              </div>
            </div>


            
              <div
                style={{
                  animation: mobileMenuOpen
                    ? "slideInMobile 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards 240ms"
                    : "none",
                }}
              >
                <Button
                  className="w-full relative overflow-hidden rounded-2xl py-6 text-base font-semibold bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <Link
                    href="/app"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4" />
                    Enter Nyxhora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .bg-size-200 {
          background-size: 200% 100%;
        }

        .bg-pos-0 {
          background-position: 0% 0%;
        }

        .bg-pos-100 {
          background-position: 100% 0%;
        }
      `}</style>
    </nav>
  );
};
