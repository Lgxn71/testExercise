import CaseSvg from "./svgs/case.svg?react";
import PhoneSvg from "./svgs/phone.svg?react";
import ChevronSvg from "./svgs/chevron.svg?react";
import SearchSvg from "./svgs/search.svg?react";
import LocationSvg from "./svgs/location.svg?react";
import BuildingsSvg from "./svgs/buildings.svg?react";
import UsersSvg from "./svgs/users.svg?react";

// ! Использую svgr для загрузки svg иконок в реакт приложение

export const icons = {
  PhoneSvg,
  ChevronSvg,
  CaseSvg,
  SearchSvg,
  LocationSvg,
  BuildingsSvg,
  UsersSvg,
};

export type IconName = keyof typeof icons;
// получаю все возможные Icons

export interface IIconProps {
  name: IconName;

  // TS выдает ошибку , но в даун случае необходим any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Icon = ({ name, ...props }: IIconProps) => {
  const SelectedIcon = icons[name];
  return <SelectedIcon {...props} />;
};
export default Icon;
