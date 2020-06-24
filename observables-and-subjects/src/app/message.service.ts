import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private subject = new Subject<any>();
  private subject = new BehaviorSubject<any>(null);

  constructor() { }

  sendMessage(message: string){
    this.subject.next({text: message});
  }

  clearMessage(){
    this.subject.next(null);
  }

  getMessage(){
    return this.subject.asObservable();
  }
}
