import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  serverName: string;
  serverStatus: string;
  @Output() addServer = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onServerAdd(status: HTMLInputElement) {
    this.serverStatus = status.value;
    this.addServer.emit({
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
