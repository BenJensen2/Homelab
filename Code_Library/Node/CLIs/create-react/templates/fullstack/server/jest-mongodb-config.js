// Used to run MongoDB Memory server
// Starts an actual/real MongoDB server programmatically 
// from within nodejs, for testing or mocking during development

module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.0.3',
      skipMD5: true,
    },
    autoStart: false,
    instance: {},
  },
};