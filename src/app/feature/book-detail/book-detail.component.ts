import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
const apiUrl='http://localhost:3000/books';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book:Book;
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id= +this.activatedRoute.snapshot.params['id'];
    this.http.get<Book>(`${apiUrl}/${id}`)
    .subscribe(res=>{
      this.book=res;
    })
  }

}
