
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
export function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/\s+/g, '');
  if (cleaned === cleaned.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
