import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Degree } from '../models/Degree';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  REQUIREMENTS_PATH = '';

  constructor(private http: HttpClient) {}

  get courseRequirements(): Observable<{ [key: string]: Degree }> {
    return this.http.get<{ [key: string]: Degree }>(this.REQUIREMENTS_PATH);
  }
}
