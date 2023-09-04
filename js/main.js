import navComponente from "./nav.js"
import Banner from "./banner.js"
import Card from "./cards.js";

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();
let cardProduto = new Card()

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B =new Banner();
let BannerInfo = ["<h1>compra rapida</h1> <br/> <h3> compre roupas mais rapido...</h3>","<h1>roupas da moda</h1> <br/><h3>moda</h3> <h1>roupa da moda</h1>","<h3>Roupa da marvel</h3"]
B.CriarBanner("banner_1",)
B.ModificaBanner("banner_1",BannerInfo,2)

let BannerIndex = 0
setInterval(()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1

},9000)
document.getElementById("btBannerProximo").addEventListener("click",()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    else{ 
        BannerIndex+=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})
document.getElementById("btBannerAnterior").addEventListener("click",()=>{
    if(BannerIndex <= 0){
        BannerIndex = 2
    }
    else{ 
        BannerIndex-=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})

cardProduto.CriarCards("Portacard1","Tênis Adidas","È um tenis de alta performace")
cardProduto.CriarCards("Portacard1","Tênis Adidas","È um tenis de alta performace")


let cardVenda = new Card()
cardVenda.EscolherTipo("cardProduto")
cardVenda.CriarCards("Portacard1","Produto a venda","Venda do produto")

let CardNovo = new Card()
CardNovo.EscolherTipo("card03")
CardNovo.CriarCards("Portacard1","Estoque","ultimas peças")
