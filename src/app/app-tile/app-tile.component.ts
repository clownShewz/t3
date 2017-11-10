import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGameTile } from '../../Models/IGameTile';

@Component({
  selector: 'app-tile',
  templateUrl: './app-tile.component.html',
  styleUrls: ['./app-tile.component.css']
})
export class AppTileComponent implements OnInit {
  @Input() boardTile: IGameTile;
  @Output('tile') tile: EventEmitter<object> = new EventEmitter();

  tileValue: string;
  tokenStyle: string;
  tileImage: any;
  tileRow: number;
  tileCol: number;
  tileLocation: object;

  constructor() {

  }

  setTileValue(value: string) {
    if (this.tileValue) {
        this.tileValue = value;
    }
  }

 tileClick() {
   this.tileLocation = {row: this.tileRow, col: this.tileCol};
   this.tileValue = this.getPlayerToken();
   this.tile.emit(this.boardTile);
 }

 takeTurn() {
   // call play service to get current player token

}

getPlayerToken(): any {
   return 'X';
}

  ngOnInit() {
    this.tileRow = this.boardTile.row;
    this.tileCol = this.boardTile.col;
    this.tokenStyle = '';
  }

}
