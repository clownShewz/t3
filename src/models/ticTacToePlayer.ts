export class TicTacToePlayer {

    name: string;

    tokenTypeSelection: string;

    gamesWon: number;

    isHuman: boolean;

    constructor( myName: string, human: boolean) {
        this.name = myName;
        this.isHuman = human;
        this.gamesWon = 0;
    }

    settokenTypeSelection(tokenType: string) {
        this.tokenTypeSelection = tokenType;
    }

    incrementGamesWon() {
        this.gamesWon += 1;
    }



}
