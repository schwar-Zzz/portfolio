import { useState, useMemo } from 'react';
import { Project } from '@/types/project';
import { projects } from '@/config/projects.config';

export const useProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStack, setSelectedStack] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStack = !selectedStack || project.stack.includes(selectedStack);
      
      return matchesSearch && matchesStack;
    });
  }, [searchTerm, selectedStack]);

  const allStacks = useMemo(() => {
    const stacks = new Set<string>();
    projects.forEach(project => {
      project.stack.forEach(tech => stacks.add(tech));
    });
    return Array.from(stacks).sort();
  }, []);

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, []);

  return {
    projects: filteredProjects,
    featuredProjects,
    allStacks,
    searchTerm,
    setSearchTerm,
    selectedStack,
    setSelectedStack
  };
};
