import { Component, OnInit } from '@angular/core';
import { Degree } from 'src/core/models/Degree';
import { RequirementsService } from 'src/core/services/requirements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DegreePathfinder';
  degrees: Degree[] = [];

  constructor(private reqService: RequirementsService) {}

  ngOnInit(): void {
    this.reqService.courseRequirements.subscribe((degrees: Degree[]) => {
      console.log(degrees);

      this.degrees = degrees;
    });
  }
}
