import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), svgr()], // react-swc — быстрая компиляция JSX, svgr — импорт .svg как React-компонентов

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // главный алиас проекта, соответствует "paths": { "@/*": ["src/*"] } в tsconfig.json

      // дополнительные алиасы — используются реже, но должны быть согласованы с tsconfig,
      // иначе TS будет ругаться на пути, которые Vite резолвит, а TS — нет
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
    },
  },
  base: '/ulm', // сайт деплоится в подпапку /ulm — важно, это же значение использует import.meta.env.BASE_URL в i18n.ts
});
