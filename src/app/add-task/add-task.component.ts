import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
    if(todo.title !== undefined && todo.title.trim().length > 0){
      this.addTodo.emit(todo);
    }
    else {
      window.alert('Wrong title of todo. Please try again.')
    }
  }
}
