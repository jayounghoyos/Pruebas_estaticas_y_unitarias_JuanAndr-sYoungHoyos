
import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/stringUtils'

describe('isPalindrome', () => {
  it('radar es palíndromo', () => {
    expect(isPalindrome('radar')).toBe(true)
  })

  it('Radar es palíndromo (ignora mayúsculas)', () => {
    expect(isPalindrome('Radar')).toBe(true)
  })

  it('anita lava la tina es palíndromo (ignora espacios)', () => {
    expect(isPalindrome('anita lava la tina')).toBe(true)
  })

  it('python no es palíndromo', () => {
    expect(isPalindrome('python')).toBe(false)
  })

  it('cadena vacía es palíndromo', () => {
    expect(isPalindrome('')).toBe(true)
  })
})
