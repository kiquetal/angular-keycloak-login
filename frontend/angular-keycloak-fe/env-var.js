const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = './src/environments/environment.ts';
const envConfigPath = fs.readFileSync(targetPath, 'utf8');

const updatedFile = envConfigPath
//  .replace(/url: '(.*)'/, `url: '${process.env.KEYCLOAK_URL}'`)
  .replace("KEYCLOAK_URL_REPLACE", `url: '${process.env.KEYCLOAK_URL}'`)
  .replace("KEYCLOAK_REALM_REPLACE", `realm: '${process.env.KEYCLOAK_REALM}'`)

fs.writeSync(targetPath, updatedFile, 'utf8')
