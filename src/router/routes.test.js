import routes from './routes';

describe('router/routes', () => {
  const loginRoute = routes.find((route) => route.name === 'Login');
  const registerRoute = routes.find((route) => route.name === 'Register');

  describe('login', () => {
    it('should define login route', () => {
      expect(loginRoute).toBeDefined();
    });

    it('should have login name', () => {
      expect(loginRoute).toHaveProperty('name', 'Login');
    });

    it('should have login path', () => {
      expect(loginRoute).toHaveProperty('path', '/');
    });

    it('should have login component', () => {
      expect(typeof loginRoute.component).toBe('function');
    });
  });

  describe('register', () => {
    it('should define register route', () => {
      expect(registerRoute).toBeDefined();
    });

    it('should have register name', () => {
      expect(registerRoute).toHaveProperty('name', 'Register');
    });

    it('should have register path', () => {
      expect(registerRoute).toHaveProperty('path', '/register');
    });

    it('should have login component', () => {
      expect(typeof loginRoute.component).toBe('function');
    });
  });
});
