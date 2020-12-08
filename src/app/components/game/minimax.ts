import { Board } from './board';
import { State } from './state';

export class Minimax{
    myFigure: string;
    enemyFigure: string;
    constructor(myFigure: string, enemyFigure: string){
        this.myFigure = enemyFigure;
        this.enemyFigure = enemyFigure;
    }

    bestmove(board: Board): number{
        let clonedBoard: Board = board.clone();//has to be cloned
        let value= -1;
        let bestValue= -1;
        let move = 0;
        for(let i=0; i<9; i++){
            if(clonedBoard.fields[i].isEmpty()){
                clonedBoard.fields[i].state=this.myFigure;
                value = this.minimax(clonedBoard, false);
                clonedBoard.fields[i].state="";
                if(value>bestValue){
                    bestValue = value;
                    move = i;
                }
            }
        }
        return move;
    }

    minimax(clonedBoard: Board,isMaximizing: boolean): number{
        let state = new State();
        let bestValue;
        let value;
        if(state.isDraw(clonedBoard)){
            return 0;
        }
        if(isMaximizing){
            if(state.hasWon(clonedBoard, this.enemyFigure)){
                return -Infinity;
            }
            bestValue = -Infinity;
            for(let i = 0; i<9; i++){
                if(clonedBoard.fields[i].isEmpty()){
                    clonedBoard.fields[i].state=this.myFigure;
                    value = this.minimax(clonedBoard, false);
                    clonedBoard.fields[i].state="";
                    bestValue = Math.max(value, bestValue);
                }
            }
        } else{
            if(state.hasWon(clonedBoard, this.myFigure)){
                return Infinity;
            }
            bestValue = Infinity;
            for(let i = 0; i<9; i++){
                if(clonedBoard.fields[i].isEmpty()){
                    clonedBoard.fields[i].state=this.enemyFigure;
                    value = this.minimax(clonedBoard, true);
                    clonedBoard.fields[i].state="";
                    bestValue = Math.min(value, bestValue);
                }
            }
        }
        return bestValue;
    }

}