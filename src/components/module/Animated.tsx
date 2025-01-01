import * as React from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../Select';

import Paperclip from '~icons/lucide/paperclip';
import Send from '~icons/lucide/send';
import Mic from '~icons/lucide/mic';
import MessageCircle from '~icons/lucide/message-circle';
import Globe from '~icons/lucide/globe';

import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

const children = {
  'chat': <div className="flex items-center gap-2">
    <MessageCircle className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
    <span className="text-gray-600">
      Chat
    </span>
  </div>,
  'web': <div className="flex items-center gap-2">
    <Globe className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
    <span className="text-gray-600">
      Web Search
    </span>
  </div>,
}

export default function Animated() {
  const [message, setMessage] = React.useState<string>('');
  const [focus, setFocus] = React.useState<number>(0);
  const [mode, setMode] = React.useState<'chat' | 'web'>('chat');
  const expanded = message || focus;

  return (
    <motion.div
      layout
      style={{
        gridTemplateColumns: expanded ? 'auto auto 1fr' : 'auto 1fr auto',
        gridTemplateRows: expanded ? '1fr auto' : 'auto 0px',
        gap: expanded ? '8px 0px' : '0px 0px',
      }}
      transition={{
        duration: 0.2,
      }}
      layoutDependency={{ expanded }}
      className="group bg-white border border-gray-300 rounded-md p-1 w-full max-w-lg grid items-end focus-within:border-gray-400 transition-colors"
    >
      <motion.label
        htmlFor="fileInput"
        layout="position"
        className="size-8! grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 focus:bg-gray-200 rounded-md group/btn col-start-1 col-end-2 focus:outline-none focus:ring-1 focus:ring-ring"
        style={{
          gridRowStart: expanded ? 2 : 1,
          gridRowEnd: expanded ? 2 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        tabIndex={0}
        layoutDependency={{ expanded }}

        onFocus={() => setFocus((prev) => prev + 1)}
        onBlur={() => setFocus((prev) => prev - 1)}
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
      </motion.label>

      <AnimatePresence>
        {expanded &&
          <motion.div
            layout="position"
            exit={{ opacity: 0 }}
            style={{
              gridRowStart: expanded ? 2 : 1,
              gridRowEnd: expanded ? 2 : 1,
            }}
            whileHover={{
              width: 'auto',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="col-start-2 col-end-3 w-8 h-8 overflow-hidden ml-1"
          >
            <Select value={mode} onValueChange={(val) => setMode(val as typeof mode)}>
              <SelectTrigger className="size-full border-none hover:bg-gray-200 focus:bg-gray-200 transition-colors focus:ring-none focus:outline-ring px-2 group/mode" onSelect={(e) => e.preventDefault()}
                onFocus={() => setFocus((prev) => prev + 1)}
                onBlur={() => setFocus((prev) => prev - 1)}>
                <SelectValue className="flex items-center gap-2" aria-label={mode}>
                  {children[mode]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chat">Chat</SelectItem>
                <SelectItem value="web">Web</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        }
      </AnimatePresence>

      <motion.div
        layout="position"
        style={{
          gridRowStart: expanded ? 1 : 1,
          gridRowEnd: expanded ? 1 : 1,
          gridColumnStart: expanded ? 1 : 2,
          gridColumnEnd: expanded ? 4 : 3,
        }}
        transition={{
          duration: 0.2
        }}
        layoutDependency={{ expanded }}
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

      <motion.div
        layout="position"
        className="ml-auto col-start-3 col-end-4 flex gap-1"
        style={{
          gridRowStart: expanded ? 2 : 1,
          gridRowEnd: expanded ? 2 : 1,
        }}
        transition={{
          duration: 0.2
        }}
        layoutDependency={{ expanded }}
      >
        <Button
          size="icon"
          variant="ghost"
          className="size-8! grid place-items-center cursor-pointer border-none bg-transparent transition-colors hover:bg-gray-200 focus:bg-gray-200 rounded-md group/btn text-gray-700"
          onFocus={() => setFocus((prev) => prev + 1)}
          onBlur={() => setFocus((prev) => prev - 1)}
        >
          <Mic className="size-4" />
        </Button>

        <Button
          size="icon"
          className="size-8"
          onFocus={() => setFocus((prev) => prev + 1)}
          onBlur={() => setFocus((prev) => prev - 1)}
        >
          <Send className="size-4 relative top-[1px] -left-[1px]" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
