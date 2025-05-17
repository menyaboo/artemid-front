import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PopoverProps {
  trigger: (isOpen: boolean) => ReactNode;
  placement?: keyof typeof positionClasses;
  children?: (handleClose: () => void) => ReactNode;
}

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
} as const;

const Popover: FC<PopoverProps> = ({ trigger, children, placement = 'bottom' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClose = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={ () => setIsOpen((prev) => !prev) } className="cursor-pointer">
        { trigger(isOpen) }
      </div>

      <AnimatePresence>
        { isOpen && (
          <motion.div
            initial={ { opacity: 0, scale: 0.95 } }
            animate={ { opacity: 1, scale: 1 } }
            exit={ { opacity: 0, scale: 0.95 } }
            transition={ { type: 'spring', stiffness: 300, damping: 25 } }
            className={ `absolute z-50 w-full ${ positionClasses[placement] } bg-background-main border border-background-tertiary rounded shadow-md p-2` }
          >
            { children?.(handleClose) }
          </motion.div>
        ) }
      </AnimatePresence>
    </div>
  );
};

export {
  Popover
};