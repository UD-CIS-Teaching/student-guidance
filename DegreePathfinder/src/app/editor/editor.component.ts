import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/core/services/path.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {

  constructor(private pathService: PathService) { }

  ngOnInit(): void {
  }

}
