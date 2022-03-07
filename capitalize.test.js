const capitalize = require('./capitalize');

test('capitalizes first letter of string', () => {
  expect(capitalize("kentucky")).toBe('Kentucky');
});

test('capitalizes first letter of string', () => {
    expect(capitalize("four score and seven years ago")).toBe('Four score and seven years ago');
  });

