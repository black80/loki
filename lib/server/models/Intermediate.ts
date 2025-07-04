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
	Csr!: string;
	issuingCa!: string;
	createdAt!: string;
	updatedAt!: string;
	deletedAt!: string;
	isRevoked!: boolean;
	isDeleted!: boolean;

	static override get tableName(): string {
		return 'IntermediateCertificate';
	}

	static override get jsonSchema(): JSONSchema {
		return {
			type: 'object',
			required: [
				'requestId',
				'userId',
				'Csr',
				'leaseId',
				'renewable',
				'leaseDuration',
				'expiration',
				'issuingCa',
				'privateKey',
				'privateKeyType',
				'serialNumber',
			],

			properties: {
				id: { type: 'string' },
				requestId: { type: 'string' },
				userId: { type: 'integer' },
				Csr: { type: 'string' },
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
