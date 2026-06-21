// Auto-assembled project registry. One file per project in this folder.
// Order here = display order & getNextProject() cycle order.
import { sparkup } from './sparkup.js';
import { aiCommunityPlatform } from './ai-community-platform.js';
import { stumbldoor } from './stumbldoor.js';
import { excelAiAgent } from './excel-ai-agent.js';
import { petiboxy } from './petiboxy.js';
import { ziplink } from './ziplink.js';
import { musicEncounter } from './music-encounter.js';
import { eternalDreams } from './eternal-dreams.js';
import { primeDirective } from './prime-directive.js';
import { myLittleFishTank } from './my-little-fish-tank.js';
import { kogna } from './kogna.js';
import { hexaedge } from './hexaedge.js';

export const projects = [
  sparkup,
  aiCommunityPlatform,
  stumbldoor,
  excelAiAgent,
  petiboxy,
  ziplink,
  musicEncounter,
  eternalDreams,
  primeDirective,
  myLittleFishTank,
  kogna,
  hexaedge,
];

// ========== helpers ==========
export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}

/** 获取下一个项目（按列表顺序，循环） */
export const getNextProject = (currentId) => {
  const i = projects.findIndex(p => p.id === currentId)
  if (i === -1) return null
  const nextIndex = (i + 1) % projects.length
  return projects[nextIndex] || null
}

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects
  return projects.filter(project => project.categories?.includes(category))
}

export const getFeaturedProjects = () => {
  const featured = projects.filter(p => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}
