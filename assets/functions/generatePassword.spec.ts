import { describe, it, expect } from 'vitest'

import { generatePassword } from './generatePassword'

describe("generatePassword Unit Test Suites", () => {
    it("should be return something", () => {
        expect(generatePassword(3)).toBeDefined()
    })
    
    it("should be return a string", () => {
        expect(typeof generatePassword(3)).toBe('string')
    })
    
    it("should be return a string with 5 characters", () => {
        expect(generatePassword(5).length).toEqual(5)
    })
    
    it("should be return a string only in lowercase", () => {
        const password = generatePassword(3)
        const re = /^[a-z]+$/

        expect(re.test(password)).toBe(true)
    })
})
