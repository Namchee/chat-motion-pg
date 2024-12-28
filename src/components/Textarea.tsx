import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set to scrollHeight
  };

  return (
    <textarea
      className={cn(
        "flex w-full rounded-md border border-input bg-transparent text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onInput={handleInput}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
