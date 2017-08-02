import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { AppSquareComponent } from './app-square/app-square.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBoardComponent,
    AppSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
