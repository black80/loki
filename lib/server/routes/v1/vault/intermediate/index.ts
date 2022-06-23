import { FastifyInstance } from 'fastify';
import interEnablePKIRoute from './enable-pki';
import interGenerateRoute from './generate-inter';
import interSignRoute from './sign-crt';
import interSubmitRoute from './submit';
import interTunePKIRoute from './tune-pki';

export default async function RegisterInterCRTRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	await fastify.register(interEnablePKIRoute);
	await fastify.register(interTunePKIRoute);
	await fastify.register(interGenerateRoute);
	await fastify.register(interSignRoute);
	await fastify.register(interSubmitRoute);
}
