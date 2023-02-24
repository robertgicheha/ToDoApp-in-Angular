import { Injectable } from '@angular/core';
import { Todo } from './Interface/todoINterface';


@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private todo:Todo[] =[
    {
      title: 'Task 1',
      description: 'Task 1 description',
      date: new Date(),
      id: 1
    }
  ]

  constructor() { }


  addTodo(todo:Todo):void {
    this.todo.push(todo);
    console.log(this.todo);
  }

  deleteTodo(todo:Todo) {
    this.todo.splice(this.todo.indexOf(todo), 1);
  }

getTodo() {
    return this.todo;
  }
getoneTodo(id:number){
  return this.todo.find(x=>x.id===id) as Todo
}


  updateTodo(todo:Todo, id:number) {
    let x = this.todo.find(x=>x.id===id) as Todo;
      x.title = todo.title;
      x.description = todo.description;
      x.date = todo.date;
      x.id = todo.id;
      return x;
    }
  }
  
  
  // updateTodo(todo:Todo, id:number) {
  //   let x = this.todo.find(x=>x.id===id) as Todo;
  //     x.title = todo.title;
  //     x.description = todo.description;
  //     x.date = todo.date;
  //     x.id = todo.id;
  //     return x=1;
  //   }
