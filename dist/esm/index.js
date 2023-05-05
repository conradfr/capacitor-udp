import { registerPlugin } from '@capacitor/core';
const UDP = registerPlugin('UDP', {
    web: () => import('./web').then(m => new m.UDPWeb()),
});
export * from './definitions';
export { UDP };
//# sourceMappingURL=index.js.map