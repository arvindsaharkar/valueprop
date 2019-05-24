import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ValuePropositionCanvasService } from '../value-proposition-canvas.service';

@Component({
  selector: 'app-value-proposition-details',
  templateUrl: './value-proposition-details.component.html',
  styleUrls: ['./value-proposition-details.component.css']
})
export class ValuePropositionDetailsComponent implements OnInit {
  msg: string;
  customerId: number;
  vpId: number;
  vpDetails: any;
  customerName: string;
  valueProposition: string;

  constructor(private canvasService: ValuePropositionCanvasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.customerId = null;
    this.vpId = +this.route.snapshot.paramMap.get('vpId');

    this.getvalueProposition();

    this.canvasService.getAllDetailsValueProposition(this.vpId).subscribe((res) => {
      console.log(res);
      this.vpDetails = res;
      const creationStatus = sessionStorage.getItem('VPCreatStatus');
      if ( creationStatus !== undefined ) {
        this.msg = creationStatus;
        sessionStorage.removeItem('VPCreatStatus');
      }
    });
  }

  getvalueProposition() {
    this.canvasService.getValuePropositionById(this.vpId).subscribe((res: any) => {
      this.valueProposition = res.valuePropositionName;
      sessionStorage.setItem('VPNameSelected', res.valuePropositionName);
    });
  }

}
