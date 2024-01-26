import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
//! CVA  позволяет более удобное переиспользование стилей для компонентов как button  больше в docs 
const buttonVariants = cva(
  "capitalize text-base font-semibold whitespace-nowrap max-[875px]:text-sm",
  {
    variants: {
      variant: {
        default:
          "border border-primary-500 bg-primary-500 text-Gray/White hover:bg-Gray/White hover:text-primary-500  hover:border-gray-100 ",
        secondary: " bg-primary-50",
        outline:
          "border border-gray-100 text-primary-500 hover:bg-primary-500 hover:text-Gray/White",
      },
      size: {
        default: "px-6 py-3 rounded-[3px] max-[970px]:px-4 max-[970px]:py2   ",
        lg: " px-8 py-4 rounded-sm max-[1508px]:px-6 max-[1508px]:py-3",
        icon: "p-4 rounded-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
