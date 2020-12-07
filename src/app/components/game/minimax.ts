import { Board } from './board';

export class Minimax{
    myFigure: String;
    enemyFigure: String;
    constructor(board: Board, myFigure: String, enemyFigure: String){
        this.myFigure = enemyFigure;
        this.enemyFigure = enemyFigure;
    }


}