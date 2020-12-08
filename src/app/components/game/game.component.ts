import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { Field } from './field';
import { State } from './state';
import { Player } from './player';
import { TicTacToeService } from '../../services/tic-tac-toe.service';
import { Minimax } from './minimax';

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
    this.player1 = new Player('Player 1', false, true);
    this.player2 = new Player('Player 2', ticTacToeService.isAi, false);
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
      let minimax = new Minimax(this.player2.name, this.player1.name);
      this.move(minimax.bestmove(this.board));
    }
    // PvKI oder PvP + HTML-Teil
  }

  move(fieldId: number): void {
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
      alert(this.player1.name + ' hat gewonnen!');
    } else if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.P2WON
    ) {
      alert(this.player2.name + ' hat gewonnen!');
    } else {
      alert('Unentschieden!');
    }
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
