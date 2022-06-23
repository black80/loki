import { JSONSchema } from 'objection';
import BaseModel from './Base';

export default class RootCa extends BaseModel {
	id!: string;
	requestId!: string;
	userId!: number;
	leaseId!: string;
	renewable!: string;
	leaseDuration!: number;
	certificate!: string;
	expiration!: number;
	issuingCa!: string;
	createdAt!: string;
	updatedAt!: string;
	deletedAt!: string;
	isRevoked!: boolean;
	isDeleted!: boolean;

	static override get tableName(): string {
		return 'RootCa';
	}

	static override get jsonSchema(): JSONSchema {
		return {
			required: ['id'],
			properties: {
				id: { type: 'string' },
				userId: { type: 'integer' },
				requestId: { type: 'string' },
				leaseId: { type: 'string' },
				renewable: { type: 'string' },
				leaseDuration: { type: 'integer' },
				certificate: { type: 'string' },
				expiration: { type: 'integer' },
				issuingCa: { type: 'string' },
				isRevoked: { type: 'boolean', default: false },
				isDeleted: { type: 'boolean', default: false },
				updatedAt: { type: 'string', format: 'date-time' },
				createdAt: { type: 'string', format: 'date-time' },
				deletedAt: { type: 'string', format: 'date-time' },
			},
		};
	}
}
