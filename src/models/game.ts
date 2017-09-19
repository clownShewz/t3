import { IGameBoard } from './IGameBoard';
import { IGameEngine } from './IGameEngine';
import { player } from './player';
import { tile } from './tile';

export class game {

    activePlayer:player;

    players: player[];

    tiles: tile[];

    board: IGameBoard;

    engine: IGameEngine

    type: string; //enum

    constructor (engine:IGameEngine, board: IGameBoard, type){
        this.engine = engine;
        this.board = board;
        this.type = type;
    }
    

    initializePlayers(newPlayers:string[]){
        newPlayers.map((n,i)=>{
            let newPlayer = new player(i, n, true)
            this.players.push(newPlayer);
        })
    }

    setPlayerCount(){
        this.engine.getDefaultPlayerCount();
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
        let newPlayer:player = new player(playerNum, name, human);
        this.players.push(newPlayer);
    }

    getBoard(){
        return this.engine.board;
    }


    playGame(){
        //whos'turn? 
        //player action
        //did player win? 
        //next player
    }

}