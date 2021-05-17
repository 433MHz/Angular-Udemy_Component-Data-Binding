import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  @Output() data = new EventEmitter<{fromFirstComponent: string}>();
  dataFromFirst: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendDataFunction(){
    this.data.emit({fromFirstComponent: this.dataFromFirst})
  }

}
