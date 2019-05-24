import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alertTypeClass: string;

  constructor() { }

  ngOnInit() {
  }

  alert(alertType, msg: string) {
    switch (alertType) {
      case 'Success':
          this.alertTypeClass = 'alert alert-success';
          break;
      case 'Error':
        this.alertTypeClass =  'alert alert-danger';
        break;
      case 'Info':
        this.alertTypeClass =  'alert alert-info';
        break;
      case 'Warning':
        this.alertTypeClass =  'alert alert-warning';
        break;
    }
  }

  removeAlert(alert: any) {
    // this.alerts = this.alerts.filter(x => x !== alert);
  }

}
