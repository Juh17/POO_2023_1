function num_primo(num: number) {
    if (num <= 1) {
        return false
    }
    if (num <= 3) {
        return true
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false
        }
    }
    return true
}

let num: number = 17
console.log(num_primo(num))
let num2: number = 10
console.log(num_primo(num2))