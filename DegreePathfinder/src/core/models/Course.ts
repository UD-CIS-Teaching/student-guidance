export class Course {
  name: string;
  title: string;
  prerequisites: string[] = [];

  constructor(name: string, title: string) {
    this.name = name;
    this.title = title;
  }
}
