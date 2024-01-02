const configFile = "./sample-config.json";
const schemaFile = "./meshcentral-config-schema.json";

// const configJson = JSON.parse(await Deno.readTextFile(configFile));
// const configString = await Deno.readTextFile(configFile);
// const schemaJson = JSON.parse(await Deno.readTextFile(schemaFile));
// const schemaString = await Deno.readTextFile(schemaFile);
import meshSchema from "./meshcentral-config-schema.json" with {type: "json"};
import meshConfig from "./sample-config.json" with {type: "json"};

/*
// Zod: https://github.com/colinhacks/zod
import {z} from "https://deno.land/x/zod@v3.22.4/mod.ts";

const schema = z.object(jsonSchema).strict();
try {
	console.log('Parsing config file...');
	const validatedData = schema.parse(config);
} catch (e) {
	console.log(e);
}
*/


/*
// yup: https://github.com/jquense/yup
import {object as yupObject} from "npm:yup";

try {
	const schema = yupObject(schemaJson);
	// parse and assert validity
	const validation = await schema.validate(configString);
} catch (e) {
	console.log(e);
}
*/

/*
// joi: https://github.com/hapijs/joi
// import * as enjoi from 'https://deno.land/x/enjoi/mod.ts';
import * as joi from 'npm:joi';

try {
	// Validate the JSON against the schema
	const result = joi.validate(config, schema);

	// Check the validation result
	if (result.error) {
		console.error(result.error);
	} else {
		console.log('JSON is valid');
	}

} catch (e) {
	console.log(e);
}
*/

/*
// io-ts: https://github.com/gcanti/io-ts
import * as t from 'npm:io-ts';
*/

import {Static, Type, TObject} from "https://esm.sh/@sinclair/typebox";
// import {TypeCompiler} from "https://esm.sh/@sinclair/typebox/compiler";
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

try {
	const configSchema = Type.Object(meshSchema);
	const meshSchemaType: Static<typeof configSchema> = meshConfig;
	// const validation = Type.check(data, configSchema);

	const meshValidation = validatorFactory<typeof meshSchemaType>(meshSchema);
	const validator = meshValidation.verify(meshConfig);

	// const C = TypeCompiler.Compile(schema);
	// const validation = C.Check(config);
} catch (e) {
	console.log(e);
}
