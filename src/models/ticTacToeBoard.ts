class ticTacToeBoard implements IGameBoard {
    type:string;
    rows:number;
    cols:number;
    board:any[];

    constructor(){
        this.type = "tictactoe";
        this.rows = 3;
        this.cols = 3;
    }

    drawBoard(){
        let retBoard:any[];

        for(let i = 0; i < this.rows; i++){
            let tiles = new Array(this.cols);

            for (let j=0; j < this.cols; j++){
                let tile = this.getNewTile(i,j);
                tiles.push(tile);
            }

            retBoard.push(tiles);
        }
        return retBoard;
    }

    getNewTile(rowIndex:number, colIndex:number){
        return new tile(rowIndex, colIndex);
    }

}