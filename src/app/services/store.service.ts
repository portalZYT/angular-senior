import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private msg=new Subject<any>();

  // 发送消息
  sendMessage(message:string){
    this.msg.next(message);
  }
  //清除消息
  clearMessage() {
    this.msg.next();
  }
  //获取消息
  getMessage(): Observable<any> {
    return this.msg.asObservable();
  }
}
