import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../components/game/player';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private _isAi: boolean;
  // player2Url: string = '../components/game/game.component.ts/';

  constructor(/* private http: HttpClient */) {
    this._isAi = true;
  }

  get isAi(): boolean {
    return this._isAi;
  }

  set isAi(isAi: boolean) {
    this._isAi = isAi;
    console.log('Ich bin jetzt: ' + this._isAi);
  }

  // isAi(isAi: boolean): void /* Observable<any> */ {
  //   console.log('SERVICE');
  // return this.http.post<boolean>(this.player2Url, isAi, httpOptions);
  // }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Todo } from '../models/Todo';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {
//   todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
//   todosLimit: string = '?_limit=5';

//   constructor(private http: HttpClient) {
//   }

//   // Get Todos
//   getTodos(): Observable<Todo[]> {
//     return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
//   }

//   // Delete Todo
//   deleteTodo(todo: Todo): Observable<Todo> {
//     const url = `${this.todosUrl}/${todo.id}`;
//     return this.http.delete<Todo>(url, httpOptions);
//   }

//   // Add Todo
//   addTodo(todo: Todo):Observable<Todo> {
//     return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
//   }

//   // Toggle Completed
//   toggleCompleted(todo: Todo):Observable<any> {
//     const url = `${this.todosUrl}/${todo.id}`;
//     return this.http.put(url, todo, httpOptions);
//   }
// }
