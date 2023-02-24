import { Component, OnInit } from '@angular/core';
import { Todo } from '../Interface/todoINterface';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit{
Update() {
throw new Error('Method not implemented.');
}
todo!:Todo
show!:boolean
constructor(private route:ActivatedRoute, private router:Router,
  private taskService:TaskserviceService ){
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
 

// upDate(){
// this.router.navigate(['edit'], {relativeTo:this.route})
// }
