"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export function SliderDemo() {
    const [value, setValue] = useState([50]);
    return (
        <div className="w-[60%] space-y-4">
            <div className="flex justify-between"><Label>Volume</Label><span className="text-sm">{value[0]}%</span></div>
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
    )
}
