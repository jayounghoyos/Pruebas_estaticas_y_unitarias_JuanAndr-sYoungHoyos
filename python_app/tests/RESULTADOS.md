# Resultados de la Actividad — Pruebas Estáticas y Unitarias

---

## 5. Ejecución en Python

### Análisis estático (Ruff) — errores iniciales

```console
 python_app ⚡ main ◉
> ruff check .
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

Found 6 errors.
[*] 5 fixable with the `--fix` option (1 hidden fix can be enabled with the `--unsafe-fixes` option).
```

### Análisis estático (Ruff) — después de correcciones

```console
 python_app ⚡ main ◉
> ruff check .
warning: The top-level linter settings are deprecated in favour of their counterparts in the `lint` section. Please update the following options in `pyproject.toml`:
  - 'select' -> 'lint.select'
All checks passed!
```

### Pruebas unitarias (pytest) — `es_palindromo`

```console
 python_app ⚡ main ◉
> pytest tests/test_lab.py
==================================================================== test session starts =====================================================================
platform linux -- Python 3.13.11, pytest-9.0.2, pluggy-1.5.0 -- /home/jayoungh/miniconda3/bin/python3
cachedir: .pytest_cache
rootdir: /home/jayoungh/SextoSemestre/pruebasDeSoftware/multilanguage-quality-lab-ts/python_app
configfile: pytest.ini
plugins: ament-xmllint-0.12.15, ament-lint-0.12.15, launch-testing-1.0.14, ament-copyright-0.12.15, ament-pep257-0.12.15, launch-testing-ros-0.19.13, ament-flake8-0.12.15, anyio-4.10.0
collected 5 items

tests/test_lab.py::test_palindromo_radar PASSED                                                                                                        [ 20%]
tests/test_lab.py::test_palindromo_Radar PASSED                                                                                                        [ 40%]
tests/test_lab.py::test_palindromo_anita_lava_la_tina PASSED                                                                                           [ 60%]
tests/test_lab.py::test_palindromo_python PASSED                                                                                                       [ 80%]
tests/test_lab.py::test_palindromo_cadena_vacia PASSED                                                                                                 [100%]

===================================================================== 5 passed in 0.05s ======================================================================
```

### Pruebas unitarias (pytest) — `suma`

```console
 python_app ⚡ main ◉
> pytest tests/test_sumas.py
==================================================================== test session starts =====================================================================
platform linux -- Python 3.13.11, pytest-9.0.2, pluggy-1.5.0 -- /home/jayoungh/miniconda3/bin/python3
cachedir: .pytest_cache
rootdir: /home/jayoungh/SextoSemestre/pruebasDeSoftware/multilanguage-quality-lab-ts/python_app
configfile: pytest.ini
plugins: ament-xmllint-0.12.15, ament-lint-0.12.15, launch-testing-1.0.14, ament-copyright-0.12.15, ament-pep257-0.12.15, launch-testing-ros-0.19.13, ament-flake8-0.12.15, anyio-4.10.0
collected 3 items

tests/test_sumas.py::test_1 PASSED                                                                                                                     [ 33%]
tests/test_sumas.py::test_2 PASSED                                                                                                                     [ 66%]
tests/test_sumas.py::test_3 PASSED                                                                                                                     [100%]

===================================================================== 3 passed in 0.05s ======================================================================
```

---

## 6. Ejecución en JavaScript (Node + Jest + ESLint)

### Análisis estático (ESLint)

```console
 js_app ⚡ main ◉
> npm run lint

> js_app@1.0.0 lint
> eslint src


/home/jayoungh/SextoSemestre/pruebasDeSoftware/multilanguage-quality-lab-ts/js_app/src/stringUtils.js
   6:3   error    Unexpected var, use let or const instead       no-var
   6:7   warning  'original' is assigned a value but never used  no-unused-vars
   9:15  error    Expected '===' and instead saw '=='            eqeqeq
  14:3   warning  Unreachable code                               no-unreachable

✖ 4 problems (2 errors, 2 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

### Pruebas unitarias (Jest) — `isPalindrome`

```console
 js_app ⚡ main ◉
> npm test -- --watchAll=false

> js_app@1.0.0 test
> jest --passWithNoTests --watchAll=false

 PASS  tests/stringUtils.test.js
  ✓ ejemplo siembra (5 ms)
  ✓ esPalindrome con "radar" (1 ms)
  ✓ esPalindrome con "anita lava la tina" (1 ms)
  ✓ esPalindrome con "python" (1 ms)
  ✓ esPalindrome con cadena vacía (1 ms)
  ✓ esPalindrome con "Radar"

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.894 s
Ran all test suites.
```

### Pruebas unitarias (Jest) — `suma`

```console

```

---

## 7. Ejecución en TypeScript (tsc + Vitest + ESLint)

### Lint para TS (ESLint)

```console

```

### Type-check estricto (tsc)

```console

```

### Pruebas unitarias (Vitest) — `isPalindrome`

```console

```