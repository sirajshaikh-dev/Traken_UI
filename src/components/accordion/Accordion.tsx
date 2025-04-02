import React from "react";
import { VariantProps } from "class-variance-authority";
import { accordionVariants } from "./AccordionVariants";
import { cn } from "../../lib/utils";

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  variant = "light",
  selectionMode = "none",
  size = "md",
  radius = "md",
  isDisabled = false,
  hideIndicator = false,
  disableAnimation = false,
  isCompact = false,
  className,
}) => {
  return (
    <div
      className={cn(
        accordionVariants({
          variant,
          selectionMode,
          size,
          radius,
          isDisabled,
          hideIndicator,
          disableAnimation,
          isCompact,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};

export default Accordion;
