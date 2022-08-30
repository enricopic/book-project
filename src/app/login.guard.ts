import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean>  | boolean  {
    return this.checkLogin();
  }
  private checkLogin(){
    //chiamo il service e verifico le credenziali per l'accesso
    let loginOk=true;
    if (!loginOk) {
      this.router.navigate(['/login'])
      return false
    }
    return true;
  }
}
