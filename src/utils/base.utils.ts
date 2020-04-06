import { ValidationError, validateSync } from 'class-validator';
import deepCopy from './deep_copy.utils';

export class Error {
	target: any;
	value!: string;
	property!: string;
	children!: Error[];
	constraints!: {
		[type: string]: string;
	};
}

export function convert_to_interface(obj: ValidationError) {
	const error = new Error();
	const target: any = deepCopy(obj.target);
	delete target.errors;
	error.target = target;
	error.value = obj.value;
	error.property = obj.property;
	error.children = obj.children.map(convert_to_interface);
	error.constraints = obj.constraints;
	return error;
}

export abstract class ClassBase {
	public errors?: Error[];

	public validate(): boolean {
		const errors = validateSync(this);
		if (errors.length > 0) {
			this.errors = errors.map(convert_to_interface);
			return true;
		} else {
			return false;
		}
	}
}
