import { UserForm } from './../userForm';
import { CrudService } from './../crud.service';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit{

  allUser!: any;

  constructor(private fb: FormBuilder, private crudService: CrudService){}

  addUser(myForm: any){
    this.crudService.createuser(this.myForm.value).subscribe((response)=>{
      console.log('User has been added');
      this.getLatestUser();
    })
  }

  getLatestUser(){
    this.crudService.getAllUser().subscribe((response)=>{
      this.allUser = response;
    });
  }


  deleteUser(user: any){
    this.crudService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser(){
    this.crudService.updateUser(this.myForm.value).subscribe(()=>{
      this.getLatestUser();
    })
  }

  editUser(user: any){
    this.myForm.setValue({
      username: user.username,
      email :  user.email,
      password :  user.password,
      address: {
        city:  user.address.city,
        state:  user.address.state,
        postal_code:  user.address.postal_code,
       },
    id: user.id
  });
  }



  get alternateEmails(){
    return this.myForm.get('alternateEmails') as FormArray;
  }

  addNewField(){
    this.alternateEmails.push(this.fb.control(''));
  }

  myForm!: FormGroup;

  ngOnInit(): void {
    this.getLatestUser();

    this.myForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postal_code: [''], 
      }),
      id: ['']
     // alternateEmails : this.fb.array([])
      
    });
  }
 

 /* loadApiData(){
    this.myForm.setValue({
      username :  'Boskitech',
      email :  'Boski@gmail.com',
      password :  'password',
      address: {
      city:  'Kaduna',
      state:  'Kaduna',
      postal_code:  '800219',
    }

    
  });}

  unloadApiData(){
    this.myForm.setValue({
      username :  '',
      email :  '',
      password :  '',
      address: {
      city:  '',
      state:  '',
      postal_code:  ''
    }

    
  });}*/

}
