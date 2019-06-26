import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo-service.service";
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  //Add todo on the server and then on UI
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      console.log(todo);
    })
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo){
    //Remove todo from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove todo from server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
