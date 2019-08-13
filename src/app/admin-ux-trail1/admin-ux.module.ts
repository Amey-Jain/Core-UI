import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    data: {
      title: 'Admin Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        data: {
          title: 'Admin Dashboard'
        }
      }
    ]
  }
  ];

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminUXModule { }
