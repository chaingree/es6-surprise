import privateCreater from './privateCreater.js'

/**
 * 包含公共属性和方法的类定义
 */
class A {
  constructor() {
  }

  log(s) {
    // 打印私有化对象
    console.log(private_A(this))
    private_A(this).log(s)
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



// 私有化方法
const private_A = privateCreater(_A);


export default A