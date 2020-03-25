import { HostListener, Input, Renderer2, ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'button[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  @Input() appBsButton;
  @Input() mouseDownClass; // 額外的@Input

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    // ${} 樣板字面值（Template literals） es6 語法 ...
    // https://pjchender.blogspot.com/2017/01/javascript-es6-template-literalstagged.html
    this.appBsButton = this.appBsButton || 'primary';
    this.mouseDownClass = this.mouseDownClass || 'danger';
    this.renderer2.addClass(this.el.nativeElement, 'btn');
    this.renderer2.removeClass(this.el.nativeElement, `btn-${this.appBsButton}`);
  }

  // SPA 專用監聽器，元素消失就監聽器消失 @HostListener

  @HostListener('mousedown') onMouseDown() {
    // 移除原來的樣式
    this.renderer2.addClass(this.el.nativeElement, `btn-${this.appBsButton}`);
    // 加入mousedown的樣式
    this.renderer2.removeClass(this.el.nativeElement, `btn-${this.mouseDownClass}`);
  }

  @HostListener('mouseup') onMouseUp() {
    // 移除mousedown的樣式
    this.renderer2.addClass(this.el.nativeElement, `btn-${this.mouseDownClass}`);
    // 加入原來的樣式
    this.renderer2.removeClass(this.el.nativeElement, `btn-${this.appBsButton}`);
  }
}

@Directive({
  selector: '[appBsButton]'
})
export class BsDirective implements OnInit {

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  // Renderer -> Renderer2
  // setElementClass -> true : addClass , false : removeClass
  // https://stackoverflow.com/questions/42858098/angular2-renderer-setelementclass-isadd-options-does-not-work
  ngOnInit() {
    const button = (this.el.nativeElement as HTMLElement);
    this.renderer2.addClass(this.el.nativeElement, 'btn');
    this.renderer2.addClass(this.el.nativeElement, 'btn-primary');
  }

}
