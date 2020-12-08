import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  player1 = new FormControl('');
  player2 = new FormControl('');

  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}

  ai(isAi: boolean) {
    this.ticTacToeService.isAi = isAi;
  }

  changeP2Visibility() {}

  namePlayer1() {
    this.ticTacToeService.namePlayer1 = this.player1.value;
  }

  namePlayer2() {
    this.ticTacToeService.namePlayer2 = this.player2.value;
  }
}
