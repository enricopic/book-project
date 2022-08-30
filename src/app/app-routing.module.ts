import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BookDetailComponent } from './feature/book-detail/book-detail.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'book/:id',component:BookDetailComponent},
  {path:'book',component:BookComponent, canActivate:[LoginGuard]},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
