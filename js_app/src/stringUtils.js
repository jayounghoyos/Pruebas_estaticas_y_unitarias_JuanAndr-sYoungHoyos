
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/\s+/g, '');
  // console.log('debug:', cleaned); // console dejado (intencional)
  if (cleaned === cleaned.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isPalindrome };
