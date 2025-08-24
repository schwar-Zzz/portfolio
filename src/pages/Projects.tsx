import { projects } from '../config/projects.config';

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#181818] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            {/* Project Image */}
            <div className="mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            
            {/* Project Description */}
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
            
            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-[#a264ff] text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#a264ff] hover:bg-[#8a4fff] text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
