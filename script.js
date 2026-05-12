{e
const btnBuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const resultadoArea = document.getElementById('resultado');
const msgErro = document.getElementById('msgErro');

function realizarBusca (){

    const nome = campoBusca.Value.toLowerCase().trim(); 

    if (nome === ""){
        alert("Por favor, digite um nome");return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon${nome}`;

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Pokémon inexistente');}
            return response.json();
    })

    .then(data =>{
        msgErro.classList.add('d-none');

        document.getElementById('pokeNome').textContent = data.name;
        document.getElementById('PokeId').textContent = data.id;
        document.getElementById('PokeAltura').textContent = data.height;
        document.getElementById('PokePeso').textContent = data.weight;
        document.getElementById('PokeTipo').textContent = data.types[0].type.name;
        document.getElementById('PokeImg').src = data.sprites.front_default;

        resultadoArea.classList.remove('d-none');
    })
    .catch(error =>{
        console.error("Erro na Busca:", error);
        resultadoArea.classList.add('d-none');
        msgErro.classList.remove('d-none');
    })
}


btnBuscar.addEventListener('Click', realizarBusca)
campoBusca.addEventListener('keypress', (e)=>{
    if (e.key === 'enter'){
        realizarBusca();
    }
});
}