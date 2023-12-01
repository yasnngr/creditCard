import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  cardNameValidator:ValidatorFn=(control:AbstractControl)=>{
    //test
    const value: string = control.value;
    if(!value||value.length>=3){
      return null;
    }else{
      return {invalidCardName:true}
    }
  }

}

