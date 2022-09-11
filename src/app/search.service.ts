import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //rxjs
  private _finSecData: BehaviorSubject<FinSecData>;
  //medLibURL = 'https://asctb-api.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0';
  //anotomyInfo = 'https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/';

  private secDataStore: {
    finsecdata: FinSecData
  }

  constructor(private http: HttpClient) {
    this.secDataStore = { finsecdata:{data:[],csv:""} };
    this._finSecData =  new BehaviorSubject<FinSecData>({data:[],csv:""});
  }

  get finSecData(): Observable<FinSecData> {
    return this._finSecData.asObservable();
  }

  loadAll() {

    return this.http.get<FinSecData>(this.medLibURL)
      .subscribe(data => {
        this.secDataStore.finsecdata = data;
        this._finSecData.next(Object.assign({}, this.secDataStore).finsecdata);
      }, error => {
        console.log("failed to fetch security data: ", error);
      });
  }

  getSecurityInfo(id: string): Observable<SecurityInfo> {
    return this.http.get<SecurityInfo>(this.securityInfo+id);
  }

}
