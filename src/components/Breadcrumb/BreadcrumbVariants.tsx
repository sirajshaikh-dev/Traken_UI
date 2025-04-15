import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva("flex flex-wrap items-center gap-2", {
  variants: {
    color: {
      default: "text-base",
      primary: "text-primary",
      secondary: "text-secondary",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export const breadcrumbItemVariants = cva(
  "transition-colors duration-200",
  {
    variants: {
      active: {
        true: "font-semibold text-gray-900",
        false: "hover:text-blue-500 hover:underline",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
  }
);