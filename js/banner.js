class Banner{
    CriarBanner(Idalvo,Texto){
        let Elemento = document.getElementById(Idalvo)
        Elemento.innerHTML +="<article>"+Texto+"</article>"
    }

}
export default Banner