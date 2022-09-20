import P from "module";
import x from "path";
import { fileURLToPath as y } from "url";
import $ from "@proload/core";
import L from "vite-plugin-windicss";
var v = { exports: {} };
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.addHook = R;
  var c = h(P), d = h(x);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  const p = /^(?:.*[\\/])?node_modules(?:[\\/].*)?$/, u = o.constructor.length > 1 ? o.constructor : c.default, E = `[Pirates] A hook returned a non-string, or nothing at all! This is a violation of intergalactic law!
--------------------
If you have no idea what this means or what Pirates is, let me explain: Pirates is a module that makes is easy to implement require hooks. One of the require hooks you're using uses it. One of these require hooks didn't return anything from it's handler, so we don't know what to do. You might want to debug this.`;
  function k(e, t, r, g) {
    if (typeof e != "string" || t.indexOf(d.default.extname(e)) === -1)
      return !1;
    const l = d.default.resolve(e);
    return g && p.test(l) ? !1 : r && typeof r == "function" ? !!r(l) : !0;
  }
  function R(e, t = {}) {
    let r = !1;
    const g = [], l = [];
    let i;
    const O = u._extensions[".js"], M = t.matcher || null, q = t.ignoreNodeModules !== !1;
    return i = t.extensions || t.exts || t.extension || t.ext || [".js"], Array.isArray(i) || (i = [i]), i.forEach((n) => {
      if (typeof n != "string")
        throw new TypeError(`Invalid Extension: ${n}`);
      const a = u._extensions[n] || O;
      l[n] = u._extensions[n], g[n] = u._extensions[n] = function(f, m) {
        let _;
        r || k(m, i, M, q) && (_ = f._compile, f._compile = function(C) {
          f._compile = _;
          const w = e(C, m);
          if (typeof w != "string")
            throw new Error(E);
          return f._compile(w, m);
        }), a(f, m);
      };
    }), function() {
      r || (r = !0, i.forEach((a) => {
        u._extensions[a] === g[a] && (u._extensions[a] = l[a]);
      }));
    };
  }
})(v, v.exports);
function N(o) {
  return {
    extract: {
      include: [
        x.join(
          y(o),
          "**",
          "*.{astro,html,js,jsx,svelte,ts,tsx,vue}"
        )
      ],
      exclude: ["node_modules", ".git"]
    },
    plugins: []
  };
}
async function T(o) {
  const s = y(o);
  return await $("windi", {
    mustExist: !1,
    cwd: s
  });
}
function G(o, s) {
  return {
    name: "windicss",
    hooks: {
      "astro:config:setup": async ({ config: c, updateConfig: d, injectScript: h }) => {
        const p = await T(c.root);
        d({
          vite: {
            plugins: [
              L(
                {
                  config: {
                    ...N(c.srcDir),
                    ...p?.value
                  },
                  ...o
                },
                s
              )
            ]
          }
        }), h("page-ssr", 'import "virtual:windi.css";');
      }
    }
  };
}
export {
  G as default
};
//# sourceMappingURL=index.mjs.map
