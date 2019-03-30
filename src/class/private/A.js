import privateCreater from './privateCreater.js'

// 私有化方法
const _ = privateCreater();

/**
 * 包含公共属性和方法的类定义
 */
class A {
  constructor() {
    _(this, _A)
  }

  log(s) {
    // 打印私有化对象
    console.log(_(this))
    _(this).log(s)
  }

  get PI(){
    return _A.PI
  }

}


/**
 * 包含私有属性和方法的类定义
 */
class _A {
  count = 1
  static PI = '3.14'
  log(s) {
    console.log(this.count + ' ' + s)
    this.count++
  }
}

export default A