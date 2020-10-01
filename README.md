# Antra-ui

This is a Angular Component Library which is using following as peer dependencies:

```json
  "peerDependencies": {
    "@angular/common": ">=10.1.3",
    "@angular/core": ">=10.1.3",
    "@angular/material": ">=10.2.2"
  }
```

## Development setup

1. clone the repo: `git clone https://github.com/Antra-Inc/Antra-ui.git`
2. cd to the Antra-ui `cd Antra-ui`
3. install dependencies `npm i`
4. build antra-ui library `npm run build-antra-ui` (it will create dist/antra-ui folder)
5. cd to dist/antra-ui `cd dist/antra-ui`
6. create a global npm antra-ui package link to this folder `npm link` (it will create global node_modules/antra-ui)
7. cd back to the Antra-ui `cd ../..`
8. create a local antra-ui package link to this folder `npm link antra-ui` (it will create local node_modules/antra-ui)
