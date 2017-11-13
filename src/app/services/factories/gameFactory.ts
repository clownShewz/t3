import { TicTacToeBoard } from '../../models/ticTacToeBoard';
import { gameEngineFactory } from './gameEngineFactory';
import { Game } from '../../models/game';

export function gameFactory() {

    this.createGame = function(type: string): Game{

        let newgame: Game = null;

        switch (type) {
            case 'TicTacToe':
                const engine = new gameEngineFactory().createGameEngine('TicTacToe');
                const board = new TicTacToeBoard();
                newgame = new Game(engine, board, 'TicTacToe');
                // newgame.type = 'TicTacToe';
                console.log('created new TicTacToe Game')

            break;

            case 'ConnectFour':

            break;
            case 'Simon':

            break;

            }

        return newgame;
        }
    }
