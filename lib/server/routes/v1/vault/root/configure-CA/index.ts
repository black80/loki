import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default async function registerConfigureCARoute(
	fastify: FastifyInstance,
	_: {},
) {
	fastify.route({
		method: 'POST',
		url: '/configure',
		handler: async (request, reply) => {
			const { body } = request;
			const configuredCa = await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.rootConfigureCA,
				body,
			);
			if (!configuredCa) return reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success' });
		},
	});
}
