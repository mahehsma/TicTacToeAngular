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
}
