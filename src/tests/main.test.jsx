import { validateBoard } from '../App';
import { describe, it, expect } from 'vitest';

describe('validateBoard', () => {
  it('should return true if the game is won', () => {
    const board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['X', 'O', 'X'],
    ];
    expect(validateBoard(board, 0, 0)).toBe(true);
  });
  it('should return undefined if the game is tied', () => {
    const board = [
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
      ['O', 'X', 'O'],
    ];
    expect(validateBoard(board, 2, 2)).toBe(undefined);
  });
});