import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  hostElement: ElementRef;
  defaultColor = 'yellow';
  @Input() color: string;

  constructor(el: ElementRef) {
    this.hostElement = el;
    console.log(this.hostElement);
  }

  ngOnInit() {
    this.setColor('');
  }

  @HostListener('mouseenter')
  onMouseOver() {
    const color = this.color || this.defaultColor;
    this.setColor(color);
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.setColor('');
  }

  private setColor(color) {
    this.hostElement.nativeElement.style.backgroundColor = color;
  }
}
