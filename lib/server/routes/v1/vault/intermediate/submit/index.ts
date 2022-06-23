import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';
import fs from 'fs/promises';
import { homedir } from 'os';
const homedirc = homedir();

export default async function registerSubmitRoute(
	fastify: FastifyInstance,
	_: {},
) {
	fastify.route({
		method: 'POST',
		url: '/submit',
		handler: async (_, reply) => {
			//const { body } = request;
			const pkiCrt = await fs.readFile(
				homedirc + '/intermediate.cert.pem',
				'utf-8',
			);
			let ojectWithCert = { certificate: pkiCrt };
			const data = await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.interSubmitCRT,
				ojectWithCert,
			);
			if (!data) return reply.badRequest('somthing wrong happended');

			return reply.send({ message: 'success', data });
		},
	});
}
