function incrementScore(score, difficulty) {
    if(difficulty === 'easy') {
      score += 1;
    } else if(difficulty === 'medium') { 
      score += 5;
    } else if(difficulty === 'hard') {
      score += 10;
    }
    return score;
  }

  test('true equals true', () => {
    expect(true).toBe(true);
  });

describe('incrementScore', () => {
  test('returns the correct score for easy difficulty', () => {
    expect(incrementScore(0, 'easy')).toBe(1);
  });

  test('returns the correct score for medium difficulty', () => {
    expect(incrementScore(0, 'medium')).toBe(5);
  });

  test('returns the correct score for hard difficulty', () => {
    expect(incrementScore(0, 'hard')).toBe(10);
  });
});
