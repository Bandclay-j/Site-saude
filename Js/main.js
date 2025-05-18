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

// Objeto com as coordenadas centrais de cada estado
const estadosCoordenadas = {
    "AC": { coords: [-9.0238, -70.812], zoom: 6 },
    "AL": { coords: [-9.5713, -36.782], zoom: 7 },
    "AP": { coords: [0.902, -52.003], zoom: 6 },
    "AM": { coords: [-3.4168, -65.856], zoom: 6 },
    "BA": { coords: [-12.9714, -38.501], zoom: 7 },
    "CE": { coords: [-3.7172, -38.543], zoom: 7 },
    "DF": { coords: [-15.7801, -47.9292], zoom: 10 },
    "ES": { coords: [-20.3155, -40.3128], zoom: 8 },
    "GO": { coords: [-16.6869, -49.2643], zoom: 7 },
    "MA": { coords: [-2.5307, -44.3068], zoom: 7 },
    "MT": { coords: [-12.6404, -55.4231], zoom: 6 },
    "MS": { coords: [-20.4697, -54.6201], zoom: 6 },
    "MG": { coords: [-19.9208, -43.9378], zoom: 7 },
    "PA": { coords: [-1.4558, -48.4902], zoom: 6 },
    "PB": { coords: [-7.1195, -34.845], zoom: 8 },
    "PR": { coords: [-25.4284, -49.2733], zoom: 7 },
    "PE": { coords: [-8.0476, -34.877], zoom: 8 },
    "PI": { coords: [-5.0892, -42.8016], zoom: 7 },
    "RJ": { coords: [-22.9068, -43.1729], zoom: 8 },
    "RN": { coords: [-5.7945, -35.211], zoom: 8 },
    "RS": { coords: [-30.0346, -51.2177], zoom: 7 },
    "RO": { coords: [-8.7608, -63.8999], zoom: 6 },
    "RR": { coords: [2.8235, -60.6753], zoom: 6 },
    "SC": { coords: [-27.5954, -48.548], zoom: 7 },
    "SP": { coords: [-23.5505, -46.6333], zoom: 8 },
    "SE": { coords: [-10.9472, -37.0731], zoom: 8 },
    "TO": { coords: [-10.1841, -48.3336], zoom: 7 }
};

// Array de objetos contendo informações dos locais de saúde
const locaisSaude = [
      // Hospitais do Acre (AC)
 {
    nome: 'Hospital de Urgência e Emergência de Rio Branco (HUERB)',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Público',
    lat: -9.965346903580928,
    lng: -67.8142316968763
  },
  {
    nome: 'Fundação Hospital Estadual do Acre (Fundhacre)',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Público',
    lat: -9.966152032625677,
    lng: -67.85462715777943
  },
  {
    nome: 'Hospital Santa Juliana',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Privado',
    lat: -9.955744875279434,
    lng: -67.81470293991991
  },
  {
    nome: 'Pronto Clínica',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Privado',
    lat: -9.960571245091058,
    lng: -67.81550613241839
  },

  // Hospitais do Alagoas (AL)
  {
    nome: 'Hospital Universitário Professor Alberto Antunes (HUPAA)',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Público',
    lat: -9.559561592782758, 
    lng: -35.78024553398752
  },
  {
    nome: 'Hospital Geral do Estado de Alagoas (HGE)',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Público',
    lat: -9.672772930341187, 
    lng: -35.759175176967396
  },
  {
    nome: 'Hospital Arthur Ramos',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Privado',
    lat: -9.62057847420551, 
    lng: -35.73693711370889
  },
  {
    nome: 'Hospital Santa Casa de Misericórdia de Maceió',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Privado',
    lat: -9.659490575144115, 
    lng: -35.72576964400737
  },

  // Hospitais do Amapá (AP)
  {
     nome: 'Hospital de Emergência de Macapá',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Público',
    lat: 0.034691739334187476, 
    lng: -51.064712885688316
  },
  {
    nome: 'Hospital da Mulher Mãe Luzia',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Público',
    lat: 0.04051474951043837, 
    lng: -51.05932686900959
  },
  {
    nome: 'Hospital São Camilo e São Luís',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Privado',
    lat: 0.038711698485404795, 
    lng: -51.07463485531775
  },
  {
    nome: 'CMDR - Centro Médico Daniela Raulino',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Privado',
    lat: 0.03752353498271768, 
    lng: -51.07605060404066
  },

  // Hospitais do Amazonas (AM)
  {
    nome: 'Complexo Hospitalar Sul - Adrianópolis',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Público',
    lat: -3.1017644699755946, 
    lng: -60.01389996218537
  },
  {
    nome: 'Fundação Hospital Adriano Jorge (FHAJ)',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Público',
    lat: -3.119317959686744, 
    lng: -60.00573113782434
  },
  {
    nome: 'Hospital Santa Júlia',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Privado',
    lat: -3.1158240746712678, 
    lng: -60.02196609117438
  },
  {
    nome: 'CMM- Clínica Médica Manaus - Ultrassom, Pediatria, Fisioterapia e Exames Laboratoriais',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Privado',
    lat: -3.0314191120112786, 
    lng: -60.001227050750316
  },

  // Hospitais da Bahia (BA)
  {
    nome: 'Hospital Geral do Estado (HGE)',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Público',
    lat: -12.995052966142902, 
    lng: -38.48865835379225
  },
  {
    nome: 'Hospital Universitário Professor Edgard Santos (HUPES)',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Público',
    lat: -12.992805047053473, 
    lng: -38.52059663119366
  },
  {
    nome: 'Hospital da Bahia',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Privado',
    lat: -12.987673933119247, 
    lng: -38.4506223311165
  },
  {
    nome: 'Hospital Português',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Privado',
    lat: -13.002828276756915, 
    lng: -38.52464279133791
  },

  // Hospitais do Ceará (CE)
  {
    nome: 'Hospital Geral de Fortaleza (HGF)',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Público',
    lat: -3.7394501250612544, 
    lng: -38.47639146063162
  },
  {
    nome: 'Hospital Universitário Walter Cantídio (HUWC)',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Público',
    lat: -3.7493155646072935, 
    lng: -38.551768522040234
  },
  {
    nome: 'Hospital Oto Santos Dumont',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Privado',
    lat: -3.7415846080148323, 
    lng: -38.480366083063934
  },
  {
    nome: 'Hospital Monte Klinikum',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Privado',
    lat: -3.732347059304553, 
    lng: -38.49312808117145
  },

  // Hospitais do Distrito Federal (DF)
  {
    nome: 'Hospital Regional da Asa Norte (HRAN)',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Público',
    lat: -15.785041622277221, 
    lng: -47.88275351333373
  },
  {
    nome: 'Hospital Universitário de Brasília (HUB)',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Público',
    lat: -15.771393276077012, 
    lng: -47.87331731722889
  },
  {
    nome: 'Hospital Sírio-Libanês Brasília',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Privado',
    lat: -15.834603640363396, 
    lng: -47.91133359244227
  },
  {
    nome: 'Hospital Santa Lúcia',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Privado',
    lat: -15.828150623900203, 
    lng: -47.92980501205927
  },

  // Hospitais do Espírito Santo (ES)
  {
   nome: 'Hospital Universitário Cassiano Antônio Moraes (HUCAM)',
   estado: 'Espírito Santo',
   cidade: 'Vitória',
   tipo: 'Público',
   lat: -20.299807293580866, 
   lng: -40.31814830581995
  },
  {
    nome: 'Hospital Estadual Dr. Jayme Santos Neves',
    estado: 'Espírito Santo',
    cidade: 'Serra',
    tipo: 'Público',
    lat: -20.199728105791852, 
    lng: -40.22698318283005
  },
  {
    nome: 'Hospital Meridional',
    estado: 'Espírito Santo',
    cidade: 'Cariacica',
    tipo: 'Privado',
    lat: -20.333028809816753, 
    lng: -40.377016000641206
  },
  {
    nome: 'Hospital Santa Mônica',
    estado: 'Espírito Santo',
    cidade: 'Vila Velha',
    tipo: 'Privado',
    lat: -20.360092479238933, 
    lng: -40.29587928869655
  },

  // Hospitais de Goiás (GO)
  {
    nome: 'Hospital Estadual Dr. Alberto Rassi (HGG)',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Público',
    lat: -16.67936366124293, 
    lng: -49.270985586779084
  },
  {
    nome: 'Hospital das Clínicas da UFG (HC-UFG)',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Público',
    lat: -16.67455247576011, 
    lng: -49.24491698679967
  }
];

/**
 * Adiciona marcadores ao mapa com base nos locais de saúde fornecidos.
 * @param {Array<Object>} locais - Um array de objetos contendo informações dos locais de saúde.
 */
function adicionarMarcadores(locais) {
    locais.forEach(local => {
        const marker = L.marker([local.lat, local.lng])
            .bindPopup(`<b>${local.nome}</b><br>${local.cidade}, ${local.estado}<br>${local.tipo}`)
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