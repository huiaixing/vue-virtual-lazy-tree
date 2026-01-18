import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import scopeModule from './mock/index'

export function setupProdMockServer() {
  createProdMockServer([
    ...scopeModule
  ]);
}
