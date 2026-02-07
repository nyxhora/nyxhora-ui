"use client";

import { useState } from "react";
import { Slider } from "@/registry/ui/slider";
import { Label } from "@/registry/ui/label";
interface sliderInteractivityProps {
  type?: string;
}
export function SliderDemo(type?: sliderInteractivityProps) {
  const [value, setValue] = useState([50]);
  const [step, setStep] = useState([20]);

  switch (type?.type) {
    case "custom-step":
      return (
        <div className="space-y-4 w-[60%]">
          <div className="flex justify-between">
            <Label>Select Step</Label>
            <span className="text-sm">{step[0]}</span>
          </div>

          <Slider defaultValue={[20]} max={100} step={10} onValueChange={setStep} className="w-[60%]" />
        </div>
      );
    case "volume-control":
      return (
        <div className="w-[60%] space-y-4">
          <div className="flex justify-between">
            <Label>{step}</Label>
            <span className="text-sm">{value[0]}%</span>
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
      );
  }
}
