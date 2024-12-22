import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import UnoCSS from 'unocss/vite'


function CustomHmr() {
  return {
    name: 'md-hmr',
    handleHotUpdate({ file, server }: { file: string; server: any }) {
      if (file.endsWith('.md')) {
        server.ws.send({
          type: 'full-reload',          
          path: '*'
        });
      }
    },
  }
}


export default defineConfig({
  plugins: [sveltekit(), UnoCSS(), CustomHmr()],
});
