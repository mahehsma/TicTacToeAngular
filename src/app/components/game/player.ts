export class Player {
  private _name: string;
  private _isAi: boolean;
  private _figure: string;

  constructor(name: string, isAi: boolean, isPlayerOne: boolean) {
    this._name = name;
    this._isAi = isAi;
    if (isPlayerOne) {
      this._figure = 'X';
    } else {
      this._figure = 'O';
    }
  }

  get name(): string {
    return this._name;
  }

  get isAi(): boolean {
    return this._isAi;
  }

  get figure(): string {
    return this._figure;
  }
}
