import axios, { AxiosInstance } from "axios";
import { FastifyInstance } from "fastify";
import fastifyPlugin from 'fastify-plugin';

async function axiosInstance(fastify: FastifyInstance) {

    const axs: AxiosInstance = axios.create({
        baseURL: fastify.config.VAULT_ADDR,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Vault-Token": fastify.config.VAULT_TOKEN
        }
    });


    fastify.decorate('axios', axs);

}

export default fastifyPlugin(axiosInstance, {
    name: 'axios',
    dependencies: ['config']
})