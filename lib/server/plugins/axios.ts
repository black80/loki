import axios, { AxiosInstance } from 'axios';
import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

async function axiosHttpClient(fastify: FastifyInstance) {
	const client: AxiosInstance = axios.create({
		baseURL: fastify.config.VAULT_ADDR,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'X-Vault-Token': fastify.config.VAULT_TOKEN,
		},
	});

	fastify.decorate('axios', client);
}

export default fastifyPlugin(axiosHttpClient, {
	name: 'axios',
	dependencies: ['config'],
});
