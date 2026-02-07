"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { usePackageManager } from "@/hooks/use-package-manager";
import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs";
import { MinimalCodeBlock } from "@/components/ui/docs-documentation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip";

export interface InstallationCommandProps {
  dependencies: string[];
  fornyxhora?: boolean;
}

export function InstallationCommand({
  dependencies,
  fornyxhora = false,
}: InstallationCommandProps) {
  const { packageManager, setPackageManager } = usePackageManager();
  const [copied, setCopied] = React.useState(false);

  const getCommand = (pm: string) => {
    const deps = dependencies.join(" ");
    switch (pm) {
      case "npm":
        return fornyxhora
          ? `npx shadcn@latest add https://ui.nyxhora.com/r/${dependencies[0]}.json`
          : `npm install ${deps}`;
      case "pnpm":
        return fornyxhora
          ? `pnpm dlx shadcn@latest add https://ui.nyxhora.com/r/${dependencies[0]}.json`
          : `pnpm add ${deps}`;
      case "yarn":
        return fornyxhora
          ? `yarn dlx shadcn@latest add https://ui.nyxhora.com/r/${dependencies[0]}.json`
          : `yarn add ${deps}`;
      case "bun":
        return fornyxhora
          ? `bunx --bun shadcn@latest add https://ui.nyxhora.com/r/${dependencies[0]}.json`
          : `bun add ${deps}`;
      default:
        return fornyxhora
          ? `npx shadcn@latest add https://ui.nyxhora.com/r/${dependencies[0]}.json`
          : `npm install ${deps}`;
    }
  };

  const copyCommand = () => {
    const command = getCommand(packageManager);
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-md pb-1 border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <Tabs
          value={packageManager}
          onValueChange={(value) => setPackageManager(value as "npm" | "pnpm" | "yarn" | "bun")}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <TabsList className="bg-transparent p-0">
              <TabsTrigger
                value="npm"
                className="h-6  rounded-md bg-transparent px-2 text-xs text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
              >
                npm
              </TabsTrigger>
              <TabsTrigger
                value="pnpm"
                className="h-6 rounded-md bg-transparent px-2 text-xs text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
              >
                pnpm
              </TabsTrigger>
              <TabsTrigger
                value="yarn"
                className="h-6 rounded-md bg-transparent px-2 text-xs text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
              >
                yarn
              </TabsTrigger>
              <TabsTrigger
                value="bun"
                className="h-6 rounded-md bg-transparent px-2 text-xs text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
              >
                bun
              </TabsTrigger>
            </TabsList>
            <div>
              {" "}
              <Tooltip>
                <TooltipTrigger>
                  <button
                    onClick={copyCommand}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white cursor-pointer hover:bg-zinc-700 rounded-md transition-all border border-zinc-700/50"
                    title={copied ? "Copied!" : "Copy to clipboard"}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>Copy to clipboard</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Tabs>
      </div>
      <div className="relative">
        <MinimalCodeBlock
          code={getCommand(packageManager)}
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}
