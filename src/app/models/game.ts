import { IGameBoard } from './IGameBoard';
import { IGameEngine } from './IGameEngine';
import { IGamePlayer } from './IGamePlayer';
import { IGameTile } from './IGameTile';

export class Game {

    activePlayer: IGamePlayer;

    players: IGamePlayer[];

    tiles: IGameTile[];

    board: IGameBoard;

    engine: IGameEngine

    type: string; // enum

    turnCount: number;

    constructor (engine: IGameEngine, board: IGameBoard, type) {
        this.engine = engine;
        this.board = board;
        this.type = type;
        this.turnCount = 0;
        this.players = [];
        this.tiles = [];
    }

    addNewPlayer(newPlayer: IGamePlayer) {
      console.log('adding new player' + this.players);
      this.players.push(newPlayer);
    }

    getPlayerCount() {
      return this.players.length;
    }

    setDefaultActivePlayer() {
        this.activePlayer = this.players[0];
    }

    getBoard() {
        return this.engine.board;
    }

    setActivePlayer(player: IGamePlayer) {
      this.activePlayer = player;
    }

    getNextPlayer() {
      const currentIndex: number = this.players.indexOf(this.activePlayer)
      return this.players[currentIndex + 1];
    }


    playGame() {
        // whos'turn?
        // player action
        // did player win?
        // next player
        let win: boolean = false;

        while (! this.engine.evaluateWinCondition() || this.board.getOpenTileCount() > 0) {
          alert('Turn: ' + this.activePlayer)
          this.engine.takeTurn();
          let nextPlayer: IGamePlayer = this.getNextPlayer();
          this.setActivePlayer(nextPlayer);
        }
    }

}
