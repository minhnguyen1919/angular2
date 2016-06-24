import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})

export class UnlessDirective {

  constructor(
    // access the template via TemplateRef
    private templateRef: TemplateRef<any>,

    // access the renderer via ViewContainerRef
    private viewContainer: ViewContainerRef
    ) {
  }

  @Input() set unless (condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
