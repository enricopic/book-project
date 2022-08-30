import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './shared/form/form.component';
import { BookDetailComponent } from './feature/book-detail/book-detail.component';
import { NavComponent } from './shared/navbar/nav/nav.component';
import { SpinnerComponent } from './feature/spinner/spinner.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    BookDetailComponent,
    NavComponent,
    SpinnerComponent,
    TruncatePipe,
    HomeComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
