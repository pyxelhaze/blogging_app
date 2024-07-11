const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, 'build')
});

server.use(middlewares);
server.use('/api', router);

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
