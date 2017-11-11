import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from '../../models/game';
import { Logger } from '../../services/logger'
import { GameService } from '../../services/gameService'

/////perhaps initialize with an array of game engines from an engine folder

@Component({
  selector: 'app-game',
  templateUrl: './app-game.component.html',
  styleUrls: ['./app-game.component.css'],
  providers: [GameService, Logger]
})

export class AppGameComponent implements OnInit {
  @Input() type: string;
  @Input() playerCount: number;
  game: Game;
  selectedPlayerCount: boolean;
  selectedGame: boolean;


  gameForm = new FormGroup({
       playerOne: new FormControl(),
       playerTwo: new FormControl()
  })

constructor( private logger: Logger, private gameService: GameService ) {

    }
    // game service objects provides the instance of the game calling the game factory
    // TODO: this process is a little wonky seems like you went off the deep end here- revisit
 createGame(type: string) {
      this.logger.log(type);

      this.game = this.gameService.getGame(type);
      if (this.game) {
          this.selectedGame = true;
          this.logger.log(this.game.board);
    } else {
    this.logger.error('invalid game selection');
  }
}
// get player details
setPlayers() {
   //this.game.setPlayers(this.playerCount);
}

initialize(){
  this.createGame(this.type);
  //this.setPlayers();
}

  ngOnInit() {
    this.initialize();
  }

}
