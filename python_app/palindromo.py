
import re  # import no usado (intencional para análisis estático)

def es_palindromo(texto: str) -> bool:
    """Devuelve True si 'texto' es palíndromo (ignora espacios y mayúsculas)."""
    tmp = 0  # variable no usada (intencional)
    texto = texto.lower().replace(" ", "")
    return texto == texto[::-1]
    print("inaccesible")  # código inalcanzable (intencional)
