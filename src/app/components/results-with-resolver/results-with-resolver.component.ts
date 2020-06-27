import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Record } from '../../models/Record';
@Component({
  selector: 'app-results-with-resolver',
  templateUrl: './results-with-resolver.component.html',
  styleUrls: ['./results-with-resolver.component.scss']
})
export class ResultsWithResolverComponent implements OnInit {
  records: Record[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { records: Record[] }) => {
      this.records = data.records;
    });
  }

}
