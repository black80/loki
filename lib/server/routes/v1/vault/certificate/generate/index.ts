import { FastifyInstance, FastifyRequest } from "fastify";
import { vault } from "../../../../../vault";



export default function generateCertificateRoute(fastify: FastifyInstance, _: {}, done: any) {
    fastify.route({
        method: 'POST',
        url: '/certificate/generate',
        handler: async (request: FastifyRequest<{ Body: { common_name: string, ttl: number, userId?: number } }>, reply) => {
            const { common_name, ttl } = request.body;
            //const { Certificate } = fastify.models;
            const data = await vault.postCall(fastify, vault.vaultUrls.certificateGenerationUrl, { common_name, ttl });

            if (!data) return reply.badRequest('somthing wrong happended')

            // const certData = await Certificate.query().insert({
            //     requestId: data.request_id,
            //     userId: userId,
            //     leaseId: data.lease_id,
            //     renewable: data.renewable,
            //     leaseDuration: data.lease_duration,
            //     caChain: data.data.ca_chain,
            //     certificate: data.data.certificate,
            //     expiration: data.data.expiration,
            //     issuingCa: data.data.issuing_ca,
            //     privateKey: data.data.private_key,
            //     privateKeyType: data.data.private_key_type,
            //     serialNumber: data.data.serial_number,
            // })

            // if (!certData) return reply.badRequest('Please Try again')

            return reply.send({ message: 'success', data })

        }
    })
    done()
}