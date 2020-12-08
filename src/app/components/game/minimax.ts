import { Board } from './board';
import { Field } from './field';
import { State } from './state';

export class Minimax{
    myFigure: String;
    enemyFigure: String;
    constructor(myFigure: String, enemyFigure: String){
        this.myFigure = enemyFigure;
        this.enemyFigure = enemyFigure;
    }

    bestmove(board: Board): number{
        let clonedBoard: Board = board.clone();//has to be cloned
        //board clone

        let value= -1;
        let bestValue= -1;
        let move = 0;
        for(let i=0; i<9; i++){
            if(clonedBoard.fields[i].isEmpty()){
                clonedBoard.fields[i].state(this.myFigure);
                value = this.minimax(clonedBoard, false);
                clonedBoard.fields[i].state("");
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
        if(state.isDraw(clonedBoard)){
            return 0;
        }
        return -1;
    }

}