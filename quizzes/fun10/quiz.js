/* The Big Fun Pub Quiz. q = question, opts = options A to D, c = index of the correct option (0 to 3).
   vis = picture shown with the question: swatch, font, flag or svg. note = host-only note. */
window.QUIZ = {
 "id": "fun10",
 "title": "The Big Fun Pub Quiz",
 "intro": "Ten rounds of five multiple-choice questions, with one joker each to double a round of your choice.",
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
     "c": 2
    },
    {
     "q": "Which continent has land in all four hemispheres: north, south, east and west?",
     "opts": [
      "Asia",
      "Africa",
      "South America",
      "Europe"
     ],
     "c": 1
    },
    {
     "q": "Lake Baikal, the deepest lake on Earth, is in which country?",
     "opts": [
      "Mongolia",
      "Kazakhstan",
      "China",
      "Russia"
     ],
     "c": 3
    },
    {
     "q": "What is the smallest country in the world by area?",
     "opts": [
      "Monaco",
      "San Marino",
      "Vatican City",
      "Liechtenstein"
     ],
     "c": 2
    },
    {
     "q": "Which narrow strait separates Spain from Morocco?",
     "opts": [
      "Strait of Hormuz",
      "Strait of Gibraltar",
      "Bosphorus",
      "Strait of Malacca"
     ],
     "c": 1
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
     "note": "Bad Bunny. The first Spanish-language album to win the top Grammy."
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
     "note": "Dara, Bulgaria's first ever win."
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
     "note": "Olivia Dean took four awards, for The Art of Loving."
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
     "note": "Co-op Live arena."
    },
    {
     "q": "Which rapper passed Jay-Z in 2026 to become the most-awarded rapper in Grammy history?",
     "opts": [
      "Drake",
      "Kendrick Lamar",
      "Kanye West",
      "Eminem"
     ],
     "c": 1
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
   "note": "Fonts load from Google Fonts, so the screen needs internet access."
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
     "c": 2
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
     "note": "Physics, 1903."
    },
    {
     "q": "The Great Fire of London in 1666 began in a bakery on which street?",
     "opts": [
      "Bread Street",
      "Pie Corner",
      "Pudding Lane",
      "Fish Street Hill"
     ],
     "c": 2
    },
    {
     "q": "In which year was Magna Carta sealed?",
     "opts": [
      "1066",
      "1215",
      "1315",
      "1415"
     ],
     "c": 1
    },
    {
     "q": "Which ancient wonder stood on the island of Pharos near Alexandria?",
     "opts": [
      "Hanging Gardens",
      "Colossus",
      "Temple of Artemis",
      "The Lighthouse"
     ],
     "c": 3
    }
   ]
  },
  {
   "id": "pantone",
   "title": "What Pantone colour is this?",
   "type": "standard",
   "max": 5,
   "rule": "Pick the Pantone name that matches the colour on screen. Pick A, B, C or D.",
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
      "swatch": "#F0EEE9"
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
      "swatch": "#A47864"
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
      "swatch": "#FFBE98"
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
      "swatch": "#BB2649"
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
      "swatch": "#6667AB"
     }
    }
   ],
   "note": "Swatches are the published sRGB approximations. Screens vary, so expect small differences."
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
     "c": 2
    },
    {
     "q": "Michael B. Jordan won Best Actor for which film?",
     "opts": [
      "Sinners",
      "Marty Supreme",
      "Hamnet",
      "Frankenstein"
     ],
     "c": 0
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
     "note": "For Sinners."
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
     "flag": "Check the final ranking if someone challenges. Mario passed $1bn first, then Michael and Toy Story 5."
    },
    {
     "q": "Which 2026 film overtook Bohemian Rhapsody as the highest-grossing music biopic ever?",
     "opts": [
      "Elvis",
      "Rocketman",
      "A Complete Unknown",
      "Michael"
     ],
     "c": 3
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
     "note": "Spain 1-0 Argentina after extra time, MetLife Stadium, 19 July."
    },
    {
     "q": "Who scored the only goal in the 2026 World Cup final?",
     "opts": [
      "Lamine Yamal",
      "Ferran Torres",
      "Rodri",
      "Mikel Merino"
     ],
     "c": 1
    },
    {
     "q": "Which club won the 2025-26 Premier League, their first title in 22 years?",
     "opts": [
      "Manchester City",
      "Liverpool",
      "Chelsea",
      "Arsenal"
     ],
     "c": 3
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
     "note": "Sinner beat Zverev in four sets."
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
     "note": "Norway 18 gold, 41 medals in total."
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
   "note": "Flags load from flagcdn.com, so the screen needs internet access."
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
     "note": "Jeremy Hansen, of the Canadian Space Agency."
    },
    {
     "q": "Sarah Mullally made history in 2026 as the first woman to lead which church?",
     "opts": [
      "Roman Catholic Church",
      "Church of England",
      "Church of Scotland",
      "Church in Wales"
     ],
     "c": 1
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
     "note": "An orangutan plush, at Ichikawa City Zoo."
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
     "note": "ABQ BioPark."
    },
    {
     "q": "In 2026 the Louvre introduced a higher ticket price for non-European visitors. How much is it?",
     "opts": [
      "€22",
      "€28",
      "€32",
      "€45"
     ],
     "c": 2
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
   "note": "Silhouettes are drawn by hand and can be swapped for photos by setting img on a question."
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
 "spares": []
};
