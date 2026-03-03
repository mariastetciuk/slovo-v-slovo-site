export const getSortedChapterNumbers = (chapters: Record<number, unknown>) => {
  return Object.keys(chapters).map(Number).sort((a, b) => a - b);
}

export const getPrevNext = (numbers: number[], current: number) => {
  const idx = numbers.indexOf(current);
  const prev = idx > 0 ? numbers[idx - 1] : null;
  const next = idx >= 0 && idx < numbers.length - 1 ? numbers[idx + 1] : null;
  return { prev, next };
}
