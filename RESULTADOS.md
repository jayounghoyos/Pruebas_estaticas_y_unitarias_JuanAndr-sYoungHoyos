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




# Pruebas unitarias (pytest)
pytest -q


```bash

 python_app ⚡ main ◉
> # Pruebas unitarias (pytest)
pytest -q

=========================================================================== ERRORS ===========================================================================
___________________________________________________________________ ERROR collecting tests ___________________________________________________________________
../../../../miniconda3/lib/python3.13/site-packages/pluggy/_hooks.py:513: in __call__
    return self._hookexec(self.name, self._hookimpls.copy(), kwargs, firstresult)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
../../../../miniconda3/lib/python3.13/site-packages/pluggy/_manager.py:120: in _hookexec
    return self._inner_hookexec(hook_name, methods, kwargs, firstresult)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
../../../../miniconda3/lib/python3.13/site-packages/_pytest/python.py:202: in pytest_collect_file
    module: Module = ihook.pytest_pycollect_makemodule(
../../../../miniconda3/lib/python3.13/site-packages/_pytest/config/compat.py:79: in fixed_hook
    return hook(**kw)
           ^^^^^^^^^^
../../../../miniconda3/lib/python3.13/site-packages/pluggy/_hooks.py:513: in __call__
    return self._hookexec(self.name, self._hookimpls.copy(), kwargs, firstresult)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
../../../../miniconda3/lib/python3.13/site-packages/pluggy/_manager.py:120: in _hookexec
    return self._inner_hookexec(hook_name, methods, kwargs, firstresult)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/opt/ros/humble/lib/python3.10/site-packages/launch_testing/pytest/hooks.py:193: in pytest_pycollect_makemodule
    entrypoint = find_launch_test_entrypoint(path)
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/opt/ros/humble/lib/python3.10/site-packages/launch_testing/pytest/hooks.py:180: in find_launch_test_entrypoint
    module = import_path(path, root=None, consider_namespace_packages=False)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
../../../../miniconda3/lib/python3.13/site-packages/_pytest/pathlib.py:587: in import_path
    importlib.import_module(module_name)
../../../../miniconda3/lib/python3.13/importlib/__init__.py:88: in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
<frozen importlib._bootstrap>:1387: in _gcd_import
    ???
<frozen importlib._bootstrap>:1360: in _find_and_load
    ???
<frozen importlib._bootstrap>:1331: in _find_and_load_unlocked
    ???
<frozen importlib._bootstrap>:935: in _load_unlocked
    ???
../../../../miniconda3/lib/python3.13/site-packages/_pytest/assertion/rewrite.py:197: in exec_module
    exec(co, module.__dict__)
tests/test_lab.py:7: in <module>
    from palindromo import es_palindromo
E   ModuleNotFoundError: No module named 'palindromo'
================================================================== short test summary info ===================================================================
ERROR tests - ModuleNotFoundError: No module named 'palindromo'
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Interrupted: 1 error during collection !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


```




```bash


```
```bash


```
```bash


```