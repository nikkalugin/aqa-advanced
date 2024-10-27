const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    setupNodeEvents(on, config) {
    },
    supportFile: false
  },
  env: {
    authUser: 'guest',
    authPassword: 'welcome2qauto',
    usernameLog: 'expeditiontomysoul+testuser1@gmail.com',
    passwordLog: 'For_The_Horde99'
  }
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
    baseUrl: 'https://qauto.forstudy.space/',
    baseUrl: 'https://www.saucedemo.com/',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
});
