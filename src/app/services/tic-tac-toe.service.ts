import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private _isAi: boolean;

  constructor() {
    this._isAi = true;
  }

  get isAi(): boolean {
    return this._isAi;
  }

  set isAi(isAi: boolean) {
    this._isAi = isAi;
  }
}
