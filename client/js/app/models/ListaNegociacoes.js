class Listanegociacoes {

    constructor(trap) {
        this._negociacoes = [];
        this._trap = trap;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._trap(this);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        this._trap(this);
    }
}