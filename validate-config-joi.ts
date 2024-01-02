import meshSchema from "./meshcentral-config-schema.json" with {type: "json"};
import meshConfig from "./sample-config.json" with {type: "json"};

// const mcSchema = structuredClone(meshSchema);
// const mcConfig = structuredClone(meshConfig);

// https://github.com/hapijs/joi
import Joi from 'https://esm.sh/joi@17.11.0';

const schema = Joi.compile(meshSchema);
const valid = schema.validate(meshConfig);
if (valid.error) {
	console.log(valid.error);
} else {
	console.log('Schema is valid');
	console.log(valid);
}

/*
// Validate the JSON against the schema
const result = joi.validate(meshConfig, meshSchema);

// Check the validation result
if (result.error) {
	console.error(result.error);
} else {
	console.log("JSON is valid");
}
*/

