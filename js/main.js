import navComponente from "./nav.js"
import Banner from "./banner.js"

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B =new Banner();
let BannerInfo = ["<h1>compra rapida</h1> <br/> <h3> compre roupas mais rapido...</h3>","<h1>roupas da moda</h1> <br/><h3>moda</h3> <h1>roupa da moda</h1>"]
B.CriarBanner("banner_1",)
B.ModificaBanner("banner_1",BannerInfo,2)

let BannerIndex = 0
setInterval(()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1

},2000)