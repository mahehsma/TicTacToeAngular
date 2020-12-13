import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { GameComponent } from './components/game/game.component';

// generiert festgelegte Pfade zu bestimmten Ansichten
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
