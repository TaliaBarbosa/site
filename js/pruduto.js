    class produto{
        cardProdutoBasico(ProdutoId,imagemProduto,Nomeproduto,PrecoProduto,Nota,DescProduto){
            document.getElementsByClassName("localNav")[0].innerHTML = "<h4>Produtos/"+ProdutoId+"</h4>"
            document.getElementById("pagina").innerHTML = ""
            document.getElementById("pagina").innerHTML+="<div id='"+ProdutoId+"_01' class='produtos'>"+
        "<article><img src='"+imagemProduto+"'><h1>"+Nomeproduto+" </h1>"+
        "<h3>"+PrecoProduto+"</h3></article>"+
        "</div>"

        document.getElementById(ProdutoId+"_01").innerHTML+="<div class='DescProdutos'</div>"
        document.getElementsByClassName("DescProdutos")[0].innerHTML+="<h1>Nota dos clientes:"+Nota+"</h1>"
        document.getElementsByClassName("DescProdutos")[0].innerHTML+="<h3>Descricao Produto:"+DescProduto+"</h3>"
        }
    }
    export default produto