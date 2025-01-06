import * as React from "react";

import { AnimatePresence, motion } from "motion/react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../Select";

import Paperclip from "~icons/lucide/paperclip";
import Send from "~icons/lucide/send";
import Mic from "~icons/lucide/mic";
import MessageCircle from "~icons/lucide/message-circle";
import Globe from "~icons/lucide/globe";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import useFocusWithin from "@/lib/hooks";

import ImageChip from "@/components/ImageChip";

const children = {
  chat: <MessageCircle className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 group-focus/mode:text-gray-700 transition-colors" />,
  web: <Globe className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 group-focus/mode:text-gray-700 transition-colors" />,
};

export default function Animated() {
  const [message, setMessage] = React.useState<string>("");

  const containerRef = React.useRef<HTMLDivElement>(null);
  const focus = useFocusWithin(containerRef);

  const [mode, setMode] = React.useState<"chat" | "web">("chat");
  const [files, setFiles] = React.useState<File[]>([]);

  const expanded = message || focus || files.length;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFiles((prev) => [...prev, ...Array.from(files ?? [])]);
  };

  const handleFileDelete = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <motion.div
      layout
      ref={containerRef}
      style={{
        gridTemplateColumns: expanded ? "auto auto 1fr" : "auto 1fr auto",
        gridTemplateRows: expanded ? "auto 1fr auto"  : "0px auto 0px",
      }}
      transition={{
        duration: 0.2
      }}
      layoutDependency={{ expanded }}
      className="group bg-white border border-gray-300 rounded-md p-1 w-full max-w-lg grid items-end focus-within:border-gray-400 transition-colors"
    >
      <motion.div
        layout
        className="flex gap-1 col-span-full overflow-auto no-scrollbar h-auto ml-2"
        style={{
          marginBottom: files.length > 0 ? "8px" : "0px",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {files.map((file, idx) => <AnimatePresence key={file.name}><ImageChip image={file} onDelete={() => handleFileDelete(idx)} key={file.name} /></AnimatePresence>)}
      </motion.div>

      <motion.div
        layout="position"
        style={{
          gridRowStart: expanded ? 2 : 2,
          gridRowEnd: expanded ? 2 : 2,
          gridColumnStart: expanded ? 1 : 2,
          gridColumnEnd: expanded ? 4 : 3,
          marginBottom: expanded ? "8px" : "0px",
        }}
        transition={{
          duration: 0.2,
        }}
        layoutDependency={{ expanded }}
        contentEditable
        spellCheck={false}
        tabIndex={0}
        data-placeholder="Ask me anything..."
        className="focus:outline-none py-[6px] px-2 text-sm text-gray-700"
        onInput={(e) => setMessage(e.currentTarget.textContent ?? "")}
      />

      <motion.div layout="position"
        style={{
          gridRowStart: expanded ? 3 : 2,
          gridRowEnd: expanded ? 4 : 3,
        }}
        transition={{
          duration: 0.2,
        }}
        layoutDependency={{ expanded }}
        className="flex gap-1 items-center"
      >
        <input
          id="fileInput-animated"
          type="file"
          className="peer/input w-0 h-0 absolute"
          accept="image/png,image/jpeg,image/webp"
          name="attachment-animated"
          onChange={handleFileUpload}
          multiple
        />

        <label
          htmlFor="fileInput-animated"
          className="size-8! flex-shrink-0 grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 peer-focus/input:bg-gray-200 rounded-md group/btn col-start-1 col-end-2 focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <Paperclip className="size-4 text-gray-500 group-hover/btn:text-gray-700 group-focus/btn:text-gray-700 transition-colors" />
        </label>
      </motion.div>

      <AnimatePresence>
        {expanded && <motion.div
          layout="position"
          className="ml-1 w-auto col-start-2 col-end-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}>
            <Select
              value={mode}
              onValueChange={(val) => {
                setMode(val as typeof mode)
              }}
            >
              <SelectTrigger
                className={cn(
                  "w-[48px] h-8 border-none hover:bg-gray-200 focus:bg-gray-200 transition-colors focus:ring-none focus:outline-ring px-2 data-[state=open]:bg-gray-200 group/mode",
                )}
              >
                <SelectValue aria-label={mode}>
                  {children[mode]}
                </SelectValue>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="chat" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
                    <span className="text-gray-600">Chat</span>
                  </div>
                </SelectItem>
                <SelectItem value="web" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Globe className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 transition-colors" />
                    <span className="text-gray-600">Web Search</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>}
      </AnimatePresence>

      <motion.div
        layout="position"
        className="ml-auto col-start-3 col-end-4 flex gap-1"
        style={{
          gridRowStart: expanded ? 3 : 2,
          gridRowEnd: expanded ? 3 : 2,
        }}
        transition={{
          duration: 0.2,
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

        <Button size="icon" className="size-8">
          <Send className="size-4 relative top-[1px] -left-[1px]" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
