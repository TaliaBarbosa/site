import card from "./cards.js"
import Produto from "./pruduto.js"

class paginas{
    PaginaPrincipal = document.getElementById("pagina")
    cards = new card()
    ProdutoA = new Produto()
    PaginaDeProduto(){
        this.PaginaPrincipal.innerHTML = "ola mundo"
        this.InserirConteudo("<div id='VitrineProdutos'></div>")
        this.cards.CriarCards("VitrineProdutos","Tenis da Nike","Produtos novo da loja")
        this.cards.CriarCards("VitrineProdutos","Meia Adidas","Produtos novo da loja")
        document.getElementsByClassName("card")[0].id = "Nike_prod"
        document.getElementsByClassName("card")[1].id = "Nike_prod"
        let Produto_1 = document.getElementById("Nike_prod")
        Produto_1.addEventListener("click",this.PaginaDeProduto_Adidas)
        document.getElementById("Meia_produto").innerHTML =""


    }
    PaginaDeProduto_Adidas(){
       let Prod = new Produto()
       Prod.cardProdutoBasico("TenisAdidas","./img/tenis.jpg","Tenis da Adidas","250,00","7.5","")

    }
    PaginaDeProduto_AdidasMeia(){
        let Prod = new Produto()
        Prod.cardProdutoBasico("TenisAdidas","","Tenis da Adidas","250,00","7.5","")
 
     }
 


    InserirConteudo(conteudo){
        this.PaginaPrincipal.innerHTML+=conteudo
    }

}
export default paginas