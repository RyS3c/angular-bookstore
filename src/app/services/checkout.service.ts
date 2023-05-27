import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private countriesUrl = 'http://localhost:8080/api/v1/countries';
  private stateUrl = 'http://localhost:8080/api/v1/states/';

  constructor(private httpClient: HttpClient) { }
}
