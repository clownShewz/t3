import { IGamePlayer } from './IGamePlayer';
import { IGameToken } from './IGameToken';

export class TicTacToePlayer implements IGamePlayer {

    name: string;

    token: IGameToken;

    gamesWon: number;

    isHuman: boolean;

    type: string;

    constructor(type: string) {
      this.type = type;
      console.log('creating new ' + type + ' player')
    }

    setName(myName: string) {
      this.name = myName;
    }

    setIsHuman(humanTF: boolean) {
      this.isHuman = humanTF;
    }

    setGameToken(token: IGameToken) {
        this.token = token;
    }

    getGameToken() {
       return this.token;
    }

    incrementGamesWon() {
        this.gamesWon += 1;
    }



}
