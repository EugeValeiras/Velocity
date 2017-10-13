import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

export class ButtonColor {
  backgroundColor: string = '#006BFF';
  hoverBackgroundColor: string = '#373FFF';
  color: string = '#f5ff40';
}

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  _appButton: string;

  @Input() set appButton(value: string) {
    this._appButton = value;
    this.color = this.getStyle().color;
    this.bkColor = this.getStyle().backgroundColor;
  }

  primaryColor: ButtonColor = {
    backgroundColor: '#006BFF',
    hoverBackgroundColor: '#373FFF',
    color: '#f5ff40'
  };

  secondaryColor: ButtonColor = {
    backgroundColor: '#4eff5b',
    hoverBackgroundColor: '#4eff5b',
    color: '#4032ff'
  };

  warnColor: ButtonColor = {
    backgroundColor: '#ff6b25',
    hoverBackgroundColor: '#ff3b11',
    color: '#f2ff09'
  };

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2) {
  }

  @HostBinding('style.color') color;
  @HostBinding('style.background-color') bkColor;

  ngOnInit() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.getStyle().backgroundColor);
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'color', this.getStyle().color);

    // this.color = this.getStyle().color;
    // this.bkColor = this.getStyle().backgroundColor;
  }

  @HostListener('mouseover')
  mouseover() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.getStyle().hoverBackgroundColor);
    this.bkColor = this.getStyle().hoverBackgroundColor;
  }

  @HostListener('mouseout')
  mouseout() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.getStyle().backgroundColor);
    this.bkColor = this.getStyle().backgroundColor;
  }

  getStyle(): ButtonColor {
    switch (this._appButton) {
      case 'warn':
        return this.warnColor;
      case 'secondary':
        return this.secondaryColor;
      case 'primary':
      default:
        return this.primaryColor;
    }
  }


}
