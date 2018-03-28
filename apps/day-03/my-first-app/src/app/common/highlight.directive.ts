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
  defaultColor = 'yellow';
  @Input() color: string;

  constructor(private hostElement: ElementRef) {}

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
