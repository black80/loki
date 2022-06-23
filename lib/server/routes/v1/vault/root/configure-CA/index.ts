import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default function configureCARoute(
	fastify: FastifyInstance,
	_: {},
	done: any,
) {
	fastify.route({
		method: 'POST',
		url: '/root/configure',
		handler: async (request, reply) => {
			const { body } = request;
			const configuredCa = await vault.postCall(
				fastify,
				vault.vaultUrls.rootConfigureCA,
				body,
			);
			if (!configuredCa) return reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success' });
		},
	});
	done();
}
