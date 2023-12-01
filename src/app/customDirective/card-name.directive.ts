import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardName]',
  standalone: true
})
export class CardNameDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const inputValue: string = this.el.nativeElement.value;
    const caretPos: number = this.el.nativeElement.selectionStart || 0;

    const sanitizedValue = inputValue.replace(/[^a-zA-Z ]/g, '');

    this.el.nativeElement.value = sanitizedValue;

    this.el.nativeElement.setSelectionRange(caretPos,caretPos);

    event.preventDefault();
  }
}
