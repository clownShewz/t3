import { IGameEngine } from '../models/IGameEngine';
import { ticTacToeBoard } from '../models/ticTacToeBoard';

export class ticTacToeGameEngine implements IGameEngine{
    private defaultPlayerCount:number = 2;
    name:'TicTacToe';
    board:ticTacToeBoard;

    constructor(){
        this.board = new ticTacToeBoard();
    }

    getDefaultPlayerCount(){
        return this.defaultPlayerCount;
    }

    getGameBoard(){
        return this.board;
    }
    evaluateUserInput(){
            console.log('evaluating input')
     };
        //validate user input

    playerAction(){
        console.log('starting player action')

    };
        //take action based on user input
    

    evaluateWinCondition(){
        console.log('evaluating win condition')

    };

    setGameBoard(){
        this.board = new ticTacToeBoard();
    }
        //did the player win based on the last move
    

    computerPlayerAction(){
        console.log('computer player action')

    };
        //decision logic for computer player
    
}