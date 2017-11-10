import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GameBoardService } from '../../services/gameBoardService';
import { IGameBoard } from '../../models/IGameBoard';
import { Logger } from '../../services/logger';
import { IGameTile } from '../../models/IGameTile'

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css'],
  providers: [Logger]
})

export class AppBoardComponent implements  OnInit {
  @Input() gameBoard: IGameBoard;
  showBoard: boolean;
  boardDisplay: string;
  boardRows: any= []

  constructor(private logger: Logger) {
  }

  loadBoard() {

  }

  tileClick(tile: IGameTile) {
      this.updateGameBoard(tile);
  }

  updateGameBoard(tile: IGameTile) {
      alert(JSON.stringify(tile));
      // let boardRow:IGameBoard = this.gameBoard.board.splice(location.row,1);
  }

  ngOnInit() {
    // this.boardDisplay = JSON.stringify(this.gameBoard.board);
    // this.logger.log(this.gameBoard);
  }

  }
