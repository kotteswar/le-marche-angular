import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();
  }

  initForm() {

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });

  }

  // goForward(stepper: MatStepper) {
  //   console.log('Clicked the forward');
  //   stepper.next();
  // }

  // goBack(stepper: MatStepper) {
  //   stepper.previous();
  // }

}
