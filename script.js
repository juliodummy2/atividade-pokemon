const btnBuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const resultadoArea = document.getElementById('resultado');
const msgErro = document.getElementById('msgErro');

function realizarBusca (){

    const nome = campoBusca.Value.toLowerCase().trim();

    if (nome === ""){
        alert("Por favor, digite um nome");
        return;
    }
}
