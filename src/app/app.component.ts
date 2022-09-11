import { Component } from '@angular/core';
import { Securities } from './securities';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shell Hacks Search Engine';

  secData!: Observable<Securities>;
  displayedColumns: string[] = ['security_id', 'cusip', 'sedol', 'isin', 'ric', 'bloomberg', 'bbg', 'symbol', 'root_symbol', 'bb_yellow', 'spn', 'priority'];
  securityList: Array<Securities> = [];
  dataSource!: MatTableDataSource<Securities>;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.loadData("").subscribe( data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Securities>(data);
    },
     error=> {
       console.log('Error occured main content load:', error);
     })
  }

  searchButtonClick(searchText: string) {
    this.searchService.loadData(searchText).subscribe( data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Securities>(data);
    },
     error=> {
       console.log('Error occured main content load:', error);
     })
  }
}
