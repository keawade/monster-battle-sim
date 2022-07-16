export enum GrowthRate {
  Erratic = 'Erratic',
  Fast = 'Fast',
  MediumFast = 'MediumFast',
  MediumSlow = 'MediumSlow',
  Slow = 'Slow',
  Fluctuating = 'Fluctuating',
}

export const experienceNeeded = {
  [GrowthRate.Erratic]: (currentLevel: number) =>
    0.8 * Math.pow(currentLevel, 3), // TODO: Unknown math - works out the same as this but level by level requirements fluctuate
  [GrowthRate.Fast]: (currentLevel: number) => 0.8 * Math.pow(currentLevel, 3),
  [GrowthRate.MediumFast]: (currentLevel: number) => Math.pow(currentLevel, 3),
  [GrowthRate.MediumSlow]: (currentLevel: number) =>
    1.2 * Math.pow(currentLevel, 3) -
    15 * Math.pow(currentLevel, 2) +
    100 * currentLevel -
    140,
  [GrowthRate.Slow]: (currentLevel: number) => 1.25 * Math.pow(currentLevel, 3),
  [GrowthRate.Fluctuating]: (currentLevel: number) =>
    1.25 * Math.pow(currentLevel, 3), // TODO: Unknown math - works out the same as this but level by level requirements fluctuate
};
