const REQUIRED_KEY = 'RequiredKey' + Math.random().toString(16);

/**
 *
 * @param key
 * @returns {(target:any, propertyName:any)=>undefined}
 * @constructor
 */
export const RequiredParameter = (key) => {
    return (target, propertyKeyName) => {
        const requiredObject = Reflect.has(target, REQUIRED_KEY) ? Reflect.get(target, REQUIRED_KEY) : {};
        if (Object(requiredObject).hasOwnProperty(key) === false || Array.isArray(requiredObject[key])) {
            requiredObject[key] = [];
        }
        if (requiredObject[key].indexOf(propertyKeyName) === -1) {
            requiredObject[key].push(propertyKeyName)
        }
        Reflect.set(target, propertyKeyName, requiredObject);
    };

};

export const getRequired = (object) => {

};