from utils import suma


def test_1():
    """Prueba suma(2,3) -> 5"""
    assert suma(2, 3) == 5

def test_2():
    """Prueba suma(0,5) -> 5"""
    assert suma(0, 5) == 5


def test_3():
    """Prueba suma(-2,3) -> 1"""
    assert suma(-2, 3) == 1
