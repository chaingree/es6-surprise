import A from "./A.js";
import privateCreater from './privateCreater.js'

/**
 * 私有化继承中的测试
 */
class B extends A {
  constructor() {
    super()
  }

  add() {
    private_B(this).index++
    this.log('add')
  }

  log(s) {
     // 打印私有化对象
    console.log( private_B(this) )
    super.log(' index ' + private_B(this).index + ' ' + s)
  }

}

class _B {
  index = 0
}

// 私有化方法
const private_B = privateCreater(_B);



export default B