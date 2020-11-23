import { Component, Input, OnInit } from '@angular/core';
import { Path } from 'src/core/models/Path';
import { PathService } from 'src/core/services/path.service';

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.css'],
})
export class RequirementsListComponent implements OnInit {

  @Input() currentPath!: Path;

  constructor() {}

  ngOnInit(): void {
  }

}
