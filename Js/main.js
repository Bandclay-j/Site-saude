import { estadosCoordenadas, locaisSaude } from "./coordenadas.js";

// Inicializa o mapa com Leaflet
const map = L.map('mapid').setView([-15, -47], 4); // Centro do Brasil, zoom inicial

// Adiciona a camada de tile do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Elementos do DOM para interação
const estadoFiltro = document.getElementById('estado');
const botaoFiltrar = document.getElementById('filtrar');
let marcadores = [];


/**
 * Adiciona marcadores ao mapa com base nos locais de saúde fornecidos.
 * @param {Array<Object>} locais - Um array de objetos contendo informações dos locais de saúde.
 */
function adicionarMarcadores(locais) {
    locais.forEach(local => {
        const marker = L.marker([local.lat, local.lng])
            .bindPopup(`<img src="${local.img}" alt="${local.nome}" style="width:300px; height:auto; border-radius:8px;">
                <br><b>${local.nome}</b>
                <br>${local.cidade}, ${local.estado}
                <br>${local.tipo}`)
            .addTo(map);
        marcadores.push(marker);
    });
}

/**
 * Remove todos os marcadores atualmente no mapa.
 */
function removerMarcadores() {
    marcadores.forEach(marker => {
        map.removeLayer(marker);
    });
    marcadores = [];
}

// Adiciona os marcadores iniciais ao carregar a página
adicionarMarcadores(locaisSaude);

/**
 * Event listener para o clique do botão "Filtrar".
 * Filtra os locais de saúde com base no estado selecionado e atualiza o mapa.
 */
botaoFiltrar.addEventListener('click', () => {
    const estadoSelecionado = estadoFiltro.value;
    removerMarcadores();

    var locaisFiltrados = locaisSaude.filter(function(local) {
        return estadoSelecionado === "" || local.estado === estadoSelecionado;
    });

    adicionarMarcadores(locaisFiltrados);

    if(estadoSelecionado && estadosCoordenadas[estadoSelecionado]) {
        const {coords, zoom} = estadosCoordenadas[estadoSelecionado]
        map.setView(coords, zoom);
        adicionarMarcadores(locaisSaude);
    } else {
        map.setView([-15, -47], 4)
    }
});