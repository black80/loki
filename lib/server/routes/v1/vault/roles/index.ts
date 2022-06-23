import { FastifyInstance } from 'fastify';
import VaultRoleRoute from './register';

export default async function RegisterRolesRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(VaultRoleRoute);
}
