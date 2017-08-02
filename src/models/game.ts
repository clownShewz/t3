class game {

    activePlayer:player;

    players: player[];

    tiles: tile[];

    board: IGameBoard;

    engine: IGameEngine

    type: string; //enum

    constructor (options: IGameOptions){
        this.players = options.player;
        this.engine = options.engine;
        this.setDefaultActivePlayer();
    }

    setDefaultActivePlayer(){
        this.activePlayer = this.players[0];
    }

    getPlayerScore(playerNumber:number){
        this.players[playerNumber -1].gamesWon;
    }
    
     getPlayerName(playerNumber:number){
        this.players[playerNumber -1].name;

    }

    setActivePlayer(playerNumber:number){
        this.activePlayer = this.getPlayer(playerNumber);
    }

    getPlayer(playerNumber:number){
        return this.players[playerNumber -1];
    }

    addPlayer(playerNum: number, name:string, tokenType:string, human:boolean){
        let newPlayer:player = new player(playerNum, name, tokenType, human);
        this.players.push(newPlayer);
    }

    getBoard(){
        return this.board;
    }

    setBoard(type:string){
        let board = this.createBoard(type);
    }

    createBoard(type: string){
        switch (type) {
            case "ticTacToe":
                return new ticTacToeBoard();
            default: null
        }
    }

    playGame(){
        //whos'turn? 
        //player action
        //did player win? 
        //next player
    }

}