import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { Field } from './field';
import { State } from './state';
import { Player } from './player';
import { TicTacToeService } from '../../services/tic-tac-toe.service';
import { Minimax } from './minimax';
import { HistoryItem } from '../pages/history/history-item';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  private player1: Player;
  private player2: Player;
  private board: Board;
  private state: State;
  private _activePlayer: Player;

  constructor(
    // Verknuepfungen zu Service-Klassen
    private ticTacToeService: TicTacToeService,
    private titleService: Title,
    private dialog: MatDialog
  ) {
    this.player1 = new Player(this.ticTacToeService.namePlayer1, false, true);
    this.player2 = new Player(
      this.ticTacToeService.namePlayer2,
      ticTacToeService.isAi,
      false
    );
    this.board = new Board();
    this.state = new State();
    this._activePlayer = this.player1;
    // benennt Browser-Tab
    this.titleService.setTitle('Tic-Tac-Toe');
  }

  ngOnInit(): void {}

  /*
    Ueberprueft zunaechst, ob das angegklickte Feld leer ist und fuehrt dann den
    gewuenschten Zug durch die Methode move() aus. Falls nun der Computer der 2.
    Spieler ist, wird ueberprueft, ob das Spiel noch laeuft, und dann der Minimax-
    Algorithmus ausgefuehrt.
  */
  onClick(fieldId: number) {
    if (this.board.fields[fieldId].isEmpty()) {
      this.move(fieldId);
    }
    if (this._activePlayer == this.player2 && this.player2.isAi) {
      if (
        this.state.checkState(
          this.board,
          this.player1.figure,
          this.player2.figure
        ) == this.state.IS_RUNNING
      ) {
        let minimax = new Minimax(this.player2.figure, this.player1.figure);
        this.move(minimax.bestmove(this.board));
      }
    }
  }

  /*
    Ueberprueft zunaechst, ob das Spiel noch laeuft, fuehrt den gewuenschten Zug aus,
    wechselt den aktiven Spieler, ueberprueft im Anschluss, ob das Spiel zu Ende ist
    und gibt eine entsprechende Nachricht ueber die Methode openDialog() aus.
  */
  move(fieldId: number): void {
    if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) != this.state.IS_RUNNING
    ) {
      return;
    }
    if (this._activePlayer == this.player1) {
      this.board.fields[fieldId].state = this.player1.figure;
      this._activePlayer = this.player2;
    } else {
      this.board.fields[fieldId].state = this.player2.figure;
      this._activePlayer = this.player1;
    }

    // Spiel laeuft noch
    if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.IS_RUNNING
    ) {
    }
    // Spieler 1 hat gewonnen
    else if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.P1WON
    ) {
      this.createHistoryItem(
        this.player1.name,
        this.player2.name,
        this.state.P1WON
      );
      this.openDialog(this.state.P1WON);
    }
    // Spieler 2 hat gewonnen
    else if (
      this.state.checkState(
        this.board,
        this.player1.figure,
        this.player2.figure
      ) == this.state.P2WON
    ) {
      this.createHistoryItem(
        this.player1.name,
        this.player2.name,
        this.state.P2WON
      );
      this.openDialog(this.state.P2WON);
    }
    // Untenschieden
    else {
      this.createHistoryItem(
        this.player1.name,
        this.player2.name,
        this.state.DRAW
      );
      this.openDialog(this.state.DRAW);
    }
  }

  /*
  oeffnet Dialog im Material Design der Ausgang des Spiels enthält
  */
  openDialog(state: number) {
    let data: string = this.getStateMessage(state);
    this.dialog.open(DialogComponent, {
      data,
    });
  }

  /*
  erstellt Nachricht für Dialog abhängig vom Spielausgang 
  und den Spielernamen
  */
  getStateMessage(state: number): string {
    if (state == this.state.DRAW) return 'Unentschieden!';
    if (state == this.state.P1WON) return this.player1.name + ' hat gewonnen!';
    return this.player2.name + ' hat gewonnen!';
  }

  /*
    Erstellt einen neuen Verlaufseintrag fuer die Tabelle und uebergibt diesen an
    eine Service-Klasse.
  */
  private createHistoryItem(player1: string, player2: string, state: number) {
    this.ticTacToeService.historyItem = new HistoryItem(
      player1,
      player2,
      state
    );
  }

  // Beginnt ein neues Spiel.
  resetGame() {
    this.board = new Board();
    this._activePlayer = this.player1;
  }

  get fields(): Field[] {
    return this.board.fields;
  }

  get activePlayer(): string {
    return this._activePlayer.name;
  }
}
