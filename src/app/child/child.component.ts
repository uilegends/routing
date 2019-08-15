import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() child;
  @Output() childOut = new EventEmitter();
  child1: string;

  constructor() {
    this.child1 = "Hi this is child1`1111111111111111111111111111"
  }

  ngOnInit() {
  }

  clickinChild() {
    this.childOut.emit(this.child1);
  }

}
