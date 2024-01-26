import { FC, InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
//! использую cn для merge классов которые передам,
const Input: FC<IInputProps> = ({ className, ...props }) => {
  return <input className={cn("", className)} {...props} />;
};
export default Input;
