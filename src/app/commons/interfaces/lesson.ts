import {Author} from './author';
import {Stats} from './stats';
import {Comment} from './comment';
import {Exercise} from './exercise';
import {Tableofcontent} from './tableofcontent';

export interface Lesson {
  type: string;
  title: {
    original: string;
    translated: string;
  };
  picture: string;
  difficult: number;
  description: string;
  tableOfContents: Tableofcontent[];
  exercises: Exercise[];
  stats: Stats;
  comments: Comment[];
  author: Author;
  time: string;
}
