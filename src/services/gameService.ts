
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import { IGameBoard } from '../models/IGameBoard';
import { IGameEngine } from '../models/IGameEngine';
import { player } from '../models/player';
import { tile } from '../models/tile';

@Injectable()
export class gameService{
    private gameBoardSource = new Subject<IGameBoard>();

    gameBoard$ = this.gameBoardSource.asObservable();

    announceGameBoard(Board:IGameBoard){
        this.gameBoardSource.next(Board);
    }
}