import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default async function registerTunePKIRoutes(
	fastify: FastifyInstance,
	_: {},
) {
	fastify.route({
		method: 'POST',
		url: '/tune',
		handler: async (request, reply) => {
			const { body } = request;
			const data = await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.rootTunePKI,
				body,
			);
			if (!data) reply.badRequest('somthing wrong happended');

			return reply.status(200).send({ message: 'success', data });
		},
	});
}
