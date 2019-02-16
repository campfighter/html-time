const pass = require('./pass');

test('should i deploy', () => {
  expect(pass()).toBe(true);
})