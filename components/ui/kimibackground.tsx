import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MousePointer2, Move, Palette, Maximize2, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Components ---

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden", className)}>
        {children}
    </div>
);

const Button = ({
    children,
    onClick,
    active = false,
    className
}: {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    className?: string;
}) => (
    <button
        onClick={onClick}
        className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2",
            active
                ? "bg-white text-black shadow-lg scale-105"
                : "bg-white/5 text-white hover:bg-white/10 hover:scale-105",
            className
        )}
    >
        {children}
    </button>
);

export default function InteractiveBackground() {
    // State for interactivity modes
    const [mode, setMode] = useState<'float' | 'mouse' | 'spotlight'>('float');
    const [colorTheme, setColorTheme] = useState<'cyber' | 'sunset' | 'forest'>('cyber');

    // Mouse tracking refs
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Transform mouse position to background movement range (-50 to 50)
    const moveX = useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]);
    const moveY = useTransform(smoothMouseY, [-0.5, 0.5], [-100, 100]);

    const spotlightBackground = useTransform(
        [smoothMouseX, smoothMouseY],
        ([x, y]) => `radial-gradient(600px circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, rgba(255,255,255,0.1), transparent 40%)`
    );

    // Spotlight effect logic
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Theme configurations
    const themes = {
        cyber: {
            bg: "bg-slate-950",
            blobs: [
                "bg-cyan-500/30",
                "bg-purple-500/30",
                "bg-blue-600/30",
                "bg-pink-500/20"
            ]
        },
        sunset: {
            bg: "bg-orange-950",
            blobs: [
                "bg-orange-500/30",
                "bg-red-500/30",
                "bg-yellow-500/30",
                "bg-purple-500/20"
            ]
        },
        forest: {
            bg: "bg-emerald-950",
            blobs: [
                "bg-emerald-500/30",
                "bg-teal-500/30",
                "bg-green-600/30",
                "bg-lime-500/20"
            ]
        }
    };

    const currentTheme = themes[colorTheme];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative min-h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-1000",
                currentTheme.bg
            )}
        >
            {/* --- Background Layer --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Animated Blobs */}
                <motion.div
                    style={{ x: mode === 'mouse' ? moveX : 0, y: mode === 'mouse' ? moveY : 0 }}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    {/* Blob 1 - Top Left */}
                    <motion.div
                        animate={mode === 'float' ? {
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        } : {}}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={cn(
                            "absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000",
                            currentTheme.blobs[0]
                        )}
                    />

                    {/* Blob 2 - Bottom Right */}
                    <motion.div
                        animate={mode === 'float' ? {
                            x: [0, -100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                        className={cn(
                            "absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] mix-blend-screen transition-colors duration-1000",
                            currentTheme.blobs[1]
                        )}
                    />

                    {/* Blob 3 - Center (Slow) */}
                    <motion.div
                        animate={mode === 'float' ? {
                            y: [0, -50, 0],
                            rotate: [0, 45, 0],
                        } : {}}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
                        className={cn(
                            "absolute top-[20%] left-[30%] w-[50vw] h-[50vw] rounded-full blur-[120px] mix-blend-screen opacity-50 transition-colors duration-1000",
                            currentTheme.blobs[2]
                        )}
                    />
                </motion.div>

                {/* Spotlight Effect (Only visible in spotlight mode) */}
                {mode === 'spotlight' && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: spotlightBackground
                        }}
                    />
                )}
            </div>

            {/* --- Foreground Content --- */}
            <div className="relative z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center gap-12">

                {/* Header Text */}
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                            Fluid
                        </span>
                        {" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/50 to-white">
                            Motion
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 max-w-md mx-auto"
                    >
                        Interactive background components with Framer Motion and Tailwind CSS.
                        Hover, click, and explore the physics.
                    </motion.p>
                </div>

                {/* Control Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full"
                >
                    <Card className="p-6 md:p-8">
                        <div className="flex flex-col gap-8">

                            {/* Interaction Modes */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-white/80 text-sm font-semibold uppercase tracking-wider">
                                    <MousePointer2 className="w-4 h-4" />
                                    Interaction Mode
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        active={mode === 'float'}
                                        onClick={() => setMode('float')}
                                    >
                                        <Move className="w-4 h-4" />
                                        Ambient Float
                                    </Button>
                                    <Button
                                        active={mode === 'mouse'}
                                        onClick={() => setMode('mouse')}
                                    >
                                        <MousePointer2 className="w-4 h-4" />
                                        Mouse Parallax
                                    </Button>
                                    <Button
                                        active={mode === 'spotlight'}
                                        onClick={() => setMode('spotlight')}
                                    >
                                        <Zap className="w-4 h-4" />
                                        Spotlight
                                    </Button>
                                </div>
                            </div>

                            {/* Color Themes */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-white/80 text-sm font-semibold uppercase tracking-wider">
                                    <Palette className="w-4 h-4" />
                                    Color Theme
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        active={colorTheme === 'cyber'}
                                        onClick={() => setColorTheme('cyber')}
                                        className="border-cyan-500/30"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-cyan-400" />
                                        Cyber
                                    </Button>
                                    <Button
                                        active={colorTheme === 'sunset'}
                                        onClick={() => setColorTheme('sunset')}
                                        className="border-orange-500/30"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-orange-400" />
                                        Sunset
                                    </Button>
                                    <Button
                                        active={colorTheme === 'forest'}
                                        onClick={() => setColorTheme('forest')}
                                        className="border-emerald-500/30"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                        Forest
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </Card>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                        { title: "Responsive", desc: "Adapts to all screen sizes seamlessly.", icon: Maximize2 },
                        { title: "Performant", desc: "Optimized animations using GPU acceleration.", icon: Zap },
                        { title: "Customizable", desc: "Easily swap colors, speeds, and effects.", icon: Palette },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group cursor-pointer"
                        >
                            <Card className="h-full p-6 bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}