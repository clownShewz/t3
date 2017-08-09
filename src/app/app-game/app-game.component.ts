import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from '../../models/game';
import { TicTacToeGameEngine } from '../../models/tictactoeengine';
import { IGameBoard } from '../../models/IGameBoard';
import { IGameEngine } from '../../models/IGameEngine';
import { player } from '../../models/player';
import { tile } from '../../models/tile';

/////perhaps initialize with an array of game engines from an engine folder

@Component({
  selector: 'app-game',
  templateUrl: './app-game.component.html',
  styleUrls: ['./app-game.component.css']
})
export class AppGameComponent implements OnInit {

  _Game:Game;
  _Type:string;
  _Engine:IGameEngine;
  _Players:player[];

   gameForm = new FormGroup({
       playerOne: new FormControl(),
       playerTwo: new FormControl()
  })

  constructor() { }

//get game selection
 setGameType(type:string){
    this._Type = type;
    this._Engine = this.getGameEngine();
  }
//get player details
setPlayers(){
  
}
//initialize game
initializeGame(type:string){
  this.setGameType(type);
  this._Game = new Game(this._Engine);
  console.log(this._Game.engine);
}

getGameEngine(){
  switch(this._Type){
      case 'TicTacToe':
        return new TicTacToeGameEngine();
      case 'ConnectFour':
        break;
      case 'Simon':
        break;
     default:
        return null;
  }
}

//draw board

//play

  ngOnInit() {
  }

}
