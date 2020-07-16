export default {
  jwt: {
    secret: process.env.APP_SECRET || 'Test-secret',
    expiresIn: '12h',
  },
};
