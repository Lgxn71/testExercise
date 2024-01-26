import { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IContainerProps {
  className?: string;
  children: ReactNode;
}
// ! для более удобного layout использовал отдельный компонент
const Container: FC<IContainerProps> = ({ className, children }) => (
  <div
    className={cn(
      `px-[300px] max-[1925px]:px-[275px] max-[1875px]:px-[250px] max-[1780px]:px-[200px] max-[1550px]:px-[175px] max-[1440px]:px-[150px] max-[1280px]:px-[100px] max-[1180px]:px-[50px] max-[1080px]:px-[25px] ${className}`,
    )}
  >
    {children}
  </div>
);

export default Container;
