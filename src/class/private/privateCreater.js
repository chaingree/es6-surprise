/**
 * 私有化工厂，闭包隐藏私有化集合,独立化查询和创建方法
 */
const privateCreater = function () {
  /**
   * 私有化集合
   */
  let privates = new WeakMap()
  /**
   * 私有化集合查询和创建接口
   * @param {object} _this 类的实例
   * @param {Class} PrivateClass 私有类
   * @param  {...any} args 私有类的构造函数参数
   */
  return function (_this, PrivateClass, ...args) {
    if (privates.has(_this)) {
      return privates.get(_this)
    } else if (typeof PrivateClass == 'function') {
      privates.set(_this, new PrivateClass(...args))
      return privates.get(_this)
    }
    return null;
  }
}
export default privateCreater;
