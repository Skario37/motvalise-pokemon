const POKEMON = [
    "Bulbizarre",
    "Herbizarre",
    "Florizarre",
    "Salamèche",
    "Reptincel",
    "Dracaufeu",
    "Carapuce",
    "Carabaffe",
    "Tortank",
    "Chenipan",
    "Chrysacier",
    "Papilusion",
    "Aspicot",
    "Coconfort",
    "Dardargnan",
    "Roucool",
    "Roucoups",
    "Roucarnage",
    "Rattata",
    "Rattatac",
    "Piafabec",
    "Rapasdepic",
    "Abo",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sabelette",
    "Sablaireau",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Mélofée",
    "Mélodelfe",
    "Goupix",
    "Feunard",
    "Rondoudou",
    "Grodoudou",
    "Nosferapti",
    "Nosferalto",
    "Mystherbe",
    "Ortide",
    "Rafflesia",
    "Paras",
    "Parasect",
    "Mimitoss",
    "Aéromite",
    "Taupiqueur",
    "Triopikeur",
    "Miaouss",
    "Persian",
    "Psykokwak",
    "Akwakwak",
    "Férosinge",
    "Colossinge",
    "Caninos",
    "Arcanin",
    "Ptitard",
    "Têtarte",
    "Tartard",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machoc",
    "Machopeur",
    "Mackogneur",
    "Chétiflor",
    "Boustiflor",
    "Empiflor",
    "Tentacool",
    "Tentacruel",
    "Racaillou",
    "Gravalanch",
    "Grolem",
    "Ponyta",
    "Galopa",
    "Ramoloss",
    "Flagadoss",
    "Magnéti",
    "Magnéton",
    "Canarticho",
    "Doduo",
    "Dodrio",
    "Otaria",
    "Lamantine",
    "Tadmorv",
    "Grotadmorv",
    "Kokiyas",
    "Crustabri",
    "Fantominus",
    "Spectrum",
    "Ectoplasma",
    "Onix",
    "Soporifik",
    "Hypnomade",
    "Krabby",
    "Krabboss",
    "Voltorbe",
    "Électrode",
    "Noeunoeuf",
    "Noadkoko",
    "Osselait",
    "Ossatueur",
    "Kicklee",
    "Tygnon",
    "Excelangue",
    "Smogo",
    "Smogogo",
    "Rhinocorne",
    "Rhinoféros",
    "Leveinard",
    "Saquedeneu",
    "Kangourex",
    "Hypotrempe",
    "Hypocéan",
    "Poissirène",
    "Poissoroy",
    "Stari",
    "Staross",
    "M. Mime",
    "Insécateur",
    "Lippoutou",
    "Élektek",
    "Magmar",
    "Scarabrute",
    "Tauros",
    "Magicarpe",
    "Léviator",
    "Lokhlass",
    "Métamorph",
    "Évoli",
    "Aquali",
    "Voltali",
    "Pyroli",
    "Porygon",
    "Amonita",
    "Amonistar",
    "Kabuto",
    "Kabutops",
    "Ptéra",
    "Ronflex",
    "Artikodin",
    "Électhor",
    "Sulfura",
    "Minidraco",
    "Draco",
    "Dracolosse",
    "Mewtwo",
    "Mew",
    "Germignon",
    "Macronium",
    "Méganium",
    "Héricendre",
    "Feurisson",
    "Typhlosion",
    "Kaiminus",
    "Crocrodil",
    "Aligatueur",
    "Fouinette",
    "Fouinar",
    "Hoothoot",
    "Noarfang",
    "Coxy",
    "Coxyclaque",
    "Mimigal",
    "Migalos",
    "Nostenfer",
    "Loupio",
    "Lanturn",
    "Pichu",
    "Mélo",
    "Toudoudou",
    "Togepi",
    "Togetic",
    "Natu",
    "Xatu",
    "Wattouat",
    "Lainergie",
    "Pharamp",
    "Joliflor",
    "Marill",
    "Azumarill",
    "Simularbre",
    "Tarpaud",
    "Granivol",
    "Floravol",
    "Cotovol",
    "Capumain",
    "Tournegrin",
    "Héliatronc",
    "Yanma",
    "Axoloto",
    "Maraiste",
    "Mentali",
    "Noctali",
    "Cornèbre",
    "Roigada",
    "Feuforêve",
    "Zarbi",
    "Qulbutoké",
    "Girafarig",
    "Pomdepik",
    "Foretress",
    "Insolourdo",
    "Scorplane",
    "Steelix",
    "Snubbull",
    "Granbull",
    "Qwilfish",
    "Cizayox",
    "Caratroc",
    "Scarhino",
    "Farfuret",
    "Teddiursa",
    "Ursaring",
    "Limagma",
    "Volcaropod",
    "Marcacrin",
    "Cochignon",
    "Corayon",
    "Rémoraid",
    "Octillery",
    "Cadoizo",
    "Démanta",
    "Airmure",
    "Malosse",
    "Démolosse",
    "Hyporoi",
    "Phanpy",
    "Donphan",
    "Porygon2",
    "Cerfrousse",
    "Queulorior",
    "Debugant",
    "Kapoera",
    "Lippouti",
    "Élekid",
    "Magby",
    "Écrémeuh",
    "Leuphorie",
    "Raikou",
    "Entei",
    "Suicune",
    "Embrylex",
    "Ymphect",
    "Tyranocif",
    "Lugia",
    "Ho-Oh",
    "Celebi",
    "Arcko",
    "Massko",
    "Jungko",
    "Poussifeu",
    "Galifeu",
    "Braségali",
    "Gobou",
    "Flobio",
    "Laggron",
    "Medhyèna",
    "Grahyèna",
    "Zigzaton",
    "Linéon",
    "Chenipotte",
    "Armulys",
    "Charmillon",
    "Blindalys",
    "Papinox",
    "Nénupiot",
    "Lombre",
    "Ludicolo",
    "Grainipiot",
    "Pifeuil",
    "Tengalice",
    "Nirondelle",
    "Hélédelle",
    "Goélise",
    "Bekipan",
    "Tarsal",
    "Kirlia",
    "Gardevoir",
    "Arakdo",
    "Maskadra",
    "Balignon",
    "Chapignon",
    "Parecool",
    "Vigoroth",
    "Monaflèmit",
    "Ningale",
    "Ninjask",
    "Munja",
    "Chuchmur",
    "Ramboum",
    "Brouhabam",
    "Makuhita",
    "Hariyama",
    "Azurill",
    "Tarinor",
    "Skitty",
    "Delcatty",
    "Ténéfix",
    "Mysdibule",
    "Galekid",
    "Galegon",
    "Galeking",
    "Méditikka",
    "Charmina",
    "Dynavolt",
    "Élecsprint",
    "Posipi",
    "Négapi",
    "Muciole",
    "Lumivole",
    "Rosélia",
    "Gloupti",
    "Avaltout",
    "Carvanha",
    "Sharpedo",
    "Wailmer",
    "Wailord",
    "Chamallot",
    "Camérupt",
    "Chartor",
    "Spoink",
    "Groret",
    "Spinda",
    "Kraknoix",
    "Vibraninf",
    "Libégon",
    "Cacnea",
    "Cacturne",
    "Tylton",
    "Altaria",
    "Mangriff",
    "Séviper",
    "Séléroc",
    "Solaroc",
    "Barloche",
    "Barbicha",
    "Écrapince",
    "Colhomard",
    "Balbuto",
    "Kaorine",
    "Lilia",
    "Vacilys",
    "Anorith",
    "Armaldo",
    "Barpau",
    "Milobellus",
    "Morphéo",
    "Kecleon",
    "Polichombr",
    "Branette",
    "Skelénox",
    "Téraclope",
    "Tropius",
    "Éoko",
    "Absol",
    "Okéoké",
    "Stalgamin",
    "Oniglali",
    "Obalie",
    "Phogleur",
    "Kaimorse",
    "Coquiperl",
    "Serpang",
    "Rosabyss",
    "Relicanth",
    "Lovdisc",
    "Draby",
    "Drackhaus",
    "Drattak",
    "Terhal",
    "Métang",
    "Métalosse",
    "Regirock",
    "Regice",
    "Registeel",
    "Latias",
    "Latios",
    "Kyogre",
    "Groudon",
    "Rayquaza",
    "Jirachi",
    "Deoxys",
    "Tortipouss",
    "Boskara",
    "Torterra",
    "Ouisticram",
    "Chimpenfeu",
    "Simiabraz",
    "Tiplouf",
    "Prinplouf",
    "Pingoléon",
    "Étourmi",
    "Étourvol",
    "Étouraptor",
    "Keunotor",
    "Castorno",
    "Crikzik",
    "Mélokrik",
    "Lixy",
    "Luxio",
    "Luxray",
    "Rozbouton",
    "Roserade",
    "Kranidos",
    "Charkos",
    "Dinoclier",
    "Bastiodon",
    "Cheniti",
    "Cheniselle",
    "Papilord",
    "Apitrini",
    "Apireine",
    "Pachirisu",
    "Mustébouée",
    "Mustéflott",
    "Ceribou",
    "Ceriflor",
    "Sancoki",
    "Tritosor",
    "Capidextre",
    "Baudrive",
    "Grodrive",
    "Laporeille",
    "Lockpin",
    "Magirêve",
    "Corboss",
    "Chaglam",
    "Chaffreux",
    "Korillon",
    "Moufouette",
    "Moufflair",
    "Archéomire",
    "Archéodong",
    "Manzaï",
    "Mime Jr.",
    "Ptiravi",
    "Pijako",
    "Spiritomb",
    "Griknot",
    "Carmache",
    "Carchacrok",
    "Goinfrex",
    "Riolu",
    "Lucario",
    "Hippopotas",
    "Hippodocus",
    "Rapion",
    "Drascore",
    "Cradopaud",
    "Coatox",
    "Vortente",
    "Écayon",
    "Luminéon",
    "Babimanta",
    "Blizzi",
    "Blizzaroi",
    "Dimoret",
    "Magnézone",
    "Coudlangue",
    "Rhinastoc",
    "Bouldeneu",
    "Élekable",
    "Maganon",
    "Togekiss",
    "Yanmega",
    "Phyllali",
    "Givrali",
    "Scorvol",
    "Mammochon",
    "Porygon-Z",
    "Gallame",
    "Tarinorme",
    "Noctunoir",
    "Momartik",
    "Motisma",
    "Créhelf",
    "Créfollet",
    "Créfadet",
    "Dialga",
    "Palkia",
    "Heatran",
    "Regigigas",
    "Giratina",
    "Cresselia",
    "Phione",
    "Manaphy",
    "Darkrai",
    "Shaymin",
    "Arceus",
    "Victini",
    "Vipélierre",
    "Lianaja",
    "Majaspic",
    "Gruikui",
    "Grotichon",
    "Roitiflam",
    "Moustillon",
    "Mateloutre",
    "Clamiral",
    "Ratentif",
    "Miradar",
    "Ponchiot",
    "Ponchien",
    "Mastouffe",
    "Chacripan",
    "Léopardus",
    "Feuillajou",
    "Feuiloutan",
    "Flamajou",
    "Flamoutan",
    "Flotajou",
    "Flotoutan",
    "Munna",
    "Mushana",
    "Poichigeon",
    "Colombeau",
    "Déflaisan",
    "Zébibron",
    "Zéblitz",
    "Nodulithe",
    "Géolithe",
    "Gigalithe",
    "Chovsourir",
    "Rhinolove",
    "Rototaupe",
    "Minotaupe",
    "Nanméouïe",
    "Charpenti",
    "Ouvrifier",
    "Bétochef",
    "Tritonde",
    "Batracné",
    "Crapustule",
    "Judokrak",
    "Karaclée",
    "Larveyette",
    "Couverdure",
    "Manternel",
    "Venipatte",
    "Scobolide",
    "Brutapode",
    "Doudouvet",
    "Farfaduvet",
    "Chlorobule",
    "Fragilady",
    "Bargantua",
    "Mascaïman",
    "Escroco",
    "Crocorible",
    "Darumarond",
    "Darumacho",
    "Maracachi",
    "Crabicoque",
    "Crabaraque",
    "Baggiguane",
    "Baggaïd",
    "Cryptéro",
    "Tutafeh",
    "Tutankafer",
    "Carapagos",
    "Mégapagos",
    "Arkéapti",
    "Aéroptéryx",
    "Miamiasme",
    "Miasmax",
    "Zorua",
    "Zoroark",
    "Chinchidou",
    "Pashmilla",
    "Scrutella",
    "Mesmérella",
    "Sidérella",
    "Nucléos",
    "Méios",
    "Symbios",
    "Couaneton",
    "Lakmécygne",
    "Sorbébé",
    "Sorboul",
    "Sorbouboul",
    "Vivaldaim",
    "Haydaim",
    "Emolga",
    "Carabing",
    "Lançargot",
    "Trompignon",
    "Gaulet",
    "Viskuse",
    "Moyade",
    "Mamanbo",
    "Statitik",
    "Mygavolt",
    "Grindur",
    "Noacier",
    "Tic",
    "Clic",
    "Cliticlic",
    "Anchwatt",
    "Lampéroie",
    "Ohmassacre",
    "Lewsor",
    "Neitram",
    "Funécire",
    "Mélancolux",
    "Lugulabre",
    "Coupenotte",
    "Incisache",
    "Tranchodon",
    "Polarhume",
    "Polagriffe",
    "Hexagel",
    "Escargaume",
    "Limaspeed",
    "Limonde",
    "Kungfouine",
    "Shaofouine",
    "Drakkarmin",
    "Gringolem",
    "Golemastoc",
    "Scalpion",
    "Scalproie",
    "Frison",
    "Furaiglon",
    "Gueriaigle",
    "Vostourno",
    "Vaututrice",
    "Aflamanoir",
    "Fermite",
    "Solochi",
    "Diamat",
    "Trioxhydre",
    "Pyronille",
    "Pyrax",
    "Cobaltium",
    "Terrakium",
    "Viridium",
    "Boréas",
    "Fulguris",
    "Reshiram",
    "Zekrom",
    "Démétéros",
    "Kyurem",
    "Keldeo",
    "Meloetta",
    "Genesect",
    "Marisson",
    "Boguérisse",
    "Blindépique",
    "Feunnec",
    "Roussil",
    "Goupelin",
    "Grenousse",
    "Croâporal",
    "Amphinobi",
    "Sapereau",
    "Excavarenne",
    "Passerouge",
    "Braisillon",
    "Flambusard",
    "Lépidonille",
    "Pérégrain",
    "Prismillon",
    "Hélionceau",
    "Némélios",
    "Flabébé",
    "Floette",
    "Florges",
    "Cabriolaine",
    "Chevroum",
    "Pandespiègle",
    "Pandarbare",
    "Couafarel",
    "Psystigri",
    "Mistigrix",
    "Monorpale",
    "Dimoclès",
    "Exagide",
    "Fluvetin",
    "Cocotine",
    "Sucroquin",
    "Cupcanaille",
    "Sepiatop",
    "Sepiatroce",
    "Opermine",
    "Golgopathe",
    "Venalgue",
    "Kravarech",
    "Flingouste",
    "Gamblast",
    "Galvaran",
    "Iguolta",
    "Ptyranidur",
    "Rexillius",
    "Amagara",
    "Dragmara",
    "Nymphali",
    "Brutalibré",
    "Dedenne",
    "Strassie",
    "Mucuscule",
    "Colimucus",
    "Muplodocus",
    "Trousselin",
    "Brocélôme",
    "Desséliande",
    "Pitrouille",
    "Banshitrouye",
    "Grelaçon",
    "Séracrawl",
    "Sonistrelle",
    "Bruyverne",
    "Xerneas",
    "Yveltal",
    "Zygarde",
    "Diancie",
    "Hoopa",
    "Volcanion",
    "Brindibou",
    "Efflèche",
    "Archéduc",
    "Flamiaou",
    "Matoufeu",
    "Félinferno",
    "Otaquin",
    "Otarlette",
    "Oratoria",
    "Picassaut",
    "Piclairon",
    "Bazoucan",
    "Manglouton",
    "Argouste",
    "Larvibule",
    "Chrysapile",
    "Lucanon",
    "Crabagarre",
    "Crabominable",
    "Plumeline",
    "Bombydou",
    "Rubombelle",
    "Rocabot",
    "Lougaroc",
    "Froussardine",
    "Vorastérie",
    "Prédastérie",
    "Tiboudet",
    "Bourrinos",
    "Araqua",
    "Tarenbulle",
    "Mimantis",
    "Floramantis",
    "Spododo",
    "Lampignon",
    "Tritox",
    "Malamandre",
    "Nounourson",
    "Chelours",
    "Croquine",
    "Candine",
    "Sucreine",
    "Guérilande",
    "Gouroutan",
    "Quartermac",
    "Sovkipou",
    "Sarmuraï",
    "Bacabouh",
    "Trépassable",
    "Concombaffe",
    "Type:0",
    "Silvallié",
    "Météno",
    "Dodoala",
    "Boumata",
    "Togedemaru",
    "Mimiqui",
    "Denticrisse",
    "Draïeul",
    "Sinistrail",
    "Bébécaille",
    "Écaïd",
    "Ékaïser",
    "Tokorico",
    "Tokopiyon",
    "Tokotoro",
    "Tokopisco",
    "Cosmog",
    "Cosmovum",
    "Solgaleo",
    "Lunala",
    "Zéroïd",
    "Mouscoto",
    "Cancrelove",
    "Câblifère",
    "Bamboiselle",
    "Katagami",
    "Engloutyran",
    "Necrozma",
    "Magearna",
    "Marshadow",
    "Vémini",
    "Mandrillon",
    "Ama-Ama",
    "Pierroteknik",
    "Zeraora",
    "Meltan",
    "Melmetal",
    "Ouistempo",
    "Badabouin",
    "Gorythmic",
    "Flambino",
    "Lapyro",
    "Pyrobut",
    "Larméléon",
    "Arrozard",
    "Lézargus",
    "Rongourmand",
    "Rongrigou",
    "Minisange",
    "Bleuseille",
    "Corvaillus",
    "Larvadar",
    "Coléodôme",
    "Astronelle",
    "Goupilou",
    "Roublenard",
    "Tournicoton",
    "Blancoton",
    "Moumouton",
    "Moumouflon",
    "Khélocrok",
    "Torgamord",
    "Voltoutou",
    "Fulgudog",
    "Charbi",
    "Wagomine",
    "Monthracite",
    "Verpom",
    "Pomdrapi",
    "Dratatin",
    "Dunaja",
    "Dunaconda",
    "Nigosier",
    "Embrochet",
    "Hastacuda",
    "Toxizap",
    "Salarsen",
    "Grillepattes",
    "Scolocendre",
    "Poulpaf",
    "Krakos",
    "Théffroi",
    "Polthégeist",
    "Bibichut",
    "Chapotus",
    "Sorcilence",
    "Grimalin",
    "Fourbelin",
    "Angoliath",
    "Ixon",
    "Berserkatt",
    "Corayôme",
    "Palarticho",
    "M. Glaquette",
    "Tutétékri",
    "Crèmy",
    "Charmilly",
    "Hexadron",
    "Wattapik",
    "Frissonille",
    "Beldeneige",
    "Dolman",
    "Bekaglaçon",
    "Wimessir",
    "Morpeko",
    "Charibari",
    "Pachyradjah",
    "Galvagon",
    "Galvagla",
    "Hydragon",
    "Hydragla",
    "Duralugon",
    "Fantyrm",
    "Dispareptil",
    "Lanssorien",
    "Zacian",
    "Zamazenta",
    "Éthernatos",
    "Wushours",
    "Shifours",
    "Zarude",
    "Regieleki",
    "Regidrago",
    "Spectreval",
    "Blizzeval",
    "Sylveroy",
    "Cerbyllin",
    "Hachécateur",
    "Ursaking",
    "Paragruel",
    "Farfurex",
    "Qwilpik",
    "Amovénus",
    "Poussacha",
    "Matourgeon",
    "Miascarade",
    "Chochodile",
    "Crocogril",
    "Flâmigator",
    "Coiffeton",
    "Canarbello",
    "Palmaval",
    "Gourmelet",
    "Fragroin",
    "Tissenboule",
    "Filentrappe",
    "Lilliterelle",
    "Gambex",
    "Pohm",
    "Pohmotte",
    "Pohmarmotte",
    "Compagnol",
    "Famignol",
    "Pâtachiot",
    "Briochien",
    "Olivini",
    "Olivado",
    "Arboliva",
    "Tapatoès",
    "Selutin",
    "Amassel",
    "Gigansel",
    "Charbambin",
    "Carmadura",
    "Malvalame",
    "Têtampoule",
    "Ampibidou",
    "Zapétrel",
    "Fulgulairo",
    "Grondogue",
    "Dogrino",
    "Gribouraigne",
    "Tag-Tag",
    "Virovent",
    "Virevorreur",
    "Terracool",
    "Terracruel",
    "Craparoi",
    "Pimito",
    "Scovilain",
    "Léboulérou",
    "Bérasca",
    "Flotillon",
    "Cléopsytra",
    "Forgerette",
    "Forgella",
    "Forgelina",
    "Taupikeau",
    "Triopikeau",
    "Lestombaile",
    "Dofin",
    "Superdofin",
    "Vrombi",
    "Vrombotor",
    "Motorizard",
    "Ferdeter",
    "Germéclat",
    "Floréclat",
    "Toutombe",
    "Tomberro",
    "Flamenroule",
    "Piétacé",
    "Balbalèze",
    "Délestin",
    "Oyacata",
    "Nigirigon",
    "Courrousinge",
    "Terraiste",
    "Farigiraf",
    "Deusolourdo",
    "Scalpereur",
    "Fort-Ivoire",
    "Hurle-Queue",
    "Fongus-Furie",
    "Flotte-Mèche",
    "Rampe-Ailes",
    "Pelage-Sablé",
    "Roue-de-Fer",
    "Hotte-de-Fer",
    "Paume-de-Fer",
    "Têtes-de-Fer",
    "Mite-de-Fer",
    "Épine-de-Fer",
    "Frigodo",
    "Cryodo",
    "Glaivodo",
    "Mordudor",
    "Gromago",
    "Chongjian",
    "Baojian",
    "Dinglu",
    "Yuyu",
    "Rugit-Lune",
    "Garde-de-Fer",
    "Koraidon",
    "Miraidon"
];
const wordInputs = [document.getElementsByName("word1")[0]];
const wordGroup = document.getElementById("word-group");
const wordButtons = document.getElementById("word-buttons");
const replaceCheckbox = document.getElementById("replace-checkbox");
const groupInput = document.getElementsByName("group")[0];
const generateButton = document.getElementById("generate-button");
const searchInput = document.getElementById("search-input");
const randomButton = document.getElementById("random-button");
const pokemonList = document.getElementById("pokemon-list");

function toggleReplace() {
    groupInput.disabled = !replaceCheckbox.checked;
}

function addWord() {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = `word${wordInputs.length + 1}`;
    newInput.classList.add("word");
    newInput.placeholder = "Entrez un mot";
    newInput.required = true;
    wordInputs.push(newInput);
    wordGroup.insertBefore(newInput, wordButtons);

    if (wordInputs.length > 1) {
        replaceCheckbox.disabled = true;
        replaceCheckbox.checked = false;
        groupInput.disabled = true;
    }
};

function removeWord() {
    if (wordInputs.length > 1) {
        const lastInput = wordInputs.pop();
        wordGroup.removeChild(lastInput);
    } 
    if (wordInputs.length === 1) {
        replaceCheckbox.disabled = false;
    }
};
    
    

function mergeNames(first, second, pos_syl, rep_syl) {
    let ret = "";
    let x_syl = [];
    if (pos_syl) {
        for (let i = 0; i < second.length - 1; i++) {
            if (i >= second.length - 1) break;

            let normalizedSyl = second[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (rep_syl.includes(normalizedSyl.toLowerCase())) {
                x_syl.push(i);
            }
        }
    }

    if (x_syl.length === 0) x_syl.push(0);
    if (x_syl.length === 1 && x_syl[0] === 0) {
        // Supprime les exceptions
        let str = second[0];
        let grp_applied = '';
        for (let k = 0; k < GRP_EXCEPTION.length; k++) {
            if (grp_applied.length < GRP_EXCEPTION[k].length && str.slice(0,GRP_EXCEPTION[k].length).toLowerCase() === GRP_EXCEPTION[k]) {
                grp_applied = str.slice(0,GRP_EXCEPTION[k].length);
            }
        }
        if (grp_applied.length > 0) {
            if (second[0].length > grp_applied.length) {
                second[0] = second[0].substring(grp_applied.length);
            } else if (second[0].length === grp_applied.length) {
                second.splice(0,1);
            }
        } 
        // END OF Supprime les exceptions

        if (grp_applied.length === 0) {
            if (second[0].length === 1) second.splice(0,1);
            else second[0] = second[0].substring(1);
        }
    }

    for (let x = 0; x < x_syl.length; x++) {
        let firstChars = JSON.parse(JSON.stringify(first));
        let secondChars = JSON.parse(JSON.stringify(second));
        let firstLastChar = firstChars[firstChars.length-1].toLowerCase();
        let secondFirstChar = secondChars[x_syl[x]][0].toLowerCase();
        let normalizedFLC = firstLastChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let hasDiacrFLC = firstLastChar !== normalizedFLC;
        let normalizedSFC = secondFirstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let hasDiacrSFC = secondFirstChar !== normalizedSFC;
        while (normalizedFLC === normalizedSFC) {
            hasDiacrSFC = secondFirstChar !== normalizedSFC;
            
            if (!hasDiacrFLC && hasDiacrSFC) {
                firstChars = firstChars.substring(0, firstChars.length - 1);
                normalizedFLC = undefined;
            } else {
                if (secondChars[0].length === 1) secondChars.splice(0,1);
                else secondChars[0] = secondChars[0].substring(1);
            }

            secondFirstChar = (secondChars[0][0]||"").toLowerCase();
            normalizedSFC = secondFirstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } 

        ret = "";
        if (x_syl[x] === 0) {
            ret = firstChars + secondChars.join("");
            break;
        } else {
            for (let i = 0; i < secondChars.length; i++) {
                if (x_syl[x] === i) ret += firstChars;
                else ret += secondChars[i];
            }

            if (ret.toLowerCase() !== secondChars.join("").toLowerCase()) break;
        }
    }
    
    return ret;
}

function enableSearchFcts() {
    document.getElementById("search").disabled = false;
    document.getElementById("search_btn").disabled = false;
    document.getElementById("random").disabled = false;
}

function generate() {
    searchInput.disabled = false;
    randomButton.disabled = false;
    pokemonList.replaceChildren();

    const output = new Map();
    const replace = replaceCheckbox.checked;
    const grpValues = groupInput.value.split(",");
    const grpTrim = grpValues.map(e => e.trim());

    let pokemon = undefined;
    let second = undefined;
    let mergedNames = undefined;
    let name = "";
    for (let i = 1; i <= POKEMON.length; i++) {
        pokemon = POKEMON[i-1].replace(/(\r\n|\n|\r)/gm, "");
        second = getSyllables(pokemon);
        
        mergedNames = "";
        for (let j = 0; j < wordInputs.length; j++) {
            let slength = second.length;
            name = mergeNames(wordInputs[j].value, second, replace, grpTrim);
            if (slength === second.length) {
                second.shift();
            }
            mergedNames += name.slice(0, name.length - (second.join("")).length);
            
            if (j >= wordInputs.length-1
            ||  second.length === 1 && second[0].length < 3
            ||  second.length === 0) {
                mergedNames += second.join("");
                break;
            } else {
                mergedNames += " ";
            }
        }

        if (!output.has(mergedNames)) {
            output.set(mergedNames, [{pokemon, i}])
        } else {
            const names = output.get(mergedNames);
            names.push({pokemon, i});
            output.set(mergedNames, names);
        }
    }

    createListFromMap(output);
}

function createListFromMap(map) {
    let divPopContPok,
        pName,
        divContPok;

    map.forEach((value, key) => { 
        divPopContPok = document.createElement("div");
        pName = document.createElement("p");
        divContPok = document.createElement("div");

        pokemonList.appendChild(divPopContPok);
        divPopContPok.appendChild(pName);
        divPopContPok.appendChild(divContPok);

        for (const el of value) {
            let divSep = document.createElement("div");
            let divPopImg = document.createElement("div");
            let img = document.createElement("img");
            let p = document.createElement("p");

            divContPok.appendChild(divSep);
            divSep.appendChild(divPopImg);
            divSep.appendChild(p);
            divPopImg.appendChild(img)

            divPopImg.classList.add("popupImg");
            img.src = "./assets/" + el.i + ".png";
            img.loading = "lazy";
            p.classList.add("popupName");
            p.innerText = el.pokemon;
        }

        
        divPopContPok.classList.add("popupPokemon");
        if (value.length > 1) divPopContPok.classList.add("duplicate");
        pName.classList.add("username");
        pName.innerText = key;
        divContPok.classList.add("contPokemon")
    });
}


function onSearchPokemon() {
    const str_to_search = searchInput.value;
    for (const pokemonElem of pokemonList.childNodes) {
        let found = false;
        const nameListElem = pokemonElem.querySelectorAll("p");
        for (let nameElem of nameListElem) {
            if (nameElem.innerText?.toLowerCase().includes(str_to_search.toLowerCase())) found = true;
        }

        if (!found) {
            if (!pokemonElem.classList.contains("hide")) pokemonElem.classList.add("hide");
        } else {
            pokemonElem.classList.remove("hide")
        }
    }
}

function onRandomPokemon() {
    const rand = getRandomInt(pokemonList.childNodes.length);
    for (let i = 0; i < pokemonList.childNodes.length; i++) {
        if (i !== rand) pokemonList.childNodes[i].classList.add("hide");
        else pokemonList.childNodes[i].classList.remove("hide");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function handle(e){
    if (e.keyCode === 13) {
		onSearchPokemon();
    }

	return false;
}