import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {GlucoseLevelsService} from '../../services/glucose-levels.service';

/**
 * Component to display the Glucose values to the users.
 * todo: would be nice to extract the table and the filtering into two separate components.
 */
@Component({
  selector: 'app-glucose-levels-table',
  templateUrl: './glucose-levels-table.component.html',
  styleUrls: ['./glucose-levels-table.component.scss']
})
export class GlucoseLevelsTableComponent implements OnInit {
  isLoadingResults = true;
  data: LevelDTO[] = [];
  displayedColumns = ['id', 'start', 'stop', 'owner', 'gerat', 'seriennummer', 'geratezeitstempel']
  itemsCount: number | undefined = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly service: GlucoseLevelsService) {
  }

  ngOnInit(): void {
    this.loadData();

    this.handleSortEvent();
  }

  // todo: ran out of tiume, should implement sorting here.
  private handleSortEvent() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  loadData() {
    this.isLoadingResults = true;
    this.service.getTableData().subscribe(
    (res: IRestBaseResponse<LevelDTO>) => {
      this.isLoadingResults = false;
      if(!res){
          this.data = [];
          return;
        }
        this.data = res.results;
        this.itemsCount = res.count;
    }, err => {
        this.isLoadingResults = false;
        // todo: properly handle errors in the application
        console.error(err);
        throw err;
      }
    )
  }

}

// todo: normally, this would go to a separate file
export interface IRestBaseResponse<T> {
  count?: number,
  next?: any,
  previous?: any,
  results: Array<T>
}

// todo: normally, this would go to a separate file
// todo: this is just a stub, should represent the full DTO from the backend in time
export interface LevelDTO {
  id: number,
  start: string,
  stop: string,
  gerat: string,
  seriennummer: string,
  geratezeitstempel: string, // todo: create date formatter pipe for special date format
  owner: { username: string }
}
