import { IGameBoard } from '../models/IGameBoard';

export  interface IGameEngine{
    name:string;
    board:IGameBoard;
   
    getDefaultPlayerCount();
    //return number of players

    getGameBoard();
    
    setGameBoard();

    evaluateUserInput();
        //validate user input

    playerAction();
        //take action based on user input
    
    evaluateWinCondition();
        //did the player win based on the last move
    
    computerPlayerAction();
        //decision logic for computer player

    
}