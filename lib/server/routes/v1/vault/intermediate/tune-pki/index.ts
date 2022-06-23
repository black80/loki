import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default function interTunePKIRoute(
	fastify: FastifyInstance,
	_: {},
	done: any,
) {
	fastify.route({
		method: 'POST',
		url: '/inter/tune',
		handler: async (request, reply) => {
			const { body } = request;
			const data = await vault.postCall(
				fastify,
				vault.vaultUrls.interTunePKI,
				body,
			);
			if (!data) return reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success', data });
		},
	});
	done();
}
