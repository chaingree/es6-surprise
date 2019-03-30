import A from "./A.js";
import privateCreater from './privateCreater.js'


// 私有化方法
const _ = privateCreater();


class B extends A {
  constructor() {
    super()
    _(this, _B)
  }

  add() {
    _(this).index++
    this.log('add')
  }

  log(s) {
     // 打印私有化对象
    console.log( _(this) )
    super.log(' index ' + _(this).index + ' ' + s)
  }

}

class _B {
  index = 0
}

export default B