import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  appName = "This is a my first angular 8 ."

  constructor() { }

  ngOnInit(): void {
  }

}
