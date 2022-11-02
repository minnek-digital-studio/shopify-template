import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: './assets',
        assetsDir: '',
        rollupOptions: {
            input: {
                'main': './assets/ysw-main.js',
            },
            output: {
                entryFileNames: '[name].min.js',
                assetFileNames: '[name].min.[ext]',
            },
        },
        emptyOutDir: false,
    },
});
