// Mock implementation of Turbopack bundling for testing purposes

async function bundleWithTurbopack() {
  return {
    errors: [],
    assets: ['main.js', 'styles.css'],
  };
}

module.exports = { bundleWithTurbopack };