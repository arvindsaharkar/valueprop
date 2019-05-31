import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BusinessModelService } from '../business-model.service';
import { BusinessModel } from '../business-model';

@Component({
  selector: 'app-bm-edit',
  templateUrl: './bm-edit.component.html',
  styleUrls: ['./bm-edit.component.css']
})
export class BmEditComponent implements OnInit {
  bmId: number;
  bm: any;
  oper: string;

  constructor(
    private bmService: BusinessModelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.bmId = +this.route.snapshot.paramMap.get('bmId');

    this.bm = new BusinessModel();

    this.oper = 'Add';
    if (this.bmId !== 0) {
      this.oper = 'Edit';
      this.getBMById(this.bmId);
    }
  }

  getBMById(bmId: number) {
    this.bmService.getBMById(this.bmId).subscribe((res) => {
      this.bm = res;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.bm);

    if (this.bmId === 0) {
      delete this.bm.businessModelId;
      console.log('this.bm');
      console.log(this.bm);
      this.bmService.createBM(this.bm).subscribe((res) => {
        this.bm = res;
        sessionStorage.setItem('BMStatus', 'New Business Model created Successfully');
        this.router.navigate(['/', 'bm']);
      }, error => {

      });
    } else {
      this.bmService.updateBM(this.bm).subscribe((res) => {
        this.bm = res;
        sessionStorage.setItem('BMStatus', 'Existing Business Model edited Successfully');
        this.router.navigate(['/', 'bm']);
      }, error => {
      });
    }

  }

}
