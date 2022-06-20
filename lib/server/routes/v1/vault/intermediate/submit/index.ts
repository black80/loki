import { FastifyInstance } from "fastify";
import { vault } from "../../../../../vault";
import fs from "fs/promises";
import { homedir } from "os";
const homedirc = homedir()



export default function interSubmitRoute(fastify: FastifyInstance, _: {}, done: any) {
    fastify.route({
        method: 'POST',
        url: '/inter/submit',
        handler: async (_, reply) => {
            //const { body } = request;
            const pkiCrt = await fs.readFile(homedirc + '/intermediate.cert.pem', 'utf-8');
            let ojectWithCert = {certificate: pkiCrt};
            const data = await vault.postCall(fastify, vault.vaultUrls.interSubmitCRT, ojectWithCert);
            if (!data) return reply.badRequest('somthing wrong happended')

            return reply.send({ message: 'success', data })

        }
    })
    done()
}