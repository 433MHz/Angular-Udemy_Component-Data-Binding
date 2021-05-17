import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentDataBinding';

  dataFromFirstComponent: string;
  dataFromSecondComponent: string;

  getDataFromChild(event:{fromFirstComponent: string}){
    this.dataFromFirstComponent = event.fromFirstComponent;
  }
}
