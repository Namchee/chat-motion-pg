import Paperclip from '~icons/lucide/paperclip';

import './globals.css';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

export default function App() {
  return (
    <div className="flex justify-between border border-gray-300 rounded-md p-2 w-full max-w-lg items-end">
      <label htmlFor="fileInput" className="size-8 grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 focus:bg-gray-200 rounded-md flex-shrink-0">
        <input id="fileInput" type="file" className="hidden" />

        <Paperclip className="size-5" />
      </label>

      <Textarea className="resize-none min-h-unset border-none focus-visible:outline-none leading-none" placeholder="Ask me anything..." rows={1} spellCheck={false} />

      <Button>
      <Paperclip className="size-5" />

      </Button>
    </div>
  )
}
