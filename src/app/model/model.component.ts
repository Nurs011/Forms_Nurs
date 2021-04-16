import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  constructor() { }
  userForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl('Nursultan@gmail.com'),
    password: new FormControl()
  });
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.userForm.value);
  }
  ngOnInit(): void {
  }

}
