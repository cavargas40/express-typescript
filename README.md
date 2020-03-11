# Typescript Express Starter

## init node.js repo
- to init a node.js repo is required the next command:
```
npm init
```
- you have to run this command in the root of your new folder for the project

## dependencies
```
npm i -S express
```

## devDependencies
```
npm i -D @types/express tslint typescript
```

## tsconfig.json
- Create file tsconfig.json in the root of the project with this options
```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```
- Let’s go over some of the keys in the JSON snippet above and see what they do:

- module : Specifies the module code generation method. Node uses commonjs.
- target: Specifies the output language level.
- moduleResolution: This helps the compiler figure out what an import refers to. The Valuenode mimics the Node module resolution mechanism.
- outDir: This is the location to output .js files after transpilation. We save it as dist.
- An alternative to manually creating and populating the tsconfig.json file is running: tsc --init. This command will generate a nicely commented tsconfig.json file.

- To learn more about the key value options available, the official [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html) offers explanations of every option.

## tslint.json
-Now you can configure TypeScript linting for the project. In a terminal running in the root of your project’s directory, run the following command to generate a tslint.json file:
```
./node_modules/.bin/tslint --init
```

## Updating the Package.json file

- Open the package.json file and update it accordingly:
```
{
  "name": "node-with-ts",
  "version": "1.0.0",
  "description": "",
  "main": "dist/app.js",
  "scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.16.1",
    "tslint": "^5.12.1",
    "typescript": "^3.3.3"
  },
  "dependencies": {
    "express": "^4.16.4"
  }
}
```
- In the snippet above, you updated the main path and added the start command to the scripts section. Taking a close look at the start command, first the tsc command is run, and then the node command. This will compile and then run the generated output with node.
