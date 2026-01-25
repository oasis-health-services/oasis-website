import GhostContentAPI from '@tryghost/content-api';

// Create API instance with your Ghost site credentials
const api = new GhostContentAPI({
  url: import.meta.env.VITE_GHOST_API_URL,
  key: import.meta.env.VITE_GHOST_API_KEY,
  version: 'v5'
});

export default api;
