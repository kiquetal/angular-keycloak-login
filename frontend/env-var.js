const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();
let targetPath = './src/environments/environment.ts';
if (process.env.BUILD_ENV =="prod") {
  targetPath = './src/environments/environment.prod.ts';
}

const envConfigPath = fs.readFileSync(targetPath, 'utf8');

const updatedFile = envConfigPath
  .replace("KEYCLOAK_URL_REPLACE", `${process.env.KEYCLOAK_URL}`)
  .replace("KEYCLOAK_REALM_REPLACE", `${process.env.KEYCLOAK_REALM}`)
  .replace("KEYCLOAK_CLIENT_ID_REPLACE", `${process.env.KEYCLOAK_CLIENT_ID}`)
fs.writeFileSync(targetPath, updatedFile, 'utf8');

console.log('Environment variables have been replaced ', targetPath, process.env.BUILD_ENV);
