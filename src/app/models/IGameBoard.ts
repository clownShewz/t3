 export interface IGameBoard {
    type: string;
    rows: number;
    cols: number;
    board: any[];

    drawBoard();

    getUsedTileCount(): number;

    getOpenTileCount(): number;

}
