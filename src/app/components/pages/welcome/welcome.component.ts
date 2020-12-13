import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  player1 = new FormControl('');
  player2 = new FormControl('');

  constructor(
    private ticTacToeService: TicTacToeService,
    private titleService: Title
  ) {
    // benennt Browser-Tab
    this.titleService.setTitle('Willkommen');
  }

  ngOnInit(): void {}

  //uebermittelt dem Service Spieler 2 von Pc gesteuert werden soll
  ai(isAi: boolean) {
    this.ticTacToeService.isAi = isAi;
  }

  //uebergibt eingegebenen Spielernamen an TicTacToeService
  namePlayer1() {
    this.ticTacToeService.namePlayer1 = this.player1.value;
  }

  //uebergibt eingegebenen Spielernamen an TicTacToeService
  namePlayer2() {
    this.ticTacToeService.namePlayer2 = this.player2.value;
  }
}
