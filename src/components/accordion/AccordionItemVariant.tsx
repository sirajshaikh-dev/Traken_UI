import { cva } from "class-variance-authority";

export const accordionItemVariants = cva(
  "transition-all duration-300 ease-in-out", 
  {
    variants: {
      
      expanded: {
        true: "bg-gray-100 shadow-md",
        false: "bg-white shadow-sm",
      },
     
      border: {
        none: "border-none",
        default: "border-t border-gray-300",
        rounded: "rounded-md border border-gray-300",
      },
     
      padding: {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
     
      color: {
        light: "text-gray-900",
        dark: "text-white bg-gray-900",
        primary: "text-primary-700 bg-primary-100",
        secondary: "text-secondary-700 bg-secondary-100",
      },
     
      isDisabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed", 
        false: "opacity-100 pointer-events-auto",
      },
     
      disableAnimation: {
        true: "transition-none", 
        false: "transition-all duration-300 ease-in-out", 
      },
    },
    defaultVariants: {
      expanded: false, 
      border: "default", 
      padding: "md", 
      color: "light",
      isDisabled: false, 
      disableAnimation: false, 
    },
  }
);
