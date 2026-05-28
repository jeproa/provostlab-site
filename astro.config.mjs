// @ts-check
import { defineConfig } from 'astro/config';

// During preview the site is served at https://jeproa.github.io/provostlab-site/.
// At DNS cutover, switch `site` to https://provostlab.polymtl.ca and `base` to '/'.
export default defineConfig({
  site: 'https://jeproa.github.io',
  base: '/provostlab-site',
});
