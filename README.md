
# Laboratorio: Pruebas estáticas y unitarias (Python + JavaScript)

**Objetivo (45 minutos):** ejecutar análisis estático y escribir/aplicar pruebas unitarias en dos lenguajes (Python y JavaScript) dentro de **GitHub Codespaces**, sobre un proyecto que **funciona**, pero contiene **issues intencionales** detectables por linters.

## 🚀 Pasos rápidos

1) **Abrir en Codespaces** (sube este proyecto a tu repo y abre un Codespace).  
2) Espera a que termine la configuración inicial (instalación automática de dependencias).  
3) En la terminal, ejecuta:

### Python
```bash
# entrar a la carpeta de Python
cd python_app
# análisis estático (Ruff)
ruff check .
# ejecutar pruebas (pytest)
pytest -q
```

### JavaScript
```bash
cd ../js_app
# análisis estático (ESLint)
npm run lint
# ejecutar pruebas (Jest)
npm test -- --watchAll=false
```

> **Tu tarea** durante el laboratorio:  
> - **Análisis estático:** identifica al menos 3 hallazgos en *cada* lenguaje y arréglalos (commits pequeños).  
> - **Pruebas unitarias:** implementa casos de prueba para `es_palindromo` (Python) e `isPalindrome` (JS), y añade 1–2 pruebas para `suma` (Python).  
> - **Re-ejecuta** linters y pruebas hasta que todo pase.

## 🧩 Qué contiene el proyecto

- **python_app/**  
  - `palindromo.py`: función `es_palindromo` (correcta) con *issues* intencionales (import no usado, variable no usada, código inalcanzable).  
  - `utils.py`: función `suma` simple, con pequeñas oportunidades de mejora.  
  - `tests/`: plantillas mínimas para que escribas pruebas.  
  - `pytest` y `ruff` para pruebas/análisis.

- **js_app/**  
  - `src/stringUtils.js`: `isPalindrome` (correcta) con *issues* (uso de `var`, `==`, código inalcanzable, variable sin uso).  
  - `tests/`: prueba de ejemplo mínima; completa con tus casos.  
  - `eslint` y `jest` para análisis/pruebas.

## 📝 Sugerencias de casos de prueba

### Python
- `es_palindromo`: "radar", "Radar", "anita lava la tina", "python" y cadena vacía.  
- `suma`: casos simples con positivos, cero y negativos.

### JavaScript
- `isPalindrome`: mismos casos que en Python.

## ⏱️ Guion sugerido (45 min)
- 0–5 min: abrir Codespace y correr linters una vez para ver hallazgos.  
- 5–15 min: escribir tests para `es_palindromo` e `isPalindrome`.  
- 15–30 min: corregir hallazgos del análisis estático (al menos 3 por lenguaje).  
- 30–40 min: completar tests de `suma` y re-ejecutar suites.  
- 40–45 min: resumen (¿qué detectó el linter vs. qué detectaron los tests?).

> **Nota:** No se usa CI (GitHub Actions/Travis) en esta sesión. Todo es **local en Codespaces**.


### TypeScript
```bash
cd ts_app
npm run lint
npm run typecheck
npm test
```

**Tu tarea TS:**
- Completa pruebas para `isPalindrome`.
- Corrige issues de ESLint (`eqeqeq`, variables sin uso) y de TypeScript (`--strict`).
- Repite hasta que todo pase limpio.
