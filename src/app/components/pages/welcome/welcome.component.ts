import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isAi(checked: boolean) {
    alert(checked);
    if (document.getElementById('ai')) {
    }
  }

  changeP2Visibility() {
    // const p2Input = document.getElementById('p2Input');
    // p2Input?.classList.add('visibility: hidden');
   // this.p2Input="";
 

/* 
    if (document.getElementById('pvaiToggle')?.getAttribute('checked')) {
      document.getElementById('p2Input').style.visibility = 'visible';
    } else {
      document.getElementById('p2Input')?.style.visibility = 'hidden';
    }*/
  }
}
