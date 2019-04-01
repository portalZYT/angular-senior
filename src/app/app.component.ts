import {Component, OnInit} from '@angular/core';
import {StoreService} from "./services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  alertMsg:any;
  constructor(public storeService: StoreService) {
  }

  ngOnInit() {
    //消息提示 从service获取消息内容
    this.storeService.getMessage().subscribe(value => {
      this.alertMsg = value;
    })
  }
}
