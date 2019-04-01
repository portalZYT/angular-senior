# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


##使用ngrx状态个管理
npm i @ngrx/core @ngrx/store --save

## Angular用observable解决组件间通信

1.Observable.subscribe() 用于订阅发送可观察对象的消息

2.Subject.next() 用于向观察者对象发送消息，然后将其发送给改观察者的所有订阅者

3.Subject.asObservable() 返回一个可观察对象，一旦值变化，便会同时向它的订阅者更新消息。

