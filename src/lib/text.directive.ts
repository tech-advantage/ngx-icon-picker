import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[text]',
  host    : {
    '(input)': 'changeInput($event.target.value)'
  }
})
export class TextDirective {
  @Output('newValue') newValue = new EventEmitter<any>();
  @Input('text') text: any;

  changeInput(value: string) {
    this.newValue.emit(value);
  }
}
