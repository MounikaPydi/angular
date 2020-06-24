import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  subscription: Subscription;

  constructor(private messageService: MessageService){}

  ngOnInit(){
    this.subscription = this.messageService.getMessage().subscribe(msg => {
      console.log('In app component', msg);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
