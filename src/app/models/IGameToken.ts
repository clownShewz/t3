export interface IGameToken {
    possibleValues: any[];
    imgLocation: string;

    getPossibleValues(): any[];

    setImageUrl(imgLocation: string): void;

}
