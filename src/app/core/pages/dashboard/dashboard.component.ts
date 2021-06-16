import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import * as moment from 'moment';
import 'moment/locale/fr';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LocaleConfig } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  innerWidth: any;
  
  columnDefs = [{ field: "account", sortable: true, filter: true }, 
  { field: "fund", sortable: true, filter: true }, 
  { field: "admin_account", sortable: true, filter: true },
  { field: "trading_activity", sortable: true, filter: true },
  { field: "value_date", sortable: true, filter: true },
  { field: "amount", sortable: true, filter: true },
  { field: "total", sortable: true, filter: true }];

  rowData = [
    { account: "26187600", fund: "CRAW", admin_account:"WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"  },
    { account: "6799174446", fund: "CUU_LTD", admin_account: "CTNH2CANSO", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02" },
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02" },
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"},
    { account: "679917446", fund: "CUU_LTD", admin_account: "CTNH2CANSO", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"},
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU ", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"},
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"},
    { account: "679917446", fund: "CUU-LTD", admin_account:"CTNH2CANSO", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"},
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02" },
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02"},
    { account: "679917446", fund: "CUU_LTD", admin_account: "CTNH2CANSO", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02" },
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02" },
    { account: "26187600", fund: "CRAW", admin_account: "WFNH2CRWCU", trading_activity:"", value_date:"Sept-04-2020", amount:"16,321.02", total:"303,321.02" },
    
  ];

  constructor() { 
    
  }

  ngOnInit(): void {

  }

}
