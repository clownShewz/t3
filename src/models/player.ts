class player{

    playerNo: number;

    name:string;

    tokenTypeSelection: string;

    gamesWon:number;

    isHuman: boolean;

    constructor( myNumber: number, myName:string, myTokenSelection:string, human:boolean){
        this.name = myName;
        this.tokenTypeSelection = myTokenSelection;
        this.gamesWon = 0;
        this.isHuman = human;
    }


}