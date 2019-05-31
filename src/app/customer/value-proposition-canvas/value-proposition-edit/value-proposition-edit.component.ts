import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ValuePropositionCanvasService } from '../value-proposition-canvas.service';
import { ValuePropositionCanvas } from '../value-proposition-canvas';

@Component({
  selector: 'app-value-proposition-edit',
  templateUrl: './value-proposition-edit.component.html',
  styleUrls: ['./value-proposition-edit.component.css']
})
export class ValuePropositionEditComponent implements OnInit {
  customerId: number;
  vpId: number;
  vp: any;
  oper: string;
  alertTypeClass = 'alert alert-success';

  constructor(private route: ActivatedRoute, private router: Router, private service: ValuePropositionCanvasService) { }

  ngOnInit() {
    this.customerId = null;
    this.vpId = +this.route.snapshot.paramMap.get('vpId');

    this.vp = new ValuePropositionCanvas(this.customerId);

    this.oper = 'Add';
    if (this.vpId !== 0) {
      this.oper = 'Edit';
      this.service.getValuePropositionById(this.vpId).subscribe((res) => {
        console.log(res);
        this.vp = res;
      });
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.vp);

    if (this.vpId === 0) {
      delete this.vp.valuePropositionId;
      this.service.createValueProposition(this.vp).subscribe((res) => {
        this.vp = res;
        sessionStorage.setItem('VPCreatStatus', 'New Value Propositiion created Successfully');
        this.router.navigate(['/', 'vp']);
      }, error => {

      });
    } else {
      this.service.updateValueProposition(this.vp).subscribe((res) => {
        this.vp = res;
        sessionStorage.setItem('VPCreatStatus', 'Existing Value Propositiion edited Successfully');
        this.router.navigate(['/', 'vp']);
      }, error => {
      });
    }

  }

}
