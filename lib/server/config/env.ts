const ENV_SCHEMA = {
	type: 'object',
	required: ['SERVICE_NAME', 'DATABASE_URL'],

	properties: {
		SERVICE_NAME: {
			type: 'string',
		},
		NODE_ENV: {
			type: 'string',
			enum: ['development', 'testing', 'staging', 'production'],
			default: 'production',
		},
		APP_ENV: {
			type: 'string',
			enum: ['development', 'testing', 'staging', 'production'],
			default: 'production',
		},
		LOG_LEVEL: {
			type: 'string',
			enum: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
			default: 'info',
		},
		DISABLE_LOGGING: {
			type: 'boolean',
			default: false,
		},
		HOST: {
			type: 'string',
			default: '0.0.0.0',
		},
		PORT: {
			type: 'integer',
			default: 3000,
		},
		DATABASE_URL: {
			type: 'string',
		},
		VAULT_ADDR: {
			type: 'string'
		},
		VAULT_TOKEN: {
			type: 'string'
		},
		UNSEAL_KEY: {
			type: 'string'
		},
	},
};

export default ENV_SCHEMA;
