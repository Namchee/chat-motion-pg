import { AnimatePresence, motion } from "motion/react";
import React from "react";

type SuggestionsProps = {
  onSelect?: (suggestion: string) => void;
}

const container = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      staggerChildren: 0.05,
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 32,
  }
};

const suggestions = [
  "Brainstorm...",
  "Teach Me...",
  "Write Me...",
  "Summarize...",
  "Analyze...",
  "Surprise Me!"
];

export default function Suggestions({ onSelect }: SuggestionsProps) {
  const [show, setShow] = React.useState(true);

  return (
    <AnimatePresence>
      {
        show && <motion.div
          layout="position"
          transition={{ duration: 0.2 }}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute w-full overflow-auto flex gap-2 no-scrollbar -top-10"
        >{suggestions.map((s) => (
          <motion.button
            key={s}
            variants={item}
            onClick={() => {
              setShow(false);
              onSelect?.(s);
            }}
            className="w-24 h-8 flex-shrink-0 border rounded-full border-gray-300 text-xs text-gray-500 bg-transparent whitespace-nowrap hover:bg-gray-100 transition-colors hover:border-gray-400 focus:bg-gray-100 focus:border-gray-400"
          >
            {s}
          </motion.button>
        ))}</motion.div>
      }

    </AnimatePresence>
  );
}
