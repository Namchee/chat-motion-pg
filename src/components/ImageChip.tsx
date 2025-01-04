import { motion } from 'motion/react';

import X from '~icons/lucide/x';
import { Button } from './Button';


type ImageChipProps = {
  image: File;

  onDelete?: () => void;
}

export default function ImageChip({ image, onDelete }: ImageChipProps) {
  return <motion.div
    layout
    key={image.name}
    className="relative flex-shrink-0"
    initial={{ opacity: 0, scale: 0.9, translateY: "4px" }}
    animate={{ opacity: 1, scale: 1, translateY: "0px" }}
    exit={{ opacity: 0, scale: 0.9, translateY: "4px" }}
  >
    <Button className="z-20 absolute -top-2 -right-2 size-4" variant="destructive" size="icon" onClick={() => {
      if (onDelete) {
        onDelete();
      }
    }}>
      <X className="size-2" />
    </Button>

    <img
      src={URL.createObjectURL(image)}
      title={image.name}
      alt={image.name}
      className="w-[64px] h-[64px] object-contain bg-gray-200"
    />
  </motion.div>
}
