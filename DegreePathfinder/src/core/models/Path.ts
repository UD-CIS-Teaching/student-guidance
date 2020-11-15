import { Course } from './Course';
import { Semester } from './Semester';

export interface Path {
  name: string;
  semesters: Semester[];
}
