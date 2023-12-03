const fs = require("fs");
const writeFile = fs.promises.writeFile;

// Replace 'environment.prod.ts' with the path to your production environment file
const targetPath = "./src/environments/environment.prod.ts";

// Read the environment variables you need
const envConfigFile = `export const environment = {
  production: true,
  emailClientPublicKey: '${process.env.EMAIL_CLIENT_PUBLIC_KEY}'
};
`;

console.log(
  "The file `environment.prod.ts` will be written with the following content: \n"
);
console.log(envConfigFile);

writeFile(targetPath, envConfigFile, { encoding: "utf8" })
  .then(() =>
    console.log(
      `Angular environment file generated correctly at ${targetPath} \n`
    )
  )
  .catch((err) => console.error(err));
