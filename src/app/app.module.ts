import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './components/game/game.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { TicTacToeService } from './services/tic-tac-toe.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavbarComponent,
    HistoryComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [TicTacToeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
