import {IGameBoard} from '../models/IGameBoard';
import {tile} from '../models/tile';

export class ticTacToeBoard implements IGameBoard {
    type:string;
    rows:number;
    cols:number;
    board:any[];

    constructor(){
        this.type = "tictactoe";
        this.rows = 3;
        this.cols = 3;
        this.board = this.drawBoard();
    }

    drawBoard():any[]{
        let retBoard:any[] = new Array(this.rows);
        
        console.log('drawing board...');

        for(let i = 0; i < this.rows; i++){ 
            retBoard.push(this.generateNewRow(i));
        }
        return retBoard;
    }

    generateNewRow(i:number):tile[]{

        let row = new Array(this.cols);   
        for (let j=0; j < this.cols; j++){
                let newTile = this.getNewTile(i,j);
                row.push(newTile);
            }
        return row;
    }

    getNewTile(rowIndex:number, colIndex:number):tile{
        return new tile(rowIndex, colIndex);
    }

}