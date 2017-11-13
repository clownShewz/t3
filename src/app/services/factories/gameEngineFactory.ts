import {TicTacToeGameEngine} from '../../models/ticTacToeEngine';
import { IGameEngine } from '../../models/IGameEngine';


export function gameEngineFactory() {

    this.createGameEngine = function(type: string): IGameEngine{

      let engine: IGameEngine = null;

      switch (type) {
            case 'TicTacToe':
                engine =  new TicTacToeGameEngine();
                console.log('created new TicTacToe Game Engine')
            break;
            case 'ConnectFour':

            break;
            case 'Simon':

            break;

            }

        return engine;
        }
    }
