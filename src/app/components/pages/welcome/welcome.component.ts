import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}

  ai(isAi: boolean) {
    this.ticTacToeService.isAi = isAi;
  }

  changeP2Visibility() {}
}
