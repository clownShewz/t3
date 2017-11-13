import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { AppGameComponent } from './app-game/app-game.component';
import { AppTileComponent } from './app-tile/app-tile.component';

import { GameService } from './services/gameService' ;
import { PlayerService } from './services/playerService' ;


@NgModule({
  declarations: [
    AppComponent,
    AppBoardComponent,
    AppGameComponent,
    AppTileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [GameService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
