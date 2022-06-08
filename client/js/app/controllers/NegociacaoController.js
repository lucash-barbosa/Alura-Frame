class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listanegociacoes = new Listanegociacoes();
    }

    adiciona(event){
        event.preventDefault();

        this._listanegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        this._listanegociacoes.negociacoes.length = 0;

        console.log(this._listanegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }
}