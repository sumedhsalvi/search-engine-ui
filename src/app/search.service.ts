import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Securities } from './securities';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //rxjs
  //private _secData: BehaviorSubject<Securities>;
  searchApiURL = 'https://shell-shacks-search-engine.herokuapp.com/apiv1/search-api?search_text=';

  // private finDataStore: {
  //   secdata: Securities
  // }

  constructor(private http: HttpClient) {
    // this.finDataStore = { Securities = [] };
    // this._secData =  new BehaviorSubject<Securities>({data:[],csv:""});
  }

  // get secData(): Observable<Securities> {
  //   return this._secData.asObservable();
  // }

  loadData(searchText: string) {

    return this.http.get<Securities[]>(this.searchApiURL + searchText);
      // .subscribe(data => {
      //   this.finDataStore.secdata = data;
      //   this._secData.next(Object.assign({}, this.finDataStore).secdata);
      // }, error => {
      //   console.log("failed to fetch security data: ", error);
      // });
  }
}
