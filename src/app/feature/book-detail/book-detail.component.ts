import { HttpClient } from '@angular/common/http';
import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/services/book-service.service';
const apiUrl='http://localhost:3000/books';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book:Book;
  constructor(private bookService:BookServiceService, private activatedRoute:ActivatedRoute, private location:Location) { }
  goback(){
    this.location.back();
  }
  ngOnInit() {
    const id= this.activatedRoute.snapshot.params['id'];
    this.bookService.detailBook(id)
    .subscribe(res=>{
      this.book=res;
    })
  }

}
