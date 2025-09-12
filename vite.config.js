// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

function generateEntryPoints() {
    const entryPoints = {};
    const layoutDir = './src/modules/layout';
    const sassDir = './src/sass';

    if (fs.existsSync(layoutDir)) {
        const layoutFiles = fs.readdirSync(layoutDir).filter((file) => file.endsWith('.ts'));

        layoutFiles.forEach((file) => {
            const fileName = path.basename(file, '.ts');
            entryPoints[`layout-${fileName}`] = path.resolve(layoutDir, file);
        });
    }

    if (fs.existsSync(sassDir)) {
        const mainCssPath = './src/sass/index.scss';

        entryPoints.main = path.resolve(mainCssPath);
    }

    return entryPoints;
}

export default defineConfig({
    build: {
        outDir: './assets',
        assetsDir: '',
        rollupOptions: {
            input: generateEntryPoints(),
            output: {
                entryFileNames: 'ysw-[name].min.js',
                assetFileNames: 'ysw-[name].min.[ext]',
                chunkFileNames: 'ysw-[name]-[hash].min.js',
            },
        },
        emptyOutDir: false,
    },
});
