import { FastifyInstance } from 'fastify';
import generateCertificateRoute from './generate';

export default async function certificateRoutes(fastify: FastifyInstance) {
	await fastify.register(generateCertificateRoute);
}
