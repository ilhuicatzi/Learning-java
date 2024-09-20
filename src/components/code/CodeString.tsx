import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CodeString({ code }: { code: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <pre className="dark:bg-neutral-900 bg-neutral-100 my-2 rounded-md shadow dark:shadow-muted flex justify-between w-full max-w-60 min-[350px]:max-w-72 min-[450px]:max-w-96 sm:max-w-lg  md:max-w-xl  lg:max-w-2xl overflow-auto">
      <code className="font-inconsolata font-medium select-all pl-4 py-3 text-neutral-800 dark:text-neutral-100">
        {code}
      </code>
      <div className="flex justify-end items-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Copy code"
                onClick={copyToClipboard}
                className="bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 p-1 rounded-md"
              >
                <Copy className=" w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </pre>
  );
}

export default CodeString;
