import { FastifyInstance } from 'fastify';
import RegisterVaultRoutes from './vault';

export default async function RegisterV1Routes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(RegisterVaultRoutes, { prefix: 'vault' });
}
