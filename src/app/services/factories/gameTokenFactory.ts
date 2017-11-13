import { IGameToken } from '../../models/IGameToken';
import { TicTacToeToken } from '../../models/ticTacToeToken';

export function gameTokenFactory() {

    this.createToken = function(type: string): IGameToken{

        let newtoken: IGameToken = null;

        switch (type) {
            case 'TicTacToe':
              // create new token passing in possible value array
              newtoken = new TicTacToeToken(['x', 'y']);

            break;

            case 'ConnectFour':

            break;
            case 'Simon':

            break;

            }

        return newtoken;
        }
    }
