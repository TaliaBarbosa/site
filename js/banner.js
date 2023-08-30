class Banner{
    CriarBanner(Idalvo,ListaBanner){
        let Elemento = document.getElementById(Idalvo)
        Elemento.innerHTML +="<article></article>"
       
    }
    ModificaBanner(Idalvo='',ListaBanner=[""],Index=0){
        let Banner = document.getElementById(Idalvo).getElementsByTagName("article")[0]
        Banner.innerHTML= ListaBanner[Index]

    }

}
export default Banner