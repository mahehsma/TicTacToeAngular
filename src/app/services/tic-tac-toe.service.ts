import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private _isAi: boolean = true;
  private _namePlayer1: string = 'Spieler 1';
  private _namePlayer2: string = 'Spieler 2';

  constructor() {}

  get isAi(): boolean {
    return this._isAi;
  }

  set isAi(isAi: boolean) {
    this._isAi = isAi;
  }

  get namePlayer1(): string {
    return this._namePlayer1;
  }

  set namePlayer1(name: string) {
    this._namePlayer1 = name;
    console.log('Spieler 1 heißt jetzt: ' + this._namePlayer1);
  }

  get namePlayer2(): string {
    return this._namePlayer2;
  }

  set namePlayer2(name: string) {
    this._namePlayer2 = name;
    console.log('Spieler 2 heißt jetzt: ' + this._namePlayer2);
  }
}
