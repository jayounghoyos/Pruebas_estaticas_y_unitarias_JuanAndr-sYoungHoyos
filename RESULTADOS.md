# 1)


```bash

 python_app ⚡ main ◉
> cd python_app
# Análisis estático (Ruff)
ruff check .
bash: cd: python_app: No such file or directory
warning: The top-level linter settings are deprecated in favour of their counterparts in the `lint` section. Please update the following options in `pyproject.toml`:
  - 'select' -> 'lint.select'
I001 [*] Import block is un-sorted or un-formatted
 --> palindromo.py:2:1
  |
2 | import re  # import no usado (intencional para análisis estático)
  | ^^^^^^^^^
3 |
4 | def es_palindromo(texto: str) -> bool:
  |
help: Organize imports

F401 [*] `re` imported but unused
 --> palindromo.py:2:8
  |
2 | import re  # import no usado (intencional para análisis estático)
  |        ^^
3 |
4 | def es_palindromo(texto: str) -> bool:
  |
help: Remove unused import: `re`

F841 Local variable `tmp` is assigned to but never used
 --> palindromo.py:6:5
  |
4 | def es_palindromo(texto: str) -> bool:
5 |     """Devuelve True si 'texto' es palíndromo (ignora espacios y mayúsculas)."""
6 |     tmp = 0  # variable no usada (intencional)
  |     ^^^
7 |     texto = texto.lower().replace(" ", "")
8 |     return texto == texto[::-1]
  |
help: Remove assignment to unused variable `tmp`

I001 [*] Import block is un-sorted or un-formatted
  --> tests/test_lab.py:7:1
   |
 5 |   # - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1
 6 |
 7 | / from palindromo import es_palindromo
 8 | | from utils import suma
   | |______________________^
 9 |
10 |   def test_ejemplo_siembra():
   |
help: Organize imports

F401 [*] `palindromo.es_palindromo` imported but unused
 --> tests/test_lab.py:7:24
  |
5 | # - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1
6 |
7 | from palindromo import es_palindromo
  |                        ^^^^^^^^^^^^^
8 | from utils import suma
  |
help: Remove unused import: `palindromo.es_palindromo`

F401 [*] `utils.suma` imported but unused
  --> tests/test_lab.py:8:19
   |
 7 | from palindromo import es_palindromo
 8 | from utils import suma
   |                   ^^^^
 9 |
10 | def test_ejemplo_siembra():
   |
help: Remove unused import: `utils.suma`

Found 6 errors.
[*] 5 fixable with the `--fix` option (1 hidden fix can be enabled with the `--unsafe-fixes` option).


```