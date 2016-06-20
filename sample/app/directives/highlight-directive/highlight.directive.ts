import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  /*
    @Directive requires a CSS selector to identify the HTML in the template that
    is associated with our directive. The CSS selector for an attribute is the
    attribute name in square brackets. Our directive's selector is [myHighlight].
    Angular will locate all elements in the template that have an attribute named
    myHighlight.
  */

  selector: '[myHighlight]'
})

export class HighlightDirective {
  // ElementRef use to access the DOM element
  constructor (el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
