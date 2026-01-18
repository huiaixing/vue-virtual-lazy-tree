import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ConfigEnv, UserConfigExport } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
  '@': pathResolve("src")
}

// https://vite.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true;
  return {
    base: './',
    resolve: {
      alias
    },
    server: {
      port: 3001,
      host: '0.0.0.0',
      open: true,
      proxy: { // 代理配置
        '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/'
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'VueVirtualLazyTree',
        fileName: (format) => `vue-virtual-lazy-tree.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        // output: {
        //   manualChunks: {
        //     'echarts': ['echarts']
        //   }
        // }
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        watchFiles: true,
        injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
      // vitePluginSvg({
      //   // 必要的。必须是绝对路径组成的数组。
      //   iconDirs: [
      //       resolve(__dirname, 'src/assets/svg'),
      //   ],
      //   // 必要的。入口script
      //   main: resolve(__dirname, 'src/main.js'),
      //   symbolIdFormat: 'icon-[name]'
      // }),
    ],
    css: {
      postcss: {
        plugins: [
            {
              postcssPlugin: 'internal:charset-removal',
              AtRule: {
                charset: (atRule) => {
                  if (atRule.name === 'charset') {
                    atRule.remove();
                  }
                }
              }
            }
        ],
      },
    }
  };
}
