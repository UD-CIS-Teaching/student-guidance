import { Component, OnInit } from '@angular/core';
import { RequirementsService } from 'src/core/services/requirements.service';

@Component({
  selector: 'app-degree-picker',
  templateUrl: './degree-picker.component.html',
  styleUrls: ['./degree-picker.component.css'],
  providers: [RequirementsService]
})
export class DegreePickerComponent implements OnInit {

  constructor(private reqService: RequirementsService) { }

  ngOnInit(): void {
    this.reqService.courseRequirements.subscribe((degrees: Degree[]) => {
      console.log(degrees);

      this.degrees = degrees;
    });
  }

}
