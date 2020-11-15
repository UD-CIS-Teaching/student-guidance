import { Course } from './Course';

export class Semester {
  year: number;
  season: 'Fall' | 'Spring' | 'Winter' | 'SummerI' | 'SummerII';
  courses: Course[] = [];

  constructor(
    year: number,
    season: 'Fall' | 'Spring' | 'Winter' | 'SummerI' | 'SummerII'
  ) {
    this.season = season;
    this.year = year;
  }
}
