import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default async function registerEnablePKIRoute(
	fastify: FastifyInstance,
	_: {},
) {
	fastify.route({
		method: 'POST',
		url: '/enable',
		handler: async (request, reply) => {
			const { body } = request;
			const data = await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.interEnablePKI,
				body,
			);
			if (!data) return reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success', data });
		},
	});
}
