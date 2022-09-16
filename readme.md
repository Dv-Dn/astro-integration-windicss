# Windicss + Astro Integration


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
