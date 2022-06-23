import { FastifyInstance } from 'fastify';
import registerEnablePKIRoute from './enable-pki';
import registerGenerateRoute from './generate-inter';
import registerSignRoute from './sign-crt';
import registerSubmitRoute from './submit';
import registerTunePKIRoute from './tune-pki';

export default async function registerIntermediateCertificateRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(registerEnablePKIRoute);
	await fastify.register(registerTunePKIRoute);
	await fastify.register(registerGenerateRoute);
	await fastify.register(registerSignRoute);
	await fastify.register(registerSubmitRoute);
}
