import { Directive, ElementRef, Input, HostListener } from '@angular/core';

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

  private _defaultColor: string = 'red';

  @Input('myHighlight') highlightColor: string;

  @Input() set defaultColor (color: string) {
    this._defaultColor = color || this._defaultColor;
  }

  // ElementRef use to access the DOM element
  constructor (private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.highlight(this.highlightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.highlight(null);
  }

  private highlight (color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
