import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default function VaultRoleRoute(
	fastify: FastifyInstance,
	_: {},
	done: any,
) {
	fastify.route({
		method: 'POST',
		url: '/role',
		handler: async (request, reply) => {
			const { body } = request;

			const data = await vault.postCall(
				fastify,
				vault.vaultUrls.vaultRoleURL,
				body,
			);
			if (!data) return reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success', data });
		},
	});
	done();
}
