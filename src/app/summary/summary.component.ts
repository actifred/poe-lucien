import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() nomGagnant: string;
  @Input() scoreGagnant: number;

  constructor() { }

  ngOnInit() {
  }

}
