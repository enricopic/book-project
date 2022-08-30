import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import { BookServiceService } from "../../services/book-service.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Book[];
  constructor(private bookService:BookServiceService) { }

  getAll() {
    this.bookService.getAll()
      .subscribe(res => {
        this.books = res;
        console.log(this.books);
      });
  }
 
  ngOnInit(): void {
    this.getAll();
  }

}
