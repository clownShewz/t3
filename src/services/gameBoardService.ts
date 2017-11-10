
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IGameBoard } from '../models/IGameBoard';
import { Logger } from 'services/logger';
import { gameBoardFactory } from 'services/gameBoardFactory'

@Injectable()
export class GameBoardService {
    private gameBoard: IGameBoard;

    constructor() {

    }

    getGameBoard(type: string) {
        this.gameBoard = new gameBoardFactory().createGame(type);
    }
}
