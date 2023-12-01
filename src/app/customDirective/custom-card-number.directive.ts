import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomCardNumber]',
  standalone: true
})
export class CustomCardNumberDirective {

  constructor(private el:ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    // only number
    let value = (event.target as HTMLInputElement).value.replace(/\D/g, '');

    // 4
    const groups = value.match(/.{1,4}/g);
    console.log(groups)

    if (groups) {
      // - add
      value = groups.join('-');
    }

    if(value.length>16){
      value=value.slice(0,19)
    }
    // change
    this.el.nativeElement.value = value;

  }
}
