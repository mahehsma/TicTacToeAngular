import { Component, OnInit } from '@angular/core';
import { HistoryItem } from './history-item';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  private _history: HistoryItem[] = [];

  constructor(
    private ticTacToeService: TicTacToeService,
    private titleService: Title
  ) {
    this._history = this.ticTacToeService.historyItems;
    this.titleService.setTitle('Verlauf');
  }

  ngOnInit(): void {}

  get history(): HistoryItem[] {
    return this._history;
  }
}
