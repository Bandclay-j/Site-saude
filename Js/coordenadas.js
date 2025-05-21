// Objeto com as coordenadas centrais de cada estado
export const estadosCoordenadas = {
    "AC": { coords: [-9.973136102579439, -67.81633466021657], zoom: 14 },
    "AL": { coords: [-9.665361500771045, -35.73609150089734], zoom: 11 },
    "AP": { coords: [0.04059201804553185, -51.05625019020479], zoom: 13 },
    "AM": { coords: [-3.1201518159234194, -60.0261359650671], zoom: 11},
    "BA": { coords: [-12.97933046125864, -38.50224861995067], zoom: 13 },
    "CE": { coords: [-3.733006800181306, -38.5278533398817], zoom: 12 },
    "DF": { coords: [-15.79583115555772, -47.895815335195536], zoom: 13 },
    "ES-VI": { coords: [-20.299807293580866, -40.31814830581995], zoom: 14 },
    "ES-SE": { coords: [-20.199728105791852, -40.22698318283005], zoom: 14 },
    "ES-CA": { coords: [-20.333028809816753, -40.377016000641206], zoom: 14 },
    "ES-VV": { coords: [-20.360092479238933, -40.29587928869655], zoom: 14 },
    "GO": { coords: [-16.687504305872853, -49.27250954924789], zoom: 13 },
    "MA": { coords: [-2.529083087930607, -44.2989929452206], zoom: 7 },
    "MT-RO": { coords: [-16.458203389410087, -54.643424766503784], zoom: 13 },
    "MT-CB": { coords: [-15.590761177091084, -56.09388598706818], zoom: 13 },
    "MS": { coords: [-20.46432465465818, -54.62212801570955], zoom: 12 },
    "MG": { coords: [-19.919460027812065, -43.94237311678923], zoom: 13 },
    "PA-BE": { coords: [-1.4567116658071317, -48.503838212419616], zoom: 13 },
    "PA-AN": { coords: [-1.392300503734472, -48.42001052421742], zoom: 14 },
    "PB": { coords: [-7.118628278756569, -34.88460220638085], zoom: 13 },
    "PR": { coords: [-25.42915005110549, -49.26571755690085], zoom: 12 },
    "PE": { coords: [-8.05757646967859, -34.884623493629746], zoom: 13 },
    "PI": { coords: [-5.096127142351846, -42.80288482736857], zoom: 13 },
    "RJ": { coords: [-22.90778781760165, -43.188588084078525], zoom: 12 },
    "RN": { coords: [-5.785514623446483, -35.201928824610185], zoom: 12 },
    "RS": { coords: [-30.039224869603867, -51.2143539164668], zoom: 13 },
    "RO-PV": { coords: [-8.76367165056492, -63.897651938898086], zoom: 13 },
    "RO-CA": { coords: [-11.415694351561132, -61.463649985882206], zoom: 14 },
    "RR": { coords: [2.821080605315778, -60.67477824607194], zoom: 13 },
    "SC-FL": { coords: [-27.597369063545887, -48.5461497174428], zoom: 13 },
    "SC-SJ": { coords: [-27.59487807244532, -48.61392026089157], zoom: 14 },
    "SP": { coords: [-23.55974457799089, -46.653078582984925], zoom: 13 },
    "SE": { coords: [-10.926445068054479, -37.073620125598815], zoom: 13 },
    "TO-PA": { coords: [-10.249912275032047, -48.32644591546912], zoom: 12 },
    "TO-AR": { coords: [-7.191708720763119, -48.210186188153116], zoom: 14 },
};

// Array de objetos contendo informações dos locais de saúde
export const locaisSaude = [
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
  },
  {
    nome: 'Hospital Israelita Albert Einstein - Unidade Goiânia',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Privado',
    lat: -16.696255057838496, 
    lng: -49.269585088400035
  },
  {
    nome: 'Hospital Amparo',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Privado',
    lat: -16.709023476230083, 
    lng: -49.269143642725474
  },

  // Hospitais do Maranhão (MA)
  {
    nome: 'Hospital Universitário da UFMA (HU-UFMA)',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Público',
    lat: -2.5243557864666477, 
    lng: -44.29436102304474
  },
  {
    nome: 'Hospital Carlos Macieira (HCM)',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Público',
    lat: -2.499910815464671, 
    lng: -44.28240068719022
  },
  {
    nome: 'Hospital São Domingos',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Privado',
    lat: -2.5232265760744554, 
    lng: -44.245156938950906
  },
  {
    nome: 'Clínica São Marcos',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Privado',
    lat: -2.506345765065462, 
    lng: -44.296455326329365
  },

  // Hospitais de Mato Grosso (MT)
  {
    nome: 'Hospital Regional Irmã Elza Giovanella',
    estado: 'Mato Grosso',
    cidade: 'Rondonópolis',
    tipo: 'Público',
    lat: -16.458203389410087, 
    lng: -54.643424766503784
  },
  {
    nome: 'Hospital Universitário Júlio Müller (HUJM)',
    estado: 'Mato Grosso',
    cidade: 'Cuiabá',
    tipo: 'Público',
    lat: -15.581101494298572, 
    lng: -56.079278321913264
  },
  {
    nome: 'Hospital Santa Rosa',
    estado: 'Mato Grosso',
    cidade: 'Cuiabá',
    tipo: 'Privado',
    lat: -15.579055276318195, 
    lng: -56.11127432396076
  },
  {
    nome: 'Hospital Femina',
    estado: 'Mato Grosso',
    cidade: 'Cuiabá',
    tipo: 'Privado',
    lat: -15.591398861622404, 
    lng: -56.08841251314704
  },

  // Hospitais de Mato Grosso do Sul (MS)
  {
    nome: 'Hospital Regional de Mato Grosso do Sul',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Público',
    lat: -20.51353890324855, 
    lng: -54.65438642037685
  },
  {
    nome: 'Hospital Universitário Maria Aparecida Pedrossian (HUMAP-UFMS)',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Público',
    lat: -20.499081319702, 
    lng: -54.61622386341957
  },
  {
    nome: 'Santa Casa de Campo Grande',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Privado',
    lat: -20.452973874501282, 
    lng: -54.616378312141464
  },
  {
    nome: 'Hospital Proncor',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Privado',
    lat: -20.456841396794573, 
    lng: -54.60903609638564
  },

  // Hospitais de Minas Gerais (MG)
  {
    nome: 'Hospital das Clínicas da UFMG',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Público',
    lat: -19.92436915059124, 
    lng: -43.92814753919892
  },
  {
    nome: 'Hospital João XXIII',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Público',
    lat: -19.926032300248153, 
    lng: -43.930981090393395
  },
  {
    nome: 'Hospital Mater Dei',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Privado',
    lat: -19.92770466771723, 
    lng: -43.95030339994387
  },
  {
    nome: 'Hospital Felício Rocho',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Privado',
    lat: -19.923096968152763, 
    lng: -43.95694193770501
  },

  // Hospitais do Pará (PA)
  {
    nome: 'Hospital Universitário João de Barros Barreto (HUJBB)',
    estado: 'Pará',
    cidade: 'Belém',
    tipo: 'Público',
    lat: -1.4579218679372856, 
    lng: -48.46450392308079
  },
  {
    nome: 'Hospital Metropolitano de Urgência e Emergência (HMUE)',
    estado: 'Pará',
    cidade: 'Ananindeua',
    tipo: 'Público',
    lat: -1.392300503734472, 
    lng: -48.42001052421742
  },
  {
    nome: 'Hospital Porto Dias',
    estado: 'Pará',
    cidade: 'Belém',
    tipo: 'Privado',
    lat: -1.437226661874741, 
    lng: -48.458033281444216
  },
  {
    nome: 'Clínica Saúde Belém',
    estado: 'Pará',
    cidade: 'Belém',
    tipo: 'Privado',
    lat: -1.4423176411032834, 
    lng: -48.46169019974675
  },

  // Hospitais da Paraíba (PB)
  {
    nome: 'Hospital Universitário Lauro Wanderley (HULW-UFPB)',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Público',
    lat: -7.135958652273807, 
    lng: -34.839983562871936
  },
  {
    nome: 'Hospital de Emergência e Trauma Senador Humberto Lucena',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Público',
    lat: -7.116200661251152, 
    lng: -34.84280175097792
  },
  {
    nome: 'Hospital Nossa Senhora das Neves',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Privado',
    lat: -7.132869847443027, 
    lng: -34.859041116567916
  },
  {
    nome: 'Unimed João Pessoa',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Privado',
    lat: -7.122388033654169, 
    lng: -34.86734024456492
  },

  // Hospitais do Paraná (PR)
  {
    nome: 'Hospital de Clínicas da UFPR',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Público',
    lat: -25.42416021392635, 
    lng: -49.26194755399307
  },
  {
    nome: 'Hospital do Trabalhador',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Público',
    lat: -25.484744188463424, 
    lng: -49.29496386294421
  },
  {
    nome: 'Hospital Evangélico Mackenzie',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Privado/Público',
    lat: -25.434461180041485, 
    lng: -49.29215359938413
  },
  {
    nome: 'Hospital Nossa Senhora das Graças',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Privado',
    lat: -25.422011027087706, 
    lng: -49.29035858180004
  },

  // Hospitais de Pernambuco (PE)
  {
    nome: 'Hospital da Restauração Gov. Paulo Guerra',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Público',
    lat: -8.05350713900241, 
    lng: -34.89773974572154
  },
  {
    nome: 'Hospital das Clínicas da UFPE',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Público',
    lat: -8.047433909674771, 
    lng: -34.94631540528427
  },
  {
    nome: 'Hospital Santa Joana',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Privado',
    lat: -8.051963849297294, 
    lng: -34.89818349611155
  },
  {
    nome: 'Real Hospital Português de Beneficência em Pernambuco',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Privado',
    lat: -8.06405230277503, 
    lng: -34.89815141766832
  },

  // Hospitais do Piauí (PI)
  {
    nome: 'Hospital Getúlio Vargas (HGV)',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Público',
    lat: -5.087963451902931, 
    lng: -42.804292144697264
  },
  {
    nome: 'Hospital Universitário da UFPI (HU-UFPI)',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Público',
    lat: -5.060034397776137, 
    lng: -42.79403802450087
  },
  {
    nome: 'Hospital Unimed Primavera',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Privado',
    lat: -5.057201738397343, 
    lng: -42.815647619022116
  },
  {
    nome: 'Hospital São Marcos',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Privado',
    lat: -5.090637051942127, 
    lng: -42.802892277772195
  },

  // Hospitais do Rio de Janeiro (RJ)
  {
    nome: 'Hospital Universitário Clementino Fraga Filho (HUCFF-UFRJ)',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Público',
    lat: -22.842771518840483, 
    lng: -43.237429618871396
  },
  {
    nome: 'Hospital Municipal Souza Aguiar',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Público',
    lat: -22.90831946668623, 
    lng: -43.18974198961783
  },
  {
    nome: 'Hospital Copa D\'Or',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Privado',
    lat: -22.965278750702172, 
    lng: -43.19049721267455
  },
  {
    nome: 'Hospital Samaritano Botafogo',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Privado',
    lat: -22.946508317855567, 
    lng: -43.186283261302556
  },

  // Hospitais do Rio Grande do Norte (RN)
  {
    nome: 'Hospital Universitário Onofre Lopes (HUOL-UFRN)',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Público',
    lat: -5.780465456496085, 
    lng: -35.19634030146123
  },
  {
    nome: 'Hospital Monsenhor Walfredo Gurgel (HMWG)',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Público',
    lat: -5.8100773447536085, 
    lng: -35.20344384375998
  },
  {
    nome: 'Hospital Memorial São Francisco',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Privado',
    lat: -5.79409371669482, 
    lng: -35.20583698076221
  },
  {
    nome: 'Hospital Dr. Paulo Gurgel',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Privado',
    lat: -5.849098286955337, 
    lng: -35.20664256725818
  },

  // Hospitais do Rio Grande do Sul (RS)
  {
    nome: 'Hospital de Clínicas de Porto Alegre (HCPA)',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Público',
    lat: -30.03879485961685, 
    lng: -51.20665300892097
  },
  {
    nome: 'Hospital Nossa Senhora da Conceição',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Público',
    lat: -30.0160761365177, 
    lng: -51.158564064254946
  },
  {
    nome: 'Hospital Moinhos de Vento',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Privado',
    lat: -30.024959240897267, 
    lng: -51.20852863120185
  },
  {
    nome: 'Hospital Mãe de Deus',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Privado',
    lat: -30.05902708352367, 
    lng: -51.22899905901498
  },

  // Hospitais de Rondônia (RO)
  {
    nome: 'Hospital de Base Dr. Ary Pinheiro',
    estado: 'Rondônia',
    cidade: 'Porto Velho',
    tipo: 'Público',
    lat: -8.736311708555304, 
    lng: -63.8901326131936
  },
  {
    nome: 'Hospital Regional de Cacoal',
    estado: 'Rondônia',
    cidade: 'Cacoal',
    tipo: 'Público',
    lat: -11.415694351561132, 
    lng: -61.463649985882206
  },
  {
    nome: 'Hospital Prontocordis',
    estado: 'Rondônia',
    cidade: 'Porto Velho',
    tipo: 'Privado',
    lat: -8.764688548822072, 
    lng: -63.89880378357091
  },
  {
    nome: 'Hospital das Clínicas - HC',
    estado: 'Rondônia',
    cidade: 'Porto Velho',
    tipo: 'Privado',
    lat: -8.7561683183849, 
    lng: -63.89364770290345
  },

  // Hospitais de Roraima (RR)
  {
    nome: 'Hospital Geral de Roraima (HGR)',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Público',
    lat: 2.833518586236693, 
    lng: -60.68813137945017
  },
  {
    nome: 'Hospital Materno Infantil Nossa Senhora de Nazareth (HMI)',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Público',
    lat: 2.8302001799991876, 
    lng: -60.66721373426938
  },
  {
    nome: 'Hospital Ville Roy',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Privado',
    lat: 2.8062097124240424, 
    lng: -60.6849829681622
  },
  {
    nome: 'Hospital Unimed Boa Vista',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Privado',
    lat: 2.816969328400138, 
    lng: -60.68248690020689
  },

  // Hospitais de Santa Catarina (SC)
  {
    nome: 'Hospital Governador Celso Ramos',
    estado: 'Santa Catarina',
    cidade: 'Florianópolis',
    tipo: 'Público',
    lat: -27.588546116240533, 
    lng: -48.550699352189596
  },
  {
    nome: 'Hospital Regional de São José Dr. Homero de Miranda Gomes',
    estado: 'Santa Catarina',
    cidade: 'São José',
    tipo: 'Público',
    lat: -27.610152708397237, 
    lng: -48.63037147048273
  },
  {
    nome: 'Hospital SOS Cardio',
    estado: 'Santa Catarina',
    cidade: 'Florianópolis',
    tipo: 'Privado',
    lat: -27.57410573788064, 
    lng: -48.51477371110865
  },
  {
    nome: 'Hospital Baía Sul',
    estado: 'Santa Catarina',
    cidade: 'Florianópolis',
    tipo: 'Privado',
    lat: -27.601158308759608, 
    lng: -48.544957077419646
  },

  // Hospitais de São Paulo (SP)
  {
    nome: 'Hospital das Clínicas da Faculdade de Medicina da USP',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Público',
    lat: -23.55780009577551, 
    lng: -46.66985980083225
  },
  {
    nome: 'Hospital São Paulo (UNIFESP)',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Público',
    lat: -23.597454487523578, 
    lng: -46.64374149614656
  },
  {
    nome: 'Hospital Sírio-Libanês',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Privado',
    lat: -23.557184650299885, 
    lng: -46.65346176572874
  },
  {
    nome: 'Hospital Albert Einstein',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Privado',
    lat: -23.599974446156313, 
    lng: -46.71525581858996
  },

  // Hospitais de Sergipe (SE)
  {
    nome: 'Hospital Universitário de Sergipe (HU-UFS)',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Público',
    lat: -10.893678928835627, 
    lng: -37.06466488254307
  },
  {
    nome: 'Hospital de Urgência de Sergipe Governador João Alves Filho',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Público',
    lat: -10.914021903922627, 
    lng: -37.09058512895889
  },
  {
    nome: 'Hospital Primavera',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Privado',
    lat: -10.949649106159166, 
    lng: -37.06544463788523
  },
  {
    nome: 'Hospital São Lucas',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Privado',
    lat: -10.924475534330046, 
    lng: -37.052052356430096
  },

  // Hospitais do Tocantins (TO)
  {
    nome: 'Hospital Geral de Palmas (HGP)',
    estado: 'Tocantins',
    cidade: 'Palmas',
    tipo: 'Público',
    lat: -10.196111924474343, 
    lng: -48.33580516169698
  },
  {
    nome: 'Hospital Regional de Araguaína (HRA)',
    estado: 'Tocantins',
    cidade: 'Araguaína',
    tipo: 'Público',
    lat: -7.193881105001464, 
    lng: -48.21057065860771
  },
  {
    nome: 'Hospital Unimed Palmas',
    estado: 'Tocantins',
    cidade: 'Palmas',
    tipo: 'Privado',
    lat: -10.20927358330738, 
    lng: -48.33643761115359
  },
  {
    nome: 'Hospital Oswaldo Cruz',
    estado: 'Tocantins',
    cidade: 'Palmas',
    tipo: 'Privado',
    lat: -10.208762545504054, 
    lng: -48.33616390254192
  }
];
