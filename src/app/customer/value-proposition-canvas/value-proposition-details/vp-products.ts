export class VpProducts {
  productId: number;
  valuePropositionId: number;
  productDesc: string;
  questionTypeId: number;

  constructor(qtId: number, vpId: number) {
    this.productId = null;
    this.valuePropositionId = vpId;
    this.productDesc = '';
    this.questionTypeId = qtId;
  }
}
