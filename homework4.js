function checkProbabilityTheory(count){
    let evens = 0
    let odds = 0
    for (let i = 0; i < count; i++){
        let a = Math.floor(Math.random()*900 + 100)
        if ( a%2 === 0){
            evens = evens + 1
        } else {
            odds = odds + 1
        }
    }
    let evensPercent = (evens * 100 / count).toFixed(2)
    let oddsPercent = 100 - evensPercent 
    console.log("Кількість згенерованих чисел: " + count)
    console.log("Парних чисел: " + evens)
    console.log("Не парних чисел: " + odds)
    console.log("Відсоток парних до не парних: " + evensPercent + "/" + oddsPercent)
}
checkProbabilityTheory(100000)