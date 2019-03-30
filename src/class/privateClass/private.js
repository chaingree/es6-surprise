/**
 * 私有化集合
 */
const privates = new WeakMap()
/**
 * 
 * @param {object} _this 类的实例
 * @param {Class} PrivateClass 私有类
 * @param  {...any} args 私有类的构造函数参数
 */
const _ = function (_this,PrivateClass,...args) {
  if(privates.has(_this) ){
    return privates.get(_this)
  }else{
    privates.set(_this,new PrivateClass(...args))
  }
}
export default _;
