import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TicTacToeService } from '../../../services/tic-tac-toe.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  // @Input() todo!: Todo;
  @Output() isAi: EventEmitter<boolean> = new EventEmitter();

  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}

  ai(isAi: boolean) {
    // this.ticTacToeService.isAi(isAi).subscribe;
    console.log(isAi);
    this.isAi.emit(isAi);
    // this.deleteTodo.emit(todo)
  }

  changeP2Visibility() {}

  // // Set Dynamic Classes
  // setClasses() {
  //   let classes = {
  //     todo: true,
  //     'is-complete': this.todo.completed
  //   }
  //   return classes;
  // }

  // onToggle(todo: Todo) {
  //   // Toggle in UI
  //   todo.completed = !todo.completed;
  //   // Toggle on server
  //   this.todoService.toggleCompleted(todo).subscribe(todo =>
  //     console.log(todo));
  // }

  // onDelete(todo: Todo) {
  //   this.deleteTodo.emit(todo)
  // }
}
