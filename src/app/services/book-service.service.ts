import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
const apiUrl='http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  getAll(): Observable <Book[]>{
    return this.http.get<Book[]>(apiUrl);
  }
  addBook(form:NgForm):Observable<Book>{
    return this.http.post<Book>(`${apiUrl}`,form.value);
  }
  editBook(form:NgForm,active:Book): Observable<Book>{
    return this.http.patch<Book>(`${apiUrl}/${active.id}`, form.value)
  }
  deleteBook(book:Book): Observable<Book>{
    return this.http.delete<Book>(`${apiUrl}/${book.id}`)
  }
  detailBook(id:Book):Observable<Book>{
    return this.http.get<Book>(`${apiUrl}/${id}`);
  }
  constructor(private http:HttpClient) { }
}
