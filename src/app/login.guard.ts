import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router, private auth:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean>  | boolean  {
    return this.checkLogin();
  }
  private checkLogin(){
    //chiamo il service e verifico le credenziali per l'accesso
    if (!this.auth.notExpired()) {
      this.router.navigate(['/login'])
      return false
    }
    return true;
  }
}
