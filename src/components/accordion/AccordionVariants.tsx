import { cva } from "class-variance-authority";

export const accordionVariants = cva(
  "space-y-2", 
  {
    variants: {
     
      variant: {
        light: "bg-white text-black border border-gray-300 shadow-sm", 
        shadow: "bg-white text-black shadow-lg border border-gray-200",
        bordered: "border border-gray-400 bg-white text-black",
        splitted: "divide-y divide-gray-300 bg-white text-black",
      },
     
      selectionMode: {
        none: "",
        single: "max-h-[500px] overflow-auto", 
        multiple: "overflow-auto space-y-1", 
      },
     
      size: {
        sm: "w-full max-w-xs text-sm px-3 py-2",
        md: "w-full max-w-md text-base px-4 py-3",
        lg: "w-full max-w-lg text-lg px-5 py-4",
      },
     
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
     
      isDisabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed", 
        false: "opacity-100 pointer-events-auto", 
      },
     
      hideIndicator: {
        true: "hidden", 
        false: "block", 
      },
     
      disableAnimation: {
        true: "transition-none", 
        false: "transition-all duration-300 ease-in-out", 
      },
      
      isCompact: {
        true: "py-1 px-2 text-sm space-y-1",
        false: "py-3 px-4 text-base space-y-2",
      },
    },
    defaultVariants: {
      variant: "light", 
      selectionMode: "none", 
      size: "md",
      radius: "md", 
      isDisabled: false,
      hideIndicator: false, 
      disableAnimation: false, 
      isCompact: false, 
    },
  }
);
