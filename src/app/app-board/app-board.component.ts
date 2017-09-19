import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { gameService } from '../../services/gameService';
import { Subscription } from 'rxjs/Subscription';
import { IGameBoard } from '../../models/IGameBoard';

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css']
})
export class AppBoardComponent implements OnDestroy {
  
  subscription:Subscription;
  _gameBoard:IGameBoard;
  board:any[];
  colCount:number;
  rowCount:number;
  type:string;
  cols:any[];
  rows:any[];
  showBoard:boolean;

  boardObservable = new Subject<{board:any}>();
  
  constructor(private _gameService:gameService) { 
    

      this.subscription = _gameService.gameBoard$.subscribe(
        board => {
            this._gameBoard = board;
            this.board = board.board;
            this.colCount = board.cols;
            this.rowCount = board.rows;
            this.type = board.type;
            this.showBoard = true;
            console.log('html:' + board);
        }
      )
  }

  loadBoard(){
    this.boardObservable.next();
  }
 

  ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }
