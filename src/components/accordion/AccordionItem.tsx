import React, { useState } from "react";
import { VariantProps } from "class-variance-authority";
import { accordionItemVariants } from "./AccordionItemVariant";
import { cn } from "../../lib/utils";

interface AccordionItemProps extends VariantProps<typeof accordionItemVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  expanded = false,
  padding = "md",
  color = "light",
  border = "default",
  isDisabled = false,
  disableAnimation = false,
  icon,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(expanded);

  const handleToggle = () => {
    if (!isDisabled) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={cn(
        accordionItemVariants({
          expanded: isOpen,
          padding,
          color,
          border,
          isDisabled,
          disableAnimation,
        }),
        className
      )}
    >
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center py-2 font-medium "
        aria-expanded={!!isOpen}
        disabled={isDisabled}
      >
        <h3 className="text-lg">{title}</h3>
        <span className="text-xl">{icon ? icon : isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-700 pt-2">{description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
