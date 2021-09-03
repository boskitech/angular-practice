import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  data = "This is  Interpolation demo";

  public Myvalue: any;

  public newName: any;

  date : any = new Date;

  @Input() public parentData: any;

  @Output() public childEvent = new EventEmitter();

  getname():string{
    return "This Getname works!";
  }

  getData(value: any){
    this.Myvalue = value
  }



  clickevent(){
    this.childEvent.emit("Message from the child component");
  }

  ngOnInit(): void {
  }
  constructor() { }

}
