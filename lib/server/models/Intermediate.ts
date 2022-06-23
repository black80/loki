import { JSONSchema } from 'objection';
import BaseModel from './Base';

export default class Intermediate extends BaseModel {
	id!: string;
	requestId!: string;
	userId!: number;
	rootId!: number;
	leaseId!: string;
	renewable!: string;
	leaseDuration!: number;
	certificate!: string;
	expiration!: number;
	CSR!: string;
	issuingCa!: string;
	createdAt!: string;
	updatedAt!: string;
	deletedAt!: string;
	isRevoked!: boolean;

	static override get tableName(): string {
		return 'IntermediateCertificate';
	}

	static override get jsonSchema(): JSONSchema {
		return {
			required: ['id'],
			properties: {
				id: { type: 'string' },
				requestId: { type: 'string' },
				userId: { type: 'integer' },
				CSR: { type: 'string' },
				leaseId: { type: 'string' },
				renewable: { type: 'string' },
				leaseDuration: { type: 'integer' },
				certificate: { type: 'string' },
				expiration: { type: 'integer' },
				issuingCa: { type: 'string' },
				isRevoked: { type: 'boolean', default: false },
				updatedAt: { type: 'string', format: 'timestamptz' },
				createdAt: { type: 'string', format: 'timestamptz' },
				deletedAt: { type: 'string', format: 'timestamptz' },
			},
		};
	}
}
