import { Component, ElementRef, HostListener, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

  topPosToStartShowing = 100;
  @ViewChild('target') private myScrollContainer: ElementRef<HTMLInputElement> = {} as ElementRef;

  @HostListener('window:scroll')
ngOnInit(): void {
  
}

gotoTop() {
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
}

}
