import Paperclip from '~icons/lucide/paperclip';
import Send from '~icons/lucide/send';
import Globe from '~icons/lucide/globe';

import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import clsx from 'clsx';

export default function App() {
  return (
    <div className={clsx("border border-gray-300 rounded-md p-2 w-full max-w-lg grid items-end grid-cols-[auto_auto_1fr] grid-rows-[1fr_auto] gap-y-2 focus-within:border-gray-400 transition-colors group has-placeholder-shown:grid-cols-[auto_1fr_auto] has-placeholder-shown:grid-rows-1")}>
      <label htmlFor="fileInput" className="size-8 grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 focus:bg-gray-200 rounded-md group/btn">
        <input id="fileInput" type="file" className="hidden" />

        <Paperclip className="size-4 text-gray-500 group-hover/btn:text-gray-900 group-focus/btn:text-gray-900 transition-colors" />
      </label>

      <Button
        size="icon"
        variant="outline"
        className="size-8 place-items-center cursor-pointer border-none transition-colors bg-transparent hover:bg-gray-200 focus:bg-gray-200 rounded-md grid group-focus-within:grid! group-has-placeholder-shown:hidden group/btn">
        <Globe className="size-4 text-gray-500 group-hover/btn:text-gray-900 group-focus/btn:text-gray-900 transition-colors" />
      </Button>

      <Textarea
        className="peer resize-none h-full border-none focus-visible:outline-none py-[6px] px-2 text-sm focus:row-start-1 focus:row-end-1 focus:col-start-1 focus:col-end-4 text-gray-700 not-placeholder-shown:row-start-1 not-placeholder-shown:row-end-1 not-placeholder-shown:col-start-1 not-placeholder-shown:col-end-4"
        placeholder="Ask me anything..."
        rows={1}
        spellCheck={false} />

      <Button size="icon" className="w-8 h-8  ml-auto">
        <Send className="size-4 relative top-[1px] -left-[1px]" />
      </Button>
    </div>
  )
}
