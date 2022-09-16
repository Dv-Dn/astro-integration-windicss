import type { AstroIntegration } from "astro";
import { defineConfig } from "windicss/helpers";
import { fileURLToPath } from "url";
import path from "path";
import load from "@proload/core";

import Windicss, {
  type UserOptions,
  type WindiPluginUtilsOptions,
} from "vite-plugin-windicss";

function getDefaultConfig(srcUrl: URL | string) {
  return defineConfig({
    extract: {
      include: [
        path.join(
          fileURLToPath(srcUrl),
          `**`,
          `*.{astro,html,js,jsx,svelte,ts,tsx,vue}`
        ),
      ],
      exclude: ["node_modules", ".git"],
    },
    plugins: [],
  });
}
async function getUserConfig(root: URL) {
  const resolvedRoot = fileURLToPath(root);

  return await load("windi", {
    mustExist: false,
    cwd: resolvedRoot,
  });
}

export default function windicssPlugin(
  userOptions?: UserOptions,
  utilsOptions?: WindiPluginUtilsOptions
): AstroIntegration {
  return {
    name: "windicss",
    hooks: {
      "astro:config:setup": async ({ config, updateConfig, injectScript }) => {
        const userConfig = await getUserConfig(config.root);

        updateConfig({
          vite: {
            plugins: [
              Windicss(
                {
                  config: {
                    ...getDefaultConfig(config.srcDir),
                    ...userConfig?.value,
                  },
                  ...userOptions,
                },
                utilsOptions
              ),
            ],
          },
        });
        injectScript("page-ssr", 'import "virtual:windi.css";');
      },
    },
  };
}
