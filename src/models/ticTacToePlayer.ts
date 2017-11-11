import { IGamePlayer } from './IGamePlayer';
import { IGameToken } from './IGameToken';

export class TicTacToePlayer implements IGamePlayer {

    name: string;

    token: IGameToken;

    gamesWon: number;

    isHuman: boolean;

    constructor( myName: string, human: boolean) {
        this.name = myName;
        this.isHuman = human;
        this.gamesWon = 0;
    }

    setGameToken(token: IGameToken) {
        this.token = token;
    }

    getGameToken(){
       return this.token;
    }

    incrementGamesWon() {
        this.gamesWon += 1;
    }



}
