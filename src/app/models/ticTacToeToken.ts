import { IGameToken } from './IGameToken';

export class TicTacToeToken implements IGameToken {
    possibleValues: any[];
    imgLocation: string;

    constructor(values: any[]) {
      this.possibleValues = values;
    }

    getPossibleValues(): any[] {
        return this.possibleValues;
    }
    setImageUrl(imgLocation: string): void {
        this.imgLocation = imgLocation;
    }

}
