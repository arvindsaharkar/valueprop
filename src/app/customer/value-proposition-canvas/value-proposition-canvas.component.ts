import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ValuePropositionCanvasService } from './value-proposition-canvas.service';
import { ValuePropositionCanvas } from './value-proposition-canvas';

@Component({
  selector: 'app-value-proposition-canvas',
  templateUrl: './value-proposition-canvas.component.html',
  styleUrls: ['./value-proposition-canvas.component.css']
})
export class ValuePropositionCanvasComponent implements OnInit {
  canvases: any;
  msg: string;
  customerId: number;
  customerName: string;
  searchVP = '';

  constructor(
    private canvasService: ValuePropositionCanvasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.customerId = null;
    this.getValueProposition();
  }

  getValueProposition() {
    this.canvasService.getAllValueProposition().subscribe((res) => {
      this.canvases = res;
      const creationStatus = sessionStorage.getItem('VPCreatStatus');
      if ( creationStatus !== null ) {
        this.msg = '<div class="alert alert-success">' + creationStatus + '</div>';
        sessionStorage.removeItem('VPCreatStatus');
      }
    });
  }

  deleteVP(vpId: number) {
    if ( confirm ( 'Are you sure you want to delete this Value Proposition' ) ) {
      this.canvasService.deleteValueProposition(vpId).subscribe((res) => {
        this.getValueProposition();
        this.msg = '<div class="alert alert-success">Value Proposition deleted successfully</div>';
        this.router.navigate(['/', 'vp']);
      });
    }
  }

  searchVPFunction() {
    if( this.searchVP === '') {
      this.getValueProposition();
    } else {
      this.canvasService.getValuePropositionByKeywords(this.searchVP).subscribe((res) => {
        this.canvases = res;
      });
    }
  }
}