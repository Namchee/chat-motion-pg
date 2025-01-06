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
    className="group/image flex-shrink-0 rounded-md w-[70px] h-[77px] top-[7px] relative"
    initial={{ opacity: 0, scale: 0.9, translateY: "4px" }}
    animate={{ opacity: 1, scale: 1, translateY: "0px" }}
    exit={{ opacity: 0, scale: 0.9, translateY: "4px" }}
  >
    <Button className="absolute -top-[7px] right-0 z-20 size-[14px] outline outline-[3px] outline-white rounded-full opacity-0 group-hover/image:opacity-100 group-focus/image:opacity-100 focus:opacity-100 transition-opacity" size="icon" onClick={() => {
      if (onDelete) {
        onDelete();
      }
    }}>
      <X className='size-3!' />
    </Button>

    <img
      src={URL.createObjectURL(image)}
      title={image.name}
      alt={image.name}
      className="w-[64px] h-[64px] object-cover bg-gray-100 rounded-md"
    />
  </motion.div>;
}
