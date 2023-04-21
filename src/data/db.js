export const cards = [
  { 
    title: 'Detailing',
    frontImg:"https://scontent.fbcm1-1.fna.fbcdn.net/v/t1.15752-9/334068673_167226875785444_1022728927278965245_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lEC1B9MiSjIAX-L1ka8&_nc_ht=scontent.fbcm1-1.fna&oh=03_AdQcUJ8xK0JpykXzKbvYAYn-h2wtmnnKfkA1g-nLcqUVIg&oe=643FC393",
    description: "Pentru ca vrei ce este mai bun pentru masina ta!",
    backImg: '',
    urlPath: '/detailing'
  },
  {
    title: 'Folie de Protectie',
    frontImg: "https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/337088670_611461334175066_5576812507374162170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4hNk5gsY8y8AX_kDoVU&_nc_ht=scontent.fias1-1.fna&oh=03_AdRX2RjwMbZsUq-ckfnupG4oWnn0PFbrOQRBja5iEgL-Qg&oe=64463AD1",
    description:"Pentru ca vrei sa iti protejezi investitia",
    backImg: '',
    urlPath: '/protejare'
  },
  {
    title: 'Intretinere',
    frontImg:"https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/336620624_3374390036212244_4058104756518523851_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=sxMY8Fn4tHgAX8tsVXh&_nc_ht=scontent.fias1-1.fna&oh=03_AdRrV8-nky-vMJMqHRLxtO4MZ3GNuE1g3Q7Y5LWD8ULJqw&oe=64462041",
    description:"Pentru ca iti pasa de masina ta",
    backImg: '',
    urlPath: '/intretinere'
  },
  {
    title: 'Colantare',
    frontImg: "https://detailingsuceava.com/static/media/colant-suceava.666bcfebb0b6998e6511.jpeg",
    description:"Pentru ca vrei sa fi diferit",
    backImg: '',
    urlPath: '/colantare'
  }
];

export const subcomponents = [
  {
    title: 'DESPRE',
    mainText:
      ' Detailing Auto Suceava este cel mai exclusivist specialist în folii de protecție (PPF) a vopselei și a detaliilor din Suceava, care se ocupă de cel mai mare volum de masini din orasul Suceava. Facilitățile noastre de ultimă generație găzduiesc unii dintre cei mai calificați detalieri și instalatori de folie de protecție a vopselei din tara. Acest mediu, împreună cu expertiza noastră, ne permite să oferim clienților noștri cea mai înaltă calitate posibilă.',
    subText:
      'Noi va oferim un pachet total de soluții de îngrijire a mașinii, care încorporează totul, de la îmbunătățire și protecție până la întreținere',
    button: 'Vezi mai multe'
  },
  {
    title: 'INTREBARI & RASPUNSURI',
    mainText: 'Ai intrebari despre produsele noastre?',
    subText: 'Poti afla totul despre noi in sectiunea de mai jos',
    button: 'Vezi intrebarile',
    frontImg:
      'https://i.shgcdn.com/a856fb78-93ba-48de-94be-b251c59de508/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
  }
];

export const valorificare = [
  {
    id: 1,
    title: 'Nivel 1 - Quick',
    subTitle: 'Exterior',

    imgPath:"https://scontent-fra5-2.xx.fbcdn.net/v/t1.15752-9/339476701_192199436937159_7532433699626523435_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JwDIhfEz3voAX_RBfb4&_nc_ht=scontent-fra5-2.xx&oh=03_AdQfMmuossjq3WG6yn659KOORYOrjZYfRufjzFnuUEjcNA&oe=6464D0C6",

    description: [
      ['Spălarea mașinii prin metoda “2BM”.'
      ],
      [ 'Curățarea zonelor greu accesibile (jante, imbinari elemente de caroserie, buson rezervor)'
      ],
      ['Eliminare rasini, bitum, insecte'],
      ['Decontaminare mecanica cu argila'],
      ['dressing plastice si anvelope'],
      ['Polish redare luciu ']
    ],
    sealent:
      'Acest nivel se adresează mașinilor care se prezintă intr o stare buna sau pentru mentenanță.',
    subDescription: {
      title: 'Interior',
      description: [
        ['Aspirare și suflare cu aer'],
        ['Curatare geamuri'],
        ['Curățarea suprafetelor de plastic (bord, consola, fete de uși și stâlpi)']
      ]
    },
    disclaimer1: "Pentru o evaluare cât mai corecta a mașinii, se recomanda ca aceasta sa fie spălată înainte de sosirea ei",
    disclaimer2: "Pentru a păstra în timp cât mai îndelungat starea mașinii, după efectuarea serviciilor de detailing, va recomandam sa optați pentru aplicarea unor protecții (PPF, Ceramica)."

  },
  {
    id: 2,
    title: 'Nivel 2 - ..',
    subTitle: 'Exterior',

    imgPath:"https://scontent.fbcm1-1.fna.fbcdn.net/v/t1.15752-9/337053298_587023720157769_2077154612322047205_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nxtajwDdx7MAX_Cf4hT&_nc_ht=scontent.fbcm1-1.fna&oh=03_AdRr1_jiV_TiT236mJKOkRHjNBW634XHXiDwFbweGoeWGA&oe=6453AB9E",
    include: "Include în plus fata de nivel 1",
    description: [
      ['Se efectuează corecție lac în 2 pași(sunt eliminate imprefectiunile fine cum ar fi “pânză de păianjen”).'
      ],
      [ 'Polish stopuri, faruri.'
      ]
    ],
    sealent:
      '',
    subDescription: {
      title: 'Interior',
      description: [
        [' Curatare stalpi , bord, portiere, chedere, scaune, mocheta, spațiile de depozitare, portbagaj'],
        [' Aplicare dressing pentru elemente din plastic'],
        [' Hidratarea pielii']
      ]
    },
    disclaimer1: "Pentru o evaluare cât mai corecta a mașinii, se recomanda ca aceasta sa fie spălată înainte de sosirea ei",
    disclaimer2: "Pentru a păstra în timp cât mai îndelungat starea mașinii, după efectuarea serviciilor de detailing, va recomandam sa optați pentru aplicarea unor protecții (PPF, Ceramica)."
  },
  {
    id: 3,
    title: 'Nivel 3 - ..',
    subTitle: 'Exterior',

    imgPath:"https://scontent-fra5-2.xx.fbcdn.net/v/t1.15752-9/339625152_749416593591536_5143843330809165874_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eWoYo-5bFREAX_FJWFt&_nc_ht=scontent-fra5-2.xx&oh=03_AdSK1zB8hf33IlNQcY-P2JUWXea_k0QniQm2l29tsaFdlw&oe=6464E576",
    include: "Include în plus fata de nivel 2",
    description: [
      [' Curatare contra aripi.'
      ],
      [ ' Se efectuează corecție lac în 3 pași(se elimina pana la 95% din zgârieturi)'
      ],
      [' Polish tips-uri de evacuare'],
      [' Reconditionare faruri']
    ],
    sealent:
      '',
    subDescription: {
      title: 'Interior',
      description: [
        ['  Curatore completa și detaliata a interiorului ( inclusiv plafon, centuri, guri de ventilație, balamale, spațiu roții de rezerva, sinele scaunelor).'],
        [' Aplicare protecție elemente de piele'],
      ]
    },
    disclaimer1: "Pentru o evaluare cât mai corecta a mașinii, se recomanda ca aceasta sa fie spălată înainte de sosirea ei",
    disclaimer2: "Pentru a păstra în timp cât mai îndelungat starea mașinii, după efectuarea serviciilor de detailing, va recomandam sa optați pentru aplicarea unor protecții (PPF, Ceramica)."
  },
  {
    id: 4,
    title: 'Nivel 4 - ..',
    subTitle: 'Exterior',

    imgPath: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/323406919_1577940072668981_7169729459474950045_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VBSpOU6u7fMAX_J0BGn&_nc_ht=scontent-fra5-2.xx&oh=00_AfABWFXqnsOAUVMl38yXwu5t4FX0zZrcXuCWDai_Brb2mw&oe=6448546E",
    include: "Include în plus fata de nivel 3",
    description: [
      ['Detailing balamale uși'
      ],
      [ ' Demontare roti și curățarea acestora pe interior'
      ],
      [' Detailing compartment motor'],
      ['Eliminare “coaja de portocala”  pe întreaga caroserie prin procedeul de șlefuire']
    ],
    sealent:
      '',
    subDescription: {
      title: 'Interior',
      description: [
        ['Polish elements sensible (piano black, elements de Mahon, elemente de carbon, display uri etc)'],
      ]
    },
    disclaimer1: "Pentru o evaluare cât mai corecta a mașinii, se recomanda ca aceasta sa fie spălată înainte de sosirea ei",
    disclaimer2: "Pentru a păstra în timp cât mai îndelungat starea mașinii, după efectuarea serviciilor de detailing, va recomandam sa optați pentru aplicarea unor protecții (PPF, Ceramica)."
  },
]