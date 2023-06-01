import { describe, it, expect } from "vitest";
import { toDisplayLabel } from '.';

describe('toDisplayLabel', () => {
  it('should display single word properly as normal case', () => {
    const input = 'MAGIC';
    const expected = 'Magic';
    const actual = toDisplayLabel(input);
    expect(actual).toEqual(expected);
  });

  it('should display two word snake case properly as normal case', () => {
    const input = 'magic_mushrooms';
    const expected = 'Magic Mushrooms';
    const actual = toDisplayLabel(input);
    expect(actual).toEqual(expected)
  })
})
