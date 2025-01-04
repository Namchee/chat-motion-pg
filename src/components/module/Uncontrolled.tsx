import Paperclip from "~icons/lucide/paperclip";
import Send from "~icons/lucide/send";
import Globe from "~icons/lucide/globe";
import Mic from "~icons/lucide/mic";

import { Button } from "@/components/Button";

export default function Uncontrolled() {
  return (
    <div className="group
      h-auto
      bg-white
      border border-gray-300 rounded-md
      p-1
      w-full max-w-lg
      grid items-end
      grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] gap-y-2
      focus-within:grid-cols-[auto_auto_1fr]
      focus-within:border-gray-400 transition-colors
      has-[div:empty]:grid-cols-[auto_1fr_auto] has-[div:empty]:grid-rows-1 has-[div>br:only-child]:grid-cols-[auto_1fr_auto] has-[div>br:only-child]:grid-rows-1"
    >
      <div
        className="h-full
          py-[6px] px-2 text-sm
          row-start-1 row-end-2
          col-start-2 col-end-3
          focus:outline-none
          focus:col-start-1 focus:col-end-4
          group-focus-within:col-start-1 group-focus-within:col-end-4
          text-gray-700
          not-empty:col-start-1 not-empty:col-end-4
          peer/message
          has-[br:only-child]:col-start-2 has-[br:only-child]:col-end-3"
        contentEditable
        spellCheck={false}
        tabIndex={0}
        data-placeholder="Ask me anything..."
      />

      <div
        className="flex items-center gap-1
          row-start-2 row-end-3
          col-start-1 col-end-2
          group-focus-within:row-start-2! group-focus-within:row-end-2!
          peer-empty/message:row-start-1 peer-empty/message:row-end-2
          peer-has-[br:only-child]/message:row-start-1 peer-has-[br:only-child]/message:row-end-2"
      >
        <input
          id="fileInput"
          type="file"
          name="attachment"
          className="peer/input w-0 h-0 absolute"
          accept="image/png,image/jpeg,image/webp"
          multiple
        />

        <label
          htmlFor="fileInput"
          className="size-8
            rounded-md
            transition-colors text-gray-500 hover:bg-gray-200 focus:text-gray-700 hover:text-gray-700
            grid place-items-center cursor-pointer
            group/btn
            peer-focus/input:bg-gray-200 peer-focus/input:text-gray-700 peer-focus/input:ring-ring peer-focus/input:ring-1"
        >
          <Paperclip className="size-4 text-current" />
        </label>

        <Button
          size="icon"
          variant="outline"
          className="size-8
            grid place-items-center
            cursor-pointer border-none
            transition-colors bg-transparent hover:bg-gray-200 focus:bg-gray-200
            rounded-md
            group-has-[div:empty]:hidden group-has-[div>br:only-child]:hidden
            group-focus-within:grid!
            group/btn"
        >
          <Globe className="size-4 text-gray-500 group-hover/btn:text-gray-700 group-focus/btn:text-gray-700 transition-colors" />
        </Button>
      </div>

      <div className="flex
        gap-1
        ml-auto
        row-start-2 row-end-3
        col-start-3 col-end-4
        group-focus-within:row-start-2! group-focus-within:row-end-3!
        peer-empty/message:row-start-1 peer-empty/message:row-end-2
        peer-has-[br:only-child]/message:row-start-1 peer-has-[br:only-child]/message:row-end-2"
      >
        <Button
          size="icon"
          variant="ghost"
          className="size-8! grid place-items-center cursor-pointer border-none bg-transparent transition-colors hover:bg-gray-200 focus:bg-gray-200 rounded-md group/btn text-gray-700"
        >
          <Mic className="size-4" />
        </Button>

        <Button size="icon" className="w-8 h-8">
          <Send className="size-4 relative top-[1px] -left-[1px]" />
        </Button>
      </div>
    </div>
  );
}
