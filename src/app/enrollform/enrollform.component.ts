import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-enrollform',
  templateUrl: './enrollform.component.html',
  styleUrls: ['./enrollform.component.css']
})
export class EnrollformComponent implements OnInit {

  public preference = ['Matlab', 'Vue', 'Jquery'];

  userModel = new User("Bob","Bob@gmail.com","09089145652","Vue","morning", true);

  constructor() { }

  ngOnInit(): void {
  }

  subFormData(){
    console.log(this.userModel);
  }

}
