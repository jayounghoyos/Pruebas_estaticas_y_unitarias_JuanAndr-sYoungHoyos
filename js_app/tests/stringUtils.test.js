
// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

const { isPalindrome } = require('../src/stringUtils.js');

test('ejemplo siembra', () => {
  expect(true).toBe(true);
});


test('esPalindrome con "radar"', () => {
  expect(isPalindrome("radar")).toBe(true);
});


test('esPalindrome con "anita lava la tina"', () => {
  expect(isPalindrome("anita lava la tina")).toBe(true);
});

test('esPalindrome con "python"', () => {
  expect(isPalindrome("python")).toBe(false);
});

test('esPalindrome con cadena vacía', () => {
  expect(isPalindrome("")).toBe(true);
});

test('esPalindrome con "Radar"', () => {
  expect(isPalindrome("Radar")).toBe(true);
});