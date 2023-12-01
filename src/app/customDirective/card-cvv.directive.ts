import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardCvv]',
  standalone: true
})
export class CardCvvDirective {

  constructor(private el:ElementRef) { }

  @HostListener('input',['$event'])
  onInput(event:Event){
    let value=this.el.nativeElement.value

    value = value.replace(/\D/g, '');

    value = value.slice(0, 3);
    this.el.nativeElement.value = value;
  }

}
