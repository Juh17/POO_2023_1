function exibir(...argumentos : string[]) : void {
    argumentos.forEach((str: string) => console.log(str));
}

exibir('a', 'b');
exibir('a', 'b', 'c');
exibir('a', 'b', 'c', 'd');