import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Degree } from 'src/core/models/Degree';
import { Path } from 'src/core/models/Path';
import { PathService } from 'src/core/services/path.service';
import { RequirementsService } from 'src/core/services/requirements.service';

@Component({
  selector: 'app-degree-picker',
  templateUrl: './degree-picker.component.html',
  styleUrls: ['./degree-picker.component.css'],
  providers: [RequirementsService, PathService]
})
export class DegreePickerComponent implements OnInit {
  degrees: Degree[] = [];
  degreePickerForm: FormGroup;
  @Input() currentPath!: Path;

  constructor(private reqService: RequirementsService,  fb: FormBuilder) {
    this.degreePickerForm = fb.group({
      degree: new FormControl(undefined, Validators.required)
    });
  }

  ngOnInit(): void {
    this.reqService.courseRequirements.subscribe((degrees: Degree[]) => {
      this.degrees = degrees;
    });
  }

  dataChanged(newDegree: any) {
    if (this.currentPath) {
      console.log("Before", this.currentPath.degree);
      this.currentPath.degree = newDegree;
      console.log("Updated current path's degree to", newDegree);
      console.log("After", this.currentPath.degree);
    }
  }

}
