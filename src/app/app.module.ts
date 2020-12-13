import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './components/game/game.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { TicTacToeService } from './services/tic-tac-toe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  // Komponenten, die im Modul enhalten sind
  declarations: [
    AppComponent,
    GameComponent,
    HistoryComponent,
    WelcomeComponent,
    HeaderComponent,
    DialogComponent,
  ],
  // Module, die importiert werden
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  // Service-Klassen
  providers: [TicTacToeService, Title],
  // Root-Komponente
  bootstrap: [AppComponent],
})
export class AppModule {}
