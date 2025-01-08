import { motion } from "motion/react";

type SuggestionsProps = {
  onSelect?: (suggestion: string) => void;
}

const container = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
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
  return (

        suggestions.map((s) => (
          <motion.button
            key={s}
            variants={item}
            onClick={() => onSelect?.(s)}
            className="w-22 h-8 flex-shrink-0 border rounded-full border-gray-300 text-xs text-gray-500 bg-transparent whitespace-nowrap hover:bg-gray-100 transition-colors hover:border-gray-400 focus:bg-gray-100 focus:border-gray-400"
          >
            {s}
          </motion.button>
        ))
  );
}
