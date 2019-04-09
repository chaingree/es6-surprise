/**
 * 打造安全的类
 */
class A{
    index = 0
    constructor(){
        // 密封实例对象，防止动态属性添加，锁定现有属性，
        // 只要它们是可写的，当前属性的值仍然可以改变。
        if(this.constructor === A.prototype.constructor)Object.seal(this)
    }
    log(){
        console.log(this.index)
    }
}

// 密封类对象，防止动态属性添加，锁定现有属性，
// 只要它们是可写的，当前属性的值仍然可以改变。
Object.seal(A)
// 冻结原型，防止更改，删除，添加属性和属性值
Object.freeze(A.prototype)

export default A