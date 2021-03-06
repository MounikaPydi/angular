import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers;
  constructor(private serversService: ServersService) {  }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
    console.log(this.servers);
  }

}
