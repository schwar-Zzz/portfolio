import { Socials } from './Socials';
import { Button } from './ui/Button';
import Bat from './ui/bat/Bat'

// Configuration objects (you can move these to separate config files later)
const siteConfig = {
  name: "Portfolio"
};

const portfolioConfig = {
  name: "Hadfani Abdelbasset",
  tagline: "Full Stack Developer & Network Engineer"
};

const skillsConfig = [
  {
    category: "Frontend",
    technologies: ["React", "javaScript", "Tailwind", "vite", "HTML", "CSS"]
  },
  {
    category: "Backend", 
    technologies: [ "Python", "Django", "PostgreSQL", "MySQL"]
  },
  {
    category: "Tools",
    technologies: ["Git", "Docker", "Figma", "Linux", "Windows", "Nmap", "switching and routing" ]
  }
];

export default function Hero() {
  return (
    <>
      <Bat className=' mb-[250px] ml-15 lg:ml-80  lg:mb-[150px] size = lg'/>
      <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">


      
      
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-3xl  font-bold">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
        </div>
      </div>
      
      <h3 className="mt-2 text-lg text-gray-600">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      
      <p className="my-6 max-w-2xl text-gray-700">
        Hey there 👋 I'm a passionate developer - I don't have a niche, I'm a{" "}
        <a
          href="#"
          className="text-gray-900 font-semibold hover:underline"
        >
          generalist
        </a>. I work on web, mobile, desktop, servers, network systems, IoT, and more.
        I love Modern UI/UX, Computer Science, and creating elegant solutions to complex problems.
        <span className="sr-only">bio</span>
      </p>
      
      <Socials />
      
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-gray-600 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-[#a264ff]">
              {skill.category}:
            </span>{" "}
            {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
      
    </section>
    </>
  );
}
