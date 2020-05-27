import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../server';

@Component({
  selector: 'app-display-server',
  templateUrl: './display-server.component.html',
  styleUrls: ['./display-server.component.css']
})
export class DisplayServerComponent implements OnInit {
  @Output() updateStatus = new EventEmitter<any>();
  @Input() server: Server;
  constructor() { }

  ngOnInit(): void {
  }

  onStatusUpdate(status: string) {
    this.updateStatus.emit({id: this.server.id, status});
  }

}
