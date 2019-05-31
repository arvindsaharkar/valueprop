import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BusinessModelService } from '../business-model.service';
import { BmChartService } from './bm-chart.service';
import { ValuePropositionCanvasService } from '../../value-proposition-canvas/value-proposition-canvas.service';
@Component({
  selector: 'app-bm-chart',
  templateUrl: './bm-chart.component.html',
  styleUrls: ['./bm-chart.component.css']
})
export class BmChartComponent implements OnInit {
  bm: any;
  bmId: number;
  msg = '';
  showModal = false;
  showModalVP = false;
  selectedSegment = '';
  selectedIdFromSegment = 0;
  finalEditedObj: any;
  dummyObj = {
    id: 0,
    desc: '',
    businessModelId: 0
  };
  vpArray:any;
  selectedVP = [];
  addedItem = [];
  deletedItem = [];
  bm_vp_Arr = [];
  searchVP = '';
  popupTitle = 'Value Proposition';

  constructor(
    private bmService: BusinessModelService,
    private bmChartService: BmChartService,
    private vpService: ValuePropositionCanvasService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
      this.bmId = +this.route.snapshot.paramMap.get('bmId');
      this.getAllDetailsBM();
      this.getValueProposition();
    }

    getValueProposition() {
      this.vpService.getAllValueProposition().subscribe((res) => {
        this.vpArray = res;
      });
    }
  
    getAllDetailsBM() {
      this.bmService.getAllDetailsBMById(this.bmId).subscribe((res:any) => {
        this.bm = res;
        let tempArr = [];
        let tempArr1 = [];
        res.businessModelValuePropositions.forEach(function(itm) {
          tempArr.push(itm.valueProposition.valuePropositionId);
          tempArr1[itm.valueProposition.valuePropositionId] = itm.businessModelValuePropositionId;
        });

        this.selectedVP = tempArr;
        this.bm_vp_Arr = tempArr1;
      });
    }

    deleteBM(segment:string, segmentId:number) {
      this.getPopupTitle(segment);
      if ( confirm ( 'Are you sure you want to delete this?' ) ) {
        this.bmChartService.deleteBMSegment(segmentId, segment).subscribe((res) => {
          this.getAllDetailsBM();
          this.msg = `<div class="alert alert-success">Business Model ${this.popupTitle} deleted successfully</div>`;
        });
      }
      event.stopPropagation();
    }

    editVP(vpId: number) {
      this.popupTitle = "Value Proposition";
      if(vpId != 0){
        console.log(this.bm_vp_Arr);
        let bmIdSelected = 0;
        this.bm_vp_Arr.forEach((itm,idx) => {
          if(itm == vpId){
            bmIdSelected = idx;
          }
        });
        this.router.navigate(['/', 'vp', bmIdSelected, 'chart']);
      } else {
        this.toggleModalVP();
      }
    }

    getPopupTitle( segment: string) {
      switch(segment) {
        case 'keypartner': {
          this.popupTitle = "Key Partner";
          break;
        }
        case 'keyactivity': {
          this.popupTitle = "Key Activity";
          break;
        }
        case 'keyresource': {
          this.popupTitle = "Key Resources";
          break;
        }
        case 'businessmodelvalueproposition': {
          this.popupTitle = "Value Propositions";
          break;
        }
        case 'customerrelation': {
          this.popupTitle = "Customer Relationships";
          break;
        }
        case 'channel': {
          this.popupTitle = "Channels";
          break;
        }
        case 'customersegment': {
          this.popupTitle = "Customer Segments";
          break;
        }
        case 'coststructure': {
          this.popupTitle = "Cost Structure";
          break;
        }
        case 'revenuestream': {
          this.popupTitle = "Revenue Streams";
          break;
        }
      }
    }

    editBM(segment: string, segmentId: number) {
      // console.log(segment);
      this.getPopupTitle(segment);
      this.selectedSegment = segment;
      this.selectedIdFromSegment = segmentId;
      this.dummyObj = {
        id: 0,
        desc: '',
        businessModelId: this.bmId
      };

      if ( segmentId != 0) {
        this.getSegmentDetails(segment, segmentId);
      }

      this.toggleModal();
    }

    saveSegment() {
      const segment = this.selectedSegment;
      // console.log(segment);
      this.reverseMapping(segment);
      // console.log(this.finalEditedObj);

      if ( this.selectedIdFromSegment == 0) {
        delete this.dummyObj.id;
        this.reverseMapping(segment);
        this.bmChartService.createBMSegment(this.finalEditedObj, segment).subscribe((res) => {
          this.getAllDetailsBM();
          this.msg = `<div class="alert alert-success">Business Model ${this.popupTitle} created successfully</div>`;
          this.toggleModal();
        });
      } else {
        this.reverseMapping(segment);
        this.bmChartService.updateBMSegment(this.finalEditedObj, segment).subscribe((res) => {
          this.getAllDetailsBM();
          this.msg = `<div class="alert alert-success">Business Model ${this.popupTitle} edited successfully</div>`;
          this.toggleModal();
        });
      }
    }

    reverseMapping(segment: string) {
      switch(segment) {
        case 'keypartner': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'keyPartnerDesc').replace('id', 'keyPartnerId'));
          break;
        }
        case 'keyactivity': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'keyActivityDesc').replace('id', 'keyActivityId'));
          break;
        }
        case 'keyresource': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'keyResourceDesc').replace('id', 'keyResourceId'));
          break;
        }
        case 'customerrelation': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'customerRelationDesc').replace('id', 'customerRelationId'));
          break;
        }
        case 'channel': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'channelDesc').replace('id', 'channelId'));
          break;
        }
        case 'customersegment': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'customerSegmentDesc').replace('id', 'customerSegmentId'));
          break;
        }
        case 'coststructure': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'costStructureDesc').replace('id', 'costStructureId'));
          break;
        }
        case 'revenuestream': {
          this.finalEditedObj = JSON.parse(JSON.stringify(this.dummyObj).replace('desc', 'revenueStreamDesc').replace('id', 'revenueStreamId'));
          break;
        }
      }
    }

    mapSegmentElement(segment: string, segmentId: number) {
      let segmentObj = JSON.parse(JSON.stringify(this.getSegmentDetails(segment, segmentId)))
        .replace('keyPartnerDesc', 'desc').replace('keyPartnerId', 'id')
        .replace('keyActivityDesc', 'desc').replace('keyActivityId', 'id')
        .replace('revenueStreamDesc', 'desc').replace('revenueStreamId', 'id')
        .replace('keyResourceDesc', 'desc').replace('keyResourceId', 'id')
        .replace('customerRelationDesc', 'desc').replace('customerRelationId', 'id')
        .replace('costStructureDesc', 'desc').replace('costStructureId', 'id')
        .replace('channelDesc', 'desc').replace('channelId', 'id')
        .replace('customerSegmentDesc', 'desc').replace('customerSegmentId', 'id');

        this.dummyObj = segmentObj[0];
        // console.log(this.dummyObj);
    }

    getSegmentDetails(segment: string, segmentId: number) {
      this.bmChartService.getBMSegmentDetails(segmentId, segment).then((res) => {
        // console.log(res);
        this.dummyObj = JSON.parse(JSON.stringify(res)
        .replace('keyPartnerDesc', 'desc').replace('keyPartnerId', 'id')
        .replace('keyActivityDesc', 'desc').replace('keyActivityId', 'id')
        .replace('revenueStreamDesc', 'desc').replace('revenueStreamId', 'id')
        .replace('keyResourceDesc', 'desc').replace('keyResourceId', 'id')
        .replace('customerRelationDesc', 'desc').replace('customerRelationId', 'id')
        .replace('costStructureDesc', 'desc').replace('costStructureId', 'id')
        .replace('channelDesc', 'desc').replace('channelId', 'id')
        .replace('customerSegmentDesc', 'desc').replace('customerSegmentId', 'id'))[0];
        // console.log(this.dummyObj);
      },error => {
        console.log(error);
      });
    }

    toggleModal() {
      // console.log(this.showModal);
      this.showModal = !this.showModal;
      // console.log(this.showModal);
    }

    toggleModalVP() {
      // console.log(this.showModalVP);
      this.showModalVP = !this.showModalVP;
      // console.log(this.showModalVP);
    }

    getVPChecked(event, vpId: number) {
      if(event.srcElement.checked){
        // checked
        this.addedItem.push(vpId);
        this.deletedItem = this.deletedItem.filter(item => item !== vpId);
      } else {
        // unchecked
        this.deletedItem.push(vpId);
        this.addedItem = this.addedItem.filter(item => item !== vpId);
      }
      console.log(this.deletedItem);
      console.log(this.addedItem);
    }

    saveVP() {
      this.deletedItem.forEach((itm, index, array) => {
        if(this.bm_vp_Arr[itm] !== undefined) {
          this.bmChartService.deleteBMSegment(this.bm_vp_Arr[itm]).subscribe((res) => {
            if(index == (array.length -1)) {
              this.getAllDetailsBM();
              this.getValueProposition();
            }
          });
        }
      });
      console.log('this.addedItem');
      this.addedItem.forEach((itm, index, array) => {
        if(this.selectedVP.indexOf(itm) === -1){
          let finalArr = {
            valuePropositionId: itm,
            businessModelId: this.bmId
          }
          console.log(finalArr);
          this.bmChartService.createBMSegment(finalArr).subscribe((res) => {
            if(index == (array.length -1)) {
              this.getAllDetailsBM();
              this.getValueProposition();
            }
          });
        }
      });
      this.toggleModalVP();
    }

    getVPBySearch() {
      if ( this.searchVP == '') {
        this.getValueProposition();
      } else {
        this.vpService.getValuePropositionByKeywords(this.searchVP).subscribe((res) => {
          this.vpArray = res;
        });
      }
    }
}