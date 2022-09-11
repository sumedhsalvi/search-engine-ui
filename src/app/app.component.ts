import { Component } from '@angular/core';
import { Securities } from './securities';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shell Hacks Search Engine';

  //finSecData!: Observable<MedLibraryData>;
  displayedColumns: string[] = ['security_id', 'cusip', 'sedol', 'isin', 'ric', 'bloomberg', 'bbg', 'symbol', 'root_symbol', 'bb_yellow', 'spn'];
  securityList: Array<Securities> = [];
  dataSource!: MatTableDataSource<Securities>;
}
