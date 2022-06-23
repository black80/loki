import { FastifyInstance } from 'fastify';
import registerRoutes from './vault';

export default async function RegisterV1Routes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(registerRoutes, { prefix: 'vault' });
}
