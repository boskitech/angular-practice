import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  public weight! : number;
  public height! : number;
  public bodymass! : number;

  calc(){
    this.bodymass = (this.weight) / ((this.height/100) * (this.height/100));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
