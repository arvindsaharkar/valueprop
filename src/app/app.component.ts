import { Component, OnInit } from '@angular/core';
import { ChartbgService } from './chartbg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Value Proposition';
  bgColor = '';

  constructor(private chartbgService: ChartbgService) {}

  ngOnInit() {
    this.chartbgService.bgColor.subscribe(bgColor => {
      this.bgColor = bgColor;
      console.log(this.bgColor);
    });
  }
}
