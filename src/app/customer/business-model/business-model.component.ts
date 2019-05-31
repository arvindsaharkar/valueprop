import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BusinessModelService } from './business-model.service';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.css']
})
export class BusinessModelComponent implements OnInit {
  bmArray: any;
  msg: string;
  searchBM = '';
  bmId: number;

  constructor(
    private bmService: BusinessModelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.bmId = +this.route.snapshot.paramMap.get('bmId');
    this.getAllBM();
  }

  getAllBM() {
    this.bmService.getAllBM().subscribe((res) => {
      this.bmArray = res;
      const creationStatus = sessionStorage.getItem('BMStatus');
      if ( creationStatus !== null ) {
        this.msg = '<div class="alert alert-success">' + creationStatus + '</div>';
        sessionStorage.removeItem('BMStatus');
      }
    });
  }

  deleteBM(bmId: number) {
    if ( confirm ( 'Are you sure you want to delete this Business Model' ) ) {
      this.bmService.deleteBM(bmId).subscribe((res) => {
        this.getAllBM();
        this.msg = '<div class="alert alert-success">Business Model deleted successfully</div>';
        this.router.navigate(['/','bm']);
      });
    }
  }

  searchBMFunction() {
    if ( this.searchBM === '') {
      this.getAllBM();
    } else {
      this.bmService.getBMByKeywords(this.searchBM).subscribe((res) => {
        this.bmArray = res;
      });
    }
  }

}
