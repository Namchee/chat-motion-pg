import { motion } from "motion/react";

type SuggestionsProps = {
  onSelect?: (suggestion: string) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
  }
};

const suggestions = [
  "Tell Me...",
  "Teach Me...",
  "Write Me...",
  "Summarize...",
  "Foo Bar..",
  "Bar Baz.."
];

export default function Suggestions({ suggestion }: SuggestionsProps) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.2 }}
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full overflow-auto flex gap-2 no-scrollbar"
    >
      {suggestions.map((s) => (
        <motion.button
          key={s}
          variants={item}
          className="px-3 py-[6px] border rounded-full border-gray-300 text-xs text-gray-500 bg-transparent whitespace-nowrap"
        >
          {s}
        </motion.button>
      ))}
    </motion.div>
  );
}
