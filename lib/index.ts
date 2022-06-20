require('make-promises-safe');
const { bootstrap } = require('./server');

const { HOST = 'localhost', PORT = 3000 } = process.env;

/**
 * Starts the Gateway service
 */
async function start() {
    try {
        // Bootstrap the server
        const server = await bootstrap();

        // Catch and log any errors that occur during plugin registration
        await server.ready().catch((err: Error) => server.log.error(err));

        // Start listening for requests
        await server.listen(PORT, HOST).catch((err: Error) => server.log.error(err));

        server.log.debug(server.printRoutes());
        server.log.info('Ready');
    } catch (err) {
        // Log any uncaught startup errors
        console.error(err);
    }
}

start();