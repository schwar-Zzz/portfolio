import { Link, useLocation } from 'react-router-dom';
import { navbarConfig } from '../config/navbar.config';

export default function Navbar() {
  return (
    <div className="mb-8">
      <nav className="flex flex-wrap justify-center gap-2 p-2 bg-[#181818] rounded-2xl w-fit mx-auto">
        {navbarConfig.map((item, index) => (
          <NavItem
            key={index}
            url={item.url}
            className={index === 0 ? "rounded-l-xl" : 
                     index === navbarConfig.length - 1 ? "rounded-r-xl" : ""}
          >
            {item.title}
          </NavItem>
        ))}
      </nav>
    </div>
  );
}

interface NavItemProps {
  children: React.ReactNode;
  url: string;
  className?: string;
}

const NavItem = ({ children, url, className }: NavItemProps) => {
  const location = useLocation();
  const active = location.pathname === url || (location.pathname.includes(url) && url !== "/");

  return (
    <Link to={url}>
      <div
        className={`
          flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out
          ${active 
            ? 'bg-black shadow-md transform scale-105' 
            : 'bg-black text-gray-600 hover:text-gray-800 hover:bg-[#181818]'
          }
          ${className || ""}
        `}
      >
        {children}
      </div>
    </Link>
  );
}; 