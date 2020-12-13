import { Board } from './board';
import { State } from './state';

export class Minimax {
  private myFigure: string;
  private enemyFigure: string;

  constructor(myFigure: string, enemyFigure: string) {
    this.myFigure = myFigure;
    this.enemyFigure = enemyFigure;
  }
  /*
    wendet auf jedes freie Feld den Minimax-Algorithmus an und 
    waehlt das Feld mit der hoechsten Bewertung
    sind mehrere Felder gleich hoch bewertet wird das Erste gewählt
  */
  bestmove(board: Board): number {
    let clonedBoard: Board = board.clone(); //Kopie um Fehler zu vermeiden
    let value;
    let bestValue = -Infinity; //schlechtmoeglichster Wert
    let move = 0;
    console.log('starting minimax...');
    for (let i = 0; i < 9; i++) {
      if (clonedBoard.fields[i].isEmpty()) {
        clonedBoard.fields[i].state = this.myFigure;
        value = this.minimax(clonedBoard, false);
        console.log('field ' + i + ': ' + value);
        clonedBoard.fields[i].state = '';
        if (value > bestValue) {
          bestValue = value;
          move = i;
        }
      }
    }
    return move;
  }

  /*
  Überprüft bei jedem Aufruf ob Spiel beendet, falls dem so ist wird Ausgang als Zahlenwert zurückgegeben
  Es gilt: 0: unentschieden, -Infinity: Gegner gewonnen, Infinity: Pc gewonnen

  Ansonsten wird rekursiv jeder mögliche Folgezug getestet, dabei wird im Wechsel der minimierende Part und 
  der maximierende Part angesprochen, 
  Es wird davon ausgegangen, dass der minimierende Part (Gegner) immer den für den maximierenden Part (Pc) schlechtesten 
  Zug waehlt
  */
  minimax(clonedBoard: Board, isMaximizing: boolean): number {
    let state = new State();
    let bestValue;
    let value = 0;
    if (
      state.checkState(clonedBoard, this.enemyFigure, this.myFigure) ==
      state.DRAW
    ) {
      return 0;
    }
    if (isMaximizing) {
      if (
        state.checkState(clonedBoard, this.enemyFigure, this.myFigure) ==
        state.P1WON
      ) {
        return -Infinity; //da letzer Zug (/Aufruf) von minimierendem Part erfolgt
      }
      bestValue = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (clonedBoard.fields[i].isEmpty()) {
          clonedBoard.fields[i].state = this.myFigure;
          value = this.minimax(clonedBoard, !isMaximizing);
          clonedBoard.fields[i].state = '';
          bestValue = Math.max(value, bestValue); //liefert hoechsten Wert
        }
      }
      return bestValue; //bester Wert für Pc
    } else {
      if (
        state.checkState(clonedBoard, this.enemyFigure, this.myFigure) ==
        state.P2WON
      ) {
        return Infinity; //da letzer Zug (/Aufruf) von maximierendem Part erfolgt
      }
      bestValue = Infinity;
      for (let i = 0; i < 9; i++) {
        if (clonedBoard.fields[i].isEmpty()) {
          clonedBoard.fields[i].state = this.enemyFigure;
          value = this.minimax(clonedBoard, !isMaximizing);
          clonedBoard.fields[i].state = '';
          bestValue = Math.min(value, bestValue); //liefert niedrigsten Wert
        }
      }
      return bestValue; //bester Wert für Gegner
    }
  }
}
