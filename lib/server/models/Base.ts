import { Model, mixin } from 'objection';
import { DBErrors } from 'objection-db-errors';

export default class BaseModel extends mixin(Model, [DBErrors]) {
	static override get modelPaths(): string[] {
		return [__dirname];
	}
}
