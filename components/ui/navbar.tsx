"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/registry/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X, ArrowRight,
  Info, Store,
  BookOpen
} from "lucide-react";
import { useState } from "react";

import Logo from "../../registry/ui/logo";
import { DocsSearchCommand } from "./docs-search-command";
import { RainbowButton } from "@/registry/ui/rainbow-button";
import { IconBrandGithub } from "@tabler/icons-react";
import { useIsMobile } from "@/registry/hooks/use-mobile";
// import { SimpleModeToggle } from "@/components/simple-mode-toggle";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const routes = [
    {
      label: "Docs",
      icon: BookOpen,
      href: "/docs",
      active: pathname === "/docs" || pathname?.startsWith("/docs/"),
    },
    {
      label: "Components",
      icon: Store,
      href: "/components",
      active: pathname === "/components",
    },
    {
      label: "Blocks",
      icon: Store,
      href: "/blocks",
      active: pathname === "/blocks",
    },
    {
      label: "About",
      icon: Info,
      href: "/about",
      active: pathname === "/about",
    }
  ];

  return (
    <nav className="fixed top-0 mb-10 w-full z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="transition-transform duration-200 group-hover:scale-105">
                <Logo />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
                Nyxhora UI (Beta)
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
          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <DocsSearchCommand />

            <Link
              href="https://github.com/nyxhora/nyxhoraui"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <IconBrandGithub className="w-5 h-5" />
            </Link>

            <Link href="https://www.nyxhora.com" target="_blank">
              <RainbowButton size="sm" className="h-9 px-4 font-medium transition-all active:scale-95">
                Try Nyxhora
              </RainbowButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          {isMobile && (
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
          )}
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      {isMobile && (
        <div
          className={cn(
            "md:hidden fixed inset-0 top-16 z-50",
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div
            className={cn(
              "absolute inset-0 bg-neutral-950/20 backdrop-blur-sm transition-opacity duration-300",
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={cn(
              "absolute top-0 inset-x-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-xl transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            )}
          >
            <div className="flex flex-col p-4 space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    route.active
                      ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-neutral-200"
                  )}
                >
                  <route.icon className="w-4 h-4" />
                  {route.label}
                </Link>
              ))}
            </div>

            <div className="p-4 border-t border-neutral-100 dark:border-neutral-900 space-y-3 bg-neutral-50/50 dark:bg-neutral-900/20">
              <DocsSearchCommand
                className="w-full"
                trigger={
                  <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span>Search documentation...</span>
                  </button>
                }
              />

              <Link
                href="/app"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity"
              >
                <span>Enter Nyxhora</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
