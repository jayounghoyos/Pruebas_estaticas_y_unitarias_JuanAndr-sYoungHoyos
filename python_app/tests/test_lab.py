
# TODO: Escribe pruebas unitarias para es_palindromo y suma.
# Sugerencias:
# - "radar" -> True, "anita lava la tina" -> True, "python" -> False, "" -> True, "Radar" -> True
# - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1

from palindromo import es_palindromo
from utils import suma

def palindromo_radar():

    """
    Prueba la función es_palindromo con varios casos de prueba."""
    assert es_palindromo("radar") == True


def palindromo_Radar():

    """
    Radar"""
    assert es_palindromo("Radar") == True


def palindromo_anita_lava_la_tina():

    """Anita"""
    assert es_palindromo("anita lava la tina") == True

def palindromo_python():

    """
    Python"""
    assert es_palindromo("python") == False

def palindromo_cadena_vacia():

    """Cadena vacía"""
    assert es_palindromo("") == True



