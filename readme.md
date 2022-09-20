# Windicss + Astro Integration
[![npm](https://img.shields.io/github/package-json/v/dv-dn/astro-integration-windicss?color=green&label=npm&style=for-the-badge)](https://www.npmjs.com/package/astro-integration-windicss) 

### Installation
---
```
npm i astro-integration-windicss -D
```

##### astro.config.ts
---
```js
import { defineConfig } from "astro/config";
import WindiCSS from "astro-integration-windicss"

export default defineConfig({
  integrations: [
    WindiCSS(),
  ],
});
```


#### Visual Studio Code settings
---
Recomended plugin - [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)

##### settings.json
---
```json
{
...
...
  "windicss.includeLanguages": {
    "astro": {
      "type": "html",
      "patterns": ["class\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    }
  }
}

```
