import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskserviceService } from '../taskservice.service';
import { Todo } from '../Interface/todoINterface';

@Component({
  selector: 'app-display-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit{

  todos:Todo[]=[]

constructor(private taskService:TaskserviceService, private router:Router, private route:ActivatedRoute){}


ngOnInit(): void {
  this.todos = this.taskService.getTodo()
  console.log(this.taskService.getTodo());
  
}
}




