import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modelpassword:string;
  modelusername:string;
  showerrmsg:string;
  constructor(private auth:AuthService, private router: Router) { }
  sendLogin(form:NgForm){
      this.auth.login(form)
      .subscribe(res=>{
        this.router.navigateByUrl('book');
      },
        error=>this.showerrmsg=error
      )
  }
  ngOnInit(): void {
    this.auth.logout();
  }

}
