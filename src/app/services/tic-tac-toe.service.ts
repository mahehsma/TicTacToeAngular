import { Injectable } from '@angular/core';
import { HistoryItem } from '../components/pages/history/history-item';

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private _isAi: boolean = true;
  private _namePlayer1: string = 'Spieler 1';
  private _namePlayer2: string = 'Spieler 2';
  private _historyItem: HistoryItem[] = [];

  constructor() {
    this._historyItem.push(new HistoryItem('John', 'Wayne', 1));
  }

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
  }

  get namePlayer2(): string {
    return this._namePlayer2;
  }

  set namePlayer2(name: string) {
    this._namePlayer2 = name;
  }

  set historyItem(historyItem: HistoryItem) {
    this._historyItem.push(historyItem);
  }

  get historyItems(): HistoryItem[] {
    return this._historyItem;
  }
}
