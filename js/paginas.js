import card from "./cards.js"

class paginas{
    PaginaPrincipal = document.getElementById("pagina")
    cards = new card()
    PaginaDeProduto(){
        this.PaginaPrincipal.innerHTML = "ola mundo"
        this.InserirConteudo("<div id='VitrineProdutos'></div>")
        this.cards.CriarCards("VitrineProdutos","Tenis da Nike","Produtos novo da loja")
        document.getElementsByClassName("card")[0].id = "Nike_prod"
        let Produto_1 = document.getElementById("Nike_prod")
        Produto_1.addEventListener("click",this.PaginaDeProduto_Adidas)


    }
    PaginaDeProduto_Adidas(){
        //this.PaginaPrincipal.innerHTML = ""
        //this.InserirConteudo("<div class='produtos'> Tenis da Adidas </div>")
        document.getElementsByClassName("localNav")[0].innerHTML = "<h4>Produtos/ Tenis da Adidas </h4>"
        document.getElementById("pagina").innerHTML = ""
        document.getElementById("pagina").innerHTML+="<div class='produtos'></div>"
    }
    InserirConteudo(conteudo){
        this.PaginaPrincipal.innerHTML+=conteudo
    }

}
export default paginas