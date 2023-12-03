const fs = require("fs");
const writeFile = fs.promises.writeFile;

const targetPath = "./src/environments/environment.ts";

const envConfigFile = `export const environment = {
  emailClientPublicKey: '${process.env.EMAIL_CLIENT_PUBLIC_KEY}'
};
`;

console.log(
  "The file `environment.ts` will be written with the following content: \n"
);
console.log(envConfigFile);

writeFile(targetPath, envConfigFile, { encoding: "utf8" })
  .then(() =>
    console.log(
      `Angular environment file generated correctly at ${targetPath} \n`
    )
  )
  .catch((err) => console.error(err));
