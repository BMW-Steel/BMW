import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    // Vendored third-party assets — not project source code
    "public/ICONS/**",
    "public/carousel-15/**",
  ]),
]);
