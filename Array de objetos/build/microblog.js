var Postagem = /** @class */ (function () {
    function Postagem(id, texto, quantidadeCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.incluir = function (postagem) {
        this.postagens.push(postagem);
    };
    Microblog.prototype.excluir = function (id) {
        var indice = this.consultarPorIndice(id);
        if (indice != -1) {
            for (var i = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    };
    Microblog.prototype.consultarPorIndice = function (id) {
        var indice = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.getPostagemMaisCurtida = function () {
        var maisCurtidas = -1;
        var postagemMaisCurtida;
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var postagem = _a[_i];
            if (postagem.quantidadeCurtidas >= maisCurtidas) {
                postagemMaisCurtida = postagem;
                maisCurtidas = postagem.quantidadeCurtidas;
            }
        }
        return postagemMaisCurtida;
    };
    Microblog.prototype.curtir = function (id) {
        var indicePostagemProcurada = this.consultarPorIndice(id);
        if (indicePostagemProcurada) {
            this.postagens[indicePostagemProcurada].curtir();
        }
    };
    return Microblog;
}());
var microblog = new Microblog();
microblog.incluir(new Postagem(1, "textão 1", 0));
microblog.incluir(new Postagem(2, "textão 2", 3));
microblog.incluir(new Postagem(3, "textão 3", 4));
//microblog.curtir(0);
microblog.curtir(3);
microblog.curtir(3);
microblog.excluir(1);
console.log(microblog.postagens);
