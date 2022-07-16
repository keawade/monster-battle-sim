import { inspect } from 'util';
import { GrowthRate } from '../src/Experience';
import { Monster } from '../src/Monster';
import { MoveFactory } from '../src/Move';
import { Nature } from '../src/Nature';
import { Type } from '../src/Type';

describe('stuff', () => {
  it('should', () => {
    const bigSnooze = new Monster({
      species: 'Big Snooze',
      type: [Type.Normal],
      moves: [MoveFactory.get('Tackle'), MoveFactory.get('Special Tackle')],
      baseStats: {
        hp: 160,
        atk: 110,
        def: 65,
        spAtk: 65,
        spDef: 110,
        spe: 30,
      },
      nature: Nature.Docile,
      growthRate: GrowthRate.Slow,
    });

    console.log(inspect(bigSnooze, false, Infinity));
  });
});
