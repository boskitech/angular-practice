import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mycalculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @ViewChild('focusfield') focusElement!: ElementRef;

  myForm! :FormGroup;

  func! : string;

  display = true;

  ans!: number;

  calInput!: number;

  get newFields(){
    return this.myForm.get('newFields') as FormArray;
  }

  addNewField(){
    this.newFields.push(this.fb.control(''))  
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.myForm=this.fb.group({
      calInput: [ Validators.required],
      calInput2: [ Validators.required],
      newFields : this.fb.array([])
    });
  }
  
  add(){
   // this.newFields.push(this.fb.control([]));
   this.display = false;
   this.func = '+';
   setTimeout(()=>{ // this will make the execution after the above boolean has changed
    this.focusElement.nativeElement.focus();
  },0);
    return this.calInput = this.myForm.controls['calInput'].value;
    
  }

  sub(){
  //  this.newFields.push(this.fb.control([]))
    this.display = false;
    this.func = '-';
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.focusElement.nativeElement.focus();
    },0);
    return this.calInput = this.myForm.controls['calInput'].value;
  }

  mul(){
   // this.newFields.push(this.fb.control([]))
    this.display = false;
    this.func = '*';
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.focusElement.nativeElement.focus();
    },0);
    return this.calInput = this.myForm.controls['calInput'].value;
  }

  div(){
   // this.newFields.push(this.fb.control([]))
     this.display = false;
     this.func = '/';
     setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.focusElement.nativeElement.focus();
    },0);
    return this.calInput = this.myForm.controls['calInput'].value;
  }

  calc(){
    switch(this.func){
      case '+':
        this.ans = this.calInput + this.myForm.controls['calInput2'].value;
        break;
      case '-':
        this.ans = this.calInput - this.myForm.controls['calInput2'].value;
        break;  
      case '*':
        this.ans = this.calInput * this.myForm.controls['calInput2'].value;
        break;
       case '/':
        this.ans = this.calInput / this.myForm.controls['calInput2'].value;
        break;  
    }
  }

  clear(){
    this.myForm.reset();
  }

}
