const routes = {
  '/login': { title: 'Login' },
  '/signup': { title: 'Signup' },
  '/:groupid/:agentid/:deviceid': { title: 'Device' },
  '/:groupid/:agentid': { title: 'Agent' },
  '/:groupid': { title: 'Group' },
  '/': { title: 'Nerv' }
};

export default routes;
