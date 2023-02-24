import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskserviceService } from '../taskservice.service';
import { Todo } from '../Interface/todoINterface';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  

  constructor(private fb:FormBuilder, private taskService:TaskserviceService){}
  form!: FormGroup;


  ngOnInit(){
    this.form= this.fb.group({
      title:[null, [Validators.required]],
      description:[null, [Validators.required]],   
      date:[null, [Validators.required]]
    })
  }

  addTodo(){
    let todo:Todo={ ...this.form.value, id:Math.floor(Math.random() *10000) }
    this.taskService.addTodo(todo)
  }



}
