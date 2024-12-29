import * as React from 'react';

import { AnimatePresence, motion } from 'motion/react';

import Paperclip from '~icons/lucide/paperclip';
import Send from '~icons/lucide/send';
import Globe from '~icons/lucide/globe';

import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

export default function Animated() {
  const [message, setMessage] = React.useState<string>('');
  const [focus, setFocus] = React.useState<number>(0);
  const expanded = message || focus;

  return (
    <motion.div
      layout
      style={{
        gridTemplateColumns: expanded ? 'auto auto 1fr' : 'auto 1fr auto',
        gridTemplateRows: expanded ? '1fr auto' : 'auto',
        gap: expanded ? '8px 0px' : '0px 0px',
      }}
      className="group h-auto bg-white border border-gray-300 rounded-md p-1 w-full max-w-lg grid items-end focus-within:border-gray-400 transition-colors"
    >
      <label
        htmlFor="fileInput"
        className="size-8! grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 focus:bg-gray-200 rounded-md group/btn"
      >
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onFocus={() => setFocus((prev) => prev + 1)}
          onBlur={() => setFocus((prev) => prev - 1)}
        />

        <Paperclip
          className="size-4 text-gray-500 group-hover/btn:text-gray-700 group-focus/btn:text-gray-700 transition-colors"
        />
      </label>

      <Button
        size="icon"
        variant="outline"
        className="size-8 place-items-center cursor-pointer border-none transition-colors bg-transparent hover:bg-gray-200 focus:bg-gray-200 rounded-md grid group-focus-within:grid! group-has-placeholder-shown:hidden group/btn"
        onFocus={() => setFocus((prev) => prev + 1)}
        onBlur={() => setFocus((prev) => prev - 1)}
      >
        <Globe
          className="size-4 text-gray-500 group-hover/btn:text-gray-700 group-focus/btn:text-gray-700 transition-colors"
        />
      </Button>

      <AnimatePresence>
        <motion.div
          layout
          style={{
            gridRowStart: message || focus ? 1 : 1,
            gridRowEnd: message || focus ? 1 : 1,
            gridColumnStart: message || focus ? 1 : 2,
            gridColumnEnd: message || focus ? 4 : 3,
          }}
        >
          <Textarea
            className="peer resize-none h-full border-none focus-visible:outline-none py-[6px] px-2 text-sm text-gray-700"
            placeholder="Ask me anything..."
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocus((prev) => prev + 1)}
            onBlur={() => setFocus((prev) => prev - 1)}
            spellCheck={false} />
        </motion.div>
      </AnimatePresence>


      <Button
        size="icon"
        className="w-8 h-8 ml-auto"
        onFocus={() => setFocus((prev) => prev + 1)}
        onBlur={() => setFocus((prev) => prev - 1)}
      >
        <Send className="size-4 relative top-[1px] -left-[1px]" />
      </Button>
    </motion.div>
  )
}
