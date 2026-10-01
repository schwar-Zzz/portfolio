

import { experiences } from '../config/experience.config';

const Experience = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-[#181818] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
            <p className="text-gray-600 mb-2">
              {experience.company} • {experience.period}
            </p>
            <p className="text-gray-700">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
