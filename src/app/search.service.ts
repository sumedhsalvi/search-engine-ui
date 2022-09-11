import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Securities } from './securities';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //rxjs
  searchApiURL = 'https://shell-shacks-search-engine.herokuapp.com/apiv1/search-api?search_text=';

  constructor(private http: HttpClient) {
  }

  loadData(searchText: string) {
    return this.http.get<Securities[]>(this.searchApiURL + searchText);
  }
}
