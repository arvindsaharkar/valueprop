import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { VpProducts } from '../../vp-products';
import { VpProductsService } from '../../vp-products.service';
import { QuestionsService } from '../../questions.service';

@Component({
  selector: 'app-vp-product-edit',
  templateUrl: './vp-product-edit.component.html',
  styleUrls: ['./vp-product-edit.component.css']
})
export class VpProductEditComponent implements OnInit {
  customerId: number;
  vpId: number; // vp id
  vppId: number; // vp product id
  vpp: any;
  vpProducts: any;
  oper: string;
  qtId: number;
  questions: any;
  showModal = false;
  questOper = 'Add';
  questObj: any;
  questionsArrIndex = -1;

  segmentName = 'products';
  screenTitle = 'Products and Services';
  apiStr = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VpProductsService,
    private questService: QuestionsService) { }

  ngOnInit() {
    this.customerId = null;
    this.vpId = +this.route.snapshot.paramMap.get('vpId');
    this.vppId = +this.route.snapshot.paramMap.get('vppId');

    this.segmentName = this.route.snapshot.paramMap.get('segmentName');

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

    this.vpp = new VpProducts(null, this.vpId);

    this.qtId = +sessionStorage.getItem('VPQTID');
    this.getQuestions();

    this.oper = 'Add';
    if (this.vppId > 0) {
      this.oper = 'Edit';

      this.vpProducts = JSON.parse(sessionStorage.getItem('VPPrdts'));

      for (const ele of this.vpProducts) {
        if ( ele.productId === this.vppId) {
          this.vpp = this.mapAllSegment2ProductJSON(ele);
        }
      }
    }
  }

  mapAllSegment2ProductJSON(res: any) {
    return JSON.parse(JSON.stringify(res)
      .replace('painRelieverDesc', 'productDesc').replace('painRelieverId', 'productId')
      .replace('customerJobDesc', 'productDesc').replace('customerJobId', 'productId')
      .replace('customerGainDesc', 'productDesc').replace('customerGainId', 'productId')
      .replace('customerPainDesc', 'productDesc').replace('customerPainId', 'productId')
      .replace('gainCreatorDesc', 'productDesc').replace('gainCreatorId', 'productId')
    );
  }

  reverseMapAllSegmentFromProductJSON(res: any) {
    switch ( this.segmentName ) {
      case 'products': {
        break;
      }
      case 'gain-creators': {
        res = JSON.parse(JSON.stringify(res).replace('productDesc', 'gainCreatorDesc').replace('productId', 'gainCreatorId'));
        break;
      }
      case 'pain-relievers': {
        res = JSON.parse(JSON.stringify(res).replace('productDesc', 'painRelieverDesc').replace('productId', 'painRelieverId'));
        break;
      }
      case 'customer-jobs': {
        res = JSON.parse(JSON.stringify(res).replace('productDesc', 'customerJobDesc').replace('productId', 'customerJobId'));
        break;
      }
      case 'gains': {
        res = JSON.parse(JSON.stringify(res).replace('productDesc', 'customerGainDesc').replace('productId', 'customerGainId'));
        break;
      }
      case 'pains': {
        res = JSON.parse(JSON.stringify(res).replace('productDesc', 'customerPainDesc').replace('productId', 'customerPainId'));
        break;
      }
    }
    return res;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.vpp);

    if (this.vppId === 0) {
      delete this.vpp.productId;
      delete this.vpp.questionTypeId;
      const vppObj = this.reverseMapAllSegmentFromProductJSON(this.vpp);
      this.service.createVPProduct(vppObj, this.apiStr).subscribe((res) => {
        // this.vpp = res;
        sessionStorage.setItem('VPCreatStatus', 'New Value Propositiion ' + this.screenTitle + ' created Successfully');
        this.router.navigate(['/', 'vp', this.vpId, this.segmentName]);
      }, error => {

      });
    } else {
      const vppObj = this.reverseMapAllSegmentFromProductJSON(this.vpp);
      this.service.updateVPProduct(vppObj, this.apiStr).subscribe((res) => {
        // this.vpp = res;
        sessionStorage.setItem('VPCreatStatus', 'Existing Value Propositiion ' + this.screenTitle + ' edited Successfully');
        this.router.navigate(['/', 'vp', this.vpId, this.segmentName]);
      }, error => {
      });
    }

  }

  getQuestions() {
    this.questService.getQuestionByQTId(this.qtId).subscribe((res) => {
      this.questions = res;
    });
  }

  toggleModal() {
    console.log(this.showModal);
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

  editQuestion(questionsArrIndex: number = -1) {

    this.questionsArrIndex = questionsArrIndex;
    this.questObj = {
      questionTypeId: this.qtId,
      questionDesc: '',
      questionId: null
    };
    this.toggleModal();
    console.log(this.questionsArrIndex);
    if ( this.questionsArrIndex === -1) {
      this.questOper = 'Add';
    } else {
      this.questOper = 'Edit';
      this.questObj = this.questions[this.questionsArrIndex];
      console.log(this.questObj);
    }
  }

  saveQuestion() {
    if ( this.questionsArrIndex === -1) {
      delete this.questObj.questionId;
      this.questService.createQuestion(this.questObj).subscribe((res) => {
        this.getQuestions();
        this.toggleModal();
        /*this.vpp = res;
        sessionStorage.setItem('VPCreatStatus', 'New Value Propositiion Product and service created Successfully');
        this.router.navigate(['/', 'customer', this.customerId, 'vp', this.vpId, 'products']);*/
      }, error => {

      });
    } else {
      delete this.questObj.questionTypeId;
      this.questService.updateQuestion(this.questObj).subscribe((res) => {
        this.getQuestions();
        this.toggleModal();
        /*this.vpp = res;
        sessionStorage.setItem('VPCreatStatus', 'Existing Value Propositiion Product and service edited Successfully');
        this.router.navigate(['/', 'customer', this.customerId, 'vp', this.vpId, 'products']);*/
      }, error => {
      });
    }
  }

  deleteQuestion(questionId: number) {
    console.log(questionId);
    if ( confirm ( 'Are you sure you want to delete this Question?' ) ) {
      this.questService.deleteQuestion(questionId).subscribe((res) => {
        console.log(res);
        this.getQuestions();
      }, error => {
        console.log(error);
      });
    }
  }
}
