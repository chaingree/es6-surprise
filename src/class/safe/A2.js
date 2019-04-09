import safe from "./safe.js"

/**
 * 打造安全的类
 * 使用封装好的方法createSafe
 */

class A{
    constructor(){
        safe.create(A,this,{
            index:{value:0,type:Number}
        })
    }
    log(){
        console.log(this.index)
    }
}

safe.lock(A)
export default A