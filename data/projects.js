// src/data/projects.js — barrel kept for backwards-compatible imports.
// Real data now lives one-file-per-project in ./projects/<id>.js (see ./projects/index.js).
export {
  projects,
  getProjectById,
  getNextProject,
  getProjectsByCategory,
  getFeaturedProjects,
} from './projects/index.js';
