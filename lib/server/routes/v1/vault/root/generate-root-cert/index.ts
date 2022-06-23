import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default async function registerGenerateRootCertRoute(
	fastify: FastifyInstance,
	_: {},
) {
	fastify.route({
		method: 'POST',
		url: '/generate',
		handler: async (request, reply) => {
			const { body } = request;
			const rootCert = await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.rootGenerateCA,
				body,
			);
			if (!rootCert) reply.badRequest('somthing wrong happended');

			return reply.status(200).send({ message: 'success', data: rootCert });
		},
	});
}
