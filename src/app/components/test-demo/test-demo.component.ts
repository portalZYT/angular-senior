import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.sass']
})
export class TestDemoComponent implements OnInit {

  constructor(public storeService:StoreService) { }
  sendMessage() {
    //发送消息
    this.storeService.sendMessage('显示成功');
  }
  ngOnInit() {
  }

}
