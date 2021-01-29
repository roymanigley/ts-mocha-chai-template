# ts-mocha-chai-template
> A Template with preconfigured tests with mocha and chai


## Template createion
```bash
  npm i typescript node-fetch \
    @types/node \
    @types/node-fetch \
    mocha \
    chai \
    ts-node \
    @types/mocha \
    @types/chai -D 
    
    
  npx tsc --init --rootDir src --outDir dist 
  
  mkdir -p src/main src/test
```
  
`package.json`
 ```json
  ...
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/main/Main.js",
    "test": "npx mocha -r ts-node/register src/test/**.ts"
  }
  ...
```
