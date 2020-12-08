import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { Field } from './field';
import { State } from './state';
import { Player } from './player';
import { TicTacToeService } from '../../services/tic-tac-toe.service';
import { Minimax } from './minimax';
import { HistoryItem } from '../pages/history/history-item';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  player1: Player;
  player2: Player;
  counter: number;
  board: Board;
  state: State;
  _activePlayer: Player;

  constructor(private ticTacToeService: TicTacToeService) {
    this.counter = 0;
    this.player1 = new Player(this.ticTacToeService.namePlayer1, false, true);
    this.player2 = new Player(
      this.ticTacToeService.namePlayer2,
      ticTacToeService.isAi,
      false
    );
    this.board = new Board();
    this.state = new State();
    this._activePlayer = this.player1;
  }

  ngOnInit(): void {}

  onClick(fieldId: number) {
    if (this.board.fields[fieldId].isEmpty()) {
      this.move(fieldId);
    }
    if (this._activePlayer == this.player2 && this.player2.isAi) {
      if(this.state.checkState(this.board, this.player1.figure, this.player2.figure)==this.state.IS_RUNNING){
        let minimax = new Minimax(this.player2.name, this.player1.name);
        this.move(minimax.bestmove(this.board));
      }
    }
    // PvKI oder PvP + HTML-Teil
  }

  move(fieldId: number): void {
    if(this.state.checkState(this.board, this.player1.figure, this.player2.figure)!=this.state.IS_RUNNING){
      return;
    }
    if (this._activePlayer == this.player1) {
      this.board.fields[fieldId].state = this.player1.figure;
      this._activePlayer = this.player2;
    } else {
      this.board.fields[fieldId].state = this.player2.figure;
      this._activePlayer = this.player1;
    }

    if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.IS_RUNNING
    ) {
    } else if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.P1WON
    ) {
      this.createHistoryItem(this.player1.name,this.player2.name, false);
      alert(this.player1.name + ' hat gewonnen!');
    } else if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.P2WON
    ) {
      this.createHistoryItem(this.player2.name,this.player1.name, false);
      alert(this.player2.name + ' hat gewonnen!');
    } else {
      this.createHistoryItem(this.player1.name,this.player2.name, true);
      alert('Unentschieden!');
    }
  }

  private createHistoryItem(winner:string, loser:string, isDraw:boolean){
    this.ticTacToeService.historyItem=new HistoryItem(winner,loser,isDraw);
  }

  resetGame() {
    this.board = new Board();
    this.counter = 0;
    this._activePlayer = this.player1;
  }

  get fields(): Field[] {
    return this.board.fields;
  }

  get activePlayer(): string {
    return this._activePlayer.name;
  }
}
