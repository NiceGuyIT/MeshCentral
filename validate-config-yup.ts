import meshSchema from "./meshcentral-config-schema.json" assert {type: "json"};
import meshConfig from "./sample-config.json" assert {type: "json"};

// https://github.com/jquense/yup
import * as yup from "https://esm.sh/yup@1.3.3";

const mcSchema = structuredClone(meshSchema);
const mcConfig = structuredClone(meshConfig);

// noUnknown() is needed to strip Prototype properties from the object.
// See: https://github.com/jquense/yup/issues/660
const schema = yup.object(meshSchema).noUnknown(true);
// Strict parsing is required.
const validation = await schema.validate(meshConfig, {strict: true});

/*
error: Uncaught (in promise) ValidationError: this field has unspecified keys: __comment1__, __comment2__, settings, domains, _letsencrypt
    at Object.te [as createError] (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:2:6287)
    at Object.test (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:5:17947)
    at e (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:2:6634)
    at Z.runTests (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:5:818)
    at https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:5:481
    at c (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:5:674)
    at https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:5:889
    at B (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:2:6538)
    at e (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:2:6930)
    at Z.runTests (https://esm.sh/v135/yup@1.3.3/denonext/yup.mjs:5:818)
 */
