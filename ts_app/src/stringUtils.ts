
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
export function isPalindrome(s: string): boolean {
  let original = s; // variable no usada (intencional)
  const cleaned = s.toLowerCase().replace(/\s+/g, '');
  if (cleaned == cleaned.split('').reverse().join('')) { // eqeqeq (intencional)
    return true;
  } else {
    return false;
  }
  console.log('Inalcanzable'); // unreachable (intencional)
}
