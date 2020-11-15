export interface Degree {
  name: string;
  requirements: DegreeRequirements[];
}

export interface DegreeRequirements {
  name: string;
  courses: string[];
}
