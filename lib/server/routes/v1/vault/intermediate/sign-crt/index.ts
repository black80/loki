import { FastifyInstance } from 'fastify';
import { vault } from '../../../../../vault';
import fs from 'fs/promises';
import { homedir } from 'os';
const homedirc = homedir();

export default function interSignRoute(
	fastify: FastifyInstance,
	_: {},
	done: any,
) {
	fastify.route({
		method: 'POST',
		url: '/inter/sign',
		handler: async (request, reply) => {
			const { body } = request;
			const pkiCrt = await fs.readFile(
				homedirc + '/pki_intermediate.crt',
				'utf-8',
			);
			let ojectWithCert = {};
			if (body instanceof Object)
				ojectWithCert = {
					...body,
					csr: pkiCrt,
				};
			const data = await vault.postCall(
				fastify,
				vault.vaultUrls.interSignWithCA,
				{
					ojectWithCert,
					csr: pkiCrt,
				},
			);
			await fs.writeFile(
				homedirc + '/intermediate.cert.pem',
				data.data.certificate,
			);
			if (!data) return reply.badRequest('somthing wrong happen');

			return reply.send({ message: 'success', data });
		},
	});
	done();
}
