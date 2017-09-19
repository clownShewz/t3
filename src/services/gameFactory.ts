import { IGameBoard } from '../Models/IGameBoard';
import { IGameEngine } from '../Models/IGameEngine';
import { ticTacToeBoard } from '../Models/ticTacToeBoard';
import { ticTacToeGameEngine } from '../Models/ticTacToeEngine';
import { game } from '../Models/game'; 

export class gameFactory{

    engine : IGameEngine;
    board : IGameBoard;
    game : game;
    
    createGame = function(type:string){
        
        switch(type){
            case 'TicTacToe':
                this.engine = new ticTacToeGameEngine();
                this.board = new ticTacToeBoard();
                this.game = new game(this.engine, this.board,'TicTacToe');
                console.log('created new TicTacToe Game')
            return this.game;

            case 'ConnectFour':
            
            break;
            case 'Simon':
            
            break;
        default:
            return null;
            }
        }
    }
 