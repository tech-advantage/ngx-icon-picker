import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[text]',
  // tslint:disable-next-line: no-host-metadata-property
  host    : {
    '(input)': 'changeInput($event.target.value)'
  }
})
export class TextDirective {
  @Output() newValue = new EventEmitter<any>();
  @Input() text: any;

  changeInput(value: string) {
    this.newValue.emit(value);
  }
}
