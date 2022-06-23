import { FastifyInstance, FastifyRequest } from 'fastify';
import { vault } from '../../../../../vault';

interface IBody {
	commonName: string;
	ttl: number;
	userId: number;
}

export default async function registerGenerateCertificateRoute(
	fastify: FastifyInstance,
	_: {},
) {
	fastify.route<{ Body: IBody }>({
		method: 'POST',
		url: '/generate',
		handler: async (request, reply) => {
			const { commonName, ttl, userId } = request.body;
			const { Certificate } = fastify.models;
			const data = (await fastify.vault.postCall(
				fastify,
				vault.vaultUrls.certificateGenerationUrl,
				{ common_name: commonName, ttl },
			)) as {
				request_id: string;
				lease_id: string;
				renewable: string;
				lease_duration: number;
				ca_chain: string;
				certificate: string;
				expiration: number;
				issuing_ca: string;
				private_key: string;
				private_key_type: string;
				serial_number: number;
			};

			if (!data) return reply.badRequest('somthing wrong happended');

			const createdCertificate = await Certificate.query().insertAndFetch({
				requestId: data.request_id,
				userId: userId,
				leaseId: data.lease_id,
				renewable: data.renewable,
				leaseDuration: data.lease_duration,
				caChain: data.ca_chain,
				certificate: data.certificate,
				expiration: data.expiration,
				issuingCa: data.issuing_ca,
				privateKey: data.private_key,
				privateKeyType: data.private_key_type,
				serialNumber: data.serial_number,
			});

			return reply.send({ message: 'success', data });
		},
	});
}
