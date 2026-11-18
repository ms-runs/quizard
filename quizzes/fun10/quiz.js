/* The Big Fun Pub Quiz. q = question, opts = options A to D, c = index of the correct option (0 to 3).
   vis = picture shown with the question: swatch (+code), font, flag, svg or icon. layout per round: pantone, gallery, specimen, flags.
   half = number of rounds before the half-time scoreboard. Icons from Lucide (ISC licence, lucide.dev). */
window.QUIZ = {
 "id": "fun10",
 "title": "The Big Fun Pub Quiz",
 "intro": "Eleven rounds of multiple choice, a secret connection to crack, and one joker each to double a round of your choice.",
 "fonts": "https://fonts.googleapis.com/css2?family=Lobster&family=Bebas+Neue&family=Press+Start+2P&family=Cinzel&family=Permanent+Marker&display=swap",
 "rounds": [
  {
   "id": "geo",
   "title": "Geography",
   "type": "standard",
   "max": 5,
   "rule": "One point per correct answer. Pick A, B, C or D.",
   "questions": [
    {
     "q": "What is the capital city of Australia?",
     "opts": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
     ],
     "c": 2,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 18v-7\" /> <path d=\"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z\" /> <path d=\"M14 18v-7\" /> <path d=\"M18 18v-7\" /> <path d=\"M3 22h18\" /> <path d=\"M6 18v-7\" /></svg>"
     }
    },
    {
     "q": "Which continent has land in all four hemispheres: north, south, east and west?",
     "opts": [
      "Asia",
      "Africa",
      "South America",
      "Europe"
     ],
     "c": 1,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" /></svg>"
     }
    },
    {
     "q": "Lake Baikal, the deepest lake on Earth, is in which country?",
     "opts": [
      "Mongolia",
      "Kazakhstan",
      "China",
      "Russia"
     ],
     "c": 3,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12q2.5 2 5 0t5 0 5 0 5 0\" /> <path d=\"M2 19q2.5 2 5 0t5 0 5 0 5 0\" /> <path d=\"M2 5q2.5 2 5 0t5 0 5 0 5 0\" /></svg>"
     }
    },
    {
     "q": "What is the smallest country in the world by area?",
     "opts": [
      "Monaco",
      "San Marino",
      "Vatican City",
      "Liechtenstein"
     ],
     "c": 2,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" /></svg>"
     }
    },
    {
     "q": "Which narrow strait separates Spain from Morocco?",
     "opts": [
      "Strait of Hormuz",
      "Strait of Gibraltar",
      "Bosphorus",
      "Strait of Malacca"
     ],
     "c": 1,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2v2\" /> <path d=\"M12 9.189V13\" /> <path d=\"M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6\" /> <path d=\"M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76\" /> <path d=\"M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\" /></svg>"
     }
    }
   ]
  },
  {
   "id": "music",
   "title": "Music this year (2026)",
   "type": "standard",
   "max": 5,
   "rule": "One point per correct answer. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Which album won Album of the Year at the 2026 Grammys?",
     "opts": [
      "Debí Tirar Más Fotos",
      "GNX",
      "Mayhem",
      "Man's Best Friend"
     ],
     "c": 0,
     "note": "Bad Bunny. The first Spanish-language album to win the top Grammy.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M6 12c0-1.7.7-3.2 1.8-4.2\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" /> <path d=\"M18 12c0 1.7-.7 3.2-1.8 4.2\" /></svg>"
     }
    },
    {
     "q": "Which country won Eurovision 2026 in Vienna with the song 'Bangaranga'?",
     "opts": [
      "Israel",
      "Croatia",
      "Bulgaria",
      "Serbia"
     ],
     "c": 2,
     "note": "Dara, Bulgaria's first ever win.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12\" /> <path d=\"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5\" /> <circle cx=\"16\" cy=\"7\" r=\"5\" /></svg>"
     }
    },
    {
     "q": "Who won both Artist of the Year and Album of the Year at the 2026 BRIT Awards?",
     "opts": [
      "Lola Young",
      "Olivia Dean",
      "Sam Fender",
      "Lily Allen"
     ],
     "c": 1,
     "note": "Olivia Dean took four awards, for The Art of Loving.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /> <circle cx=\"12\" cy=\"8\" r=\"6\" /></svg>"
     }
    },
    {
     "q": "For the first time, the 2026 BRIT Awards were held outside London. In which city?",
     "opts": [
      "Birmingham",
      "Glasgow",
      "Manchester",
      "Liverpool"
     ],
     "c": 2,
     "note": "Co-op Live arena.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12h4\" /> <path d=\"M10 8h4\" /> <path d=\"M14 21v-3a2 2 0 0 0-4 0v3\" /> <path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\" /> <path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\" /></svg>"
     }
    },
    {
     "q": "Which rapper passed Jay-Z in 2026 to become the most-awarded rapper in Grammy history?",
     "opts": [
      "Drake",
      "Kendrick Lamar",
      "Kanye West",
      "Eminem"
     ],
     "c": 1,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\" /></svg>"
     }
    }
   ]
  },
  {
   "id": "fonts",
   "title": "What's this font?",
   "type": "standard",
   "max": 5,
   "rule": "Look at the sample text on screen and pick the typeface. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Which typeface is this?",
     "opts": [
      "Pacifico",
      "Dancing Script",
      "Lobster",
      "Caveat"
     ],
     "c": 2,
     "vis": {
      "font": "Lobster",
      "sample": "Pub Quiz Night"
     }
    },
    {
     "q": "Which typeface is this?",
     "opts": [
      "Anton",
      "Bebas Neue",
      "Oswald",
      "Impact"
     ],
     "c": 1,
     "vis": {
      "font": "Bebas Neue",
      "sample": "Pub Quiz Night"
     }
    },
    {
     "q": "Which typeface is this?",
     "opts": [
      "VT323",
      "Orbitron",
      "Silkscreen",
      "Press Start 2P"
     ],
     "c": 3,
     "vis": {
      "font": "Press Start 2P",
      "sample": "PUB QUIZ"
     }
    },
    {
     "q": "Which typeface is this?",
     "opts": [
      "Playfair Display",
      "Cinzel",
      "Abril Fatface",
      "Copperplate"
     ],
     "c": 1,
     "vis": {
      "font": "Cinzel",
      "sample": "Pub Quiz Night"
     }
    },
    {
     "q": "Which typeface is this?",
     "opts": [
      "Rock Salt",
      "Permanent Marker",
      "Caveat",
      "Sedgwick Ave"
     ],
     "c": 1,
     "vis": {
      "font": "Permanent Marker",
      "sample": "Pub Quiz Night"
     }
    }
   ],
   "note": "Fonts load from Google Fonts, so the screen needs internet access.",
   "layout": "specimen"
  },
  {
   "id": "history",
   "title": "History",
   "type": "standard",
   "max": 5,
   "rule": "One point per correct answer. Pick A, B, C or D.",
   "questions": [
    {
     "q": "In which year did the Berlin Wall fall?",
     "opts": [
      "1985",
      "1987",
      "1989",
      "1991"
     ],
     "c": 2,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"M12 9v6\" /> <path d=\"M16 15v6\" /> <path d=\"M16 3v6\" /> <path d=\"M3 15h18\" /> <path d=\"M3 9h18\" /> <path d=\"M8 15v6\" /> <path d=\"M8 3v6\" /></svg>"
     }
    },
    {
     "q": "Who was the first woman to win a Nobel Prize?",
     "opts": [
      "Rosalind Franklin",
      "Marie Curie",
      "Ada Lovelace",
      "Florence Nightingale"
     ],
     "c": 1,
     "note": "Physics, 1903.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\" /> <path d=\"M11 12 5.12 2.2\" /> <path d=\"m13 12 5.88-9.8\" /> <path d=\"M8 7h8\" /> <circle cx=\"12\" cy=\"17\" r=\"5\" /> <path d=\"M12 18v-2h-.5\" /></svg>"
     }
    },
    {
     "q": "The Great Fire of London in 1666 began in a bakery on which street?",
     "opts": [
      "Bread Street",
      "Pie Corner",
      "Pudding Lane",
      "Fish Street Hill"
     ],
     "c": 2,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\" /></svg>"
     }
    },
    {
     "q": "In which year was Magna Carta sealed?",
     "opts": [
      "1066",
      "1215",
      "1315",
      "1415"
     ],
     "c": 1,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /> <path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" /></svg>"
     }
    },
    {
     "q": "Which ancient wonder stood on the island of Pharos near Alexandria?",
     "opts": [
      "Hanging Gardens",
      "Colossus",
      "Temple of Artemis",
      "The Lighthouse"
     ],
     "c": 3,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8\" /> <path d=\"M10 5H8a2 2 0 0 0 0 4h.68\" /> <path d=\"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8\" /> <path d=\"M14 5h2a2 2 0 0 1 0 4h-.68\" /> <path d=\"M18 22H6\" /> <path d=\"M9 2h6\" /></svg>"
     }
    }
   ]
  },
  {
   "id": "pantone",
   "title": "What Pantone colour is this?",
   "type": "standard",
   "max": 5,
   "rule": "Each swatch is a Pantone Colour of the Year. Name the shade. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Pantone's Colour of the Year for 2026, the first ever white. Which is it?",
     "opts": [
      "Whisper White",
      "Cloud Dancer",
      "Frosted Almond",
      "Arctic Mist"
     ],
     "c": 1,
     "vis": {
      "swatch": "#F0EEE9",
      "code": "11-4201"
     }
    },
    {
     "q": "Pantone's Colour of the Year for 2025. Which is it?",
     "opts": [
      "Cinnamon Stick",
      "Warm Taupe",
      "Chai Latte",
      "Mocha Mousse"
     ],
     "c": 3,
     "vis": {
      "swatch": "#A47864",
      "code": "17-1230"
     }
    },
    {
     "q": "Pantone's Colour of the Year for 2024. Which is it?",
     "opts": [
      "Living Coral",
      "Peach Fuzz",
      "Apricot Cream",
      "Peach Melba"
     ],
     "c": 1,
     "vis": {
      "swatch": "#FFBE98",
      "code": "13-1023"
     }
    },
    {
     "q": "Pantone's Colour of the Year for 2023. Which is it?",
     "opts": [
      "Honeysuckle",
      "Fuchsia Rose",
      "Raspberry Sorbet",
      "Viva Magenta"
     ],
     "c": 3,
     "vis": {
      "swatch": "#BB2649",
      "code": "18-1750"
     }
    },
    {
     "q": "Pantone's Colour of the Year for 2022. Which is it?",
     "opts": [
      "Ultra Violet",
      "Very Peri",
      "Blue Iris",
      "Serenity"
     ],
     "c": 1,
     "vis": {
      "swatch": "#6667AB",
      "code": "17-3938"
     }
    }
   ],
   "note": "Swatches are the published sRGB approximations. Screens vary, so expect small differences.",
   "layout": "pantone"
  },
  {
   "id": "films",
   "title": "Films this year (2026)",
   "type": "standard",
   "max": 5,
   "rule": "One point per correct answer. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Which film won Best Picture at the 2026 Oscars?",
     "opts": [
      "Sinners",
      "Hamnet",
      "One Battle After Another",
      "Marty Supreme"
     ],
     "c": 2,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m12.296 3.464 3.02 3.956\" /> <path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z\" /> <path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" /> <path d=\"m6.18 5.276 3.1 3.899\" /></svg>"
     }
    },
    {
     "q": "Michael B. Jordan won Best Actor for which film?",
     "opts": [
      "Sinners",
      "Marty Supreme",
      "Hamnet",
      "Frankenstein"
     ],
     "c": 0,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"M7 3v18\" /> <path d=\"M3 7.5h4\" /> <path d=\"M3 12h18\" /> <path d=\"M3 16.5h4\" /> <path d=\"M17 3v18\" /> <path d=\"M17 7.5h4\" /> <path d=\"M17 16.5h4\" /></svg>"
     }
    },
    {
     "q": "Autumn Durald Arkapaw became the first woman to win the Oscar for which category?",
     "opts": [
      "Best Director",
      "Best Cinematography",
      "Best Film Editing",
      "Best Original Score"
     ],
     "c": 1,
     "note": "For Sinners.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\" /> <circle cx=\"12\" cy=\"13\" r=\"3\" /></svg>"
     }
    },
    {
     "q": "Which film was the first of 2026 to pass $1 billion at the global box office?",
     "opts": [
      "Toy Story 5",
      "Hoppers",
      "The Super Mario Galaxy Movie",
      "Minions & Monsters"
     ],
     "c": 2,
     "flag": "Check the final ranking if someone challenges. Mario passed $1bn first, then Michael and Toy Story 5.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4\" /> <path d=\"M10 22 9 8\" /> <path d=\"m14 22 1-14\" /> <path d=\"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z\" /></svg>"
     }
    },
    {
     "q": "Which 2026 film overtook Bohemian Rhapsody as the highest-grossing music biopic ever?",
     "opts": [
      "Elvis",
      "Rocketman",
      "A Complete Unknown",
      "Michael"
     ],
     "c": 3,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\" /> <path d=\"M13 5v2\" /> <path d=\"M13 17v2\" /> <path d=\"M13 11v2\" /></svg>"
     }
    }
   ]
  },
  {
   "id": "sport",
   "title": "Sport this year (2026)",
   "type": "standard",
   "max": 5,
   "rule": "One point per correct answer. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Who won the 2026 FIFA World Cup?",
     "opts": [
      "Argentina",
      "France",
      "Spain",
      "England"
     ],
     "c": 2,
     "note": "Spain 1-0 Argentina after extra time, MetLife Stadium, 19 July.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" /></svg>"
     }
    },
    {
     "q": "Who scored the only goal in the 2026 World Cup final?",
     "opts": [
      "Lamine Yamal",
      "Ferran Torres",
      "Rodri",
      "Mikel Merino"
     ],
     "c": 1,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 13V2l8 4-8 4\" /> <path d=\"M20.561 10.222a9 9 0 1 1-12.55-5.29\" /> <path d=\"M8.002 9.997a5 5 0 1 0 8.9 2.02\" /></svg>"
     }
    },
    {
     "q": "Which club won the 2025-26 Premier League, their first title in 22 years?",
     "opts": [
      "Manchester City",
      "Liverpool",
      "Chelsea",
      "Arsenal"
     ],
     "c": 3,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /></svg>"
     }
    },
    {
     "q": "Who won the men's singles at Wimbledon 2026?",
     "opts": [
      "Carlos Alcaraz",
      "Novak Djokovic",
      "Jannik Sinner",
      "Alexander Zverev"
     ],
     "c": 2,
     "note": "Sinner beat Zverev in four sets.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\" /> <path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\" /> <path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\" /> <path d=\"M4 22h16\" /> <path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\" /> <path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\" /></svg>"
     }
    },
    {
     "q": "Which country topped the medal table at the 2026 Winter Olympics with 18 golds?",
     "opts": [
      "United States",
      "Norway",
      "Italy",
      "Netherlands"
     ],
     "c": 1,
     "note": "Norway 18 gold, 41 medals in total.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m8 3 4 8 5-5 5 15H2L8 3z\" /> <path d=\"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19\" /></svg>"
     }
    }
   ]
  },
  {
   "id": "flags",
   "title": "Country flags",
   "type": "standard",
   "max": 5,
   "rule": "Name the country from its flag. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Whose flag is this?",
     "opts": [
      "Bhutan",
      "Nepal",
      "Sri Lanka",
      "Cambodia"
     ],
     "c": 1,
     "vis": {
      "flag": "np"
     },
     "note": "The only non-rectangular national flag."
    },
    {
     "q": "Whose flag is this?",
     "opts": [
      "Seychelles",
      "Comoros",
      "Cabo Verde",
      "São Tomé and Príncipe"
     ],
     "c": 2,
     "vis": {
      "flag": "cv"
     },
     "note": "Cabo Verde, one of the 2026 World Cup debutants."
    },
    {
     "q": "Whose flag is this?",
     "opts": [
      "Wales",
      "Mongolia",
      "Sri Lanka",
      "Bhutan"
     ],
     "c": 3,
     "vis": {
      "flag": "bt"
     }
    },
    {
     "q": "Whose flag is this?",
     "opts": [
      "Hungary",
      "Bulgaria",
      "Italy",
      "Russia"
     ],
     "c": 1,
     "vis": {
      "flag": "bg"
     },
     "note": "This year's Eurovision winner."
    },
    {
     "q": "Whose flag is this?",
     "opts": [
      "Palestine",
      "Sudan",
      "Jordan",
      "Kuwait"
     ],
     "c": 2,
     "vis": {
      "flag": "jo"
     }
    }
   ],
   "note": "Flags load from flagcdn.com, so the screen needs internet access.",
   "layout": "flags"
  },
  {
   "id": "news",
   "title": "News and animal news this year (2026)",
   "type": "standard",
   "max": 5,
   "rule": "One point per correct answer. Pick A, B, C or D.",
   "questions": [
    {
     "q": "The Artemis II crew that flew round the Moon in April included an astronaut from which country?",
     "opts": [
      "United Kingdom",
      "Japan",
      "Canada",
      "Italy"
     ],
     "c": 2,
     "note": "Jeremy Hansen, of the Canadian Space Agency.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" /> <path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" /> <path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" /> <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" /></svg>"
     }
    },
    {
     "q": "Sarah Mullally made history in 2026 as the first woman to lead which church?",
     "opts": [
      "Roman Catholic Church",
      "Church of England",
      "Church of Scotland",
      "Church in Wales"
     ],
     "c": 1,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 9h4\" /> <path d=\"M12 7v5\" /> <path d=\"M14 21v-3a2 2 0 0 0-4 0v3\" /> <path d=\"m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9\" /> <path d=\"M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14\" /></svg>"
     }
    },
    {
     "q": "Punch, a viral baby macaque in a Japanese zoo, clung to a soft toy from which shop?",
     "opts": [
      "Muji",
      "Target",
      "Build-A-Bear",
      "IKEA"
     ],
     "c": 3,
     "note": "An orangutan plush, at Ichikawa City Zoo.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"4\" r=\"2\" /> <circle cx=\"18\" cy=\"8\" r=\"2\" /> <circle cx=\"20\" cy=\"16\" r=\"2\" /> <path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\" /></svg>"
     }
    },
    {
     "q": "Eve, a siamang at a New Mexico zoo, went viral in 2026 for taking in which baby bird?",
     "opts": [
      "A duckling",
      "A robin",
      "A sparrow",
      "A pigeon"
     ],
     "c": 1,
     "note": "ABQ BioPark.",
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 7h.01\" /> <path d=\"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20\" /> <path d=\"m20 7 2 .5-2 .5\" /> <path d=\"M10 18v3\" /> <path d=\"M14 17.75V21\" /> <path d=\"M7 18a6 6 0 0 0 3.84-10.61\" /></svg>"
     }
    },
    {
     "q": "In 2026 the Louvre introduced a higher ticket price for non-European visitors. How much is it?",
     "opts": [
      "€22",
      "€28",
      "€32",
      "€45"
     ],
     "c": 2,
     "vis": {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 10h12\" /> <path d=\"M4 14h9\" /> <path d=\"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2\" /></svg>"
     }
    }
   ]
  },
  {
   "id": "picture",
   "title": "Picture round: name the landmark",
   "type": "standard",
   "max": 5,
   "rule": "Name each landmark from its silhouette. Pick A, B, C or D.",
   "questions": [
    {
     "q": "Which landmark is this?",
     "opts": [
      "Tokyo Tower",
      "Eiffel Tower",
      "Blackpool Tower",
      "CN Tower"
     ],
     "c": 1,
     "vis": {
      "svg": "<svg viewBox=\"0 0 300 225\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#F2EDDC\"><g transform=\"translate(75 5)\"><path d=\"M75 0L79 40L86 75L94 108L102 140L116 175L132 212L142 215L142 220L118 220L112 200Q75 170 38 200L32 220L8 220L8 215L18 212L34 175L48 140L56 108L64 75L71 40Z\"/>\n<rect x=\"60\" y=\"72\" width=\"30\" height=\"5\" fill=\"#0A0A1E\"/><rect x=\"46\" y=\"110\" width=\"58\" height=\"6\" fill=\"#0A0A1E\"/>\n<path d=\"M38 200Q75 150 112 200L104 200Q75 165 46 200Z\" fill=\"#0A0A1E\"/></g></svg>"
     }
    },
    {
     "q": "Which landmark is this?",
     "opts": [
      "Sydney Opera House",
      "Lotus Temple",
      "Walt Disney Concert Hall",
      "Guggenheim Bilbao"
     ],
     "c": 0,
     "vis": {
      "svg": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#F2EDDC\"><path d=\"M10 150H290V175H10Z\"/>\n<path d=\"M30 150Q40 50 110 40Q95 90 100 150Z\"/><path d=\"M85 150Q100 30 175 20Q150 80 155 150Z\"/><path d=\"M140 150Q160 45 235 45Q205 95 210 150Z\"/>\n<path d=\"M200 150Q215 85 265 80Q250 115 252 150Z\"/><path d=\"M110 150Q125 100 160 95Q150 120 152 150Z\" fill=\"#0A0A1E\" opacity=\".35\"/></svg>"
     }
    },
    {
     "q": "Which landmark is this?",
     "opts": [
      "Tower Bridge",
      "Elizabeth Tower (Big Ben)",
      "Hungarian Parliament",
      "Westminster Abbey"
     ],
     "c": 1,
     "vis": {
      "svg": "<svg viewBox=\"0 0 160 280\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#F2EDDC\"><path d=\"M80 2L88 38H72Z\"/><rect x=\"56\" y=\"38\" width=\"48\" height=\"30\"/><path d=\"M52 68H108L100 80H60Z\"/>\n<rect x=\"46\" y=\"80\" width=\"68\" height=\"64\"/><circle cx=\"80\" cy=\"112\" r=\"24\" fill=\"#0A0A1E\"/><circle cx=\"80\" cy=\"112\" r=\"21\" fill=\"none\" stroke=\"#F2EDDC\" stroke-width=\"2\"/><path d=\"M80 112V96M80 112L92 118\" stroke=\"#F2EDDC\" stroke-width=\"3\" fill=\"none\"/>\n<rect x=\"52\" y=\"144\" width=\"56\" height=\"8\"/><rect x=\"56\" y=\"152\" width=\"48\" height=\"100\"/><rect x=\"62\" y=\"162\" width=\"8\" height=\"28\" fill=\"#0A0A1E\"/><rect x=\"76\" y=\"162\" width=\"8\" height=\"28\" fill=\"#0A0A1E\"/><rect x=\"90\" y=\"162\" width=\"8\" height=\"28\" fill=\"#0A0A1E\"/>\n<rect x=\"44\" y=\"252\" width=\"72\" height=\"22\"/></svg>"
     }
    },
    {
     "q": "Which landmark is this?",
     "opts": [
      "Leaning Tower of Pisa",
      "Torre dei Lamberti",
      "Asinelli Tower",
      "Giotto's Campanile"
     ],
     "c": 0,
     "vis": {
      "svg": "<svg viewBox=\"0 0 240 280\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#F2EDDC\"><g transform=\"rotate(8 120 270)\"><rect x=\"80\" y=\"30\" width=\"80\" height=\"228\"/>\n<path d=\"M92 30L120 6L148 30Z\"/><rect x=\"88\" y=\"26\" width=\"64\" height=\"10\"/>\n<rect x=\"80\" y=\"40\" width=\"80\" height=\"5\"/><rect x=\"80\" y=\"74\" width=\"80\" height=\"5\"/><rect x=\"80\" y=\"108\" width=\"80\" height=\"5\"/><rect x=\"80\" y=\"142\" width=\"80\" height=\"5\"/><rect x=\"80\" y=\"176\" width=\"80\" height=\"5\"/><rect x=\"80\" y=\"210\" width=\"80\" height=\"5\"/><path d=\"M86 48v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M99 48v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M112 48v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M125 48v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M138 48v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M151 48v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M86 82v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M99 82v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M112 82v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M125 82v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M138 82v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M151 82v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M86 116v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M99 116v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M112 116v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M125 116v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M138 116v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M151 116v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M86 150v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M99 150v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M112 150v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M125 150v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M138 150v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M151 150v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M86 184v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M99 184v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M112 184v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M125 184v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M138 184v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M151 184v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M86 218v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M99 218v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M112 218v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M125 218v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M138 218v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/><path d=\"M151 218v22a3.5 3.5 0 0 0 7 0v-22z\" fill=\"#0A0A1E\"/></g><rect x=\"20\" y=\"262\" width=\"200\" height=\"12\"/></svg>"
     }
    },
    {
     "q": "Which landmark is this?",
     "opts": [
      "Humayun's Tomb",
      "Taj Mahal",
      "Hagia Sophia",
      "Blue Mosque"
     ],
     "c": 1,
     "vis": {
      "svg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#F2EDDC\"><rect x=\"30\" y=\"190\" width=\"260\" height=\"12\"/><rect x=\"95\" y=\"120\" width=\"130\" height=\"70\"/><path d=\"M128 120Q160 20 192 120Z\"/><rect x=\"157\" y=\"14\" width=\"6\" height=\"22\"/>\n<path d=\"M148 190V150Q160 128 172 150V190Z\" fill=\"#0A0A1E\"/><path d=\"M100 120Q110 92 124 120Z\"/><path d=\"M196 120Q210 92 220 120Z\"/>\n<rect x=\"36\" y=\"70\" width=\"18\" height=\"120\"/><path d=\"M33 70H57L45 50Z\"/><rect x=\"266\" y=\"70\" width=\"18\" height=\"120\"/><path d=\"M263 70H287L275 50Z\"/>\n<rect x=\"60\" y=\"95\" width=\"10\" height=\"95\" opacity=\"0\"/></svg>"
     }
    }
   ],
   "forceMode": "end",
   "note": "Silhouettes are drawn by hand and can be swapped for photos by setting img on a question.",
   "layout": "gallery"
  },
  {
   "id": "conn",
   "title": "The Secret Connection",
   "type": "standard",
   "max": 6,
   "forceMode": "end",
   "rule": "Five multiple-choice questions, one point each. The answers share a secret connection: name it at the end for a bonus point.",
   "note": "Answers come at the end of the round so nobody gives the link away early.",
   "questions": [
    {
     "q": "Which metal is liquid at room temperature?",
     "opts": [
      "Gallium",
      "Mercury",
      "Lead",
      "Tin"
     ],
     "c": 1
    },
    {
     "q": "Which chocolate bar was first made in Slough in 1932?",
     "opts": [
      "Twix",
      "Kit Kat",
      "Mars",
      "Crunchie"
     ],
     "c": 2,
     "note": "Forrest Mars started making it in Slough in 1932."
    },
    {
     "q": "Which Sega games console launched in 1994, before the Dreamcast?",
     "opts": [
      "Mega Drive",
      "Saturn",
      "Game Gear",
      "Master System"
     ],
     "c": 1
    },
    {
     "q": "Which Williams sister has won the Wimbledon singles title five times?",
     "opts": [
      "Serena",
      "Isha",
      "Venus",
      "Lyndrea"
     ],
     "c": 2,
     "note": "Venus has five Wimbledon singles titles, Serena seven."
    },
    {
     "q": "Complete the band name behind \"September\": ___, Wind & Fire.",
     "opts": [
      "Earth",
      "Air",
      "Water",
      "Sky"
     ],
     "c": 0
    },
    {
     "q": "What links all five answers?",
     "a": "Planets",
     "acc": [
      "planets",
      "planet",
      "the planets",
      "solar system",
      "planets of the solar system"
     ],
     "connection": true
    }
   ]
  },
  {
   "id": "tie",
   "title": "Tiebreaker",
   "type": "tiebreak",
   "max": 0,
   "rule": "Closest answer wins.",
   "questions": [
    {
     "q": "How many medals in total did Norway win at the 2026 Winter Olympics?",
     "a": "41",
     "closest": true
    }
   ]
  }
 ],
 "spares": [],
 "half": 5
};
