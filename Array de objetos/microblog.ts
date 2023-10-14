class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string, quantidadeCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir() {
        this.quantidadeCurtidas++;
    }
}

class Microblog {
    postagens: Postagem[] = [];

    incluir(postagem: Postagem) {
        this.postagens.push(postagem);
    }

    excluir(id: number): void {
        let indice: number = this.consultarPorIndice(id);

        if (indice != -1) {
            for (let i: number = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }

            this.postagens.pop();
        }
    }

    consultarPorIndice(id: number): number {
        let indice: number = -1;
		for (let i: number = 0; i < this.postagens.length; i++) {
			if (this.postagens[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
    }

    getPostagemMaisCurtida(): Postagem {
        let maisCurtidas = -1;
        let postagemMaisCurtida! : Postagem;

        for (let postagem of this.postagens) {
            if (postagem.quantidadeCurtidas >= maisCurtidas) {
                postagemMaisCurtida = postagem;
                maisCurtidas = postagem.quantidadeCurtidas;
            }
        }
        return postagemMaisCurtida;
    }

    curtir(id: number): void {
        let indicePostagemProcurada = this.consultarPorIndice(id);
        
        if (indicePostagemProcurada) {
            this.postagens[indicePostagemProcurada].curtir();
        }
    }
   
}

let microblog = new Microblog();
microblog.incluir(new Postagem(1, "textão 1", 0));
microblog.incluir(new Postagem(2, "textão 2", 3));
microblog.incluir(new Postagem(3, "textão 3", 4));

//microblog.curtir(0);
microblog.curtir(3);
microblog.curtir(3);
microblog.excluir(1);

console.log(microblog.postagens);