import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../todo-service.service';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  status: string = 'Complete';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }
  //When user clicks on todo's checkbox
  onToggle(todo){
    todo.completed = !todo.completed;
    this.status = this.status === 'Complete' ? 'Uncheck' : 'Complete';
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
