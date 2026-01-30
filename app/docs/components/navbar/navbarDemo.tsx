"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Home, Sparkles, Info, Menu, X } from "lucide-react";
import Link from "next/link";

export function NavbarDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routes = [
    { label: "Home", icon: Home, href: "#", active: true },
    { label: "Features", icon: Sparkles, href: "#", active: false },
    { label: "About", icon: Info, href: "#", active: false },
  ];

  return (
    <div className="w-full max-w-4xl">
      <nav className="relative w-full backdrop-blur-lg rounded-xl border border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="flex items-center group">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">NyxUI</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {routes.map((route) => (
                  <Link key={route.label} href={route.href}
                    className={cn("relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      route.active ? "shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}>
                    <div className="flex items-center gap-2">{route.label}</div>
                    {route.active && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="default" size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg text-muted-foreground hover:text-foreground">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}