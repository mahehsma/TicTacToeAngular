import { Board } from './board';

export class State {
  IS_RUNNING = 0;
  P1WON = 1;
  P2WON = 2;
  DRAW = 3;

  // ueberprueft den aktuellen Spielzustand
  checkState(board: Board, player1: string, player2: string): number {
    if (this.hasWon(board, player1)) return this.P1WON;
    if (this.hasWon(board, player2)) return this.P2WON;
    if (this.isDraw(board)) return this.DRAW;
    else return this.IS_RUNNING;
  }

  // ueberprueft, ob ein Spieler 3 Figuren in einer Reihe gesetzt hat
  private hasWon(board: Board, player: string): boolean {
    if (
      // horizontal
      (board.fields[0].state == player &&
        board.fields[1].state == player &&
        board.fields[2].state == player) ||
      (board.fields[3].state == player &&
        board.fields[4].state == player &&
        board.fields[5].state == player) ||
      (board.fields[6].state == player &&
        board.fields[7].state == player &&
        board.fields[8].state == player) ||
      // vertikal
      (board.fields[0].state == player &&
        board.fields[3].state == player &&
        board.fields[6].state == player) ||
      (board.fields[1].state == player &&
        board.fields[4].state == player &&
        board.fields[7].state == player) ||
      (board.fields[2].state == player &&
        board.fields[5].state == player &&
        board.fields[8].state == player) ||
      // diagonal
      (board.fields[0].state == player &&
        board.fields[4].state == player &&
        board.fields[8].state == player) ||
      (board.fields[2].state == player &&
        board.fields[4].state == player &&
        board.fields[6].state == player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // ueberprueft, ob noch auf das Spielfeld gesetzt werden kann
  private isDraw(board: Board): boolean {
    for (let i = 0; i < 9; i++) {
      if (board.fields[i].isEmpty()) {
        return false;
      }
    }
    return true;
  }
}
