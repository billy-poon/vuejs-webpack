
module.exports = {
  prompts: {
    less: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install less support?',
    },
    axios: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install axios - Promise based HTTP client for the browser and node.js?',
    },
    uiLibrary: {
      when: 'isNotTest',
      type: 'list',
      message: 'Pick an UI library to install',
      choices: [
        {
          name: 'iView - A high quality UI Toolkit built on Vue.js 2.0',
          value: 'iview',
          short: 'iview',
        },
        {
          name: 'Muse UI - Material Design UI library for Vuejs 2.0',
          value: 'muse-ui',
          short: 'muse-ui',
        },
        {
          name: 'None - No, thanks.',
          value: false,
          short: 'none',
        },
      ]
    },
  },

  filters: {

  }
}
