import { FastifyInstance } from 'fastify';
import registerConfigureCARoute from './configure-CA';
import registerEnablePKIRoutes from './enable-pki';
import registerGenerateRootCertRoute from './generate-root-cert';
import registerTunePKIRoutes from './tune-pki';

export default async function registerRootCertificateRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(registerEnablePKIRoutes);
	await fastify.register(registerTunePKIRoutes);
	await fastify.register(registerGenerateRootCertRoute);
	await fastify.register(registerConfigureCARoute);
}
