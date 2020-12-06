import { fromEventPattern } from 'rxjs';
import { Board } from './board';

export class State {
  IS_RUNNING = 0;
  P1WON = 1;
  P2WON = 2;
  DRAW = 3;

  checkState(board: Board, player1: string, player2: string): number {
    if (this.hasWon(board, player1)) return 1;
    if (this.hasWon(board, player2)) return 2;
    if (this.isDraw(board)) return 3;
    else return 0;
  }

  hasWon(board: Board, player: string): boolean {
    if (
      // check horizontal
      (board.fields[0].state == player &&
        board.fields[1].state == player &&
        board.fields[2].state == player) ||
      (board.fields[3].state == player &&
        board.fields[4].state == player &&
        board.fields[5].state == player) ||
      (board.fields[6].state == player &&
        board.fields[7].state == player &&
        board.fields[8].state == player) ||
      // check vertical
      (board.fields[0].state == player &&
        board.fields[3].state == player &&
        board.fields[6].state == player) ||
      (board.fields[1].state == player &&
        board.fields[4].state == player &&
        board.fields[7].state == player) ||
      (board.fields[2].state == player &&
        board.fields[5].state == player &&
        board.fields[8].state == player) ||
      // check diagonal
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

  isDraw(board: Board): boolean {
    for (let field of board.fields) {
      if (field.isEmpty()) {
        return false;
      }
    }
    return true;
  }
}
