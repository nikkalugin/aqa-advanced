const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space',
    setupNodeEvents(on, config) {
    },
    supportFile: false
  },
  env: {
    authUser: 'guest',
    authPassword: 'welcome2qauto',
    usernameLog: 'destroyingthereality99+testuser1@gmail.com',
    passwordLog: 'For_The_Horde99'
  }
});