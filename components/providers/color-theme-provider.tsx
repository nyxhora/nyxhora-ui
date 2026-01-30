"use client";

import React, { createContext, useContext, useState } from "react";

interface ColorThemeContextType {
    colorTheme: string;
    setColorTheme: (theme: string) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
    const [colorTheme, setColorTheme] = useState("nyxhora");

    return (
        <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            {children}
        </ColorThemeContext.Provider>
    );
}

export function useColorTheme() {
    const context = useContext(ColorThemeContext);
    if (context === undefined) {
        // Return a default mock if provider is missing to avoid crashing valid builds if context isn't wrapped at root yet
        return { colorTheme: "nyxhora", setColorTheme: () => { } };
    }
    return context;
}
