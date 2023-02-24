import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'add', loadComponent:() => import('./add-task/add-task.component').then(a=>a.AddTaskComponent)},
  {path: 'display', loadComponent:() => import('./display-task/display-task.component').then(d=>d.DisplayTaskComponent)},
  {path: 'edit/:id', loadComponent:() => import('./edit-task/edit-task.component').then(e=>e.EditTaskComponent)},
  // {path: 'delete/:id', loadComponent:() => import('./delete-task/delete-task.component').then(d=>d.DeleteTaskComponent)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
