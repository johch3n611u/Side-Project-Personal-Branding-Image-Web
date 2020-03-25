import { HostListener, Input, Renderer2, ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {
  @Input() appBsButton;
  @Input() mouseDownClass;
  constructor(private el: ElementRef, private renderer2: Renderer2) { }
  ngOnInit() {
    this.appBsButton = this.appBsButton || 'primary';
    this.mouseDownClass = this.mouseDownClass || 'danger';
    this.renderer2.addClass(this.el.nativeElement, 'btn');
    this.renderer2.removeClass(this.el.nativeElement, `btn-${this.appBsButton}`);
  }


  @HostListener('mousedown') onMouseDown() {
    this.renderer2.addClass(this.el.nativeElement, `btn-${this.appBsButton}`);
    this.renderer2.removeClass(this.el.nativeElement, `btn-${this.mouseDownClass}`);
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer2.addClass(this.el.nativeElement, `btn-${this.mouseDownClass}`);
    this.renderer2.removeClass(this.el.nativeElement, `btn-${this.appBsButton}`);
  }
}
