export class HistoryItem {
    private _winner: string;
    private _loser: string;
    private _timestamp: Date;
    private _isDraw: boolean;

    constructor(winner: string, loser: string, isDraw: boolean) {
        this._winner = winner;
        this._loser = loser;
        this._timestamp = new Date();
        this._isDraw = isDraw;
    }
    
    get winner():string{
        return this._winner;
    }
    
    get loser():string{
        return this._loser;
    }
    
    get isDraw():boolean{
        return this._isDraw;
    }

    get timestamp():Date{
        return this._timestamp;
    }
}