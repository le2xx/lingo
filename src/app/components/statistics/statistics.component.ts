import { Component, OnInit, Input } from '@angular/core';
import {Stats} from '../../commons/interfaces/stats';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit {
  @Input() stats: Stats;

  constructor() { }

  ngOnInit() {
  }

}
