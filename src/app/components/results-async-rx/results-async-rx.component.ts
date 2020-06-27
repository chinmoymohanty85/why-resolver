import { RecordsService } from '../../services/records.service';
import { Component, OnInit } from '@angular/core';
import { Record } from '../../models/Record';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results-async-rx',
  templateUrl: './results-async-rx.component.html',
  styleUrls: ['./results-async-rx.component.scss']
})
export class ResultsAsyncRxComponent implements OnInit {
  records$: Observable<Record[]>;
  constructor(private _recordsService: RecordsService) { }

  ngOnInit(): void {
    this.records$ = this._recordsService.Get();
  }

}
