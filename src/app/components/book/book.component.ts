import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from 'src/app/model/book';
import { NgForm } from '@angular/forms';
import { ReadVarExpr } from '@angular/compiler';
import { BookServiceService } from 'src/app/services/book-service.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    books:Book[];
    active:Book;
    imageSrc: any
  constructor(private http:HttpClient,private bookService: BookServiceService) { 

  }

  
  
  
  getAll(){
    this.bookService.getAll()
    .subscribe((res:Book[])=>{
        this.books=res;
    },
    
    );
  }
  
  deleteBook(event, book: Book){
    event.stopPropagation();
    this.bookService.deleteBook(book)
    .subscribe(()=>{
      const index=this.books.findIndex((b)=>b.id===book.id);
      this.books.splice(index,1);
    },
       
    )
    
  }
  
  setActive(book:Book){
    this.active=book;
  }
  add(form: NgForm){
    this.bookService.addBook(form)
    .subscribe((res:Book)=>{
      this.books.push(form.value);
      form.reset();
      this.imageSrc=null;
    })
  }
  ngOnInit(): void {
    this.getAll()
  }

}
