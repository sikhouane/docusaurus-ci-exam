const { execSync } = require('child_process');

test('builds without errors', () => {
  expect(() => execSync('npm run build')).not.toThrow();
});