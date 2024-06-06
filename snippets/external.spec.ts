import { it, expect } from 'vitest'
import hello from './external'

it('return a string', () => {
    expect(hello()).toBe("Hello from snippets/external.ts");
});