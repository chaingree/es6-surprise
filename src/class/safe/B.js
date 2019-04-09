import A from "./A.js"
/**
 * 打造安全的类
 * 实现安全类的继承
 */
class B extends A{
    say = 'Hello world!'
    constructor(){
        super()
        if(this.constructor === B.prototype.constructor)Object.seal(this)
    }

    log(){
        this.index++
        console.log(this.say)
        super.log()
    }
}

Object.seal(B)
Object.freeze(B.prototype)

export default B