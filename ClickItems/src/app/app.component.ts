import {Component} from '@angular/core';
import {ClickItem} from './clickitem';

@Component({
   selector: 'app-root',
   styles:   [`li { display: inline; }`],
   template: `
    <div>
      <ul>
       <li><img (click)="onClick()" 
             width="100" height="100" src="src/sample1.png"></li>
       <li><img (click)="onClick()" 
             width="100" height="100" src="src/sample2.png"></li>
       <li><img (click)="onClick()" 
             width="100" height="100" src="src/sample3.png"></li>
      </ul>
    </div>

    <div>
    </div>
    `
})
export class AppComponent {
  onClick() {
    console.log("app.component.ts: you clicked me");
  } 
}
