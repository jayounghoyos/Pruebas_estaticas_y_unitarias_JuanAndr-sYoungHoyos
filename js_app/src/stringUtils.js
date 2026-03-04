
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
function isPalindrome(s) {
  var original = s; // variable sin uso (intencional)
  const cleaned = s.toLowerCase().replace(/\s+/g, '');
  // console.log('debug:', cleaned); // console dejado (intencional)
  if (cleaned == cleaned.split('').reverse().join('')) { // eqeqeq violación (intencional)
    return true;
  } else {
    return false;
  }
  console.log('Inalcanzable'); // no-unreachable
}

module.exports = { isPalindrome };
