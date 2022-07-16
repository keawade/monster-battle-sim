import { Type } from './Type';

export enum Category {
  'Physical' = 'Physical',
  'Special' = 'Special',
}

// TODO: Probably needs to change
export interface IMove {
  name: string;
  type: Type;
  power: number;
  accuracy: number;
  pp: number;
  maxPp: number;
  makesContact: boolean;
  category: Category;
}

export class MoveFactory {
  public static get(name: string): IMove {
    switch (name) {
      case 'Tackle':
        return {
          name,
          type: Type.Normal,
          power: 40,
          accuracy: 100,
          pp: 35,
          maxPp: 35,
          makesContact: true,
          category: Category.Physical,
        };
      case 'Special Tackle':
        return {
          name,
          type: Type.Normal,
          power: 40,
          accuracy: 100,
          pp: 35,
          maxPp: 35,
          makesContact: false,
          category: Category.Special,
        };
    }

    throw new Error(`Unknown move '${name}'`);
  }
}
