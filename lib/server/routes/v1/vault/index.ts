import { FastifyInstance } from 'fastify';
import registerCertificateRoutes from './certificate';
import registerIntermediateCertificateRoutes from './intermediate';
import registerRolesRoutes from './roles';
import registerRootCertificateRoutes from './root/indext';

export default async function registerRoutes(fastify: FastifyInstance, _: {}) {
	await fastify.register(registerRootCertificateRoutes, { prefix: 'root' });
	await fastify.register(registerIntermediateCertificateRoutes, {
		prefix: 'intermediate',
	});
	await fastify.register(registerRolesRoutes, { prefix: 'roles' });
	await fastify.register(registerCertificateRoutes, { prefix: 'certificate' });
}
