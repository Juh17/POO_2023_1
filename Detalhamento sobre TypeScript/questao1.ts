function main() {

    let num: number = 17
    console.log(valor_logico(num))

}

function valor_logico(num: number){
    if (num % 2 == 0){
        return true
    }
    else {
        return false
    }
}

main()