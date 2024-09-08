

function pesquisar (){
        let section = document.getElementById("resultados-pesquisa")
        let campoPesquisa = document.getElementById("campo-pesquisa").value;
        let resultados = ""
        campoPesquisa = campoPesquisa.toLowerCase()
        let titulo = ""
        let descricao = ""

        for(let dado of dados){
            if(campoPesquisa == "" || campoPesquisa == " "){
                section.innerHTML = "nada foi encontrado"
                return
            }else{
                titulo = dado.nome.toLowerCase()
                descricao = dado.descricao.toLowerCase()
                if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
                                    resultados += `
                                <div class="item-resultado">
                                    <h2><a href="">${dado.nome}</a></h2>
                                    <p class="descricao">${dado.descricao}</p>
                                    <a href="${dado.link}" target="_blank">Mais informações</a>
                                </div>`
                }
            }
            
            
        }

        section.innerHTML = resultados 
}



