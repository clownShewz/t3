import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGameTile } from '../models/IGameTile';

@Component({
  selector: 'app-tile',
  templateUrl: './app-tile.component.html',
  styleUrls: ['./app-tile.component.css']
})
export class AppTileComponent implements OnInit {
  @Input() boardTile: IGameTile;
  @Output('tile') tile: EventEmitter<object> = new EventEmitter();

  constructor() {

  }

  setTileValue(value: string) {
    if (this.boardTile.value) {
        this.boardTile.value = value;
    }
  }

 tileClick() {
   this.boardTile.value = this.getPlayerToken();
   this.tile.emit(this.boardTile);
 }

 takeTurn() {
   // call play service to get current player token

}

getPlayerToken(): any {
   return 'X';
}

  ngOnInit() {

  }

}
