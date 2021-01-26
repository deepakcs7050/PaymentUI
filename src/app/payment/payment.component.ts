import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  submitted = false;

  constructor( private service:PaymentService) { }

  ngOnInit(): void {
  }

  get p() {
    return this.paymentForm.controls;
  }

  paymentForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required,
      Validators.minLength(13),
      Validators.maxLength(16),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [Validators.required]),
      cvc: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^[0-9]*$/)
    ]),
    cardHolderName:new FormControl('', [Validators.required, Validators.minLength(3),]),
  });

  pay(){
    this.submitted = true;
    if (this.paymentForm.invalid) {
      return;
    }
    this.paymentForm.value.expiryMonth+ this.paymentForm.value.expiryYear

   const  data = JSON.stringify(this.paymentForm.value);

    alert(data)
    console.log(this.paymentForm.value)
    this.service.payement(this.paymentForm.value).subscribe(data => {
      console.log(data)
    
    });
  }

  onlyNumberKey(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
