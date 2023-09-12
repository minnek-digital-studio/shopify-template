import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

function generateEntryPoints() {
  const entryPoints = {};
  const srcDir = './src';
  const modulesDir = './src/modules';

  const files = fs.readdirSync(srcDir);
  const tsFiles = files.filter((file) => file.endsWith('.ts'));

  if (fs.existsSync(modulesDir)) {
    const moduleFiles = fs.readdirSync(modulesDir).filter((file) => file.endsWith('.ts'));

    moduleFiles.forEach((file) => {
      const fileName = path.basename(file, '.ts');
      entryPoints[fileName] = path.resolve(modulesDir, file);
    });
  }

  tsFiles.forEach((file) => {
    const fileName = path.basename(file, '.ts');
    entryPoints[fileName] = path.resolve(srcDir, file);
  });

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
      },
    },
    emptyOutDir: false,
  },
});
