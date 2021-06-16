import { NgModule } from '@angular/core';
import * as pages from './pages';
import { coreComponents } from './components';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CoreRoutingModule } from './core-routing.module';
import { UiKitModule } from './ui-kit.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [...coreComponents,...pages.corePages],
  imports: [
    UiKitModule,
    CoreRoutingModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    AgGridModule.withComponents(null),
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class CoreModule { }
