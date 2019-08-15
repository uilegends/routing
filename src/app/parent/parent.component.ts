import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parent = "Hi this is parent Value!!!"
  constructor() { }

  ngOnInit() {
  }

  getchild(event: any) {
    console.log('Child value' + event);

  }

}
