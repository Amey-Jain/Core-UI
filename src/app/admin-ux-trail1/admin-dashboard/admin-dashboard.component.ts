import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = ['Instances in use', 'Instances free'];
  public doughnutChartData: number[] = [240, 100];
  public doughnutChartType = 'doughnut';
  public doughnutChartBgcolor: string[] = ['#000', '#001'];

  //This makes all arcs of same color
  public doughnutChartColours: Array<any> = [
  {
    backgroundColor: '#000',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { backgroundColor: '#fff',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }
];
  public doughnutChartOptions = { rotation: 1 * Math.PI, circumference: 1 * Math.PI };

  /* Trying to write text inside canvas element */


  constructor() { }

  ngOnInit() {
    }

}
