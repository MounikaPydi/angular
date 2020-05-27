import { Component, OnInit } from '@angular/core';
import { Server } from './server';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers: Server[] = [
    {
      id: 1,
      name: 'server1',
      status: 'online',
    },
    {
      id: 2,
      name: 'server2',
      status: 'offline',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onServerAdd(newServer) {
    const id = this.servers.length + 1;
    this.servers.push({id, name: newServer.name, status: newServer.status});
  }

  onStatusUpdate(updatedServer: {id: number, status: string}) {
    const id = updatedServer.id;
    this.servers[id - 1].status = updatedServer.status;
  }
}
