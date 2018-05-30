import { Directive, HostListener, EventEmitter,Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInfinityScroll]'
})
export class InfinityScrollDirective  implements OnInit {

  @Input() requestComplete: boolean;
  @Output() scrollDown = new EventEmitter();

  @HostListener("scroll", ['$event'])
  findBottomScroll(event) {
    const el = event.target;
    const bottomPoint = el.scrollHeight - el.clientHeight - el.lastChild.offsetHeight;
    if(el.scrollTop >= bottomPoint && this.requestComplete) {
          this.scrollDown.emit();
    }
  }

  constructor() {
   
  }

  ngOnInit() {
     
  }

}
