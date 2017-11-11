import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'T3';
  gameSelection: string;
  playerCount: number;
  showGameSelection: boolean;
  showPlayerSelection: boolean;
  selectionComplete: boolean;

  constructor(){
    this.showGameSelection = true;
    this.showPlayerSelection=false;
    this.selectionComplete = false;
  }

  onGameSelectionClick(gameSelection: string) {
    this.gameSelection = gameSelection;
    this.showGameSelection = false; 
    this.showPlayerSelection = true;
    this.title = gameSelection;
  }

  onPlayerSelectionClick(playerSelection: number){
      this.playerCount = playerSelection;
      this.showPlayerSelection = false;
      this.selectionComplete = true;
  }

}
