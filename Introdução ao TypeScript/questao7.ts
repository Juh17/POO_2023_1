class Pessoa {
    name: string;
    payment: number;
    lang: string;

    constructor(name: string, payment: number, lang: string) {
        this.name = name;
        this.payment = payment;
        this.lang = lang;
    }
    
    output(): void {
        console.log(`
        ${this.name}
        My payment time is ${this.payment}
        and
        my preffered language is ${this.lang}
        `);
    }
}

function main(): void {
    let ely: Pessoa = new Pessoa('Ely', 120.56, 'TypeScript');

    ely.output();
}

main()