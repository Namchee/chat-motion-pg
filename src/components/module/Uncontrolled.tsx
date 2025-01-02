import Paperclip from '~icons/lucide/paperclip';
import Send from '~icons/lucide/send';
import Globe from '~icons/lucide/globe';
import Mic from '~icons/lucide/mic';

import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

export default function Uncontrolled() {
  return (
    <div className="group h-auto bg-white border border-gray-300 rounded-md p-1 w-full max-w-lg grid items-end grid-cols-[auto_auto_1fr] grid-rows-[1fr_auto] group-focus-within:grid-cols-[auto_auto_1fr] gap-y-2 focus-within:border-gray-400 transition-colors has-placeholder-shown:grid-cols-[auto_1fr_auto] has-placeholder-shown:grid-rows-1">
      <Textarea
        className="resize-none h-full border-none focus-visible:outline-none py-[6px] px-2 text-sm focus:row-start-1 focus:row-end-1 focus:col-start-1 focus:col-end-4 group-focus-within:row-start-1 group-focus-within:row-end-1 group-focus-within:col-start-1 group-focus-within:col-end-4 text-gray-700 not-placeholder-shown:row-start-1 not-placeholder-shown:row-end-1 not-placeholder-shown:col-start-1 not-placeholder-shown:col-end-4 col-start-2 col-end-3"
        placeholder="Ask me anything..."
        rows={1}
        spellCheck={false} />

      <input
        id="fileInput"
        type="file"
        name="attachment"
        className="peer/input w-0 h-0 absolute"
        accept="image/png,image/jpeg,image/webp"
        multiple
      />

      <label htmlFor="fileInput" className="size-8 transition-colors text-gray-500 focus:text-gray-700 hover:text-gray-700 grid place-items-center cursor-pointer border-none hover:bg-gray-200 peer-focus/input:bg-gray-200 peer-focus/input:text-gray-700 rounded-md group/btn col-start-1 col-end-2 row-start-2 row-end-2 group-focus-within:row-start-2 group-focus-within:row-end-2 group-has-placeholder-shown:row-start-1 group-has-placeholder-shown:row-end-1 peer-focus/input:ring-ring peer-focus/input:ring-1">
        <Paperclip className="size-4 text-current" />
      </label>

      <Button
        size="icon"
        variant="outline"
        className="size-8 place-items-center cursor-pointer border-none transition-colors bg-transparent hover:bg-gray-200 focus:bg-gray-200 rounded-md grid group-focus-within:grid! group-has-placeholder-shown:hidden group/btn">
        <Globe className="size-4 text-gray-500 group-hover/btn:text-gray-700 group-focus/btn:text-gray-700 transition-colors" />
      </Button>

      <div className="flex gap-1 ml-auto">
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
  )
}
