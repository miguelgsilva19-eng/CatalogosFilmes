const filmes = [{
    titulo: "O Pequenino",
    imagem:"https://br.web.img3.acsta.net/c_310_420/pictures/210/364/21036473_20130905212653924.jpg",
    descricao:"O Pequenino (Little Man, 2006) é uma comédia pastelão dos mesmos criadores de As Branquelas. A trama acompanha Calvin, um criminoso anão que se disfarça de bebê abandonado para recuperar um diamante roubado, sendo adotado pelo ingênuo casal Darryl e Vanessa. O filme usa extensos efeitos visuais.",
},
{
    titulo: "Se Beber,Não Case!",
    imagem: "https://m.media-amazon.com/images/I/618FiO7H+sS._AC_UF894,1000_QL80_.jpg",
    descricao: "Se Beber, Não Case! (título original The Hangover) é uma famosa comédia de 2009. A trama acompanha quatro amigos que viajam a Las Vegas para uma despedida de solteiro. Após uma noite épica, três deles acordam de ressaca, sem memórias e com o noivo desaparecido, precisando refazer seus passos.",
},
{ 
    titulo:"Pelé: O Nascimento de uma Lenda ",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_esjlBtrB8QDB18pEsWdkWlpkPkmIhXRKgaD6YepLx7YajRXvv-PS-6olFT1e6x1KhE3e05LYpxuAybSvrrwlsFDTc0E771CP3-4YQ&s",
    descricao: "Pelé: O Nascimento de uma Lenda é um filme biográfico de 2016 que narra a trajetória de Edson Arantes do Nascimento. O longa acompanha sua infância humilde em Três Corações, sua ida para o Santos e a consagração histórica ao vencer a Copa do Mundo de 1958 pelo Brasil, aos 17 anos.",
},
]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme =>{
        listaFilmes.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}"class=card-img-top">
            <div class="card-body">
              <h3>${filme.titulo}</h3>
              <p>${filme.descricao}</p>
              <button class="btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
              </div>
              </div>
            </div>
        `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo){
    Swal.fire({
        title:titulo,
        text:"Mais informações do filme",
        icon:"info"
    })
}