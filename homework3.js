function pow(x,y) {
    let a = 1;
    for (let i = 1; i<=y; i++){
        a = a * x;
    }
    return a;
}
console.log(pow(3,20));