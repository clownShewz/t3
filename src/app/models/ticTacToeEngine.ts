import { IGameEngine } from '../models/IGameEngine';
// import { TicTacToeBoard } from '../models/ticTacToeBoard';
import { IGameBoard } from '../models/IGameBoard'

export class TicTacToeGameEngine implements IGameEngine {
    private defaultPlayerCount: number = 2;
    type: 'TicTacToe';
    board: IGameBoard;

    constructor() {

    }

    takeTurn() {
    }

    getDefaultPlayerCount() {
        return this.defaultPlayerCount;
    }


    evaluateUserInput(): boolean {
        const passed = true;
        console.log('evaluating input')
        return passed;
     };
   // validate user input

    playerAction() {
        console.log('starting player action')

    };
    // take action based on user input


    evaluateWinCondition(): boolean {
      let win = false;
        console.log('evaluating win condition')
      return win;
    };

    setGameBoard(board: IGameBoard): void {
        this.board = board;
    }

    continuePlay():boolean{
        return false;
    }
        // did the player win based on the last move


    computerPlayerAction() {
        console.log('computer player action')

    };
        // decision logic for computer player

    findOpenCorners() {

    };

    findOpenCenter() {

    };

    isCornerOpen() {

    }

    isCenterOpen() {

    }

    checkForBlock() {

    }

    getNextAvailable() {

    }

    getCorner() {

    }

    getCenter() {

    }

    findNextSpace() {
        if (this.checkForBlock) {
            this.block();
        }else if (this.isCenterOpen) {
            this.moveCenter();
        }else if (this.isCornerOpen) {
            this.moveCorner();
        }else {
            this.moveNextAvailable();
        }
    }

    moveCenter() {

    }

    moveCorner() {

    }
    block() {

    }
    moveNextAvailable() {

    }
}
