import A from "./A2.js"
import safe from "./safe.js"

/**
 * 打造安全的类
 * 实现安全类的继承
 */
class B extends A{
    constructor(){
        super()
        // 定义属性，添加类型限制
        safe.create(B,this,{
            say:{value: 'Hello world!',type:String}
        })
    }

    log(){
        this.index++
        console.log(this.say)
        super.log()
    }
}

safe.lock(B)
export default B