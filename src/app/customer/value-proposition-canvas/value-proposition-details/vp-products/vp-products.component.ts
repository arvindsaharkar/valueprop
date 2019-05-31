import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { VpProducts } from '../vp-products';
import { VpProductsService } from '../vp-products.service';

@Component({
  selector: 'app-vp-products',
  templateUrl: './vp-products.component.html',
  styleUrls: ['./vp-products.component.css']
})
export class VpProductsComponent implements OnInit {
  customerId: number;
  vpId: number;
  vpProduct: VpProducts;
  vpProducts: any;
  msg: string;
  questionTypeId: number;
  segmentName = 'products';
  screenTitle = 'Products and Services';
  apiStr = '';
  customerName: string;
  valueProposition: string;

  constructor(private route: ActivatedRoute, private router: Router, private vppService: VpProductsService) { }

  ngOnInit() {
    this.customerId = null;
    this.vpId = +this.route.snapshot.paramMap.get('vpId');
    this.segmentName = this.route.snapshot.paramMap.get('segmentName');
    this.valueProposition = sessionStorage.getItem('VPNameSelected');

    this.getSegments();

    this.vppService.getVPProductByVPId(this.vpId, this.apiStr).subscribe((res) => {
      if ( typeof res === 'number') {
        this.questionTypeId = res;
        this.vpProducts = [];
      } else {
        // Mapping all segment json's to one
        const dummyObj = this.mapAllSegment2ProductJSON(res);

        this.vpProducts = dummyObj;

        console.log('this.vpProducts');
        console.log(this.vpProducts);
        this.questionTypeId = this.vpProducts[0].questionTypeId;
      }

      sessionStorage.setItem('VPPrdts', JSON.stringify(this.vpProducts));
      sessionStorage.setItem('VPQTID', JSON.stringify(this.questionTypeId));

      const creationStatus = sessionStorage.getItem('VPCreatStatus');
      if ( creationStatus !== null ) {
        this.msg = '<div class="alert alert-success">' + creationStatus + '</div>';
        sessionStorage.removeItem('VPCreatStatus');
      }
    });
  }

  getSegments() {
    switch ( this.segmentName ) {
      case 'products': {
        this.apiStr = 'product/';
        this.screenTitle = 'Products and Services';
        break;
      }
      case 'gain-creators': {
        this.apiStr = 'gaincreator/';
        this.screenTitle = 'Gain Creator';
        break;
      }
      case 'pain-relievers': {
        this.apiStr = 'painreliever/';
        this.screenTitle = 'Pain Reliever';
        break;
      }
      case 'customer-jobs': {
        this.apiStr = 'customerjob/';
        this.screenTitle = 'Customer Job';
        break;
      }
      case 'gains': {
        this.apiStr = 'customergain/';
        this.screenTitle = 'Customer Gain';
        break;
      }
      case 'pains': {
        this.apiStr = 'customerpain/';
        this.screenTitle = 'Customer Pain';
        break;
      }
    }
  }

  mapAllSegment2ProductJSON(res: any){
    return JSON.parse(JSON.stringify(res)
    .replace(/painRelieverDesc/g, 'productDesc').replace(/painRelieverId/g, 'productId')
    .replace(/customerJobDesc/g, 'productDesc').replace(/customerJobId/g, 'productId')
    .replace(/customerGainDesc/g, 'productDesc').replace(/customerGainId/g, 'productId')
    .replace(/customerPainDesc/g, 'productDesc').replace(/customerPainId/g, 'productId')
    .replace(/gainCreatorDesc/g, 'productDesc').replace(/gainCreatorId/g, 'productId')
  ) ;
  }

  deleteVPP(vppId: number) {
    if ( confirm ( 'Are you sure you want to delete this?' ) ) {
      this.vppService.deleteVPProduct(vppId, this.apiStr).subscribe((res1) => {
        this.vppService.getVPProductByVPId(this.vpId, this.apiStr).subscribe((res) => {
          // Mapping all segment json's to one
          const dummyObj = this.mapAllSegment2ProductJSON(res);
          this.vpProducts = dummyObj;
          this.msg = '<div class="alert alert-success">' + this.screenTitle + ' deleted Successfully</div>';
          sessionStorage.setItem('VPPrdts', JSON.stringify(this.vpProducts));
          sessionStorage.setItem('VPCreatStatus', this.screenTitle + ' deleted Successfully');
          this.router.navigate(['/', 'vp', this.vpId, this.segmentName]);
        });
      });
    }
  }

}
