/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    let num = init;
    function increment(){
        return ++num;
    }
    function decrement() {
        return --num;
    }
    function reset() {
        num = init;
        return init;
    }
    return { increment, decrement, reset }

    // # BEST
    // let sum = init;
    // return {
    //     increment() {return ++sum;},
    //     decrement() {return --sum;},
    //     reset() {return sum = init;},
    // };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
