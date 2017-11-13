import { Injectable } from '@Angular/Core';
import { Game } from '../models/game';
import { Logger } from '../services/logger';
import { gameFactory } from '../services/factories/gameFactory';

@Injectable()
export class GameService {
  private game: Game
  private logger;
    constructor() {
      this.logger = new Logger();
    }

    getGame(type: string) {
        this.game = new gameFactory().createGame(type);

        if (!this.game) {
              this.logger.error('Invalid Game Selection');
            }else {
            this.logger.log('Game Type: ' + this.game.type);
        }
        return this.game;
    }

}
