import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent
    
  },
  {
    path: 'posts',
    component: NuevoPostComponent
  },
  {
    path:'todos',
    component:TodosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
