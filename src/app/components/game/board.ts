import { Field } from './field';

export class Board {
  private _fields: Field[] = [];

  // initialisiert das Spielfeld mit 9 leeren Feldern
  constructor() {
    for (let i = 0; i < 9; i++) {
      this.fields[i] = new Field();
    }
  }

  get fields(): Field[] {
    return this._fields;
  }

  // fertigt eine Kopie des Spielfelds an
  clone(): Board {
    let board = new Board();
    for (let i = 0; i < 9; i++) {
      board.fields[i].state = this.fields[i].state;
    }
    return board;
  }
}
