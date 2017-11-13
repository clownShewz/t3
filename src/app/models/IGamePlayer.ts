import { IGameToken } from './IGameToken';

export interface IGamePlayer {

    name: string;

    token: IGameToken;

    gamesWon: number;

    isHuman: boolean;

    type: string;

    setGameToken(token: IGameToken)

    getGameToken(): IGameToken

    incrementGamesWon()

}
