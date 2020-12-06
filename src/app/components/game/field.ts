export class Field {
  private _state: string;

  constructor() {
    this._state = '';
  }

  isEmpty(): boolean {
    return this._state == '';
  }

  get state(): string {
    return this._state;
  }

  set state(input: string) {
    this._state = input;
  }
}
