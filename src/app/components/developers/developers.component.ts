import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor() { }

  firstName;
  desc;

  model = {
    firstName:"",
    desc:""
  };

  ngOnInit() {
  }

  developers = [];

  onSubmit() {

    this.developers.unshift({ firstName: this.model.firstName, desc: this.model.desc });
 
  }

  remove(developer, index){
      this.developers.splice(index, 1);
  }
}
