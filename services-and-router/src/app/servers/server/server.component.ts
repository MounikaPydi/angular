import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id: number;
  server;
  constructor(private route: ActivatedRoute, private router: Router, private serversService: ServersService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params.id);
    this.route.params.subscribe((params) => {
      this.id = Number(params.id);
      this.getServerInfo(this.id);
    });
  }

  getServerInfo = (id) => {
    this.server = this.serversService.getServer(id);
  }

  onEdit = () => {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
