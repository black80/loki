import { JSONSchema } from 'objection';
import BaseModel from './Base';

export default class Account extends BaseModel {
	id!: string;
	email!: string;
	passwordHash!: string;
	status!: string;
	isVerified!: string;
	isDeleted!: string;
	createdAt!: string;
	updatedAt!: string;
	deletedAt!: string;

	static override get tableName(): string {
		return 'Account';
	}

	static override get jsonSchema(): JSONSchema {
		return {
			required: ['id'],
			properties: {
				id: { type: 'string' },
				email: { type: 'string' },
				passwordHash: { type: 'string' },
				status: { type: 'boolean' },
				isVerified: { type: 'boolean' },
				isDeleted: { type: 'boolean' },
				updatedAt: { type: 'string', format: 'timestamptz' },
				createdAt: { type: 'string', format: 'timestamptz' },
				deletedAt: { type: 'string', format: 'timestamptz' },
			},
		};
	}
}
