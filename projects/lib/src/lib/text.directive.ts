import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[text]'
})
export class TextDirective {
  @Output() newValue = new EventEmitter<any>();
  @Input() text: any;

  @HostListener('input', ['$event.target.value'])
  changeInput(value: string) {
    this.newValue.emit(value);
  }
}
