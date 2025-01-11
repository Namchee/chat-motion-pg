import { motion } from 'motion/react';

import X from '~icons/lucide/x';
import File from '~icons/lucide/file';

import { Button } from './Button';
import { cn } from '@/lib/utils';


type FileChipProps = {
  file: File;

  onDelete?: () => void;
}

export default function FileChip({ file, onDelete }: FileChipProps) {
  const isImage = file.type.startsWith('image/');

  return <motion.div
    layout
    className={cn("group/file flex-shrink-0 rounded-md top-[7px] h-[50px] relative", isImage && 'w-[47px]')}
    initial={{ opacity: 0, scale: 0.9, translateY: "4px" }}
    animate={{ opacity: 1, scale: 1, translateY: "0px" }}
    exit={{ opacity: 0, scale: 0.9, translateY: "4px" }}
  >
    <Button className="absolute -top-[7px] right-0 z-20 size-[14px] outline outline-[3px] outline-white rounded-full opacity-0 group-hover/file:opacity-100 group-focus/file:opacity-100 focus:opacity-100 transition-opacity" size="icon" onClick={() => {
      if (onDelete) {
        onDelete();
      }
    }}>
      <X className='size-3!' />
    </Button>

    {isImage ? <img
      src={URL.createObjectURL(file)}
      title={file.name}
      alt={file.name}
      className="w-[40px] h-[40px] object-cover bg-gray-100 rounded-md"
    /> : <div className="flex rounded-md max-w-[256px] rounded-md overflow-hidden h-[40px]">
        <div className="bg-gray-700 grid place-items-center w-10 flex-shrink-0">
          <File className="size-4 text-white" />
        </div>

        <div className="grid place-items-center bg-white p-2">
          <p className="truncate text-xs max-w-[24ch] font-medium">
            {file.name}
          </p>
        </div>
      </div>}


  </motion.div>;
}