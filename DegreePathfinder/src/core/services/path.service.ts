import { Injectable } from '@angular/core';
import { Path } from '../models/Path';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  currentPath: Path | undefined;

  constructor() {}
}
