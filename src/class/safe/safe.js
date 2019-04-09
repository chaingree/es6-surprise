/**
 * 给类添加getter setter属性，增加类型检测
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * 
 * @param {Class} refClass 自定义类
 * @param {Object} ref refClass类的实例
 * @param {JSON} json refClass类的属性。数据格式：{key:{value:'默认值',type:'数据类型'}}
 */
let create = function (refClass, ref, json) {
    if (ref && ref instanceof refClass) {
        if (json) {
            for (let key in json) {
                Object.defineProperty(ref, key, {
                    get: function () {
                        return json[key].value;
                    },
                    set: function (newValue) {
                        if (newValue !== null && newValue !== undefined && newValue.constructor !== json[key].type) {
                            throw new Error('Data type error, type not ' + json[key].type.name)
                        }
                        json[key].value = newValue;
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        }
        // 密封实例对象，防止动态属性添加，锁定现有属性，
        // 只要它们是可写的，当前属性的值仍然可以改变。
        if (ref.constructor === refClass.prototype.constructor) Object.seal(ref)
    }
}

let lock = function (refClass) {
    // 密封类对象，防止动态属性添加，锁定现有属性，
    // 只要它们是可写的，当前属性的值仍然可以改变。
    Object.seal(refClass)
    // 冻结原型，防止更改，删除，添加属性和属性值
    Object.freeze(refClass.prototype)
}

const safe={create,lock}
export default safe