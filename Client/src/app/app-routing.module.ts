          import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedjobsComponent } from './completedjobs/completedjobs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'completedjobs', component: CompletedjobsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
