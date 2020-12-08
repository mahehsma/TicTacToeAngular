import { Component, OnInit } from '@angular/core';
import { HistoryItem } from './history-item';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private _history: HistoryItem[] = [];

  constructor(private ticTacToeService: TicTacToeService) {
    this._history = this.ticTacToeService.historyItems;
  }

  ngOnInit(): void {
    // this._history = this.ticTacToeService.historyItems;
  }

  get history():HistoryItem[]{
    return this._history;
  }

}
