import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../Interface/todoINterface';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class EditTaskComponent implements OnInit{
updateTodo() {
throw new Error('Method not implemented.');
}
  form!:FormGroup
  todo!:Todo;
  updated=false

  constructor( private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private taskService:TaskserviceService) {
        
  }


  ngOnInit(): void {
    this.form= this.fb.group({
      title:[null, Validators.required],
      description:[null, Validators.required],
      date:[null, Validators.required]
    })
    this.route.params.subscribe((params:Params)=>{
      this.todo= this.taskService.getoneTodo(+params['id'])
    })
    this.form.setValue({
      title:this.todo.title,
      description:this.todo.description,
      date:this.todo.date
    })
  }

  UpdateProduct(){
    let todo:Todo= {...this.todo ,...this.form.value}
    this.taskService.updateTodo(todo, this.todo.id)
    this.router.navigate(['../'],{relativeTo:this.route})
    this.updated=true
  }

  // canDeactive():boolean | Promise<boolean> | Observable<boolean>{
   
  //   if((
  //   this.form.value.title !== this.todo.title ||
  //   this.form.value.description !== this.todo.description ||
  //   this.form.value.date !== this.todo.date ||
  //   ) && !this.updated){
  //    const prom= new Promise<boolean>((resolve,reject)=>{
  //       setTimeout(()=>{
  //       resolve(confirm('Are you Sure you want to Discard the Changes'))
  //       },1000)
  //    })
  //    return prom
  //   }else{
  //     return true
  //   }
  // };
}