import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Lesson} from '../../commons/interfaces/lesson';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent implements OnInit {
  lesson: Lesson;
  url = 'assets/jsons/lesson.json';

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(
      data => this.lesson = data as Lesson,
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }

  ngOnInit() {
  }

  cutText(text: string) {
    return text.length > 261 ? text.substr(0, 261) + '...' : text;
  }

}
