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

import FileChip from "@/components/FileChip";
import Suggestions from "./Suggestions";

const children = {
  chat: <MessageCircle className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 group-focus/mode:text-gray-700 transition-colors" />,
  web: <Globe className="size-4 text-gray-500 flex-shrink-0 group-hover/mode:text-gray-700 group-focus/mode:text-gray-700 transition-colors" />,
};

export default function Animated() {
  const [message, setMessage] = React.useState<string>("");

  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLDivElement>(null);

  const [mode, setMode] = React.useState<"chat" | "web">("chat");
  const [files, setFiles] = React.useState<File[]>([]);

  const focus = useFocusWithin(containerRef);

  const expanded = message || focus || files.length;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFiles((prev) => [...prev, ...Array.from(files ?? [])]);
  };

  const handleFileDelete = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <motion.div layout="size" transition={{ duration: 0.2 }} className="relative w-full max-w-lg space-y-3">
      <motion.div
        layout
        ref={containerRef}
        style={{
          gridTemplateColumns: expanded ? "auto auto 1fr" : "auto 1fr auto",
          gridTemplateRows: expanded ? "1fr auto auto" : "auto 0px 0px",
        }}
        transition={{
          duration: 0.2
        }}
        layoutDependency={{ expanded }}
        className="group bg-white border border-gray-300 rounded-md w-full grid items-end focus-within:border-gray-400 transition-colors overflow-hidden"
      >
        <motion.div
          layout="position"
          ref={inputRef}
          style={{
            gridRowStart: expanded ? 1 : 1,
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
          className="focus:outline-none py-[10px] px-3 text-sm text-gray-700"
          onInput={(e) => setMessage(e.currentTarget.textContent ?? "")}
        />

        <motion.div layout="position"
          style={{
            gridRowStart: expanded ? 2 : 1,
            gridRowEnd: expanded ? 3 : 2,
          }}
          transition={{
            duration: 0.2,
          }}
          layoutDependency={{ expanded }}
          className="flex gap-1 items-center ml-1 mb-1"
        >
          <input
            id="fileInput-animated"
            type="file"
            className="peer/input w-0 h-0 absolute"
            accept="image/png,image/jpeg,image/webp,image/gif,application/pdf"
            name="attachment-animated"
            onChange={handleFileUpload}
            multiple
          />

          <label
            htmlFor="fileInput-animated"
            className="size-8! flex-shrink-0 grid place-items-center cursor-pointer border-none transition-colors hover:bg-gray-200 peer-focus/input:bg-gray-200 rounded-md group/btn col-start-1 col-end-2 peer-focus/input:ring-ring peer-focus/input:ring-1 text-gray-500 hover:text-gray-700 peer-focus/input:text-gray-700 transition-colors"
          >
            <Paperclip className="size-4" />
          </label>
        </motion.div>

        <AnimatePresence>
          {expanded && <motion.div
            layout="position"
            className="ml-1 w-auto col-start-2 col-end-3 mb-1"
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
                  "w-[48px] h-8 border-none hover:bg-gray-200 focus:bg-gray-200 transition-colors px-2 data-[state=open]:bg-gray-200 data-[state=open]:ring-ring data-[state=open]:ring-1 group/mode",
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
          className="ml-auto col-start-3 col-end-4 flex gap-1 mr-1 mb-1"
          style={{
            gridRowStart: expanded ? 2 : 1,
            gridRowEnd: expanded ? 2 : 1,
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

        <motion.div
          layout
          className="flex gap-1 col-span-full overflow-x-auto overflow-y-hidden no-scrollbar h-auto bg-gray-100 row-start-3 row-end-4 px-2"
          style={{
            paddingTop: files.length > 0 ? '4px' : 0,
            paddingBottom: files.length > 0 ? '4px' : 0,
            marginTop: files.length > 0 ? "4px" : "0px",
            borderTop: files.length > 0 ? "1px solid #d1d5db" : "none",
          }}
          transition={{
            duration: 0.2,
          }}
        >
          {files.map((file, idx) => <AnimatePresence key={file.name} mode="sync"><FileChip file={file} onDelete={() => handleFileDelete(idx)} key={file.name} /></AnimatePresence>)}
        </motion.div>
      </motion.div>

      <Suggestions
        onSelect={(s) => {
          if (inputRef.current) {
            inputRef.current.textContent = s;
            setMessage(s);
          }
        }}
      />
    </motion.div>
  );
}
