import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl,FormBuilder, Validators,FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { log } from 'console';
import { ValidatorService } from './validators/validator.service';
import { CustomCardNumberDirective } from './customDirective/custom-card-number.directive';
import { CardExpirationDirective } from './customDirective/card-expiration.directive';
import { CardNameDirective } from './customDirective/card-name.directive';
import { CardCvvDirective } from './customDirective/card-cvv.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CustomCardNumberDirective,
    CardExpirationDirective,
    CardNameDirective,
    CardCvvDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  creditCardForm!:FormGroup;

  constructor(private fb:FormBuilder, private validatorService:ValidatorService){

  }
  ngOnInit():void {
    this.creditCardFormCreate()
  }

  creditCardFormCreate(){
    this.creditCardForm=this.fb.group({
      name:[null,[
        Validators.required,
        this.validatorService.cardNameValidator]],
      cardNumber:[null,[
        Validators.required,
        Validators.minLength(19)
      ]],
      expirationDate:[null,[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ]],
      cvv:[null,[
        Validators.required,
        Validators.minLength(3)
      ]]
    })
  }

  onSubmit(){
    //Number
    const formNumberValues=this.creditCardForm.value
    const cleanedCardNumber = formNumberValues.cardNumber.replace(/[-\s]/g, '').slice(0, 16);
    formNumberValues.cardNumber = cleanedCardNumber;
    //ExpirationDate
    const formExpirationDate = this.creditCardForm.value;
    formExpirationDate.expirationDate = formExpirationDate.expirationDate.slice(0, 5);
    //Cvv
    const formCvv=this.creditCardForm.value;
    formCvv.cvv=formCvv.cvv.slice(0,3)

    console.log(this.creditCardForm.value)
  }
  onReset() {
    this.creditCardForm.reset();
  }
}
