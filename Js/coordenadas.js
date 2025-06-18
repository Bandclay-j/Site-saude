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
    lng: -67.8142316968763,
    img: 'https://www.noticiasdahora.com.br/images/2021/06/09/HOSPITAL.JPG'
  },
  {
    nome: 'Fundação Hospital Estadual do Acre (Fundhacre)',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Público',
    lat: -9.966152032625677,
    lng: -67.85462715777943,
    img: 'https://agazeta.net/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-19-at-8.56.22-AM.jpeg'
  },
  {
    nome: 'Hospital Santa Juliana',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Privado',
    lat: -9.955744875279434,
    lng: -67.81470293991991,
    img: 'https://hsj.org.br/wp-content/uploads/2023/05/hsj-blog-anvisa.jpg'
  },
  {
    nome: 'Pronto Clínica',
    estado: 'Acre',
    cidade: 'Rio Branco',
    tipo: 'Privado',
    lat: -9.960571245091058,
    lng: -67.81550613241839,
    img: 'https://www.terapyas.com.br/imgempresas/prontoclinica-rio-branco-ac-12106-0zAM.jpg'
  },

  // Hospitais do Alagoas (AL)
  {
    nome: 'Hospital Universitário Professor Alberto Antunes (HUPAA)',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Público',
    lat: -9.559561592782758, 
    lng: -35.78024553398752,
    img: 'https://s2-g1.glbimg.com/3mY3GOck6dcriFhW78qXtNc1jYg=/0x0:1920x1280/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/05/07/hospital_universitario_jl_2.jpg'
  },
  {
    nome: 'Hospital Geral do Estado de Alagoas (HGE)',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Público',
    lat: -9.672772930341187, 
    lng: -35.759175176967396,
    img: 'https://cidadao.saude.al.gov.br/wp-content/uploads/2020/01/HGE.jpg'
  },
  {
    nome: 'Hospital Arthur Ramos',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Privado',
    lat: -9.62057847420551, 
    lng: -35.73693711370889,
    img: 'https://www.prosaude.org.br/wp-content/uploads/2018/12/15326917101-1.jpg'
  },
  {
    nome: 'Hospital Santa Casa de Misericórdia de Maceió',
    estado: 'Alagoas',
    cidade: 'Maceió',
    tipo: 'Privado',
    lat: -9.659490575144115, 
    lng: -35.72576964400737,
    img: 'https://santacasademaceio.com.br/wp-content/uploads/2021/04/02.png'
  },

  // Hospitais do Amapá (AP)
  {
     nome: 'Hospital de Emergência de Macapá',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Público',
    lat: 0.034691739334187476, 
    lng: -51.064712885688316,
    img: 'https://www.portal.ap.gov.br/img/noticias/a10877b7a5312051433e3ed3430aa6ac.jpg'
  },
  {
    nome: 'Hospital da Mulher Mãe Luzia',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Público',
    lat: 0.04051474951043837, 
    lng: -51.05932686900959,
    img: 'https://www.portal.ap.gov.br/img/noticias/1eed792709048f39d6abbd70a1a99cc0.jpg'
  },
  {
    nome: 'Hospital São Camilo e São Luís',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Privado',
    lat: 0.038711698485404795, 
    lng: -51.07463485531775,
    img: 'https://www.saocamilonortenordeste.org.br/recursos/not/ilust-SC-Hosp-SaoCamilo-SaoLuis-2.jpg'
  },
  {
    nome: 'CMDR - Centro Médico Daniela Raulino',
    estado: 'Amapá',
    cidade: 'Macapá',
    tipo: 'Privado',
    lat: 0.03752353498271768, 
    lng: -51.07605060404066,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1-xiPOf3lRE5I6KmJ50hBvO1lvmHqIKZRA&s'
  },

  // Hospitais do Amazonas (AM)
  {
    nome: 'Complexo Hospitalar Sul - Adrianópolis',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Público',
    lat: -3.1017644699755946, 
    lng: -60.01389996218537,
    img: 'https://lrnoticias.com.br/wp-content/uploads/2025/04/SES-FUNCIONAMENTO-FERIADO-FOTO-EVANDRO-SEIXAS-090.jpg'
  },
  {
    nome: 'Fundação Hospital Adriano Jorge (FHAJ)',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Público',
    lat: -3.119317959686744, 
    lng: -60.00573113782434,
    img: 'https://www.agenciaamazonas.am.gov.br/wp-content/uploads/2024/11/Fachada-Fundacao-Hospital-Adriano-Jorge_Foto-Divulgacao-FHAJ.jpg'
  },
  {
    nome: 'Hospital Santa Júlia',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Privado',
    lat: -3.1158240746712678, 
    lng: -60.02196609117438,
    img: 'https://ampost.com.br/wp-content/uploads/2025/04/Hospital-Santa-Julia-e-alvo-de-cobranca-de-quase-R1-milhao-por-descumprir-acordo-sanitario-em-Manaus.jpg'
  },
  {
    nome: 'CMM- Clínica Médica Manaus - Ultrassom, Pediatria, Fisioterapia e Exames Laboratoriais',
    estado: 'Amazonas',
    cidade: 'Manaus',
    tipo: 'Privado',
    lat: -3.0314191120112786, 
    lng: -60.001227050750316,
    img: '../img/cmm.png'
  },

  // Hospitais da Bahia (BA)
  {
    nome: 'Hospital Geral do Estado (HGE)',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Público',
    lat: -12.995052966142902, 
    lng: -38.48865835379225,
    img: 'https://www.saude.ba.gov.br/wp-content/uploads/2018/02/hge_fachada_carnaval.jpg'
  },
  {
    nome: 'Hospital Universitário Professor Edgard Santos (HUPES)',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Público',
    lat: -12.992805047053473, 
    lng: -38.52059663119366,
    img: 'https://www.ufba.br/sites/portal.ufba.br/files/noticias/hupes-ufba.jpg'
  },
  {
    nome: 'Hospital da Bahia',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Privado',
    lat: -12.987673933119247, 
    lng: -38.4506223311165,
    img: 'https://assets-sitesdigitais.dasa.com.br/strapi/small_fachada_bahia_593aff7652/small_fachada_bahia_593aff7652.png'
  },
  {
    nome: 'Hospital Português',
    estado: 'Bahia',
    cidade: 'Salvador',
    tipo: 'Privado',
    lat: -13.002828276756915, 
    lng: -38.52464279133791,
    img: 'https://www.anahp.com.br/wp-content/uploads/2023/01/Hospital-Portugues_fachada.png'
  },

  // Hospitais do Ceará (CE)
  {
    nome: 'Hospital Geral de Fortaleza (HGF)',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Público',
    lat: -3.7394501250612544, 
    lng: -38.47639146063162,
    img: 'https://www.saude.ce.gov.br/wp-content/uploads/sites/9/2024/05/HGF_Fachada_Hospital-Geral-de-Fortaleza-1.jpeg'
  },
  {
    nome: 'Hospital Universitário Walter Cantídio (HUWC)',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Público',
    lat: -3.7493155646072935, 
    lng: -38.551768522040234,
    img: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3306831:1669816689/Hospital-Universitario-da-UFC.png?f=default&$p$f=6041038'
  },
  {
    nome: 'Hospital Oto Santos Dumont',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Privado',
    lat: -3.7415846080148323, 
    lng: -38.480366083063934,
    img: 'https://redeoto.com.br/wp-content/uploads/2023/01/fachada-santos-pronto-1-1024x683.jpg'
  },
  {
    nome: 'Hospital Monte Klinikum',
    estado: 'Ceará',
    cidade: 'Fortaleza',
    tipo: 'Privado',
    lat: -3.732347059304553, 
    lng: -38.49312808117145,
    img: 'https://portalhospitaisbrasil.com.br/wp-content/uploads/2023/04/Monte-Klinikum.jpg'
  },

  // Hospitais do Distrito Federal (DF)
  {
    nome: 'Hospital Regional da Asa Norte (HRAN)',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Público',
    lat: -15.785041622277221, 
    lng: -47.88275351333373,
    img: 'https://live.staticflickr.com/7861/39985498073_8cc18bc172_b.jpg'
  },
  {
    nome: 'Hospital Universitário de Brasília (HUB)',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Público',
    lat: -15.771393276077012, 
    lng: -47.87331731722889,
    img: 'https://www.noticias.unb.br/images/Noticias/Fotos_frequentes/HUB/11062012_HUB1_MarianaCosta.jpg'
  },
  {
    nome: 'Hospital Sírio-Libanês Brasília',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Privado',
    lat: -15.834603640363396, 
    lng: -47.91133359244227,
    img: 'https://blogs.correiobraziliense.com.br/capital-sa/wp-content/uploads/sites/59/2022/04/hospital.jpeg'
  },
  {
    nome: 'Hospital Santa Lúcia',
    estado: 'Distrito Federal',
    cidade: 'Brasília',
    tipo: 'Privado',
    lat: -15.828150623900203, 
    lng: -47.92980501205927,
    img: 'https://blogs.correiobraziliense.com.br/capital-sa/wp-content/uploads/sites/59/2022/03/CAA5521A-C3CF-4CE5-AD15-C97BECB1E348.jpeg'
  },

  // Hospitais do Espírito Santo (ES)
  {
   nome: 'Hospital Universitário Cassiano Antônio Moraes (HUCAM)',
   estado: 'Espírito Santo',
   cidade: 'Vitória',
   tipo: 'Público',
   lat: -20.299807293580866, 
   lng: -40.31814830581995,
    img: 'https://www.seculodiario.com.br/wp-content/uploads/2025/01/Hucam.jpg'
  },
  {
    nome: 'Hospital Estadual Dr. Jayme Santos Neves',
    estado: 'Espírito Santo',
    cidade: 'Serra',
    tipo: 'Público',
    lat: -20.199728105791852, 
    lng: -40.22698318283005,
    img: 'https://saude.es.gov.br/Media/sesa/_Profiles/c4d8c6e6/2b3f1b80/JaymeSantosNeves_NestorMuller14_240214.jpg?v=638732174253300310'
  },
  {
    nome: 'Hospital Meridional',
    estado: 'Espírito Santo',
    cidade: 'Cariacica',
    tipo: 'Privado',
    lat: -20.333028809816753, 
    lng: -40.377016000641206,
    img: 'https://midias.agazeta.com.br/2020/01/24/1920x1080/fachada-do-hospital-meridional-em-cariacica-170597.jpg'
  },
  {
    nome: 'Hospital Santa Mônica',
    estado: 'Espírito Santo',
    cidade: 'Vila Velha',
    tipo: 'Privado',
    lat: -20.360092479238933, 
    lng: -40.29587928869655,
    img: 'https://hospsantamonica.com.br/arquivos_img/65ff7492d30bf5e3546ee5244c4d64ca.jpg'
  },

  // Hospitais de Goiás (GO)
  {
    nome: 'Hospital Estadual Dr. Alberto Rassi (HGG)',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Público',
    lat: -16.67936366124293, 
    lng: -49.270985586779084,
    img: 'https://idtech.org.br/uploads/32035_hgg.jpg'
  },
  {
    nome: 'Hospital das Clínicas da UFG (HC-UFG)',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Público',
    lat: -16.67455247576011, 
    lng: -49.24491698679967,
    img: 'https://files.aredacao.com.br/upload/content/hospital-das-clinicas-tem-legado-que-se-mistura-com-historia-de-goiania.jpg'
  },
  {
    nome: 'Hospital Israelita Albert Einstein - Unidade Goiânia',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Privado',
    lat: -16.696255057838496, 
    lng: -49.269585088400035,
    img: 'https://media.einstein.br/sites/default/files/2024-12/Unidade-Einstein-Goi%C3%A2nia.jpg'
  },
  {
    nome: 'Hospital Amparo',
    estado: 'Goiás',
    cidade: 'Goiânia',
    tipo: 'Privado',
    lat: -16.709023476230083, 
    lng: -49.269143642725474,
    img: 'https://www.pagina1.com.br/uploads/images/2025/04/sera-que-todo-esse-estrago-no-hospital-amparo-de-rosario-oeste-foi-feito-somente-nesses-4-meses-1e28f.jpg'
  },

  // Hospitais do Maranhão (MA)
  {
    nome: 'Hospital Universitário da UFMA (HU-UFMA)',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Público',
    lat: -2.5243557864666477, 
    lng: -44.29436102304474,
    img: 'https://portalpadrao.ufma.br/site/noticias/hu-ufma-esta-entre-os-hospitais-da-rede-ebserh-com-alta-conformidade-em-seguranca-do-paciente/dsc02553-a.jpg/@@images/928fb3cd-f328-452b-acf2-1314e0de20ae.jpeg'
  },
  {
    nome: 'Hospital Carlos Macieira (HCM)',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Público',
    lat: -2.499910815464671, 
    lng: -44.28240068719022,
    img: 'https://www.saude.ma.gov.br/wp-content/uploads/2020/06/24110_whatsapp_image_2020_06_18_at_15.28.15_576594767571601188.jpeg'
  },
  {
    nome: 'Hospital São Domingos',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Privado',
    lat: -2.5232265760744554, 
    lng: -44.245156938950906,
    img: 'https://assets-sitesdigitais.dasa.com.br/strapi/Whats_App_Image_2024_01_16_at_16_22_11_be404a9d72/Whats_App_Image_2024_01_16_at_16_22_11_be404a9d72.jpeg'
  },
  {
    nome: 'Clínica São Marcos',
    estado: 'Maranhão',
    cidade: 'São Luís',
    tipo: 'Privado',
    lat: -2.506345765065462, 
    lng: -44.296455326329365,
    img: 'https://lh5.googleusercontent.com/p/AF1QipOHJq6kpzzVCptx4DCCULI9fn0G4LQXMFfarJo=w650-h486-k-no'
  },

  // Hospitais de Mato Grosso (MT)
  {
    nome: 'Hospital Regional Irmã Elza Giovanella',
    estado: 'Mato Grosso',
    cidade: 'Rondonópolis',
    tipo: 'Público',
    lat: -16.458203389410087, 
    lng: -54.643424766503784,
    img: 'https://www.saude.mt.gov.br/storage/images/af98a8870fa3f60f03872b8957ae0615.jpg'
  },
  {
    nome: 'Hospital Universitário Júlio Müller (HUJM)',
    estado: 'Mato Grosso',
    cidade: 'Cuiabá',
    tipo: 'Público',
    lat: -15.581101494298572, 
    lng: -56.079278321913264,
    img: 'https://www.midianews.com.br/storage/webdisco/2019/05/09/886x590/ad87509c9c37b2e15d9f3ff1be869224.jpg'
  },
  {
    nome: 'Hospital Santa Rosa',
    estado: 'Mato Grosso',
    cidade: 'Cuiabá',
    tipo: 'Privado',
    lat: -15.579055276318195, 
    lng: -56.11127432396076,
    img: 'https://lh5.googleusercontent.com/proxy/f2GVWK_EspRiZV8RWklgx80Ml04XdhmaOp21q__iU-UcPxiP7ulhiyuxBb8V9yFfJGNqRahqdo7wGHwSD8ZeTt0Qe8K22MmAM5WZGRk5iWDSjMAKdmL0HeQrNkIs7DJMH9Jr1xGnFJV0aMC2A84OSmF71rpVxSTmckvGvCOIDG36Zw'
  },
  {
    nome: 'Hospital Femina',
    estado: 'Mato Grosso',
    cidade: 'Cuiabá',
    tipo: 'Privado',
    lat: -15.591398861622404, 
    lng: -56.08841251314704,
    img: 'https://femina.com.br/uploads/config_cliente/0302f-1-1-.jpg'
  },

  // Hospitais de Mato Grosso do Sul (MS)
  {
    nome: 'Hospital Regional de Mato Grosso do Sul',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Público',
    lat: -20.51353890324855, 
    lng: -54.65438642037685,
    img: 'https://www.hospitalregional.ms.gov.br/wp-content/uploads/2025/04/Design-sem-nome-2.png'
  },
  {
    nome: 'Hospital Universitário Maria Aparecida Pedrossian (HUMAP-UFMS)',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Público',
    lat: -20.499081319702, 
    lng: -54.61622386341957,
    img: 'https://www.ufms.br/wp-content/uploads/2021/01/Humap.jpeg'
  },
  {
    nome: 'Santa Casa de Campo Grande',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Privado',
    lat: -20.452973874501282, 
    lng: -54.616378312141464,
    img: 'https://santacasacg.org.br/storage/news/1483126055.JPG'
  },
  {
    nome: 'Hospital Proncor',
    estado: 'Mato Grosso do Sul',
    cidade: 'Campo Grande',
    tipo: 'Privado',
    lat: -20.456841396794573, 
    lng: -54.60903609638564,
    img: 'https://static.wixstatic.com/media/ee0902_f3d6db01af14475e8ce8477e4627df02~mv2.jpg/v1/fit/w_2500,h_1330,al_c/ee0902_f3d6db01af14475e8ce8477e4627df02~mv2.jpg'
  },

  // Hospitais de Minas Gerais (MG)
  {
    nome: 'Hospital das Clínicas da UFMG',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Público',
    lat: -19.92436915059124, 
    lng: -43.92814753919892,
    img: 'https://ufmg.br/thumbor/6GyKV-E8mipsMxDS0_yb5ruZv5g=/0x0:1002x669/712x474/https://ufmg.br/storage/d/3/d/3/d3d35f08b9373d73de954a6319c93bf2_1598042705481_1785957801.jpg'
  },
  {
    nome: 'Hospital João XXIII',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Público',
    lat: -19.926032300248153, 
    lng: -43.930981090393395,
    img: 'https://www.entreriosnews.com.br/images/noticias/2451/e60317d1635dca047dd3b8795acf4d52.jpg'
  },
  {
    nome: 'Hospital Mater Dei',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Privado',
    lat: -19.92770466771723, 
    lng: -43.95030339994387,
    img: 'https://www.anahp.com.br/wp-content/uploads/2023/01/Hospital-Mater-Dei-Santo-Agostinho_fachada.png'
  },
  {
    nome: 'Hospital Felício Rocho',
    estado: 'Minas Gerais',
    cidade: 'Belo Horizonte',
    tipo: 'Privado',
    lat: -19.923096968152763, 
    lng: -43.95694193770501,
    img: 'https://feliciorocho.org.br/media/133/img-hospital.jpg'
  },

  // Hospitais do Pará (PA)
  {
    nome: 'Hospital Universitário João de Barros Barreto (HUJBB)',
    estado: 'Pará',
    cidade: 'Belém',
    tipo: 'Público',
    lat: -1.4579218679372856, 
    lng: -48.46450392308079,
    img: 'https://portal.ufpa.br/images/Barros_Barreto_-_746x423.jpg'
  },
  {
    nome: 'Hospital Metropolitano de Urgência e Emergência (HMUE)',
    estado: 'Pará',
    cidade: 'Ananindeua',
    tipo: 'Público',
    lat: -1.392300503734472, 
    lng: -48.42001052421742,
    img: 'https://www.agenciapara.com.br/midias/2024/grandes/up_ag_50784_de6d0aef-a680-61ee-948c-cebb0b929018.jpg'
  },
  {
    nome: 'Hospital Porto Dias',
    estado: 'Pará',
    cidade: 'Belém',
    tipo: 'Privado',
    lat: -1.437226661874741, 
    lng: -48.458033281444216,
    img: 'https://www.hpd.com.br/img-render/galerias/g/880a5949_9a78bdcceeedb1c07956835243d1a5cc.jpg'
  },
  {
    nome: 'Clínica Saúde Belém',
    estado: 'Pará',
    cidade: 'Belém',
    tipo: 'Privado',
    lat: -1.4423176411032834, 
    lng: -48.46169019974675,
    img: '../img/clinica-saude-belem.png'
  },

  // Hospitais da Paraíba (PB)
  {
    nome: 'Hospital Universitário Lauro Wanderley (HULW-UFPB)',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Público',
    lat: -7.135958652273807, 
    lng: -34.839983562871936,
    img: 'https://www.ufpb.br/ufpb/contents/noticias/hulw-ufpb-abre-selecao-para-bolsas-em-programa-de-iniciacao-tecnologica/hulw-ufpb-26.jpg'
  },
  {
    nome: 'Hospital de Emergência e Trauma Senador Humberto Lucena',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Público',
    lat: -7.116200661251152, 
    lng: -34.84280175097792,
    img: 'https://hospitaldetrauma.pb.gov.br/noticias/hospital-de-trauma-de-joao-pessoa-alerta-para-crescimento-de-acidentes-com-moto/trauma.jpg/@@images/34cc73fa-f610-4ce1-8975-e3c89bff506e.jpeg'
  },
  {
    nome: 'Hospital Nossa Senhora das Neves',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Privado',
    lat: -7.132869847443027, 
    lng: -34.859041116567916,
    img: 'https://setorsaude.com.br/wp-content/uploads/2021/04/Rede-D%E2%80%99Or-adquire-Hospital-Nossa-Senhora-das-Neves-na-Para%C3%ADba.jpg'
  },
  {
    nome: 'Unimed João Pessoa',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
    tipo: 'Privado',
    lat: -7.122388033654169, 
    lng: -34.86734024456492,
    img: 'https://mv.com.br/storage/blog/15511520230315641213a359aec.png'
  },

  // Hospitais do Paraná (PR)
  {
    nome: 'Hospital de Clínicas da UFPR',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Público',
    lat: -25.42416021392635, 
    lng: -49.26194755399307,
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Hospital_de_Cl%C3%ADnicas.jpg'
  },
  {
    nome: 'Hospital do Trabalhador',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Público',
    lat: -25.484744188463424, 
    lng: -49.29496386294421,
    img: 'https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/migrados/galeria/64000/image00001.jpg'
  },
  {
    nome: 'Hospital Evangélico Mackenzie',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Privado/Público',
    lat: -25.434461180041485, 
    lng: -49.29215359938413,
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Hospital_Universit%C3%A1rio_Evang%C3%A9lico_Mackenzie_-_Mackenzie_Evangelical_University_Hospital.jpg'
  },
  {
    nome: 'Hospital Nossa Senhora das Graças',
    estado: 'Paraná',
    cidade: 'Curitiba',
    tipo: 'Privado',
    lat: -25.422011027087706, 
    lng: -49.29035858180004,
    img: 'https://www.anahp.com.br/wp-content/uploads/2023/01/Hospital-Nossa-Senhora-das-Gracas_fachada.png'
  },

  // Hospitais de Pernambuco (PE)
  {
    nome: 'Hospital da Restauração Gov. Paulo Guerra',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Público',
    lat: -8.05350713900241, 
    lng: -34.89773974572154,
    img: 'https://portal.saude.pe.gov.br/wp-content/uploads/2024/06/HR-2.jpg'
  },
  {
    nome: 'Hospital das Clínicas da UFPE',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Público',
    lat: -8.047433909674771, 
    lng: -34.94631540528427,
    img: 'https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2020/06/hospitais-universitarios-tem-adiantamento-de-recursos-durante-a-pandemia/fothc-20-03-20-jpg.jpg'
  },
  {
    nome: 'Hospital Santa Joana',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Privado',
    lat: -8.051963849297294, 
    lng: -34.89818349611155,
    img: 'https://www.hospitalsantajoanarecife.com.br/sites/hospitalsantajoanarecifestudio/files/2023-10/apresentacao-banner.jpg'
  },
  {
    nome: 'Real Hospital Português de Beneficência em Pernambuco',
    estado: 'Pernambuco',
    cidade: 'Recife',
    tipo: 'Privado',
    lat: -8.06405230277503, 
    lng: -34.89815141766832,
    img: 'https://www.anahp.com.br/wp-content/uploads/2023/01/Real-Hospital-Portugues-de-Beneficencia-em-Pernambuco_fachada.png'
  },

  // Hospitais do Piauí (PI)
  {
    nome: 'Hospital Getúlio Vargas (HGV)',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Público',
    lat: -5.087963451902931, 
    lng: -42.804292144697264,
    img: 'https://admin.pi.gov.br/uploads/Whats_App_Image_2024_11_21_at_11_35_26_6e36e897bc.jpeg'
  },
  {
    nome: 'Hospital Universitário da UFPI (HU-UFPI)',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Público',
    lat: -5.060034397776137, 
    lng: -42.79403802450087,
    img: 'https://www.ufpi.br/images/arquivos_download/Noticias/HU_FRONTAL_CARROS20190110144607.jpg'
  },
  {
    nome: 'Hospital Unimed Primavera',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Privado',
    lat: -5.057201738397343, 
    lng: -42.815647619022116,
    img: 'https://www.gp1.com.br/media/images/2020/08/07/hospital-unimed-primavera_fozBkfR.jpg.617x429_q85_crop.webp'
  },
  {
    nome: 'Hospital São Marcos',
    estado: 'Piauí',
    cidade: 'Teresina',
    tipo: 'Privado',
    lat: -5.090637051942127, 
    lng: -42.802892277772195,
    img: 'https://portalclubenews.com/wp-content/uploads/2025/04/Hospital-Sao-Marcos.jpeg'
  },

  // Hospitais do Rio de Janeiro (RJ)
  {
    nome: 'Hospital Universitário Clementino Fraga Filho (HUCFF-UFRJ)',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Público',
    lat: -22.842771518840483, 
    lng: -43.237429618871396,
    img: 'https://www.hucff.ufrj.br/wp-content/uploads/A_Nova-imagem-front-page_header.jpg'
  },
  {
    nome: 'Hospital Municipal Souza Aguiar',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Público',
    lat: -22.90831946668623, 
    lng: -43.18974198961783,
    img: 'https://saude.prefeitura.rio/wp-content/uploads/sites/47/2023/04/WhatsApp-Image-2023-04-03-at-13.07.55.jpeg'
  },
  {
    nome: 'Hospital Copa D\'Or',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Privado',
    lat: -22.965278750702172, 
    lng: -43.19049721267455,
    img: 'https://wp.rededorsaoluiz.com.br/copador/wp-content/uploads/sites/15/2020/09/Fachada-Copa-DOr-RJ.jpg'
  },
  {
    nome: 'Hospital Samaritano Botafogo',
    estado: 'Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    tipo: 'Privado',
    lat: -22.946508317855567, 
    lng: -43.186283261302556,
    img: 'https://www.anahp.com.br/wp-content/uploads/2023/04/Hospital-Samaritano-Botafogo-_fachada.png'
  },

  // Hospitais do Rio Grande do Norte (RN)
  {
    nome: 'Hospital Universitário Onofre Lopes (HUOL-UFRN)',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Público',
    lat: -5.780465456496085, 
    lng: -35.19634030146123,
    img: 'https://lais.huol.ufrn.br/wp-content/uploads/2022/05/292f4436-4a49-49de-97ec-74c1b276c2bf.jpeg'
  },
  {
    nome: 'Hospital Monsenhor Walfredo Gurgel (HMWG)',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Público',
    lat: -5.8100773447536085, 
    lng: -35.20344384375998,
    img: 'https://lh3.googleusercontent.com/proxy/b4bBefdkGIoDrTeptqsOGD7OjweTyJr3sX2i1XahojoMqa4AvymgiDy83nn6_opDEkN1P_potqHlx-bvkY1uh7ufl5pNPsU7tI1i0PzJU4tEPrtJz48'
  },
  {
    nome: 'Hospital Memorial São Francisco',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Privado',
    lat: -5.79409371669482, 
    lng: -35.20583698076221,
    img: 'https://memorialnatal.com.br/wp-content/uploads/2022/03/Hospital-Memorial-Fachada-Tratada-1024x782.jpg'
  },
  {
    nome: 'Hospital Dr. Paulo Gurgel',
    estado: 'Rio Grande do Norte',
    cidade: 'Natal',
    tipo: 'Privado',
    lat: -5.849098286955337, 
    lng: -35.20664256725818,
    img: 'https://hospitalpaulogurgel.com.br/wp-content/uploads/2024/10/DSC_07201-2048x1159.jpg'
  },

  // Hospitais do Rio Grande do Sul (RS)
  {
    nome: 'Hospital de Clínicas de Porto Alegre (HCPA)',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Público',
    lat: -30.03879485961685, 
    lng: -51.20665300892097,
    img: 'https://www.hcpa.edu.br/images/stories/23-6-26_fachada_b-c_1_1.jpg'
  },
  {
    nome: 'Hospital Nossa Senhora da Conceição',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Público',
    lat: -30.0160761365177, 
    lng: -51.158564064254946,
    img: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2024/maio/grupo-hospitalar-conceicao-faz-contratacao-emergencial-de-970-profissionais-de-saude-no-rs/ghc-hospital.jpg/@@images/77e76122-e1a9-4853-800f-1c6a40778fa5.jpeg'
  },
  {
    nome: 'Hospital Moinhos de Vento',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Privado',
    lat: -30.024959240897267, 
    lng: -51.20852863120185,
    img: '../img/hospital-moinhos-de-vento.jpg'
  },
  {
    nome: 'Hospital Mãe de Deus',
    estado: 'Rio Grande do Sul',
    cidade: 'Porto Alegre',
    tipo: 'Privado',
    lat: -30.05902708352367, 
    lng: -51.22899905901498,
    img: 'https://www.maededeus.com.br/_uploads/a92369ed-dc71-4667-b265-d7de8a0b31af.jpg'
  },

  // Hospitais de Rondônia (RO)
  {
    nome: 'Hospital de Base Dr. Ary Pinheiro',
    estado: 'Rondônia',
    cidade: 'Porto Velho',
    tipo: 'Público',
    lat: -8.736311708555304, 
    lng: -63.8901326131936,
    img: 'https://www.gentedeopiniao.com.br/uploads/noticias/2023/02/14/63ebf02844e52.jpg'
  },
  {
    nome: 'Hospital Regional de Cacoal',
    estado: 'Rondônia',
    cidade: 'Cacoal',
    tipo: 'Público',
    lat: -11.415694351561132, 
    lng: -61.463649985882206,
    img: 'https://rondonia.ro.gov.br/wp-content/uploads/2021/02/04.02.2021-Hospital-Regional-de-Cacoal-realiza-mais-de-1.300-consultas-e-208-cirurgias-em-janeiro-Foto-Giliane-Perin.jpg'
  },
  {
    nome: 'Hospital Prontocordis',
    estado: 'Rondônia',
    cidade: 'Porto Velho',
    tipo: 'Privado',
    lat: -8.764688548822072, 
    lng: -63.89880378357091,
    img: 'https://s2-g1.glbimg.com/ax6gkHm_HiHmbAdesOIEPi15BdU=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/x/L/yT1yoOQcKI56wkooFqNA/hospital-prontocordis.jpeg'
  },
  {
    nome: 'Hospital das Clínicas - HC',
    estado: 'Rondônia',
    cidade: 'Porto Velho',
    tipo: 'Privado',
    lat: -8.7561683183849, 
    lng: -63.89364770290345,
    img: 'https://www.gentedeopiniao.com.br/uploads/noticias/2022/02/03/61fc8729c9dbf.jpg'
  },

  // Hospitais de Roraima (RR)
  {
    nome: 'Hospital Geral de Roraima (HGR)',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Público',
    lat: 2.833518586236693, 
    lng: -60.68813137945017,
    img: 'https://al.rr.leg.br/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-12-at-09.38.01.jpeg'
  },
  {
    nome: 'Hospital Materno Infantil Nossa Senhora de Nazareth (HMI)',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Público',
    lat: 2.8302001799991876, 
    lng: -60.66721373426938,
    img: 'https://portal.rr.gov.br/wp-content/uploads/2024/09/Nova-estrutura-da-Maternidade-Nossa-Senhora-de-Nazareth-e-inaugurada-14.jpg'
  },
  {
    nome: 'Hospital Ville Roy',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Privado',
    lat: 2.8062097124240424, 
    lng: -60.6849829681622,
    img: 'https://www.anahp.com.br/wp-content/uploads/2024/10/Imagem-do-WhatsApp-de-2024-11-05-as-10.23.03_44362f93-1024x682.jpg'
  },
  {
    nome: 'Hospital Unimed Boa Vista',
    estado: 'Roraima',
    cidade: 'Boa Vista',
    tipo: 'Privado',
    lat: 2.816969328400138, 
    lng: -60.68248690020689,
    img: 'https://uploads.folhabv.com.br/2024/07/5XBxsaYY-WhatsApp-Image-2024-07-18-at-14.48.05-1024x682.webp'
  },

  // Hospitais de Santa Catarina (SC)
  {
    nome: 'Hospital Governador Celso Ramos',
    estado: 'Santa Catarina',
    cidade: 'Florianópolis',
    tipo: 'Público',
    lat: -27.588546116240533, 
    lng: -48.550699352189596,
    img: 'https://estado.sc.gov.br/noticias/wp-content/uploads/sites/3/2024/09/ZACA0191.jpg'
  },
  {
    nome: 'Hospital Regional de São José Dr. Homero de Miranda Gomes',
    estado: 'Santa Catarina',
    cidade: 'São José',
    tipo: 'Público',
    lat: -27.610152708397237, 
    lng: -48.63037147048273,
    img: 'https://www.saude.sc.gov.br/images/DJI_0093_capa.jpg'
  },
  {
    nome: 'Hospital SOS Cardio',
    estado: 'Santa Catarina',
    cidade: 'Florianópolis',
    tipo: 'Privado',
    lat: -27.57410573788064, 
    lng: -48.51477371110865,
    img: 'https://guiamedicoflorianopolis.com.br/wp-content/uploads/2022/09/SOS_cardio.jpg'
  },
  {
    nome: 'Hospital Baía Sul',
    estado: 'Santa Catarina',
    cidade: 'Florianópolis',
    tipo: 'Privado',
    lat: -27.601158308759608, 
    lng: -48.544957077419646,
    img: 'https://www.baiasulmedicalcenter.com.br/wp-content/uploads/2021/02/baia-sul-medical-center-capa1.jpg'
  },

  // Hospitais de São Paulo (SP)
  {
    nome: 'Hospital das Clínicas da Faculdade de Medicina da USP',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Público',
    lat: -23.55780009577551, 
    lng: -46.66985980083225,
    img: 'https://www.hc.fm.usp.br/hc/conteudo/upload/hcfmusp-aerea-r79zsc.jpg'
  },
  {
    nome: 'Hospital São Paulo (UNIFESP)',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Público',
    lat: -23.597454487523578, 
    lng: -46.64374149614656,
    img: 'https://dci.unifesp.br/images/Pronto-socorro_do_Hospital_S%C3%A3o_Paulo_passar%C3%A1_por_reforma_para_melhorias_no_atendimento.jpg'
  },
  {
    nome: 'Hospital Sírio-Libanês',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Privado',
    lat: -23.557184650299885, 
    lng: -46.65346176572874,
    img: 'https://medicinasa.com.br/wp-content/uploads/2023/03/Hospital-Sirio-Libanes-Bela-Vista.jpg'
  },
  {
    nome: 'Hospital Albert Einstein',
    estado: 'São Paulo',
    cidade: 'São Paulo',
    tipo: 'Privado',
    lat: -23.599974446156313, 
    lng: -46.71525581858996,
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Hospital_Albert_Einstein_S%C3%A3o_Paulo.jpg'
  },

  // Hospitais de Sergipe (SE)
  {
    nome: 'Hospital Universitário de Sergipe (HU-UFS)',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Público',
    lat: -10.893678928835627, 
    lng: -37.06466488254307,
    img: 'https://www.ufs.br/uploads/body_image/gist/141987/FotoAzaelNeto.jpg'
  },
  {
    nome: 'Hospital de Urgência de Sergipe Governador João Alves Filho',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Público',
    lat: -10.914021903922627, 
    lng: -37.09058512895889,
    img: 'https://saude.se.gov.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-02-at-16.49.09-1.jpeg'
  },
  {
    nome: 'Hospital Primavera',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Privado',
    lat: -10.949649106159166, 
    lng: -37.06544463788523,
    img: 'https://www.anahp.com.br/wp-content/uploads/2023/01/Hospital-Primavera_fachada.png'
  },
  {
    nome: 'Hospital São Lucas',
    estado: 'Sergipe',
    cidade: 'Aracaju',
    tipo: 'Privado',
    lat: -10.924475534330046, 
    lng: -37.052052356430096,
    img: 'https://wp.rededorsaoluiz.com.br/saolucas-se/wp-content/uploads/sites/46/2019/04/abertura.jpg'
  },

  // Hospitais do Tocantins (TO)
  {
    nome: 'Hospital Geral de Palmas (HGP)',
    estado: 'Tocantins',
    cidade: 'Palmas',
    tipo: 'Público',
    lat: -10.196111924474343, 
    lng: -48.33580516169698,
    img: 'https://central.to.gov.br/image/388508?w=883&h=546'
  },
  {
    nome: 'Hospital Regional de Araguaína (HRA)',
    estado: 'Tocantins',
    cidade: 'Araguaína',
    tipo: 'Público',
    lat: -7.193881105001464, 
    lng: -48.21057065860771,
    img: 'https://central.to.gov.br/image/176454?w=750&h=0'
  },
  {
    nome: 'Hospital Unimed Palmas',
    estado: 'Tocantins',
    cidade: 'Palmas',
    tipo: 'Privado',
    lat: -10.20927358330738, 
    lng: -48.33643761115359,
    img: 'https://www.corentocantins.org.br//wp-content/uploads/2022/02/unimed400px.jpeg'
  },
  {
    nome: 'Hospital Oswaldo Cruz',
    estado: 'Tocantins',
    cidade: 'Palmas',
    tipo: 'Privado',
    lat: -10.208762545504054, 
    lng: -48.33616390254192,
    img: 'https://hotelcure.com.br/wp-content/uploads/2022/02/Hospital-Oswaldo-Cruz.jpg'
  }
];
