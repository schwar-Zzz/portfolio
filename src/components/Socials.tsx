// export function Socials() {
//   const socialLinks = [
//     { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
//     { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelbasset-hadfani-441a5319a/', icon: '💼' },
//     { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
//     { name: 'Email', url: 'mailto:your@email.com', icon: '📧' }
//   ];

//   return (
//     <div className="flex gap-4 mt-4">
//       {socialLinks.map((social) => (
//         <a
//           key={social.name}
//           href={social.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl hover:scale-110 transition-transform"
//           aria-label={social.name}
//         >
//           {social.icon}
//         </a>
//       ))}
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { IconMap } from "./icon-map";
import {portfolioConfig} from "@/config/portfolio.config" 

export const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        className="active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
        
      >
        <a href={portfolioConfig.resume} target="_blank">
          Resume
        </a>
      </Button>
      {Object.keys(portfolioConfig.links).map((key: string, index: number) => {
        const link =
          portfolioConfig.links[key as keyof typeof portfolioConfig.links];
        return (
          <Button
            key={key}
            size="icon"
            variant="outline"
            className="active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
            
          >
            <a href={link} target="_blank">
              {IconMap[key as keyof typeof IconMap]}
              <span className="sr-only">{`${key} - ${link}`}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
