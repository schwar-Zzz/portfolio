import { useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { navbarConfig } from "../config/navbar.config";

import { Menubar, MenubarContent } from "@/components/ui/menubar"

export default function Navbar() {
  return (
    <Menubar>
      {navbarConfig.map((item, index) => (
        <NavItem
          key={index}
          url={item.url}
          className={cn(
            index === 0 && "rounded-l-lg border-l-[0.5px]",
            index === navbarConfig.length - 1 && "rounded-r-lg border-r-[0.5px]"
          )}
        >
          {item.title}
        </NavItem>
      ))}
    </Menubar>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};

const NavItem = ({ children, url, className }: NavItemProps) => {
  const location = useLocation();
  // const active = location.pathname === url || (location.pathname.includes(url) && url !== "/");

  return (
    <Link to={url}>
      <MenubarContent>
        {children}
      </MenubarContent>
    </Link>
  );
};
