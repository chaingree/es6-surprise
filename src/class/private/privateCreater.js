
/**
 * 类实例的私有和公有部分关联管理工具
 */
const privateCreater = function (PrivateClass) {
  /**
   * 类实例私有和公共部分关联关系集合
   */
  let privates = new WeakMap()
  /**
   * 类实例私有和公共部分关联查询,和创建
   * @param {object} _this 类的实例
   * @param  {...any} args 私有类的构造函数参数（第一次创建时会）
   */
  return function (_this, ...args) {
    if (privates.has(_this)) {
      return privates.get(_this)
    } else if (typeof PrivateClass == 'function') {
      // 这种方式有一个弊端：
      // 私有类构造函数内不能调用公共类中有调用私有类属性或方法的方法
      privates.set(_this, new PrivateClass(...args))
      return privates.get(_this)
    }
    return null;
  }
}
export default privateCreater;

