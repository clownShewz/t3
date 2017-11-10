export interface IGameTile {
    value: string;
    row: number;
    col: number;

    setTileValue(value: any);

    setTileCoordinates(row: number, col: number);

    getCorrdinates();

    getValue();
}