
# TODO: Escribe pruebas unitarias para es_palindromo y suma.
# Sugerencias:
# - "radar" -> True, "anita lava la tina" -> True, "python" -> False, "" -> True, "Radar" -> True
# - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1

from palindromo import es_palindromo


def test_palindromo_radar():

    """
    Prueba la función es_palindromo con varios casos de prueba."""
    assert es_palindromo("radar")


def test_palindromo_Radar():

    """
    Radar"""
    assert es_palindromo("Radar")


def test_palindromo_anita_lava_la_tina():

    """Anita"""
    assert es_palindromo("anita lava la tina")

def test_palindromo_python():

    """
    Python"""
    assert es_palindromo("python")

def test_palindromo_cadena_vacia():

    """Cadena vacía"""
    assert es_palindromo("")



