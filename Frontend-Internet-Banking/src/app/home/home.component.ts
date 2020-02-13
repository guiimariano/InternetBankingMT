import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

<<<<<<< HEAD
  mobile = false;
  constructor() { }
=======
  constructor(
  ) { }
>>>>>>> 846008d99eb638092a2cd423f6fa0c85e1d2d78d

  ngOnInit() {
    if (window.screen.width <= 425) {
      this.mobile = true;
    }
  }

}
