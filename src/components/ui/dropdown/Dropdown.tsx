import { useEffect, useState, FC } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown/dropdown-menu";

import Icon from "@/components/ui/Icon/Icon";

interface IDropdownMenuRadioGroupProps {
  isPhoneNumberVisible?: boolean;
  defaultLanguage: string;
}

//  ! на основе ShadcnUI сделал dropdown компонент для меню языков
//  ? ваш потенциальный вопрос: "почему именно это библеотека"
// * ответ : Предоставляет дополнительный accessibility из под коробки,
// * к примеру в данном случае при нажатий на dropdown выпадает меню в котором можно проводить навигаю при помощи стрелочек на клавиатуре
// * (без использования крайне сложно имплементировать)
// * в отличии от MUI, Ant Design и других компонент библеотек можно переделывать как удобно и устанавливать модулярно ()
// *  если открыть Dropdown и клюкнуть в любую точку сайта он сам по себе закроется

// * есть стейт в котором храню выбранный язык и с каждой сменой стейте ререндерю компонент.
// * т.е. компонент ререндерится каждый раз при изменении стейта language DropdownMenuRadioGroup передает стейт который отслеживать и setState функция
const Dropdown: FC<IDropdownMenuRadioGroupProps> = ({
  defaultLanguage,
  isPhoneNumberVisible,
}) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [selected, setSelected] = useState({
    phone: "+1-202-555-0178",
    imgPath: "/images/america.png",
    title: "English",
  });

  useEffect(() => {
    if (language === "English")
      setSelected(() => ({
        phone: "+1-202-555-0178",
        imgPath: "/images/america.png",
        title: "English",
      }));
    else if (language === "Kazakh")
      setSelected(() => ({
        phone: "+7(7212)31-85-12",
        imgPath: "/images/kazakh.png",
        title: "Kazakh",
      }));
    else if (language === "Russian")
      setSelected(() => ({
        phone: "+7(495)892-42-29",
        imgPath: "/images/russia.webp",
        title: "Russian",
      }));
  }, [language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        {isPhoneNumberVisible && (
          <p className="pr-6 text-gray-600 max-[900px]:text-[14px] max-[850px]:text-[14px]">
            {selected.phone}
          </p>
        )}
        <img className="h-4 w-9 pr-3" src={selected.imgPath} alt="USA's flag" />
        <p className="pr-1 text-gray-600 max-[850px]:text-sm">
          {selected.title}
        </p>
        <Icon name="ChevronSvg" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Change Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="English">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Russian">Russian</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Kazakh">Kazakh</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
