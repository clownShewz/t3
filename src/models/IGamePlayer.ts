import { IGameToken } from './IGameToken';

export interface IGamePlayer {

    name: string;

    token: IGameToken;

    gamesWon: number;

    isHuman: boolean;

    setGameToken(token: IGameToken)

    getGameToken(): IGameToken

    incrementGamesWon()

}
