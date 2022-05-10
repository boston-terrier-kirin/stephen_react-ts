import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // index.js の場合
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { namespace: 'a', path: 'index.js' };
      });

      // ./ と ../ の場合
      build.onResolve({ filter: /^\.+\// }, async (args: any) => {
        return {
          namespace: 'a',
          path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`).href,
        };
      });

      // ルートパッケージの場合
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};
