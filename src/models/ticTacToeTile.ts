import {IGameTile} from '../models/IGameTile';

export class TicTacToeTile implements IGameTile {
    value: string;
    row: number;
    col: number;

    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    setTileValue(value: any) {
        this.value = value;
    }

    setTileCoordinates(row: number, col: number) {
      this.row = row;
      this.col = col;
    }

    getCorrdinates() {
        return {row: this.row, col: this.col}
    }

    getValue() {
        return this.value;
    }
}
