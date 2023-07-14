export const cards = [
  { 
    title: 'Detailing',
    frontImg:"https://i.ibb.co/GWz9Mrq/image.jpg",
    description: "Pentru ca vrei ce este mai bun pentru masina ta!",
    backImg: '',
    urlPath: '/detailing'
  },
  {
    title: 'Folie de Protectie',
    frontImg: "https://i.ibb.co/ScpkD6z/foliew.jpg",
    description:"Pentru ca vrei sa iti protejezi investitia",
    backImg: '',
    urlPath: '/protejare'
  },
  {
    title: 'Intretinere',
    frontImg:"https://i.ibb.co/6n7sQ3f/intretinere.jpg",
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

    imgPath:"https://i.ibb.co/qDyS2LH/det.jpg",

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

    imgPath:"https://i.ibb.co/3pgqvxx/s.jpg",
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

    imgPath:"https://i.ibb.co/sgV3X4w/s2.jpg",
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

    imgPath: "https://i.ibb.co/Rh28H3T/s3.jpg",
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