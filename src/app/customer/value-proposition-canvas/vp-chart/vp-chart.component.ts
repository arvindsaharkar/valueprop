import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import { AppGlobal } from '../../../shared/app.global';
import { ChartbgService } from '../../../chartbg.service';

import { ValuePropositionCanvasService } from '../value-proposition-canvas.service';

@Component({
  selector: 'app-vp-chart',
  templateUrl: './vp-chart.component.html',
  styleUrls: ['./vp-chart.component.css']
})
export class VpChartComponent implements OnInit, OnDestroy {
  msg: string;
  customerId: number;
  vpId: number;
  vpDetails: any;
  customerName: string;
  valueProposition: string;
  productsStartY = 30;
  lineMaxHeight = 40;
  maxHeight = 420;
  customerJobsStartY = 65;

  constructor(
    private vpService: ValuePropositionCanvasService,
    private route: ActivatedRoute,
    private router: Router,
    private chartbgService: ChartbgService,
    private _location: Location) {
  }

  ngOnInit() {
    this.chartbgService.setColor('bg-white');
    this.customerId = null;
    this.vpId = +this.route.snapshot.paramMap.get('vpId');

    this.getValuePropositionDetails();
    this.getvalueProposition();
  }

  getValuePropositionDetails() {
    this.vpService.getAllDetailsValueProposition(this.vpId).subscribe((res) => {
      console.log(res);
      this.vpDetails = res;
      const prodHeight = this.vpDetails.products.length * this.lineMaxHeight;
      this.productsStartY = (this.maxHeight / 2) - (prodHeight / 2) + 50;

      const custJobHeight = this.vpDetails.customerJobs.length * this.lineMaxHeight;
      this.customerJobsStartY = (this.maxHeight / 2) - (custJobHeight / 2) + 50;
    });
  }

  getvalueProposition() {
    this.vpService.getValuePropositionById(this.vpId).subscribe((res: any) => {
      this.valueProposition = res.valuePropositionName;
      sessionStorage.setItem('VPNameSelected', res.valuePropositionName);
    });
  }

  ngOnDestroy() {
    this.chartbgService.setColor('');
  }

  backFunction() {
    this._location.back();
  }

}
