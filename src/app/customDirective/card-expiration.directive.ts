import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardExpiration]',
  standalone: true
})
export class CardExpirationDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {

    const value = (event.target as HTMLInputElement).value.replace(/\D/g, '');

    this.el.nativeElement.value = this.formatExpiration(value);

  }

  private formatExpiration(value: string): string {
    if (value.length === 1) {
      return value;
    }
    const firstFourChars = value.slice(0, 4);

    const formatted = firstFourChars.substring(0, 2) + (value.length > 2 ? '/' : '') + firstFourChars.substring(2, 4);

    return formatted;
  }

}
