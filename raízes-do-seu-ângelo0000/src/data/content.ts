import { Chapter, FAQItem, RecipeSample } from '../types';

export const CHECKOUT_URL: string = "#oferta"; // Cole aqui o seu link de vendas (ex: https://pay.kiwify.com.br/...)

export const HERO_CONTENT = {
  headline: "Conheça os saberes tradicionais que atravessaram gerações.",
  subheadline: "Um eBook com 55 receitas tradicionais à base de ervas, chás, infusões e preparos populares, organizados de forma simples para preservar conhecimentos que fizeram parte da rotina de muitas famílias brasileiras.",
  benefits: [
    "55 receitas tradicionais organizadas",
    "Guia das principais ervas",
    "Glossário completo",
    "Calendário tradicional de colheita",
    "Leitura simples e consulta rápida"
  ],
  priceText: "Garanta seu eBook por apenas R$ 37,90",
  ctaButtonText: "QUERO RECEBER MEU EBOOK AGORA",
  guaranteeMicrocopy: "Acesso imediato • Pagamento único • Garantia de 7 dias"
};

export const AUDIO_CONTENT = {
  sectionTitle: "Uma breve mensagem do Seu Ângelo",
  preText: "Antes de continuar, gostaria de lhe deixar uma breve mensagem. Clique no play e ouça um recado especial do Seu Ângelo.",
  subText: "Espero que, depois de ouvi-lo, você compreenda o carinho e o cuidado que tive ao preparar cada página.",
  ctaInstruction: "▶ Clique no play para ouvir a mensagem do Seu Ângelo.",
  audioDuration: "02:18",
  transcriptText: "Antes de você ir embora, me dê só um minutinho da sua atenção.\n\nHoje em dia a gente encontra informação de sobra. É vídeo pra cá, receita pra lá, opinião de todo mundo... mas, no meio de tanta coisa, o conhecimento dos mais antigos foi ficando esquecido.\n\nEu cresci aprendendo que a natureza merece respeito e que muitas receitas tradicionais eram preparadas com calma, usando ingredientes simples que faziam parte da rotina da família. Com o tempo, fui anotando esse conhecimento em um velho caderno, com medo de que ele se perdesse.\n\nDepois de muitos anos, resolvi organizar tudo em um único livro. Não para prometer milagres, nem para substituir o acompanhamento de um profissional de saúde. Fiz isso porque acredito que esse saber merece ser preservado e compartilhado com quem valoriza a tradição e quer aprender receitas naturais de forma organizada.\n\nSe você também acredita que alguns conhecimentos não deveriam desaparecer, eu tenho certeza de que vai gostar do que preparei.\n\nSerá um prazer receber você por aqui.\n\nUm abraço..."
};

export const AUTHOR_STORY = {
  title: "Um pouco da minha história",
  paragraphs: [
    "Meu nome é Ângelo Martins, mas a maioria das pessoas me chama apenas de Seu Ângelo.",
    "Desde menino, aprendi a observar a natureza e a valorizar os ensinamentos dos mais velhos. Sempre gostei de ouvir histórias, aprender receitas tradicionais e anotar tudo aquilo que eu acreditava que não deveria ser esquecido.",
    "Com o passar dos anos, meu velho caderno foi ficando cada vez mais cheio. Ali guardei receitas, preparos com ervas e muitos conhecimentos que fizeram parte da rotina de tantas famílias brasileiras.",
    "Foi então que decidi reunir tudo isso neste livro.",
    "Meu desejo é que esse conhecimento continue vivo, chegando às mãos de pessoas que, assim como eu, acreditam no valor das tradições e gostam de aprender de forma simples, organizada e com carinho.",
    "Espero, de coração, que este material faça parte da sua casa e que você aproveite cada página com o mesmo cuidado com que foi preparada."
  ],
  signoff: "Um grande abraço,",
  authorName: "Seu Ângelo Martins"
};

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    title: "Capítulo 1: 5 Receitas Tradicionais para Dor de Cabeça",
    recipesCount: 5,
    recipes: [
      "Chá de Guaco, Limão e Mel",
      "Compressa de Folha de Couve",
      "Chá de Camomila com Gengibre",
      "Chá de Alecrim com Casca de Limão",
      "Óleo de Lavanda para Massagem"
    ],
    description: "Preparos tradicionais e infusões suavemente calmantes para momentos de tensão e desconforto na cabeça."
  },
  {
    id: 2,
    title: "Capítulo 2: 5 Receitas Tradicionais para Dor de Garganta",
    recipesCount: 5,
    recipes: [
      "Gargarejo de Água Morna com Sal e Própolis",
      "Chá de Sálvia com Limão",
      "Infusão de Malva e Romã",
      "Xarope Caseiro de Agrião com Mel",
      "Chá de Erva-Cidreira e Alho Suave"
    ],
    description: "Alívio suave e natural com propriedades antissépticas e protetoras das ervas medicinais."
  },
  {
    id: 3,
    title: "Capítulo 3: 5 Receitas Tradicionais para Febre",
    recipesCount: 5,
    recipes: [
      "Chá de Saia-Branca / Flor de Camomila",
      "Compressa Fria de Erva-Medeira na Testeira",
      "Infusão de Sambuco e Hortelã",
      "Banho Morno com Folhas de Pitangueira",
      "Chá de Salgueiro com Mel de Abelha"
    ],
    description: "Preparações acolhedoras que auxiliam o corpo a transpirar e restabelecer a temperatura adequada."
  },
  {
    id: 4,
    title: "Capítulo 4: 5 Receitas Tradicionais para Dor de Ouvido",
    recipesCount: 5,
    recipes: [
      "Compressa Morna com Folha de Azeitona",
      "Vapor de Infusão de Camomila",
      "Óleo Morno de Sucupira para Massagem Externa",
      "Compressa de Pano Seco Aquecido com Alecrim",
      "Infusão de Manjericão para Vaporização"
    ],
    description: "Cuidados suaves e compressas mornas para trazer conforto sem procedimentos invasivos."
  },
  {
    id: 5,
    title: "Capítulo 5: 5 Receitas Tradicionais para Vista Cansada",
    recipesCount: 5,
    recipes: [
      "Compressa de Camomila Fria sobre as Pálpebras",
      "Infusão de Eufrásia para Descanso dos Olhos",
      "Água de Rosas Tradicional para Alívio",
      "Compressa de Erva-Doce para Suavidade",
      "Descanso com Rodelas de Pepino e Hortelã"
    ],
    description: "Refrescor e descanso para os olhos ao final de um longo dia de trabalho ou leitura."
  },
  {
    id: 6,
    title: "Capítulo 6: 5 Receitas Tradicionais para Dor de Dente",
    recipesCount: 5,
    recipes: [
      "Bochecho com Infusão de Cravo-da-Índia",
      "Mistura Tradicional de Malva e Sal",
      "Compressa Externa de Gengibre na Bochecha",
      "Chá Concentrado de Macela para Bochechos",
      "Solução de Própolis Suave"
    ],
    description: "Antigos segredos da roça para acalmar incômodos até a visita ao especialista."
  },
  {
    id: 7,
    title: "Capítulo 7: 5 Receitas Tradicionais para Estômago e Cólicas",
    recipesCount: 5,
    recipes: [
      "Chá de Boldo do Chile com Erva-Doce",
      "Infusão de Hortelã-Pimenta",
      "Chá de Louro com Casca de Laranja",
      "Compressa Morna de Sementes no Abdomen",
      "Xarope Suave de Carqueja com Erva-Lidiane"
    ],
    description: "Digestivos consagrados que trazem bem-estar e leveza após as refeições."
  },
  {
    id: 8,
    title: "Capítulo 8: 5 Receitas Tradicionais para Dores Musculares e nas Costas",
    recipesCount: 5,
    recipes: [
      "Fricção com Alcoolatua de Arnica",
      "Compressa Morna de Erva-Baleeira",
      "Banho de Imersão com Sal Grosso e Alecrim",
      "Cataplasma de Argila e Infusão de Garra-do-Diabo",
      "Óleo de Castanha-da-Índia para Fricções"
    ],
    description: "Ingredientes que relaxam a musculatura rígida e acalmam a espinha pesada."
  },
  {
    id: 9,
    title: "Capítulo 9: 5 Receitas Tradicionais para Dores Articulares",
    recipesCount: 5,
    recipes: [
      "Pomada Caseira de Sucupira e Arnica",
      "Chá de Unha-de-Gato com Canela",
      "Compressa Morna de Folhas de Couve com Azeite",
      "Infusão de Canela-de-Velho",
      "Óleo de Semente de Gergelim com Alecrim"
    ],
    description: "Preparos venerados pelos mais velhos para manter as juntas flexíveis e sem dores."
  },
  {
    id: 10,
    title: "Capítulo 10: 5 Receitas Tradicionais para Pés e Pernas Cansadas",
    recipesCount: 5,
    recipes: [
      "Escalda-Pés com Sal Grosso, Camomila e Alecrim",
      "Massagem Ascendente com Óleo de Menta",
      "Banho de Contraste Morno e Frio com Arruda",
      "Compressa de Hamamélis nas Panturrilhas",
      "Elevação dos Pés com Unguento de Capim-Limão"
    ],
    description: "Restauração da circulação e alívio imediato para quem passa muito tempo em pé."
  },
  {
    id: 11,
    title: "Capítulo 11: 5 Receitas Tradicionais para Cólicas Menstruais",
    recipesCount: 5,
    recipes: [
      "Chá de Camomila com Anis-Estrelado e Canela",
      "Bolsa de Água Morna com Infusão de Erva-Cidreira",
      "Chá de Losna Suave com Mel",
      "Compressa de Erva-Mata no Baixo Ventre",
      "Infusão de Agoniada Tradicional"
    ],
    description: "Carinho e relaxamento muscular para os dias de sensibilidade feminina."
  }
];

export const EXTRA_SECTIONS = [
  "Guia das Ervas Utilizadas",
  "Glossário das Plantas",
  "Calendário Tradicional de Colheita",
  "Orientações de Organização e Conservação",
  "Encerramento"
];

export const SAMPLE_RECIPE: RecipeSample = {
  title: "Chá de Guaco, Limão e Mel",
  chapter: "Capítulo 1 – Receitas Tradicionais para Dor de Cabeça e Vias Aéreas",
  ingredients: [
    "5 a 6 folhas frescas de Guaco (bem lavadas)",
    "Suco de meio limão taiti ou galego",
    "1 colher de sopa de mel puro de abelha",
    "300 ml de água filtrada"
  ],
  preparation: [
    "Ferva a água em uma chaleira de cerâmica ou inox.",
    "Assim que levantar fervura, desligue o fogo e adicione as folhas de guaco levemente rasgadas com as mãos.",
    "Tampe o recipiente e deixe em infusão por 8 a 10 minutos.",
    "Coa com um coador limpo, adicione o suco do limão fresco e adoce com o mel apenas na hora de tomar."
  ],
  traditionalUse: "Tomar uma xícara morna, preferencialmente ao entardecer ou antes de deitar, descansando em ambiente tranquilo.",
  importantNotes: [
    "Utilize sempre ingredientes frescos quando possível.",
    "Gestantes e crianças pequenas devem seguir orientação profissional.",
    "O mel não deve ser fervido para preservar suas propriedades naturais."
  ]
};

export const TARGET_AUDIENCE_POINTS = [
  {
    title: "Preserva a Tradição",
    description: "Gosta de preservar e resgatar conhecimentos tradicionais do campo e da roça."
  },
  {
    title: "Amante da Natureza",
    description: "Tem interesse genuíno em aprender mais sobre ervas, chás e preparos populares."
  },
  {
    title: "Prático e Organizado",
    description: "Procura um material limpo, organizado e fácil de consultar rapidamente quando precisar."
  },
  {
    title: "Valores de Família",
    description: "Valoriza os ensinamentos transmitidos de geração em geração com sabedoria e afeto."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "O acesso é imediato?",
    answer: "Sim. Após a confirmação do pagamento, você receberá imediatamente no seu e-mail o link para acessar e baixar o eBook."
  },
  {
    id: 2,
    question: "O livro é físico?",
    answer: "Não. Este é um material digital (eBook em formato PDF de alta qualidade), podendo ser lido instantaneamente sem precisar esperar frete ou entrega dos correios."
  },
  {
    id: 3,
    question: "Posso ler no celular?",
    answer: "Sim. O eBook foi formatado com tipografia legível e adaptada para celulares, tablets, leitores digitais ou computadores."
  },
  {
    id: 4,
    question: "Preciso estar conectado à internet?",
    answer: "Apenas para fazer o download inicial. Após baixar o arquivo para o seu dispositivo, você poderá consultá-lo sempre que desejar, mesmo sem internet."
  },
  {
    id: 5,
    question: "Existe garantia?",
    answer: "Sim! Você conta com uma garantia incondicional de 7 dias. Se por qualquer motivo sentir que o livro não é para você, basta solicitar o reembolso integral dentro do prazo."
  }
];

export const OFFER_DETAILS = {
  productName: "Raízes do Seu Ângelo",
  subtitle: "Receitas Tradicionais com Ervas para o Bem-estar do Dia a Dia",
  regularPrice: "R$ 97,00",
  currentPrice: "R$ 37,90",
  paymentDetails: "Pagamento único • Acesso imediato • Leitura para toda a vida",
  itemsIncluded: [
    "eBook completo em alta resolução",
    "55 receitas tradicionais organizadas",
    "Guia completo das ervas medicinais",
    "Glossário prático das plantas",
    "Calendário tradicional de colheita e conserva",
    "Suporte e atualizações sem custo adicional"
  ]
};
