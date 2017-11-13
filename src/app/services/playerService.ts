import { Injectable } from '@angular/core';
import { playerFactory } from '../services/factories/playerFactory';
import { IGamePlayer } from '../models/IGamePlayer';

@Injectable()
export class PlayerService {
   private player: IGamePlayer;

  getPlayer(playerType: string) {
   this.player = new playerFactory().createPlayer(playerType);
   return this.player;
  }
}
