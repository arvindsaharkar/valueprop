export class ValuePropositionCanvas {
    valuePropositionId: number;
    valuePropositionName: string;
    valuePropositionDesc: string;
    customerId: number;

    constructor(custId: number) {
      this.valuePropositionId = 0;
      this.valuePropositionName = '';
      this.valuePropositionDesc = '';
      this.customerId = null;
    }
}
