import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {
  @Input() lesson: any;

  constructor() { }

  ngOnInit() {
  }

}
