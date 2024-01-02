import meshSchema from './meshcentral-config-schema.json' assert {type: 'json'};
import meshConfig from './sample-config.json' assert {type: 'json'};

// https://github.com/ajv-validator/ajv/

// https://ajv.js.org/json-schema.html#json-schema-versions
// This is for draft-06
/*
error: Uncaught (in promise) Error: no schema with key or ref "http://json-schema.org/draft-04/schema#"
    at Yt.validate (https://esm.sh/v135/ajv@8.12.0/denonext/dist/2020.js:11:32783)
    at Yt.validateSchema (https://esm.sh/v135/ajv@8.12.0/denonext/dist/2020.js:11:34651)
    at Yt._addSchema (https://esm.sh/v135/ajv@8.12.0/denonext/dist/2020.js:11:37901)
    at Yt.compile (https://esm.sh/v135/ajv@8.12.0/denonext/dist/2020.js:11:32932)
    at file:///home/dev/projects/github/MeshCentral/validate-config-ajv.ts:36:22
 */
// import Ajv from 'https://esm.sh/ajv@8.12.0/dist/2020';
// import draft6MetaSchema from 'https://esm.sh/ajv@8.12.0/dist/refs/json-schema-draft-06.json' assert {type: 'json'};
// const ajv = new Ajv({allErrors: true, strict: true, strictTypes: "log"});
// ajv.addMetaSchema(draft6MetaSchema);

// https://ajv.js.org/json-schema.html#draft-04
// This is for draft-04
/*
error: Uncaught (in promise) TypeError: de.default is not a function
    at https://esm.sh/v135/ajv-draft-04@1.0.0/denonext/ajv-draft-04.mjs:19:3209
    at https://esm.sh/v135/ajv-draft-04@1.0.0/denonext/ajv-draft-04.mjs:19:452
    at https://esm.sh/v135/ajv-draft-04@1.0.0/denonext/ajv-draft-04.mjs:19:5666
    at https://esm.sh/v135/ajv-draft-04@1.0.0/denonext/ajv-draft-04.mjs:19:452
    at https://esm.sh/v135/ajv-draft-04@1.0.0/denonext/ajv-draft-04.mjs:19:7138
 */
// import Ajv from 'https://esm.sh/ajv-draft-04@1.0.0';
// const ajv = new Ajv({allErrors: true, strict: true, strictTypes: "log"});

// Regular Ajv
/*
error: Uncaught (in promise) Error: no schema with key or ref "http://json-schema.org/draft-04/schema#"
    at Ht.validate (https://esm.sh/v135/ajv@8.12.0/denonext/ajv.mjs:11:32787)
    at Ht.validateSchema (https://esm.sh/v135/ajv@8.12.0/denonext/ajv.mjs:11:34655)
    at Ht._addSchema (https://esm.sh/v135/ajv@8.12.0/denonext/ajv.mjs:11:37905)
    at Ht.compile (https://esm.sh/v135/ajv@8.12.0/denonext/ajv.mjs:11:32936)
    at file:///home/dev/projects/github/MeshCentral/validate-config-ajv.ts:20:22
*/
import Ajv from 'https://esm.sh/ajv@8.12.0';
const ajv = new Ajv({allErrors: true, strict: true, strictTypes: "log"});

const validate = ajv.compile(meshSchema);
const valid = validate(meshConfig);

console.log({ valid: valid, error: validate.errors })
if (!valid) {
	console.log(validate.errors)
}
