import {IGameBoard} from '../models/IGameBoard';
import {TicTacToeTile} from '../models/ticTacToeTile';
import {Logger} from '../services/logger'

export class TicTacToeBoard implements IGameBoard {
    type: string;
    rows: number;
    cols: number;
    board: any[];

    constructor() {
        this.type = 'TicTacToe';
        this.rows = 3;
        this.cols = 3;
        this.board = this.drawBoard();
    }

    drawBoard(): any[] {
        let retBoard: any[] = [this.rows];
        console.log('drawing board...');

        for (let i = 0; i < this.rows; i++) {
            retBoard[i] = this.generateNewRow(i);
        }
        return retBoard;
    }
    
    getUsedTileCount(){
        //foreach row 
        //foreach tile in row count if tile.value > 0
        return undefined;
    };

    getOpenTileCount(){
        let totalTileCount = this.rows * this.cols;
        return totalTileCount - this.getUsedTileCount();
    }

    generateNewRow(i: number): TicTacToeTile[] {

        const row = new Array();
        for (let j = 0; j < this.cols; j++) {
                const newTile = this.getNewTile(i, j);
                row.push(newTile);
            }
        return row;
    }

    getNewTile(rowIndex: number, colIndex: number): TicTacToeTile {
        return new TicTacToeTile(rowIndex, colIndex);
    }
  }
