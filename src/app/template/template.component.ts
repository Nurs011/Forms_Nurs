import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: ['input.ng-invalid{border-left:5px solid red;}' +
  'input.ng-valid{border-left: 5px solid green;}']
})
export class TemplateComponent implements OnInit {
  // tslint:disable-next-line:typedef
  onSubmit(value: any){
    console.log(value);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
