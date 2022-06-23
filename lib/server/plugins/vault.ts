import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export async function postCall(
	fastify: FastifyInstance,
	url: string,
	body: any,
) {
	const data = await fastify.axios
		.post(url, body)
		.then(res => {
			if (res.status >= 200 || res.status < 302) return res.data;
			return res.statusText;
		})
		.catch(err => {
			return err.message;
		});
	return data;
}

export async function getCall(
	fastify: FastifyInstance,
	{ url, params }: { url: string; params: object },
) {
	const data = await fastify.axios.post(url + params).catch(err => err.message);
	return data;
}

export enum VAULT_URIS {
	rootEnablePKI = '/v1/sys/mounts/pki',
	rootTunePKI = '/v1/sys/mounts/pki/tune',
	rootGenerateCA = '/v1/pki/root/generate/internal',
	rootConfigureCA = '/v1/pki/config/urls',
	interEnablePKI = '/v1/sys/mounts/pki_int',
	interTunePKI = '/v1/sys/mounts/pki_int/tune',
	interGenerateCRT = '/v1/pki_int/intermediate/generate/internal',
	interSignWithCA = '/v1/pki/root/sign-intermediate',
	interSubmitCRT = '/v1/pki_int/intermediate/set-signed',
	vaultRoleURL = '/v1/pki_int/roles/example-dot-com',
	certificateGenerationUrl = '/v1/pki_int/issue/example-dot-com',
	certificateRevokeUrl = '/v1/pki_int/revoke',
	certificateRemoveUrl = '/v1/pki_int/tidy',
}

async function vault(fastify: FastifyInstance, _: {}) {
	fastify.decorate('vault', {
		getCall,
		postCall,
		uris: VAULT_URIS,
	});
}

export default fastifyPlugin(vault, {
	name: 'vault',
	dependencies: ['config', 'cache', 'axios'],
});
