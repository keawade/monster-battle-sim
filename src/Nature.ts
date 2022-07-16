import { StatBlock } from './interfaces/StatBlock';
import { Stat } from './Stat';

export enum Nature {
  'Adamant' = 'Adamant',
  'Bashful' = 'Bashful',
  'Bold' = 'Bold',
  'Brave' = 'Brave',
  'Calm' = 'Calm',
  'Careful' = 'Careful',
  'Docile' = 'Docile',
  'Gentle' = 'Gentle',
  'Hardy' = 'Hardy',
  'Hasty' = 'Hasty',
  'Impish' = 'Impish',
  'Jolly' = 'Jolly',
  'Lax' = 'Lax',
  'Lonely' = 'Lonely',
  'Mild' = 'Mild',
  'Modest' = 'Modest',
  'Naive' = 'Naive',
  'Naughty' = 'Naughty',
  'Quiet' = 'Quiet',
  'Quirky' = 'Quirky',
  'Rash' = 'Rash',
  'Relaxed' = 'Relaxed',
  'Sassy' = 'Sassy',
  'Serious' = 'Serious',
  'Timid' = 'Timid',
}

export class NatureModifierFactory {
  private static baseStatModifiers = {
    [Stat.HP]: 1,
    [Stat.Attack]: 1,
    [Stat.SpecialAttack]: 1,
    [Stat.Defense]: 1,
    [Stat.SpecialDefense]: 1,
    [Stat.Speed]: 1,
  };

  public static createStatNatureModifier(nature: Nature): StatBlock {
    return {
      ...this.baseStatModifiers,
      [this.natureModifiers[nature][0]]: 1.1,
      [this.natureModifiers[nature][1]]: 0.9,
    };
  }

  private static natureModifiers = {
    [Nature.Adamant]: [Stat.Attack, Stat.SpecialAttack],
    [Nature.Bashful]: [Stat.SpecialAttack, Stat.SpecialAttack],
    [Nature.Bold]: [Stat.Defense, Stat.Attack],
    [Nature.Brave]: [Stat.Attack, Stat.Speed],
    [Nature.Calm]: [Stat.SpecialDefense, Stat.Attack],
    [Nature.Careful]: [Stat.SpecialDefense, Stat.SpecialAttack],
    [Nature.Docile]: [Stat.Defense, Stat.Defense],
    [Nature.Gentle]: [Stat.SpecialDefense, Stat.Defense],
    [Nature.Hardy]: [Stat.Attack, Stat.Attack],
    [Nature.Hasty]: [Stat.Speed, Stat.Defense],
    [Nature.Impish]: [Stat.Defense, Stat.SpecialAttack],
    [Nature.Jolly]: [Stat.Speed, Stat.SpecialAttack],
    [Nature.Lax]: [Stat.Defense, Stat.SpecialDefense],
    [Nature.Lonely]: [Stat.Attack, Stat.Defense],
    [Nature.Mild]: [Stat.SpecialAttack, Stat.Defense],
    [Nature.Modest]: [Stat.SpecialAttack, Stat.Attack],
    [Nature.Naive]: [Stat.Speed, Stat.SpecialDefense],
    [Nature.Naughty]: [Stat.Attack, Stat.SpecialDefense],
    [Nature.Quiet]: [Stat.SpecialAttack, Stat.Speed],
    [Nature.Quirky]: [Stat.SpecialDefense, Stat.SpecialDefense],
    [Nature.Rash]: [Stat.SpecialAttack, Stat.SpecialDefense],
    [Nature.Relaxed]: [Stat.Defense, Stat.Speed],
    [Nature.Sassy]: [Stat.SpecialDefense, Stat.Speed],
    [Nature.Serious]: [Stat.Speed, Stat.Speed],
    [Nature.Timid]: [Stat.Speed, Stat.Attack],
  };
}
