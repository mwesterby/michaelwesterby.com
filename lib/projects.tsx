import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import type { Project, Projects } from '../pages/projects';

const projectsFile = path.join(process.cwd(), 'content/projects.yml');

// eslint-disable-next-line import/prefer-default-export
export function getProjects(): Projects {
  const file = fs.readFileSync(projectsFile, 'utf8');
  const result = YAML.parse(file);

  // Sort projects by start date
  result.content.sort(
    (projectA: Project, projectB: Project) => (projectA.startDate < projectB.startDate ? 1 : -1),
  );
  return result.content;
}
