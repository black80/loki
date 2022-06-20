import { FastifyInstance } from "fastify";
import { vault } from "../../../../../vault";



export default function interEnablePKIRoute(fastify: FastifyInstance, _: {}, done: any) {
    fastify.route({
        method: 'POST',
        url: '/inter/enable',
        handler: async (request, reply) => {
            const { body } = request;
            const data = await vault.postCall(fastify, vault.vaultUrls.interEnablePKI, body);
            if (!data) return reply.badRequest('somthing wrong happended')

            return reply.send({ message: 'success', data })

        }
    })
    done()
}