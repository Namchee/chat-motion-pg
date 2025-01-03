import * as React from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectIcon } from '../Select';

import Paperclip from '~icons/lucide/paperclip';
import Send from '~icons/lucide/send';
import Mic from '~icons/lucide/mic';
import MessageCircle from '~icons/lucide/message-circle';
import Globe from '~icons/lucide/globe';
import ChevronDown from '~icons/lucide/chevron-down';

import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import useFocusWithin from '@/lib/hooks';

const children = {
  'chat': <div className="flex items-center gap-2 text-xs">
    <MessageCircle className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
    <span className="text-gray-600">
      Chat
    </span>
  </div>,
  'web': <div className="flex items-center gap-2 text-xs">
    <Globe className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
    <span className="text-gray-600">
      Web Search
    </span>
  </div>,
}

export default function Animated() {
  const [message, setMessage] = React.useState<string>('');

  const containerRef = React.useRef<HTMLDivElement>(null);
  const focus = useFocusWithin(containerRef);

  const [mode, setMode] = React.useState<'chat' | 'web'>('chat');
  const [open, setOpen] = React.useState<boolean>(false);
  const expanded = message || focus || open;

  const [files, setFiles] = React.useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFiles((prev) => [...prev, ...Array.from(files ?? [])]);
  }

  return (
    <motion.div
      layout
      ref={containerRef}
      style={{
        gridTemplateColumns: expanded ? 'auto auto 1fr' : 'auto 1fr auto',
        gridTemplateRows: expanded ? 'auto 1fr auto' : 'auto auto 0px',
      }}
      transition={{
        duration: 0.2,
      }}
      layoutDependency={{ expanded }}
      className="group bg-white border border-gray-300 rounded-md p-1 w-full max-w-lg grid items-end focus-within:border-gray-400 transition-colors"
    >
      <AnimatePresence>
        {files.length > 0 && <motion.div className="flex gap-2 col-span-full mb-2 overflow-auto">
          {files.map(file => (<motion.div key={file.name} className="relative flex-shrink-0" initial={{ opacity: 0, scale: 0.9, translateY: '4px' }} animate={{ opacity: 1, scale: 1, translateY: '0px' }}>
            <img src={URL.createObjectURL(file)} title={file.name} alt={file.name} className="w-[64px] h-[64px]" />
          </motion.div>))}
        </motion.div>}
      </AnimatePresence>

      <input
        id="fileInput-animated"
        type="file"
        className="peer/input w-0 h-0 absolute"
        accept="image/png,image/jpeg,image/webp"
        name="attachment-animated"
        onChange={handleFileUpload}
        multiple
      />

      <motion.label
        htmlFor="fileInput-animated"
        layout="position"
        className="size-8! grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 peer-focus/input:bg-gray-200 rounded-md group/btn col-start-1 col-end-2 focus:outline-none focus:ring-1 focus:ring-ring"
        style={{
          gridRowStart: expanded ? 3 : 2,
          gridRowEnd: expanded ? 3 : 2,
        }}
        transition={{
          duration: 0.2,
        }}
        layoutDependency={{ expanded }}
      >
        <Paperclip
          className="size-4 text-gray-500 group-hover/btn:text-gray-700 group-focus/btn:text-gray-700 transition-colors"
        />
      </motion.label>

      <Select value={mode} onValueChange={(val) => setMode(val as typeof mode)} open={open} onOpenChange={o => setOpen(o)}>
        <AnimatePresence>
          <motion.div
            layout="position"
            exit={{ opacity: 0 }}
            style={{
              gridRowStart: expanded ? 3 : 2,
              gridRowEnd: expanded ? 3 : 2,
              width: open ? 'auto' : '32px',
            }}
            whileHover={{
              width: 'auto',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="col-start-2 col-end-3 w-8 h-8 overflow-hidden ml-1"
          >
            {<SelectTrigger
              className={cn("size-full border-none hover:bg-gray-200 focus:bg-gray-200 transition-colors focus:ring-none focus:outline-ring px-2 group/mode", open && 'bg-gray-200')}
            >
              <SelectValue className="flex items-center gap-2" aria-label={mode}>
                {children[mode]}
              </SelectValue>

              <SelectIcon asChild className={cn('hidden group-hover/mode:block', open && 'block')}>
                <ChevronDown className="ml-2 size-3 opacity-50" />
              </SelectIcon>
            </SelectTrigger>
            }
          </motion.div>
        </AnimatePresence>

        <SelectContent>
          <SelectItem value="chat" className="cursor-pointer">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
              <span className="text-gray-600">
                Chat
              </span>
            </div>
          </SelectItem>
          <SelectItem value="web" className="cursor-pointer">
            <div className="flex items-center gap-2">
              <Globe className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
              <span className="text-gray-600">
                Web Search
              </span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <motion.div
        layout="position"
        style={{
          gridRowStart: expanded ? 2 : 2,
          gridRowEnd: expanded ? 2 : 2,
          gridColumnStart: expanded ? 1 : 2,
          gridColumnEnd: expanded ? 4 : 3,
          marginBottom: expanded ? '8px' : '0px',
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
          spellCheck={false} />
      </motion.div>

      <motion.div
        layout="position"
        className="ml-auto col-start-3 col-end-4 flex gap-1"
        style={{
          gridRowStart: expanded ? 3 : 2,
          gridRowEnd: expanded ? 3 : 2,
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
        >
          <Mic className="size-4" />
        </Button>

        <Button
          size="icon"
          className="size-8"
        >
          <Send className="size-4 relative top-[1px] -left-[1px]" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
