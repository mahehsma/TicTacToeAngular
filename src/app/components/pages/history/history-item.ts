import { State } from '../../game/state';

export class HistoryItem {
    private _player1: string;
    private _player2: string;
    private _state: number;
    private _timestamp: Date;

    constructor(player1: string, player2: string, state: number) {
        this._player1 = player1;
        this._player2 = player2;
        this._timestamp = new Date();
        this._state = state;
    }
    
    get player1():string{
        return this._player1;
    }
    
    get player2():string{
        return this._player2;
    }
    
    get state():string{
        if(this._state == 3) return 'unentschieden';
        if(this._state ==2) return this._player2 + ' hat gewonnen!';
        return this._player1 + ' hat gewonnen!';
    }

    get timestamp():string{
        return this._timestamp.toLocaleDateString()+" / " + this._timestamp.toLocaleTimeString();
    }
}
