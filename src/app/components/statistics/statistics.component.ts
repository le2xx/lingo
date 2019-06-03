import { Component, OnInit, Input } from '@angular/core';
import {Lesson} from '../../commons/interfaces/lesson';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit {
  @Input() lesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

}
