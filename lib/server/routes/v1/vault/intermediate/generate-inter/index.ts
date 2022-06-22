import fs from "fs/promises";
import { FastifyInstance } from "fastify";
import { homedir } from "os";
import { vault } from "../../../../../vault";
const homedirc = homedir()

export default function interGenerateRoute(fastify: FastifyInstance, _: {}, done: any) {
    fastify.route({
        method: 'POST',
        url: '/inter/generate',
        handler: async (request, reply) => {
            const { body } = request;
            const data = await vault.postCall(fastify, vault.vaultUrls.interGenerateCRT, body);
            if (!data) return reply.badRequest('somthing wrong happended')
            await fs.writeFile(homedirc + "/pki_intermediate.crt", data.data.csr)

            return reply.send({ message: 'success', data })

        }
    })
    done()
}