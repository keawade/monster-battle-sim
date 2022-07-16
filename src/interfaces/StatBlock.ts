import { Stat } from '../Stat';

export interface StatBlock {
  [Stat.HP]: number;
  [Stat.Attack]: number;
  [Stat.SpecialAttack]: number;
  [Stat.Defense]: number;
  [Stat.SpecialDefense]: number;
  [Stat.Speed]: number;
}
