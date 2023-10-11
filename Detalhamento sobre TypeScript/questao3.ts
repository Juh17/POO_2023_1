function main(){
    let nome: string = 'Juliana'
    console.log(tratamento_formal(nome))
}

function tratamento_formal(nome: string, pronome: string = 'Sra.'){
    return `${pronome} ${nome}`

}

main()