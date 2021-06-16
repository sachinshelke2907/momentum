import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import * as pages from './pages';

const routes: Routes = [
  { path: '', component: LayoutComponent,
        children: [
          { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
          { path: 'dashboard', component: pages.DashboardComponent },
          { path: 'example1', component: pages.DatepickerExampleComponent },
          { path: 'example2', component: pages.SearchFilterComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
