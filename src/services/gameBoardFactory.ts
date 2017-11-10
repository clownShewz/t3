import { TicTacToeBoard } from '../models/ticTacToeBoard';
import { IGameBoard } from '../models/IGameBoard';

export function gameBoardFactory(){

    this.createGameBoard = function(type: string): IGameBoard{
        let newGameBoard: IGameBoard = null;

        switch (type) {
            case 'TicTacToe':
                newGameBoard = new TicTacToeBoard();
            break;
            case 'ConnectFour':
            break;
            case 'Simon':
            break;
            }

            return newGameBoard;
        }
    }
