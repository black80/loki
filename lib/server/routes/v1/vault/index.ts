import { FastifyInstance } from 'fastify';
import certificateRoutes from './certificate';
import RegisterInterCRTRoutes from './intermediate';
import RegisterRolesRoutes from './roles';
import RegisterRootCRTRoutes from './root/indext';

export default async function RegisterVaultRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(RegisterRootCRTRoutes);
	await fastify.register(RegisterInterCRTRoutes);
	await fastify.register(RegisterRolesRoutes);
	await fastify.register(certificateRoutes);
}
