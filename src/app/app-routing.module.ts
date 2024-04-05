import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  { 
    path: 'user-details/:id', component: UserDetailsComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
