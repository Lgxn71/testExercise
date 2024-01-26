import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";
import Dropdown from "@/components/ui/dropdown/Dropdown";

import Icon from "@/components/ui/Icon/Icon";
import Container from "@/components/ui/Container/Container";

// * Для большей читабельности вывел в отдельный комопнент
// * const location = useLocation(); дает нынешний page через него получаю доступ к current pathname
// * Для более читабельного кода вынес все links в массив которые при помощи map вывожу
// const links = [
//   { to: "/", title: "Home" },
//   { to: "/find-job", title: "Find job" },
//   { to: "/employers", title: "Employers" },
//   { to: "/candidates", title: "Candidates" },
//   { to: "/pricing", title: "Pricing Plans" },
//   { to: "/support", title: "Customer supports" },
// ];

// *  const isActive = (href: string) => location.pathname === href;  сравнивает нынешний pathname с path линка и возращает boolean для того чтобы conditionally apply styles

const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", title: "Home" },
    { to: "/find-job", title: "Find job" },
    { to: "/employers", title: "Employers" },
    { to: "/candidates", title: "Candidates" },
    { to: "/pricing", title: "Pricing Plans" },
    { to: "/support", title: "Customer supports" },
  ];

  const isActive = (href: string) => location.pathname === href;
  return (
    <Container className="max-w-full bg-gray-50">
      <nav className="flex items-center justify-between ">
        <ul className="flex flex-row  gap-[24px] max-[1080px]:gap-[12px]">
          {links.map((link) => (
            <li key={link.title}>
              <NavLink
                className={cn(
                  "block py-[14px] leading-5 text-gray-600 hover:text-primary-500 max-[975px]:text-[14px]",
                  isActive(link.to) &&
                    " border-b-2 border-primary-500 text-primary-500",
                )}
                to={link.to}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex flex-row items-center gap-2">
          <Icon name="PhoneSvg" />
          <Dropdown defaultLanguage="English" isPhoneNumberVisible />
        </div>
      </nav>
    </Container>
  );
};

export default Navigation;
