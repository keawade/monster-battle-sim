import { experienceNeeded, GrowthRate } from './Experience';
import { StatBlock } from './interfaces/StatBlock';
import { IMove } from './Move';
import { Nature, NatureModifierFactory } from './Nature';
import { Stat } from './Stat';
import { Type } from './Type';

const generateIv = () => Math.floor(Math.random() * 31);

export interface IMonsterParams {
  species: string;
  type: Type[];
  moves: IMove[];
  baseStats: StatBlock;
  nature: Nature;
  growthRate: GrowthRate;
  currentLevel?: number;
  currentHp?: number;
  currentXp?: number;
  currentEv?: StatBlock;
  iv?: StatBlock;
}

export class Monster {
  public constructor(params: IMonsterParams) {
    this._species = params.species;

    if (params.type.length === 0) {
      throw new Error('No types specified!');
    }
    if (params.type.length > 2) {
      throw new Error(
        `Too many types (${params.type.length}) specified! Recieved ${params.type}`
      );
    }
    this._type = params.type;

    if (params.moves.length === 0) {
      throw new Error('No moves specified!');
    }
    if (params.moves.length > 2) {
      throw new Error(
        `Too many moves (${params.moves.length}) specified! Recieved ${params.moves}`
      );
    }
    this._moves = params.moves;

    if (params.currentLevel) {
      if (params.currentLevel < 1) {
        this._level = 1;
      } else if (params.currentLevel > 100) {
        this._level = 100;
      } else {
        this._level = params.currentLevel;
      }
    } else {
      this._level = 1;
    }

    this._iv = params.iv ?? {
      [Stat.HP]: generateIv(),
      [Stat.Attack]: generateIv(),
      [Stat.SpecialAttack]: generateIv(),
      [Stat.Defense]: generateIv(),
      [Stat.SpecialDefense]: generateIv(),
      [Stat.Speed]: generateIv(),
    };
    this._baseStats = params.baseStats;
    this._nature = params.nature;
    this._ev = params.currentEv ?? {
      [Stat.HP]: 0,
      [Stat.Attack]: 0,
      [Stat.SpecialAttack]: 0,
      [Stat.Defense]: 0,
      [Stat.SpecialDefense]: 0,
      [Stat.Speed]: 0,
    };

    this._xp = params.currentXp ?? 0;
    this._growthRate = params.growthRate;

    this._hp =
      params.currentHp && params.currentHp <= this.maxHp
        ? params.currentHp
        : this.maxHp;
  }

  private _species: string;
  public get species(): string {
    return this._species;
  }

  private _type: Type[];
  public get type(): Type[] {
    return this._type;
  }

  private _moves: IMove[];
  public get moves(): IMove[] {
    return this._moves;
  }

  private _iv: StatBlock;
  private _baseStats: StatBlock;
  private _ev: StatBlock;
  private _growthRate: GrowthRate;

  private _level: number;
  public get level() {
    return this._level;
  }

  private _nature: Nature;
  public get nature() {
    return this._nature;
  }

  private _xp: number;
  public get xp() {
    return this._xp;
  }
  public gainXp(xp: number) {
    this._xp = this._xp = xp;

    if (this.xp > experienceNeeded[this._growthRate](this.level)) {
      console.warn('Level up!');
      this._xp = this._xp - experienceNeeded[this._growthRate](this.level);
      this._level = this._level + 1;
    }
  }

  private _hp: number;
  public get hp(): number {
    return this._hp;
  }
  public get maxHp(): number {
    return (
      this._iv.hp +
      2 * this._baseStats.hp +
      ((this._ev.hp / 4) * this.level) / 100 +
      10 +
      this.level
    );
  }

  private calculateStat(stat: Stat): number {
    return (
      (this._iv[stat] +
        2 * this._baseStats[stat] +
        ((this._ev[stat] / 4) * this.level) / 100 +
        5) *
      NatureModifierFactory.createStatNatureModifier(this.nature)[stat]
    );
  }

  public get [Stat.Attack](): number {
    return this.calculateStat(Stat.Attack);
  }
  public get [Stat.SpecialAttack](): number {
    return this.calculateStat(Stat.SpecialAttack);
  }
  public get [Stat.Defense](): number {
    return this.calculateStat(Stat.Defense);
  }
  public get [Stat.SpecialDefense](): number {
    return this.calculateStat(Stat.SpecialDefense);
  }
  public get [Stat.Speed](): number {
    return this.calculateStat(Stat.Speed);
  }
}
