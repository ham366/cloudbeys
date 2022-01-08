//import { animation, style, transition, trigger,animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // animations:[
    //trigger('fade',[
     
      //transition('void=>*',[
        //style({backgroundColor:'yellow',opacity:0}),
      //  animate(2000,style({backgroundColor:'white',opacity:1}))
    //  ])
  //  ])
 // ]
})
export class HomeComponent implements OnInit {
  containerFlag:boolean=false;
  constructor() { }
  ngOnInit(): void {
  }
  value = true;
  value1:any;

  // changed() {
  //   this.value1 = this.value;
  // }
}
