import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/core/services/path.service';

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.css'],
  providers: [ PathService ]
})
export class RequirementsListComponent implements OnInit {

  constructor(private pathService: PathService) { }

  ngOnInit(): void {
  }

}
