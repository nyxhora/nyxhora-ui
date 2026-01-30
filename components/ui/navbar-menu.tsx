"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const NavbarMenu = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="w-full flex justify-center py-8 gap-4">
      <nav onMouseLeave={() => setActive(null)} className="relative rounded-full border border-border bg-background shadow-md flex justify-center space-x-4 px-8 py-4">
        {["Products", "Resources", "Pricing"].map((item) => (
          <div key={item} onMouseEnter={() => setActive(item)} className="relative">
            <motion.p transition={{ duration: 0.3 }} className="cursor-pointer text-foreground hover:opacity-80">{item}</motion.p>
            {active === item && (
              <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="absolute top-[calc(100%+1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div layoutId="active-demo" className="bg-popover rounded-2xl border border-border w-full shadow-xl p-4">
                  <div className="flex flex-col space-y-2 text-sm w-[100px]">
                    <div className="flex flex-col space-y-2">
                      <Link href="#" className="text-muted-foreground hover:text-foreground">Option 1</Link>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">Option 2</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link href="#" className="text-muted-foreground hover:text-foreground">Option 1</Link>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">Option 2</Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
export default NavbarMenu