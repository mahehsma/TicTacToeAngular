
import { Board } from './board';
import { State } from './state';

export class Minimax{
    myFigure: string;
    enemyFigure: string;
    constructor(myFigure: string, enemyFigure: string){
        this.myFigure = myFigure;
        this.enemyFigure = enemyFigure;
    }

    bestmove(board: Board): number{
        let clonedBoard: Board = board.clone();//has to be cloned
        //let clonedBoard = board;
        let value;
        let bestValue= -Infinity;
        let move = 0;
        console.log('starting minimax...');
        for(let i=0; i<9; i++){
            if(clonedBoard.fields[i].isEmpty()){
                clonedBoard.fields[i].state=this.myFigure;
                value = this.minimax(clonedBoard, false);
                console.log('field '+i+': '+value);
                clonedBoard.fields[i].state='';
                if(value>bestValue){
                    bestValue = value;
                    move = i;
                }
            }
        }
        return move;
    }

    minimax2(clonedBoard: Board,isMaximizing: boolean): number{
        return Math.random()*10 -5;
    }

    minimax(clonedBoard: Board,isMaximizing: boolean): number{
        let state = new State();
        let bestValue;
        let value;
        if(state.checkState(clonedBoard, this.enemyFigure, this.myFigure)==state.DRAW){
           return 0;
        }
        if(isMaximizing){
            if(state.checkState(clonedBoard, this.enemyFigure, this.myFigure)== state.P1WON){
                return -Infinity;
            }
            bestValue = -Infinity;
            for(let i = 0; i<9; i++){
                if(clonedBoard.fields[i].isEmpty()){
                    clonedBoard.fields[i].state=this.myFigure;
                    value = this.minimax(clonedBoard, !isMaximizing);
                    clonedBoard.fields[i].state='';
                    bestValue = Math.max(value, bestValue);
                }
            }
            return bestValue;
        } else{
            if(state.checkState(clonedBoard, this.enemyFigure, this.myFigure)== state.P2WON){
                return Infinity;
            }
            bestValue = Infinity;
            for(let i = 0; i<9; i++){
                if(clonedBoard.fields[i].isEmpty()){
                    clonedBoard.fields[i].state=this.enemyFigure;
                    value = this.minimax(clonedBoard, !isMaximizing);
                    clonedBoard.fields[i].state='';
                    bestValue = Math.min(value, bestValue);
                }
            }
            return bestValue;
        }
    }

}