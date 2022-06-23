import { AxiosInstance } from 'axios';
import { Redis } from 'ioredis';
import { Knex } from 'knex';
import { models } from '../lib/server/models';
import { vaultManager } from '../lib/server/vault';
import { getCall, postCall, VAULT_URIS } from '../lib/server/plugins/vault';

type ENV = 'development' | 'staging' | 'testing' | 'production';

type EnvSchema = {
	SERVICE_NAME: string;
	NODE_ENV: ENV;
	APP_ENV: ENV;
	REDIS_URL: string;
	LOG_LEVEL: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
	DISABLE_LOGGING: boolean;
	HOST: string;
	PORT: number;
	DATABASE_URL: string;
	VAULT_ADDR: string;
	VAULT_TOKEN: string;
	UNSEAL_KEY: string;
};

declare module 'fastify' {
	interface FastifyInstance {
		env: EnvSchema;
		config: {} & EnvSchema;
		cache: Redis;
		swaggerCSP: {
			script: string[];
			style: string[];
		};
		models: typeof models;
		knex: Knex<any, unknown[]>;
		axios: AxiosInstance;
		vault: {
			getCall: typeof getCall;
			postCall: typeof postCall;
			uris: VAULT_URIS;
		};
	}
}
