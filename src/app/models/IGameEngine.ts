import { IGameBoard } from '../models/IGameBoard';

export  interface IGameEngine {
    type: string;
    board: IGameBoard;

    getDefaultPlayerCount(): number;
    // return number of players

    setGameBoard(board: IGameBoard): void;
    // set game board property

    takeTurn(): void;
    // manage activities in a user turn

    evaluateUserInput(): boolean;
    // validate user input

    playerAction(): void;
    // take action based on user input

    evaluateWinCondition(): boolean;
    // did the player win based on the last move

    computerPlayerAction(): void;
    // decision logic for computer player
}
