import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";
  private categoryUrl = "http://localhost:8080/api/v1/book-category";

  constructor(private httpClient: HttpClient) { }
}
