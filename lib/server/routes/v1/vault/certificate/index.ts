import { FastifyInstance } from 'fastify';
import registerGenerateCertificateRoute from './generate';

export default async function registerCertificateRoutes(
	fastify: FastifyInstance,
) {
	await fastify.register(registerGenerateCertificateRoute);
}
