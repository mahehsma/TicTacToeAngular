import { Field } from './field';

export class Board {
  private _fields: Field[] = [];

  constructor() {
    for (let i = 0; i < 9; i++) {
      this.fields[i] = new Field();
    }
  }

  get fields(): Field[] {
    return this._fields;
  }

  clone(): Board {
    let board = new Board();
    for (let i = 0; i < 9; i++) {
      board.fields[i].state = this.fields[i].state;
    }
    return board;
  }
}
