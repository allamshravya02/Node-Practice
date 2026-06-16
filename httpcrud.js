const http = require('http');

let users = [
    { id: 1, name: 'Dhruthi' },
    { id: 2, name: 'Sahithi' }
];

const server = http.createServer((req, res) => {

    // GET
    if (req.url === '/users' && req.method === 'GET') {
        res.end(JSON.stringify(users));
    }

    // POST
    else if (req.url === '/add' && req.method === 'POST') {

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            users.push(JSON.parse(body));
            res.end('User Added');
        });
    }

    // PUT
    else if (req.url === '/users' && req.method === 'PUT') {

        users[0].name = 'Maithili';

        res.end('User Updated');
    }

    // DELETE
    else if (req.url === '/delete' && req.method === 'DELETE') {

        users.pop();

        res.end('User Deleted');
    }

    else {
        res.end('Route Not Found');
    }
});

server.listen(5000, () => {
    console.log('Server Running...');
});