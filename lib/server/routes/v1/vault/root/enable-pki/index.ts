import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default async function registerEnablePKIRoutes(
	fastify: FastifyInstance,
	_: {},
	done: any,
) {
	fastify.route({
		method: 'POST',
		url: '/enable',
		handler: async (request, reply) => {
			const { body } = request;
			const data = await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.rootEnablePKI,
				body,
			);
			if (!data) reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success', data });
		},
	});
}
