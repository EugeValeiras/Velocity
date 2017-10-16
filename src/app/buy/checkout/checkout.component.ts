import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  forbiddenZipCodes = [12345, 12346, 12347];

  checkoutForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'gender': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'zipCode': new FormControl('', [Validators.required, Validators.min(10000), this.validZipCode], [this.asyncValidatorForZipCode.bind(this)])
  });

  constructor() { }

  ngOnInit() {
  }

  submitCheckout(form: NgForm) {
    console.log(form);
  }

  validZipCode(control: FormControl): ValidationErrors|null {
    if (control.value === 12345) {
      return {zipCodeForbidden: true};
    }
    return null;
  }

  asyncValidatorForZipCode(control: FormControl): Promise<any>|Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenZipCodes.indexOf(control.value) !== -1) {
          resolve({zipCodeForbidden: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

}
