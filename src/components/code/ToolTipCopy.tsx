import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ToolTipCopy({copyToClipboard}: {copyToClipboard: () => void}) {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          aria-label="button copy code"
          onClick={copyToClipboard}
          className="absolute bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 p-1 rounded-md"
        >
          <Copy className=" w-4 h-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>copy</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default ToolTipCopy