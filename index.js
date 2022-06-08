function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    return function  fn() {
        console.log()
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`undefined`)
    } 
}