import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/services/book-service.service';
const apiUrl='http://localhost:3000/books';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() active: Book;
  @Input() books:Book[];
  @Input() imageSrc:any;
  @Output() resetClick: EventEmitter<Book>=new EventEmitter<Book>()
  constructor(private http:HttpClient,private bookService:BookServiceService) { 
    
  }
  edit(form: NgForm){
    this.bookService.editBook(form,this.active)
    .subscribe((res:Book)=>{
      const index=this.books.findIndex((b)=>b.id===this.active.id);
      this.books[index]=res;
    })
  }
  getAll(){
    this.http.get<Book[]>(apiUrl)
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
      this.books.splice(index+1,1);
    },
       
    )
    
  }
  add(form: NgForm){
    this.bookService.addBook(form)
    .subscribe((res:Book)=>{
      this.books.push(form.value);
      form.reset();
      this.imageSrc=null;
    })
    
  }
  save(form:NgForm){
    this.active ? this.edit(form) : this.add(form);
  }
  readUrl(event:any){
    
    if (event.target.files && event.target.files[0]) {
      var reader=new FileReader();
        reader.onload=(event:ProgressEvent)=>{
          this.imageSrc=(<FileReader>event.target).result;
        }
    }
    reader.readAsDataURL(event.target.files[0])
  }
  reset(form:NgForm){
    this.imageSrc=null;
    this.active=null;
    this.resetClick.emit();
    form.reset();
  }
  ngOnInit(): void {
   
    
  }

}
