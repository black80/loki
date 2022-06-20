import { FastifyInstance } from "fastify";
import { vault } from "../../../../../vault";



export default function tunePKIRoutes(fastify: FastifyInstance, _: {}, done: any) {
    fastify.route({
        method: 'POST',
        url: '/root/tune',
        handler: async (request, reply) => {
            const { body } = request;
            const data = await vault.postCall(fastify, vault.vaultUrls.rootTunePKI, body);
            if (!data) reply.badRequest('somthing wrong happended')

            return reply.status(200).send({ message: 'success', data })
        }
    })
    done()
}

