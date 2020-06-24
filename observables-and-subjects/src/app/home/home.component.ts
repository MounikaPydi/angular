import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    console.log('calling home component');
    this.subscription = this.messageService.getMessage().subscribe(msg => {
      console.log('in home component', msg);
    });
    this.checkSubcription();
  }

  checkSubcription(){
    console.log('calling check subscription');
    this.subscription = this.messageService.getMessage().subscribe(msg => {
      console.log('In checksubscription() method of home component', msg);
    });
  }

  sendMessage() {
    this.messageService.sendMessage('sending msg from home to app');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
