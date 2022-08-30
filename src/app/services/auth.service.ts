import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, map, Observable, throwError } from 'rxjs';
const apiUrl='http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private options: HttpHeaders= new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
  constructor(private http:HttpClient) { }
  errorHandler(error: any){
    let msg:string;
    if (error instanceof HttpErrorResponse) {
      if (error.status===0) {
        msg='Applicazione offline'
      } else{
        msg=`si è verificato un errore ${error.error.msg} (server status code ${error.status}`
      }
      return throwError(`si è verificato un errore di tipo ${error.message}`);
    }
  }
  login(datiForm) :Observable<string>{
        const body= this.body(datiForm);
        return this.http.post(apiUrl, body, {headers: this.options} )
        .pipe
        (map(res=>{
          if (res['token']) {
            this.setSession(res['token']);
        }
        return res['token']
        }),
        catchError(this.errorHandler())
  );}
  logout(){
  
  }
  private setSession(){

  }
  private body(df:NgForm){
    let params=new HttpParams()
    .set('username', df.value.username)
    .set('password', df.value.password);
  }
  
}
