import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../../commons/interfaces/lesson';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {
  @Input() lesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

}
