function main() {
    var nome = 'Juliana';
    console.log(tratamento_formal(nome));
}
function tratamento_formal(nome, pronome) {
    if (pronome === void 0) { pronome = 'Sra.'; }
    return "".concat(pronome, " ").concat(nome);
}
main();
