import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { '(window:scroll)': 'updateHeader($event)'}
})

export class HomeComponent implements OnInit {

	isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 80;

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
			ease: (t: number, b: number, c: number, d: number): number => {
				// easeInOutExpo easing
				if (t === 0) {
					return b;
				}
				if (t === d) {
					return b + c;
				}
				if ((t /= d / 2) < 1) {
					return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				}
					return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
			}
		};
	}

	updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
        console.log("kasjdh");

    } else {
        this.isScrolled = false;
    }
	}

  ngOnInit() {
    console.log('Hello Home');

  }

}
