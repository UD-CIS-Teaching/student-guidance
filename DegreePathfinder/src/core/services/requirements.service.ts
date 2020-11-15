import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Degree } from '../models/Degree';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  REQUIREMENTS_PATH = 'assets/requirements.json';

  constructor(private http: HttpClient) {}

  get courseRequirements(): Observable<Degree[]> {
    return this.http.get<Degree[]>(this.REQUIREMENTS_PATH);
  }
}
