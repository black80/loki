import { JSONSchema } from 'objection';
import BaseModel from './Base';

export default class Certificate extends BaseModel {
	id!: string;
	requestId!: string;
	userId!: number;
	leaseId!: string;
	status!: string;
	renewable!: string;
	leaseDuration!: number;
	caChain!: string;
	certificate!: string;
	expiration!: number;
	issuingCa!: string;
	privateKey!: string;
	privateKeyType!: string;
	serialNumber!: number;
	createdAt!: string;
	updatedAt!: string;
	deletedAt!: string;
	isRevoked!: boolean;

	static override get tableName(): string {
		return 'Certificate';
	}

	static override get jsonSchema(): JSONSchema {
		return {
			required: ['id'],
			properties: {
				id: { type: 'string' },
				requestId: { type: 'string' },
				userId: { type: 'integer' },
				leaseId: { type: 'string' },
				status: { type: 'string' },
				renewable: { type: 'string' },
				leaseDuration: { type: 'integer' },
				caChain: { type: 'string' },
				certificate: { type: 'string' },
				expiration: { type: 'integer' },
				issuingCa: { type: 'string' },
				privateKey: { type: 'string' },
				privateKeyType: { type: 'string' },
				serialNumber: { type: 'integer' },
				isRevoked: { type: 'boolean', default: false },
				updatedAt: { type: 'string', format: 'date-time' },
				createdAt: { type: 'string', format: 'date-time' },
				deletedAt: { type: 'string', format: 'date-time' },
			},
		};
	}
}
