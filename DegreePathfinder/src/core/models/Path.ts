import { Course } from './Course';
import { Degree } from './Degree';
import { Semester } from './Semester';

export class Path {
  name: string = "New Path";
  degree: Degree|undefined;
  semesters: Semester[] = [];

  constructor(name: string, degree: Degree|undefined, semesters: Semester[]) {
    this.name = name;
    this.degree = degree;
    this.semesters = semesters;
  }
}
