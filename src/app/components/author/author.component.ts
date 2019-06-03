import { Component, OnInit, Input } from '@angular/core';
import {Lesson} from '../../commons/interfaces/lesson';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {
  @Input() lesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

}
