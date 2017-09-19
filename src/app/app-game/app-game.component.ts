import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { game } from '../../models/game';
import { gameFactory } from '../../services/gameFactory';
import { gameService } from '../../services/gameService';

/////perhaps initialize with an array of game engines from an engine folder

@Component({
  selector: 'app-game',
  templateUrl: './app-game.component.html',
  styleUrls: ['./app-game.component.css'],
  providers:[gameService]
})
export class AppGameComponent implements OnInit {
  _game:game;
  _gameFactory:gameFactory;

  gameForm = new FormGroup({
       playerOne: new FormControl(),
       playerTwo: new FormControl()
  })

  constructor(private _gameService:gameService) { 
      _gameService.gameBoard$.subscribe(

      )
      console.log('we here yet?')
      this._gameFactory = new gameFactory();
  }

  async initialize(){
    this.createGame();
    this.pushBoard();
  }

  createGame(){
    this._game = this._gameFactory.createGame('TicTacToe');
    
    if(this._game == null){alert('Invalid Game Selection');}
    console.log('Game Type: ' + this._game.type);
  }

  pushBoard(){
    this._gameService.announceGameBoard(this._game.board);
  }

//get player details
setPlayers(){
  
}


//draw board

//play

  ngOnInit() {
    this.pushBoard();
  }

}
