import { AnimatePresence, motion } from "motion/react";
import React from "react";

type SuggestionsProps = {
  onSelect?: (suggestion: string) => void;
}

const container = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
    y: 0,
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  show: {
    opacity: 1,
    y: 0,
  }
};

const suggestions = [
  "Brainstorm...",
  "Teach Me...",
  "Write Me...",
  "Summarize...",
  "Analyze...",
  "Suprise Me!"
];

export default function Suggestions({ onSelect }: SuggestionsProps) {
  const [hasSelected, setHasSelected] = React.useState(false);

  return (
    <AnimatePresence>
      {!hasSelected && <motion.div
        layout
        transition={{ duration: 0.2 }}
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full overflow-auto flex gap-2 no-scrollbar"
      >
        {suggestions.map((s) => (
          <motion.button
            key={s}
            variants={item}
            onClick={() => {
              setHasSelected(true);

              onSelect?.(s);
            }}
            className="w-24 h-8 flex-shrink-0 border rounded-full border-gray-300 text-xs text-gray-500 bg-transparent whitespace-nowrap hover:bg-gray-100 transition-colors hover:border-gray-400 focus:bg-gray-100 focus:border-gray-400"
          >
            {s}
          </motion.button>
        ))}
      </motion.div>}
    </AnimatePresence>

  );
}
