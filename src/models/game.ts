import { IGameBoard } from './IGameBoard';
import { IGameEngine } from './IGameEngine';
import { Player } from './player';
import { IGameTile } from './IGameTile';

export class Game {

    activePlayer:Player;

    players: Player[];

    tiles: IGameTile[];

    board: IGameBoard;

    engine: IGameEngine

    type: string; //enum

    constructor (engine:IGameEngine, board: IGameBoard, type){
        this.engine = engine;
        this.board = board;
        this.type = type;
    }
    

    initializePlayers(newPlayers: string[]){
        newPlayers.map((n)=>{
            let newPlayer = new Player(n, true)
            this.players.push(newPlayer);
        })
    }

    setPlayers(playerCount:number){
        let newPlayers: string[]=[];
        for(let i=0; i<playerCount; i++){
            newPlayers.push('Player' + i.toString());
        }   
        
        this.initializePlayers(newPlayers);
    }

    getPlayerCount(){
        this.players.length;
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
        let newPlayer:Player = new Player( name, human);
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