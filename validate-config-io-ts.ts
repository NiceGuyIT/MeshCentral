const configFile = "./sample-config.json";
const schemaFile = "./meshcentral-config-schema.json";

// const configJson = JSON.parse(await Deno.readTextFile(configFile));
// const configString = await Deno.readTextFile(configFile);
// const schemaJson = JSON.parse(await Deno.readTextFile(schemaFile));
// const schemaString = await Deno.readTextFile(schemaFile);
import meshSchema from "./meshcentral-config-schema.json" with {type: "json"};
import meshConfig from "./sample-config.json" with {type: "json"};

// io-ts: https://github.com/gcanti/io-ts
import IoTs from 'https://esm.sh/io-ts@2.2.21';
