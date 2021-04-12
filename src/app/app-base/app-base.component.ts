import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.scss']
})
export class AppBaseComponent implements OnInit {
  title = 'angular-test';

  constructor() { }

  ngOnInit(): void {
  }

}
