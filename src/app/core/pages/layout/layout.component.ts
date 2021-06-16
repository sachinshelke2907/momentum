import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isExpanded = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  toggleActive(event:any){
    event.preventDefault();
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
  }

  navAction(ev:string){
    if(ev=='dashboard'){
      this.route.navigate(['/dashboard'])
    }
    if(ev=='menu1'){
      this.route.navigate(['/example1'])
    }
    if(ev=='menu2'){
      this.route.navigate(['/example2'])
    }
  }

}
