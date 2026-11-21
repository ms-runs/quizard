/* Fur, Feathers & Far-Fetched — separate 12-round Quizard quiz. */
window.QUIZ = {
  "id": "fur-feathers-far-fetched",
  "theme": "deco",
  "title": "Fur, Feathers & Far-Fetched",
  "intro": "Twelve rounds of curious cats, odd objects, sporting nonsense, wild countryside, cryptic logos, dogs, wild landscapes, singalong lyrics, rare birds, flags, macro mysteries and a secret connection. Five multiple-choice questions per round plus one hidden-connection bonus. One joker per team.",
  "half": 6,
  "rounds": [
    {
      "id": "cats",
      "title": "Cats: Tiny Domestic Villains",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "Unlike humans, domestic cats generally cannot taste which flavour?",
          "opts": [
            "Sour",
            "Sweet",
            "Salty",
            "Bitter"
          ],
          "c": 1,
          "a": "Sweet",
          "note": "Domestic cats have a nonfunctional component of the sweet-taste receptor.",
          "source": "https://vcahospitals.com/resources/lifestyle-cat/facts-about-your-feline-friend"
        },
        {
          "q": "What is the term for a cat born with extra toes?",
          "opts": [
            "Polydactyl",
            "Brachycephalic",
            "Melanistic",
            "Digitigrade"
          ],
          "c": 0,
          "a": "Polydactyl",
          "note": "Polydactyl cats can have more than the usual number of toes; Hemingway's home is famous for them.",
          "source": "https://www.hemingwayhome.com/cats"
        },
        {
          "q": "Which big cat is unusual because its claws cannot fully retract?",
          "opts": [
            "Jaguar",
            "Leopard",
            "Cheetah",
            "Snow leopard"
          ],
          "c": 2,
          "a": "Cheetah",
          "note": "Cheetah claws are only partially retractable, helping traction during fast pursuits.",
          "source": "https://nhm.org/stories/cat-anatomy"
        },
        {
          "q": "What is the collective noun often used for a group of cats?",
          "opts": [
            "A parliament",
            "A clowder",
            "A shiver",
            "A bloat"
          ],
          "c": 1,
          "a": "A clowder",
          "note": "A clowder is a traditional term for a group of cats. A group of kittens can be a kindle.",
          "source": "https://www.merriam-webster.com/dictionary/clowder"
        },
        {
          "q": "Which country is home to the museum housing many famous six-toed descendants of Ernest Hemingway's cats?",
          "opts": [
            "Cuba",
            "Italy",
            "United States",
            "France"
          ],
          "c": 2,
          "a": "United States",
          "note": "The Ernest Hemingway Home & Museum is in Key West, Florida, and is home to many polydactyl cats.",
          "source": "https://www.hemingwayhome.com/cats"
        }
      ]
    },
    {
      "id": "objects",
      "title": "Picture This: Museum of Strange Things",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "What is this mysterious hollow, twelve-sided Roman object called?",
          "opts": [
            "An armillary sphere",
            "A Roman dodecahedron",
            "A medieval censer",
            "A surveyor's plumb"
          ],
          "c": 1,
          "a": "A Roman dodecahedron",
          "note": "Roman dodecahedra are real artefacts whose original function remains disputed.",
          "source": "https://commons.wikimedia.org/wiki/File:Roman_dodecahedron.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20dodecahedron.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "What was this elaborate brass device primarily used for?",
          "opts": [
            "Predicting tides",
            "Locating stars and calculating celestial positions",
            "Measuring earthquakes",
            "Amplifying sound"
          ],
          "c": 1,
          "a": "Locating stars and calculating celestial positions",
          "note": "An astrolabe models the apparent movement of the heavens and was used in astronomy and navigation.",
          "source": "https://www.britannica.com/science/astrolabe",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Spherical%20astrolabe.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "What was this set of ornate hanging chains and tools traditionally known as?",
          "opts": [
            "A chatelaine",
            "A sporran",
            "A rosary",
            "A reticule"
          ],
          "c": 0,
          "a": "A chatelaine",
          "note": "A chatelaine hung from clothing or a belt and held useful items such as keys, scissors and thimbles.",
          "source": "https://www.vam.ac.uk/articles/fashioned-from-nature",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Chatelaine.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "What is this ringed model of the heavens called?",
          "opts": [
            "An orrery",
            "A gyroscope",
            "An armillary sphere",
            "A sextant"
          ],
          "c": 2,
          "a": "An armillary sphere",
          "note": "An armillary sphere represents great circles of the celestial sphere; it looks like the universe built out of hoops.",
          "source": "https://www.rmg.co.uk/stories/topics/what-armillary-sphere",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Armillary%20sphere.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "What household task was this wooden device designed for?",
          "opts": [
            "Making butter",
            "Cleaning wool",
            "Crushing grapes",
            "Extracting honey"
          ],
          "c": 0,
          "a": "Making butter",
          "note": "A butter churn agitates cream until fat globules clump together to form butter.",
          "source": "https://www.britannica.com/technology/churn",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Butter%20churn.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        }
      ],
      "layout": "gallery"
    },
    {
      "id": "sport",
      "title": "Sport: Rules Were Optional",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "Between 1912 and 1948, the Olympic Games awarded medals in which unexpected field?",
          "opts": [
            "Cooking",
            "Architecture and other arts",
            "Chess",
            "Ballroom dancing"
          ],
          "c": 1,
          "a": "Architecture and other arts",
          "note": "Olympic art competitions awarded medals for architecture, music, painting, literature and sculpture.",
          "source": "https://www.olympics.com/ioc/news/a-meeting-of-muscles-and-minds"
        },
        {
          "q": "The longest professional tennis match, at Wimbledon in 2010, lasted approximately how long?",
          "opts": [
            "5 hours",
            "7 hours",
            "11 hours",
            "16 hours"
          ],
          "c": 2,
          "a": "11 hours",
          "note": "John Isner and Nicolas Mahut played for 11 hours and five minutes over three days.",
          "source": "https://www.wimbledon.com/en_GB/news/articles/2020-06-22/2010-isner-mahut-the-longest-match.html"
        },
        {
          "q": "At the first modern Olympics in 1896, which medal was awarded to event winners?",
          "opts": [
            "Bronze",
            "Gold",
            "Silver",
            "Platinum"
          ],
          "c": 2,
          "a": "Silver",
          "note": "Athens 1896 champions received silver medals; the now-familiar gold/silver/bronze hierarchy came later.",
          "source": "https://olympics.com/ioc/ancient-olympic-games/the-olympic-medals"
        },
        {
          "q": "Which sport was an Olympic medal event from 1900 to 1920?",
          "opts": [
            "Tug of war",
            "Darts",
            "Squash",
            "Bowls"
          ],
          "c": 0,
          "a": "Tug of war",
          "note": "Tug of war competed as an athletics event at several early Olympics.",
          "source": "https://olympics.com/en/sports/tug-of-war/"
        },
        {
          "q": "What did Fred Lorz do during the 1904 Olympic marathon that cost him victory?",
          "opts": [
            "Crossed the course on horseback",
            "Accepted a ride in a car",
            "Ran barefoot",
            "Used another runner's bib"
          ],
          "c": 1,
          "a": "Accepted a ride in a car",
          "note": "He was first into the stadium but had travelled part of the route by car and was disqualified.",
          "source": "https://olympics.com/ioc/news/the-strange-case-of-the-st-louis-1904-marathon"
        }
      ]
    },
    {
      "id": "britishwild",
      "title": "The British Countryside After Dark",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "A slow worm looks like a snake, but it is actually which kind of animal?",
          "opts": [
            "A legless lizard",
            "An amphibian",
            "An eel",
            "A small snake"
          ],
          "c": 0,
          "a": "A legless lizard",
          "note": "Slow worms are legless lizards; they can shed their tails, unlike British snakes.",
          "source": "https://www.wildlifetrusts.org/wildlife-explorer/reptiles/slow-worm"
        },
        {
          "q": "What is a stoat called when it develops its white winter coat?",
          "opts": [
            "Moultling",
            "Ermine",
            "Sable",
            "Pine marten"
          ],
          "c": 1,
          "a": "Ermine",
          "note": "Ermine is the name for a stoat's white winter fur; the tail tip stays black.",
          "source": "https://www.wildlifetrusts.org/wildlife-explorer/mammals/stoat"
        },
        {
          "q": "Which British mammal is famously associated with the character Ratty in The Wind in the Willows?",
          "opts": [
            "Water vole",
            "Brown rat",
            "Dormouse",
            "Harvest mouse"
          ],
          "c": 0,
          "a": "Water vole",
          "note": "Ratty is generally understood as a water vole, despite the character's name.",
          "source": "https://www.wildlifetrusts.org/wildlife-explorer/mammals/water-vole"
        },
        {
          "q": "What is the name of an otter's riverside den?",
          "opts": [
            "Drey",
            "Sett",
            "Holt",
            "Lodge"
          ],
          "c": 2,
          "a": "Holt",
          "note": "An otter's resting or breeding den is called a holt. A sett is for badgers; a drey is a squirrel nest.",
          "source": "https://www.wildlifetrusts.org/wildlife-explorer/mammals/otter"
        },
        {
          "q": "Which small British woodland mammal can spend roughly half of the year hibernating?",
          "opts": [
            "Pygmy shrew",
            "Hazel dormouse",
            "Bank vole",
            "Wood mouse"
          ],
          "c": 1,
          "a": "Hazel dormouse",
          "note": "Hazel dormice may hibernate for six months or more, depending on weather and food.",
          "source": "https://www.wildlifetrusts.org/wildlife-explorer/mammals/hazel-dormouse"
        }
      ]
    },
    {
      "id": "logos",
      "title": "Logo Surgery: Name That Brand",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "Which courier company hides a forward arrow in the negative space of this wordmark?",
          "opts": [
            "DHL",
            "UPS",
            "FedEx",
            "Hermes"
          ],
          "c": 2,
          "a": "FedEx",
          "note": "The FedEx arrow hides between the E and x; see if you can spot it once the full wordmark appears.",
          "source": "https://commons.wikimedia.org/wiki/File:FedEx_Wordmark.svg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/FedEx_Wordmark.svg?width=1000",
            "alt": "Cropped section of a courier wordmark",
            "crop": {
              "zoom": 2.5
            }
          }
        },
        {
          "q": "This scorpion is the emblem of which Italian performance-car brand?",
          "opts": [
            "Abarth",
            "Maserati",
            "Alfa Romeo",
            "Lancia"
          ],
          "c": 0,
          "a": "Abarth",
          "note": "Abarth uses a scorpion, a reference to founder Carlo Abarth's zodiac sign.",
          "source": "https://commons.wikimedia.org/wiki/File:Abarth_Logo.png",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Abarth%20Logo.png?width=1000",
            "alt": "Close-cropped scorpion emblem on a vehicle badge",
            "crop": {
              "zoom": 2
            }
          }
        },
        {
          "q": "Which German airline uses a stylised crane as its trademark?",
          "opts": [
            "Condor",
            "Eurowings",
            "Lufthansa",
            "TUI fly"
          ],
          "c": 2,
          "a": "Lufthansa",
          "note": "Lufthansa's crane was designed by Otto Firle in 1918.",
          "source": "https://commons.wikimedia.org/wiki/File:Lufthansa_Logo_(Crane).svg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lufthansa%20Logo%20(Crane).svg?width=1000",
            "alt": "Abstract blue circular bird logo",
            "crop": {
              "zoom": 1.15
            }
          }
        },
        {
          "q": "Which motoring brand's badge combines a red cross and a serpent swallowing a figure?",
          "opts": [
            "Ferrari",
            "Alfa Romeo",
            "Aston Martin",
            "Bentley"
          ],
          "c": 1,
          "a": "Alfa Romeo",
          "note": "The cross and biscione are heraldic symbols associated with Milan.",
          "source": "https://commons.wikimedia.org/wiki/File:Alfa_Romeo_badge.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Alfa%20Romeo%20badge.jpg?width=1000",
            "alt": "Cropped historic motor-car crest",
            "crop": {
              "zoom": 2.1
            }
          }
        },
        {
          "q": "Which software project uses a penguin mascot nicknamed Tux?",
          "opts": [
            "FreeBSD",
            "Blender",
            "Linux",
            "GIMP"
          ],
          "c": 2,
          "a": "Linux",
          "note": "Tux is the Linux mascot; the penguin emblem was popularised in the 1990s.",
          "source": "https://commons.wikimedia.org/wiki/File:Linux_tux_circle_logo.svg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Linux%20tux%20circle%20logo.svg?width=1000",
            "alt": "Cropped black white yellow penguin graphic",
            "crop": {
              "zoom": 1.25
            }
          }
        }
      ],
      "layout": "gallery"
    },
    {
      "id": "dogs",
      "title": "Dogs: The Good, the Weird & the Fluffy",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "Which dog breed is known for a yodel-like vocalisation rather than a typical bark?",
          "opts": [
            "Basenji",
            "Beagle",
            "Whippet",
            "Vizsla"
          ],
          "c": 0,
          "a": "Basenji",
          "note": "Basenjis aren't mute; they make a distinctive yodel called a baroo.",
          "source": "https://www.akc.org/dog-breeds/basenji/"
        },
        {
          "q": "The Norwegian Lundehund was bred to hunt which seabird on coastal cliffs?",
          "opts": [
            "Gannets",
            "Puffins",
            "Cormorants",
            "Razorbills"
          ],
          "c": 1,
          "a": "Puffins",
          "note": "Lundehunds were bred to retrieve puffins from narrow cliff crevices.",
          "source": "https://www.akc.org/dog-breeds/norwegian-lundehund/"
        },
        {
          "q": "How many fully developed toes are characteristic of a Norwegian Lundehund's feet?",
          "opts": [
            "Four",
            "Five",
            "Six",
            "Seven"
          ],
          "c": 2,
          "a": "Six",
          "note": "The breed standard calls for at least six fully developed toes on each foot.",
          "source": "https://www.akc.org/dog-breeds/norwegian-lundehund/"
        },
        {
          "q": "Dalmatian puppies are typically born with what coat appearance?",
          "opts": [
            "Already spotted",
            "Mostly white",
            "Mostly black",
            "Grey with stripes"
          ],
          "c": 1,
          "a": "Mostly white",
          "note": "Dalmatians are born largely white and develop their spots over subsequent weeks.",
          "source": "https://www.akc.org/dog-breeds/dalmatian/"
        },
        {
          "q": "Which dog breed was developed for water rescue and was traditionally used by fishermen in Atlantic Canada?",
          "opts": [
            "Newfoundland",
            "Afghan Hound",
            "Borzoi",
            "Italian Greyhound"
          ],
          "c": 0,
          "a": "Newfoundland",
          "note": "The Newfoundland is built for swimming, hauling nets and rescuing people from water.",
          "source": "https://www.akc.org/dog-breeds/newfoundland/"
        }
      ]
    },
    {
      "id": "geography",
      "title": "Geography: Somewhere, But Where?",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "These extraordinary umbrella-shaped dragon's-blood trees grow on Socotra. The island belongs to which country?",
          "opts": [
            "Oman",
            "Yemen",
            "Eritrea",
            "Somalia"
          ],
          "c": 1,
          "a": "Yemen",
          "note": "Socotra is an archipelago belonging to Yemen, with some spectacularly unusual endemic plants.",
          "source": "https://whc.unesco.org/en/list/1263",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Dragon%20blood%20trees%20in%20Socotra%20Island%2C%20Yemen.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "The otherworldly yellow-and-green hydrothermal landscape of Dallol is in which country?",
          "opts": [
            "Iceland",
            "Ethiopia",
            "Bolivia",
            "Indonesia"
          ],
          "c": 1,
          "a": "Ethiopia",
          "note": "Dallol sits in Ethiopia's Danakil Depression, one of Earth's hottest regions.",
          "source": "https://www.britannica.com/place/Danakil-Depression",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopia%20-%20Dallol.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "Where would you find this vast mirror-like salt flat, Salar de Uyuni?",
          "opts": [
            "Argentina",
            "Chile",
            "Bolivia",
            "Peru"
          ],
          "c": 2,
          "a": "Bolivia",
          "note": "Rain can turn the world's largest salt flat into a giant natural mirror.",
          "source": "https://www.britannica.com/place/Salar-de-Uyuni",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Uyuni%20Salt%20Flats%20Bolivia.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "Lake Hillier is a striking pink lake on an island off the coast of which country?",
          "opts": [
            "Australia",
            "Madagascar",
            "Brazil",
            "South Africa"
          ],
          "c": 0,
          "a": "Australia",
          "note": "Lake Hillier lies on Middle Island near Western Australia. Salty water and specialised microorganisms contribute to its colour.",
          "source": "https://www.australiasgoldenoutback.com/see-and-do/natural-attractions/pink-lakes/lake-hillier",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Pink%20Lake%20(Lake%20Hillier)%20on%20Middle%20Island%20off%20the%20coast%20of%20Esperance%20Western%20Australia.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "The more than 1,000 almost-conical 'Chocolate Hills' are located in which country?",
          "opts": [
            "Vietnam",
            "Philippines",
            "Indonesia",
            "Malaysia"
          ],
          "c": 1,
          "a": "Philippines",
          "note": "Bohol's Chocolate Hills turn brown in the dry season and resemble giant chocolate drops.",
          "source": "https://www.britannica.com/place/Chocolate-Hills",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Chocolate%20Hills%20in%20Bohol.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        }
      ],
      "layout": "gallery"
    },
    {
      "id": "lyrics",
      "title": "Finish the Lyric: Millennial Mixtape",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "Finish the line from The Killers' All These Things That I've Done: 'I've got soul, but I'm not a ...'",
          "opts": [
            "lover",
            "soldier",
            "sinner",
            "stranger"
          ],
          "c": 1,
          "a": "soldier",
          "note": "The next word is 'soldier'. It's a famously communal singalong moment.",
          "source": "https://www.thekillersmusic.com/music/all-these-things-that-ive-done/"
        },
        {
          "q": "Finish this Kaiser Chiefs lyric: 'I predict a ...'",
          "opts": [
            "storm",
            "riot",
            "disaster",
            "revolution"
          ],
          "c": 1,
          "a": "riot",
          "note": "'I Predict a Riot' is one of the mid-2000s' most quotable indie singles.",
          "source": "https://www.officialcharts.com/artist/13233/kaiser-chiefs/"
        },
        {
          "q": "Finish the Wheatus line: 'I'm just a teenage ...'",
          "opts": [
            "dreamer",
            "dirtbag",
            "loser",
            "heartbreaker"
          ],
          "c": 1,
          "a": "dirtbag",
          "note": "'Teenage Dirtbag' became a huge international hit in 2000.",
          "source": "https://www.officialcharts.com/artist/9813/wheatus/"
        },
        {
          "q": "In Smash Mouth's All Star, complete 'Somebody once told me the world is gonna ...'",
          "opts": [
            "save me",
            "roll me",
            "change me",
            "hold me"
          ],
          "c": 1,
          "a": "roll me",
          "note": "'Somebody once told me the world is gonna roll me' opens this enduring 1999 anthem.",
          "source": "https://www.smashmouth.com/"
        },
        {
          "q": "Finish the Fall Out Boy line: 'This ain't a scene, it's a goddamn ...'",
          "opts": [
            "love song",
            "arms race",
            "disgrace",
            "dreamscape"
          ],
          "c": 1,
          "a": "arms race",
          "note": "'This Ain't a Scene, It's an Arms Race' was a 2007 worldwide hit.",
          "source": "https://www.officialcharts.com/artist/11944/fall-out-boy/"
        }
      ]
    },
    {
      "id": "birds",
      "title": "Rare Birds: Nature's Costume Department",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "This extraordinary, shoe-billed wetland bird is called what?",
          "opts": [
            "Shoebill",
            "Hammerkop",
            "Marabou stork",
            "Saddle-billed stork"
          ],
          "c": 0,
          "a": "Shoebill",
          "note": "The shoebill is a huge African wetland bird named for its massive shoe-shaped bill.",
          "source": "https://www.britannica.com/animal/shoebill",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20shoebill%20portrait.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "This critically endangered flightless, nocturnal New Zealand parrot is what?",
          "opts": [
            "Kea",
            "Kakapo",
            "Kakariki",
            "Kokako"
          ],
          "c": 1,
          "a": "Kakapo",
          "note": "The kākāpō is a large, flightless, nocturnal parrot native to New Zealand.",
          "source": "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Kakapo.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "This spectacular green-and-red Central American bird is known by which name?",
          "opts": [
            "Resplendent quetzal",
            "Andean cock-of-the-rock",
            "Green aracari",
            "Emerald toucanet"
          ],
          "c": 0,
          "a": "Resplendent quetzal",
          "note": "The resplendent quetzal was sacred in Mesoamerican cultures and is famously found in cloud forests.",
          "source": "https://www.britannica.com/animal/quetzal",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Resplendent%20Quetzal.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "Which South American bird has chicks with claws on their wings and a digestive system like a cow's?",
          "opts": [
            "Oilbird",
            "Hoatzin",
            "Sunbittern",
            "Seriema"
          ],
          "c": 1,
          "a": "Hoatzin",
          "note": "Hoatzin chicks have wing claws for scrambling, while adults ferment leaves in enlarged gut chambers.",
          "source": "https://www.britannica.com/animal/hoatzin",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Hoatzin.jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        },
        {
          "q": "This long-legged African raptor is famous for stamping on snakes. What is it?",
          "opts": [
            "Secretarybird",
            "Martial eagle",
            "Bateleur",
            "Southern ground hornbill"
          ],
          "c": 0,
          "a": "Secretarybird",
          "note": "Secretarybirds walk across savannahs and can kick snakes with incredible speed and force.",
          "source": "https://www.britannica.com/animal/secretary-bird",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Secretarybird%20(16420981497).jpg?width=1000",
            "alt": "Mystery image — identify from the picture"
          }
        }
      ],
      "layout": "gallery"
    },
    {
      "id": "flags",
      "title": "Flagged for Difficulty",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "Which country's flag features a dragon clutching jewels?",
          "opts": [
            "Bhutan",
            "Sri Lanka",
            "Wales",
            "Montenegro"
          ],
          "c": 0,
          "a": "Bhutan",
          "note": "The Thunder Dragon, or Druk, appears on Bhutan's yellow-and-orange flag.",
          "source": "https://www.britannica.com/topic/flag-of-Bhutan",
          "vis": {
            "img": "https://flagcdn.com/w640/bt.png",
            "alt": "Cropped national flag to identify",
            "crop": {
              "zoom": 2.35
            }
          }
        },
        {
          "q": "Which country's flag features a purple-and-green sisserou parrot and ten stars?",
          "opts": [
            "Grenada",
            "Dominica",
            "Saint Lucia",
            "Saint Vincent and the Grenadines"
          ],
          "c": 1,
          "a": "Dominica",
          "note": "Dominica's flag shows the endemic sisserou parrot within ten green stars.",
          "source": "https://www.britannica.com/topic/flag-of-Dominica",
          "vis": {
            "img": "https://flagcdn.com/w640/dm.png",
            "alt": "Cropped national flag to identify",
            "crop": {
              "zoom": 2.35
            }
          }
        },
        {
          "q": "Which country's flag includes a rifle, hoe and book?",
          "opts": [
            "Mozambique",
            "Angola",
            "Zimbabwe",
            "Guinea-Bissau"
          ],
          "c": 0,
          "a": "Mozambique",
          "note": "Mozambique's flag unusually includes an AK-pattern rifle crossed with a hoe over a book.",
          "source": "https://www.britannica.com/topic/flag-of-Mozambique",
          "vis": {
            "img": "https://flagcdn.com/w640/mz.png",
            "alt": "Cropped national flag to identify",
            "crop": {
              "zoom": 2.35
            }
          }
        },
        {
          "q": "Which country's flag depicts a frigatebird flying above a rising sun?",
          "opts": [
            "Fiji",
            "Palau",
            "Kiribati",
            "Tuvalu"
          ],
          "c": 2,
          "a": "Kiribati",
          "note": "Kiribati's flag uses a gold frigatebird above the sun and three ocean waves.",
          "source": "https://www.britannica.com/topic/flag-of-Kiribati",
          "vis": {
            "img": "https://flagcdn.com/w640/ki.png",
            "alt": "Cropped national flag to identify",
            "crop": {
              "zoom": 2.35
            }
          }
        },
        {
          "q": "Which country's flag shows a grey crowned crane standing on one leg?",
          "opts": [
            "Uganda",
            "Zambia",
            "Kenya",
            "Botswana"
          ],
          "c": 0,
          "a": "Uganda",
          "note": "Uganda's flag features a grey crowned crane, a national emblem.",
          "source": "https://www.britannica.com/topic/flag-of-Uganda",
          "vis": {
            "img": "https://flagcdn.com/w640/ug.png",
            "alt": "Cropped national flag to identify",
            "crop": {
              "zoom": 2.35
            }
          }
        }
      ],
      "layout": "gallery"
    },
    {
      "id": "macro",
      "title": "Microscopic Mysteries",
      "type": "standard",
      "max": 5,
      "rule": "Five questions, one point per correct answer. Pick A, B, C or D.",
      "questions": [
        {
          "q": "What everyday object is shown at extreme magnification?",
          "opts": [
            "A pen tip",
            "A sewing needle",
            "A hypodermic syringe",
            "A soldering iron"
          ],
          "c": 0,
          "a": "A pen tip",
          "note": "The tiny rolling ball in a ballpoint pen transfers ink to paper.",
          "source": "https://commons.wikimedia.org/wiki/File:Ballpoint_Macro.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ballpoint%20Macro.jpg?width=1000",
            "alt": "An extreme close-up showing shiny metal on a dark background",
            "crop": {
              "zoom": 1.3
            }
          }
        },
        {
          "q": "These microscopic-looking plastic hooks belong to which everyday fastening material?",
          "opts": [
            "A zip",
            "Hook-and-loop fastener (Velcro)",
            "A toothbrush",
            "Synthetic carpet"
          ],
          "c": 1,
          "a": "Hook-and-loop fastener (Velcro)",
          "note": "Hook-and-loop fasteners work because thousands of tiny hooks catch on fabric loops.",
          "source": "https://commons.wikimedia.org/wiki/File:Velcro_Hooks.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Velcro%20Hooks.jpg?width=1000",
            "alt": "Dense rows of small plastic hooks photographed in macro",
            "crop": {
              "zoom": 1.4
            }
          }
        },
        {
          "q": "What living thing has this densely scaled colourful surface?",
          "opts": [
            "Butterfly wing",
            "Fish skin",
            "Peacock feather",
            "Lizard skin"
          ],
          "c": 0,
          "a": "Butterfly wing",
          "note": "Butterfly wings are covered with tiny overlapping scales that create their colours and patterns.",
          "source": "https://commons.wikimedia.org/wiki/File:Butterfly_wing,_detail,_scales.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Butterfly%20wing%2C%20detail%2C%20scales.jpg?width=1000",
            "alt": "Extreme close-up of colourful overlapping biological scales",
            "crop": {
              "zoom": 1.5
            }
          }
        },
        {
          "q": "These golden seed-like bumps embedded in red flesh belong to what fruit?",
          "opts": [
            "Raspberry",
            "Strawberry",
            "Pomegranate",
            "Redcurrant"
          ],
          "c": 1,
          "a": "Strawberry",
          "note": "The little 'seeds' on a strawberry are actually achenes—each a small fruit containing a seed.",
          "source": "https://commons.wikimedia.org/wiki/File:Strawberry_surface_close_up_macro.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry%20surface%20close%20up%20macro.jpg?width=1000",
            "alt": "Extreme macro red surface with yellow specks",
            "crop": {
              "zoom": 2.1
            }
          }
        },
        {
          "q": "This dramatic dark-and-light ridged landscape is an extreme close-up of what?",
          "opts": [
            "A human fingerprint",
            "Tree bark",
            "A vinyl record",
            "A seashell"
          ],
          "c": 0,
          "a": "A human fingerprint",
          "note": "Fingerprints are arrays of friction ridges; at macro scale they look like miniature landscapes.",
          "source": "https://commons.wikimedia.org/wiki/File:Fingerprint.jpg",
          "vis": {
            "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Fingerprint.jpg?width=1000",
            "alt": "Extreme close-up of curving ridges",
            "crop": {
              "zoom": 1.35
            }
          }
        }
      ],
      "layout": "gallery"
    },
    {
      "id": "secret",
      "title": "The Final Five: One Thing in Common",
      "type": "standard",
      "max": 6,
      "rule": "Five seemingly unrelated questions. One point each, plus a bonus point for the hidden connection. Answers remain secret until the end.",
      "questions": [
        {
          "q": "Which Linux distribution is sponsored by Red Hat and serves as an upstream community project for its enterprise products?",
          "opts": [
            "Ubuntu",
            "Fedora",
            "Debian",
            "Manjaro"
          ],
          "c": 1,
          "a": "Fedora",
          "note": "Fedora is an open-source Linux distribution and also the name of a style of hat.",
          "source": "https://fedoraproject.org/"
        },
        {
          "q": "The canal completed by the United States in 1914 crosses which Central American country?",
          "opts": [
            "Costa Rica",
            "Nicaragua",
            "Panama",
            "Honduras"
          ],
          "c": 2,
          "a": "Panama",
          "note": "Panama is both the location of the canal and a traditional style of woven hat.",
          "source": "https://www.britannica.com/topic/Panama-Canal"
        },
        {
          "q": "What is the cricketing role of the player who delivers the ball to the batter?",
          "opts": [
            "Fielder",
            "Keeper",
            "Bowler",
            "Umpire"
          ],
          "c": 2,
          "a": "Bowler",
          "note": "A bowler delivers the ball; a bowler is also a round, hard felt hat.",
          "source": "https://www.lords.org/mcc/the-laws-of-cricket"
        },
        {
          "q": "Which 1894 novel by George du Maurier follows an artist's model who becomes a celebrated singer?",
          "opts": [
            "Trilby",
            "Rebecca",
            "Tess",
            "The Awakening"
          ],
          "c": 0,
          "a": "Trilby",
          "note": "Trilby was a hugely popular novel that also gave its name to a style of brimmed hat.",
          "source": "https://www.britannica.com/topic/Trilby-novel-by-du-Maurier"
        },
        {
          "q": "What is the name of the famous flat horse race run annually at Epsom Downs?",
          "opts": [
            "The Grand National",
            "The Derby",
            "The Oaks",
            "The St Leger"
          ],
          "c": 1,
          "a": "The Derby",
          "note": "The Derby is a famous horse race; 'derby' is also an American name for the bowler hat.",
          "source": "https://www.britannica.com/sports/Derby-horse-race"
        },
        {
          "q": "What connects all five correct answers?",
          "a": "Types of hats",
          "acc": [
            "hats",
            "hat",
            "types of hats",
            "hat styles",
            "styles of hats",
            "kinds of hats",
            "headwear"
          ],
          "connection": true,
          "note": "Fedora, Panama, Bowler, Trilby and Derby are all names of hats. Derby is the US name for a bowler hat."
        }
      ],
      "forceMode": "end"
    },
    {
      "id": "tiebreak",
      "title": "The Last Laugh — Tiebreaker",
      "type": "tiebreak",
      "max": 0,
      "rule": "Closest answer wins; no points added.",
      "questions": [
        {
          "q": "In which year was George du Maurier's novel Trilby first published as a book?",
          "a": "1894",
          "note": "Trilby was published in 1894; it later inspired the name of the hat.",
          "source": "https://www.britannica.com/topic/Trilby-novel-by-du-Maurier"
        }
      ]
    }
  ]
};
