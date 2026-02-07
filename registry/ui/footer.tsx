"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { IconBrandDiscord, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t bg-background px-6 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Nyxhora UI
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Composable UI for modern builders.
                            </p>
                            <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
                                <Link
                                    href="https://twitter.com/@nyxhora"
                                    className="text-muted-foreground hover:text-blue-600"
                                >
                                    <IconBrandTwitter className="w-8 h-8" />
                                </Link>
                                <Link
                                    href="https://discord.gg/ZSZtBtrg2Y"
                                    className="text-muted-foreground hover:text-purple-600"
                                >
                                    {/* Discord Icon Replacement to generic SVG or Lucide if available, keeping SVG for now */}
                                    <IconBrandDiscord className="w-8 h-8" />
                                </Link>
                                <Link
                                    href="https://instagram.com/nyxhora_"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-pink-600"
                                >
                                    {/* Instagram */}
                                    <IconBrandInstagram className="w-8 h-8" />
                                </Link>
                                <a
                                    href="https://www.linkedin.com/company/107792893"
                                    className="text-muted-foreground hover:text-blue-600"
                                >
                                    <IconBrandLinkedin className="w-8 h-8" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/components"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Components
                                </Link>
                            </li>
                            {["Features"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`https://www.nyxhora.com/${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/tools"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Free Tools
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/faces"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Avatar Creator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/market"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/blog"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {["About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`https://www.nyxhora.com/${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://github.com/nyxhora/nyxhora-ui"
                                    target="_blank"
                                    className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                                >
                                    GitHub
                                    <ExternalLink size={14} className="ml-1" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/docs"
                                    className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://discord.gg/ZSZtBtrg2Y"
                                    target="_blank"
                                    className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                                >
                                    Community
                                    <ExternalLink size={14} className="ml-1" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section with Copyright */}
                <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © {year} Nyxhora. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                href="/privacy"
                                className="text-xs text-muted-foreground hover:text-foreground"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-xs text-muted-foreground hover:text-foreground"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-xs text-muted-foreground hover:text-foreground"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
