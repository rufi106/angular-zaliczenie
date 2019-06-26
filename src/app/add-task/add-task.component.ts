import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string
  constructor() { }

  ngOnInit() {
  }a

  //It adds todo on the list
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
    if(todo.title !== undefined && todo.title.trim().length > 0){
      this.addTodo.emit(todo);
    }
    else {
      window.alert('Wrong title. Try again.')
    }
  }
}
