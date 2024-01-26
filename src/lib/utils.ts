import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// ! Utility функция для TailwindCSS которая merge'ит классы, и дает возможность присваивать классы conditionally
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
