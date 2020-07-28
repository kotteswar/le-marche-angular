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
  acceptParam = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();
  }

  initForm() {

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobNum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [''],
    });

  }

  submitForm() {
    // console.log(this.contactForm);
  }

  checkAccept(event) {
      if (event.target.checked === true) {
        this.acceptParam = true;
      } else {
        this.acceptParam = false;
      }
  }

  // goForward(stepper: MatStepper) {
  //   console.log('Clicked the forward');
  //   stepper.next();
  // }

  // goBack(stepper: MatStepper) {
  //   stepper.previous();
  // }

}
