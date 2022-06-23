import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';

export default function generateRootCertRoute(
	fastify: FastifyInstance,
	_: {},
	done: any,
) {
	fastify.route({
		method: 'POST',
		url: '/root/generate',
		handler: async (request, reply) => {
			const { body } = request;
			const rootCert = await vault.postCall(
				fastify,
				vault.vaultUrls.rootGenerateCA,
				body,
			);
			if (!rootCert) reply.badRequest('somthing wrong happended');

			return reply.status(200).send({ message: 'success', data: rootCert });
		},
	});
	done();
}
