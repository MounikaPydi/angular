import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit(){
    console.log('this is edit component');
    this.subscription = this.messageService.getMessage().subscribe(msg => {
      console.log('In edit component', msg);
    });

  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
