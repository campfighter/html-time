const deploy = require('./deploy');

test('should i deploy', () => {
  expect(deploy()).toBe(true);
})