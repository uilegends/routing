import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  message: string = "This is child message";

  @Input() childData;

  @Output() messageEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
