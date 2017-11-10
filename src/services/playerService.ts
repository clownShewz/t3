import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable()
export class PlayerService{
    getPlayer() { return Player; } 
}