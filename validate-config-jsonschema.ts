import meshSchema from "./meshcentral-config-schema.json" with {type: "json"};
import meshConfig from "./sample-config.json" with {type: "json"};

// This doesn't seem to work correctly.
// When it errors, the stack trace does not point to the actual error. Instead, it's a cryptic error.
// See: https://github.com/tdegrunt/jsonschema
import JsonSchema from "https://esm.sh/jsonschema@1.4.1";

const result = JsonSchema.validate(meshConfig, meshSchema, {required: true, throwFirst: true, throwAll: true, throwError: true});
console.log(result);
if (result.valid) {
	console.log('config is valid and conforms to the schema');
} else {
	console.log('config is invalid');
}
