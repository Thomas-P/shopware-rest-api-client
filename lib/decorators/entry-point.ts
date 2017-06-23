//
// generate a key for entry point reflection
//
const ENTRY_KEY = 'EntryPoint_' + Math.random().toString(16);

/**
 *
 * @param path
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export const EntryPoint = (path: string) => {
    /**
     *
     */
    return (target) => {
        Reflect.set(target, ENTRY_KEY, path);
    }
};
/**
 *
 * @param target
 * @returns {string}
 */
export const getEntryPoint = (target): string => {
    if (target && typeof target !== 'function') {
        target = target.constructor;
    }
    if (!target) {
        return;
    }
    return String(Reflect.get(target, ENTRY_KEY))
};

@EntryPoint('/api/test')
class Test {

}
