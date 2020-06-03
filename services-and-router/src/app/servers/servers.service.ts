export class ServersService {
    servers = [
        {
            id: 1,
            name: 'server1',
            status: 'online'
        },
        {
            id: 2,
            name: 'server2',
            status: 'offline'
        },
        {
            id: 3,
            name: 'server3',
            status: 'offline',
        },
        {
            id: 4,
            name: 'server4',
            status: 'online',
        }
    ];

getServers() {
    return this.servers;
}

getServer = (id) => {
    const server = this.servers.find((s) => {
        return s.id === id;
    });
    return server;
}

}
