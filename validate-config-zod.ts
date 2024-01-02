import meshConfig from './sample-config.json' assert {type: "json"};
import meshSchema from './meshcentral-config-schema.json' assert {type: "json"};

const mcSchema = structuredClone(meshSchema);
const mcConfig = structuredClone(meshConfig);

// Zod: https://github.com/colinhacks/zod
import {z} from 'https://deno.land/x/zod@v3.22.4/mod.ts';

/*
import { jsonToZod } from 'https://esm.sh/json-to-zod@1.1.2';
// const schema = z.object()
const jzSchema = jsonToZod(meshSchema, 'zSchema', false);
console.log(jzSchema);
// eval(jzSchema);

// config = z.object()
// eval(jsonToZod(meshConfig));
// console.log(config);
*/

/*
// This is the closest I could get to work with Zod.
import {zSchema} from './validate-zod-schema.ts';
const valid = zSchema.parse(mcConfig);
console.log(valid);
*/


console.log('Parsing config file...');
const valid = z
	.object({...mcSchema})
	.strip()
	.parse(mcConfig);
console.log(valid);
/*
error: Uncaught (in promise) TypeError: keyValidator._parse is not a function
        value: keyValidator._parse(
                            ^
    at ZodObject._parse (https://deno.land/x/zod@v3.22.4/types.ts:2301:29)
    at ZodObject._parseSync (https://deno.land/x/zod@v3.22.4/types.ts:212:25)
    at ZodObject.safeParse (https://deno.land/x/zod@v3.22.4/types.ts:246:25)
    at ZodObject.parse (https://deno.land/x/zod@v3.22.4/types.ts:225:25)
    at file:///home/dev/projects/github/MeshCentral/validate-config-zod.ts:33:3
 */


/*
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
	z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

jsonSchema.parse(mcConfig);
*/
