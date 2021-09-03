import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveprogram',
  templateUrl: './reactiveprogram.component.html',
  styleUrls: ['./reactiveprogram.component.css']
})
export class ReactiveprogramComponent implements OnInit {

 uservalue!: string;

  constructor(private fb: FormBuilder) {
   }

    formValidation = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password:['', Validators.required],
    confirm_password: ['', Validators.required]
  });

  

  click(){
    this.uservalue = this.formValidation.controls['username'].value;
  }

  ngOnInit(): void {
    
  }

}
