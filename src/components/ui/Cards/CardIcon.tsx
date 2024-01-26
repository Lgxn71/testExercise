import { FC, useState } from "react";

import Icon, { IconName } from "../Icon/Icon";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../Button/button";

export interface ICardIconProps {
  iconName: IconName;
  numbers: number | string;
  title: string;
}

//! Компонент для Карточки с иконками сделал стейт чтобы менять стили svg и добавлять background shвdow
const CardIcon: FC<ICardIconProps> = ({ iconName, title, numbers }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const onMouseIn = () => setIsHovered(() => true);
  const onMouseOut = () => setIsHovered(() => false);

  return (
    <div
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
      className="flex cursor-pointer items-center gap-5 rounded-lg bg-Gray/White p-[20px] hover:shadow-md max-[1500px]:p-[10px]"
    >
      <div
        className={cn(
          (buttonVariants({ variant: "secondary" }),
          "rounded bg-primary-50 fill-primary-50 p-5 "),
          isHovered && "bg-primary-500",
        )}
      >
        <Icon name={iconName} />
      </div>
      <div className="w-[180px] max-[1820px]:w-[145px] max-[1720px]:w-[150px] max-[1620px]:w-[140px] max-[1450px]:w-[120px]">
        <h3 className=" text-[24px] leading-[32px] text-gray-900 max-[1620px]:text-[22px]">
          {numbers}
        </h3>
        <p className="text-[16px] font-normal ">{title}</p>
      </div>
    </div>
  );
};
export default CardIcon;
