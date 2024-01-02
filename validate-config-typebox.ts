import meshSchema from "./meshcentral-config-schema.json" with {type: "json"};
import meshConfig from "./sample-config.json" with {type: "json"};

const mcSchema = structuredClone(meshSchema);
const mcConfig = structuredClone(meshConfig);

import {Type} from "https://esm.sh/@sinclair/typebox";
import {TypeCompiler} from "https://esm.sh/@sinclair/typebox/compiler";
// import {TypeCompiler} from "https://esm.sh/v135/@sinclair/typebox@0.32.4/denonext/compiler.js";

const T = Type.Object(mcSchema);
const C = TypeCompiler.Compile(T);
const OK = C.Check(mcConfig);
/*
error: Uncaught (in promise) Error: Preflight validation check failed to guard for the given schema
    at en (https://esm.sh/v135/@sinclair/typebox@0.32.4/denonext/compiler.js:7:298)
    at Object.gr [as Compile] (https://esm.sh/v135/@sinclair/typebox@0.32.4/denonext/compiler.js:7:401)
    at file:///home/dev/projects/github/MeshCentral/validate-config-typebox.ts:12:24
 */

/*
import {Static, Type, TObject} from "https://esm.sh/@sinclair/typebox";
import {TypeCompiler} from "https://esm.sh/v135/@sinclair/typebox@0.32.4/denonext/compiler.js";

interface ValidatorFactoryReturn<T> {
	schema: TObject;
	verify: (data: T) => T;
}

export const validatorFactory = <T extends unknown>(
	schema: TObject
): ValidatorFactoryReturn<T> => {
	const C = TypeCompiler.Compile(schema);

	const verify = (data: T): T => {
		const isValid = C.Check(data);
		if (isValid) {
			return data;
		}
		throw new Error(
			JSON.stringify(
				[...C.Errors(data)].map(({ path, message }) => ({ path, message }))
			)
		);
	};

	return { schema, verify };
};

const configSchema = Type.Object(meshSchema);
const meshSchemaType: Static<typeof configSchema> = meshConfig;
// const validation = Type.check(data, configSchema);

const meshValidation = validatorFactory<typeof meshSchemaType>(meshSchema);
const validator = meshValidation.verify(meshConfig);

// const C = TypeCompiler.Compile(schema);
// const validation = C.Check(config);
*/
