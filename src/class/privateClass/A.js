import _ from './private.js'

/**
 * 包含公共属性和方法的类定义
 */
class A{
  dilog = ''
  constructor(){
    _(this,_A)
  }

  log(s){
    _(this).log(s)
  }
}


/**
 * 包含私有属性和方法的类定义
 */
class _A{
  count = 1
  log(s){
    console.log(this.count + ' ' + s )
    this.count++
  }
}

export default A