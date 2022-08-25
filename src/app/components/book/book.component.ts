import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from 'src/app/model/book';
const apiUrl='http://localhost:3000/books';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    books:Book[];
    error:any;
  constructor(private http:HttpClient) { }

  getAll(){
    this.http.get<Book[]>(apiUrl)
    .subscribe((res:Book[])=>{
        this.books=res;
    },
    err=>this.error=err
    );
  }
  deleteBook(book: Book){
    this.http.delete<Book>(`${apiUrl}/${book.id}`)
    .subscribe(()=>{
      const index=this.books.findIndex((b)=>b.id===book.id);
      this.books.splice(index,1);
    },
        err=>this.error=err
    )
    
  }
  ngOnInit(): void {
    this.getAll();
  }

}
