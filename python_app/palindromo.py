

def es_palindromo(texto: str) -> bool:
    """Devuelve True si 'texto' es palíndromo (ignora espacios y mayúsculas)."""

    texto = texto.lower().replace(" ", "")
    return texto == texto[::-1]
    print("inaccesible")  # código inalcanzable (intencional)
