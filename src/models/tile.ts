export class tile{
     
    _value: string;
    _row:number;
    _col:number;

    constructor(row, col){
        this._row = row;
        this._col = col;
    }

    setTileValue(value:any){
        this._value = value;
    }

    getCorrdinates(){
        return {"row":this._row, "col":this._col}
    }

    getValue(){
        return this._value;
    }
}