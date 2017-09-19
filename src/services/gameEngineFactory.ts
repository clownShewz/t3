export function gameEngineFactory(){
    
    this.createGameEngine = function(type){
        switch(this._Type){
            case 'TicTacToe':
            break;
            case 'ConnectFour':
            break;
            case 'Simon':
            break;
        default:
            return null;
            }
        }
    }