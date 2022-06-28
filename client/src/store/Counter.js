const { makeAutoObservable } = require("mobx")

class Counter {
    count = 0
    
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
        console.log('increment');
    }

    decrement () {
        this.count--
        console.log('this.conut', this.conut)
        
    }

}  

export default new Counter()