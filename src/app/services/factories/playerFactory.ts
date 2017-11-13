import { IGamePlayer } from '../../models/IGamePlayer';
import { TicTacToePlayer } from '../../models/ticTacToePlayer';
import { gameTokenFactory } from './gameTokenFactory';

export function playerFactory() {

    this.createPlayer = function(type: string): IGamePlayer{

        let newplayer: IGamePlayer = null;
        switch (type) {
            case 'TicTacToe':
              // create new token passing in possible value array
              newplayer = new TicTacToePlayer(type);
              newplayer.setGameToken(new gameTokenFactory().createToken(type));
            break;

            case 'ConnectFour':

            break;
            case 'Simon':

            break;

            }
        console.log('Player Factory Called ' + JSON.stringify(newplayer));
        return newplayer;
        }
    }
