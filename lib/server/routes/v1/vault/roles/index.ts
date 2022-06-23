import { FastifyInstance } from 'fastify';
import registerCreateVaultRoleRoute from './register';

export default async function registerRolesRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(registerCreateVaultRoleRoute);
}
