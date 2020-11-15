import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  REQUIREMENTS_PATH = '';

  constructor(private http: HttpClient) {}

  get courseRequirements(): Observable<any> {
    return this.http.get(this.REQUIREMENTS_PATH);
  }
}
