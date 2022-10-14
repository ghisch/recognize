OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Rozpoznání",
    "Smart media tagging for Nextcloud" : "Inteligentní označování médií štítky pro Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Tato aplikace prochází sbírky médií a přidává jim popisné štítky,  čímž automaticky kategorizuje vaše fotky a hudbu.\n\n* 📷 👪 Rozpoznává tváře podle vzdoru z fotek u kontaktů\n* 📷 🏔 Rozpoznává zvířata, krajiny, jídlo, dopravní prostředky, stavby a další objekty\n* 📷 🗼 Rozpoznává památky a pomníky\n* 👂 🎵 Rozpoznává hudební žánry\n* ⚡ Označování štítky funguje prostřednictvím Nextcloud štítků pro spolupráci, čímž jsou k dispozici z libovolné aplikace\n  * 👂 poslouchejte svou oštítkovanou hudbu pomocí aplikace přehrávač hudby\n  * 📷 prohlížejte si oštítkované fotky pomocí aplikace fotky\n\nPo instalaci je možné označování štítky zapnout v nastavení pro správu.\n\nPožadavky:\n- PHP 7.4 a novější\n- Zapnutá aplikace „Štítky pro spolupráci“\n- Pokud má být rychlé:\n  - Procesor: x86 64bit (s podporou instrukcí AVX)\n  - Systém s knihovnou glibc (obvykle norma na Linuxu; Alpine linux a FreeBSD mezi ně *NE* patří)\n- Pokud má být alespoň trochu rychlé (v JavaScript režimu)\n  - Procesor: x86 64bit, arm64, armv7l (AVX není třeba)\n  - Systém s glibc nebo musl (včetně. Alpine linux)\n- cca 4GB volné operační paměti (pokud není dostatek, určitě zajistěte alespoň odkládací prostor (swap))\n\nAplikace neposílá žádná citlivá data poskytovatelům cloudů či podobných služeb. Veškeré zpracování se děje na stroji s Nextcloud, pomocí Tensorflow.js provozované pod Node.js, který je už přibalen k této aplikaci.",
    "Status" : "Stav",
    "The machine learning models have been downloaded successfully." : "Modely strojového učení byly úspěšně staženy.",
    "The machine learning models still need to be downloaded." : "Pořád ještě je třeba stáhnout si modely strojového učení.",
    "The app is installed and will automatically classify files in background processes." : "Aplikace je nainstalovaná a bude klasifikovat obrázky v procesech, spuštěných na pozadí.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "V tuto chvíli nejsou vybrány žádné možnosti opatřování štítky. Aplikace v tuto chvíli nic nedělá.",
    "Image tagging" : "Označování obrázků štítky",
    "Face recognition is working. " : "Rozpoznávání obličejů funguje.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání obličejů – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání obličejů. Pokud tato zpráva přetrvává déle než 30 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Face recognition:" : "Rozpoznávání obličejů:",
    "Queued files" : "Souborů ve frontě",
    "Last classification: " : "Naposledy klasifikováno:",
    "Object recognition is working." : "Rozpoznávání objektů funguje.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání objektů – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání objektů. Pokud tato zpráva přetrvává déle než 30 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Object recognition:" : "Rozpoznávání objektů:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Zapnout rozpoznávání obličejů (v aplikaci Fotky seskupovat obrázky lidí, kteří se v nich objevují)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Zapnout rozpoznávání objektů (např. jídlo, dopravní prostředky, krajiny)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Zapnout rozpoznávání pamětihodností (např. Eiffelova věž, most Golden Gate)",
    "Audio tagging" : "Označování zvuků štítky",
    "Audio recognition is working." : "Rozpoznávání zvuků funguje.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání zvuků – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání obličejů. Pokud tato zpráva přetrvává déle než 30 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Music genre recognition:" : "Rozpoznávání hudebního žánru:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Zapnout rozpoznávání hudebního žánru (např. pop, rock, folk, metal, new age)",
    "Video tagging" : "Označování videí štítky",
    "Video recognition is working." : "Rozpoznávání videí funguje.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání videí – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání videí. Pokud tato zpráva přetrvává déle než 30 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Video recognition:" : "Rozpoznávání videí:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Zapnout rozpoznávání lidských činností (např. zápasení, driblování míčem, kroužení obručí)",
    "Reset" : "Vrátit na výchozí hodnoty",
    "Click the below button to remove all tags from all files that have been classified so far." : "Kliknutí na níže uvedené tlačítko odebere veškeré štítky ze všech souborů, které byly doposud rozpoznány.",
    "Reset tags for classified files" : "Odebrat štítky z rozpoznaných souborů",
    "Click the below button to rescan all files in this instance and add them to the classifier queues." : "Kliknutí na níže uvedené tlačítko znovu naskenuje veškeré soubory na této instanci a přidá je do front klasifikace.",
    "Rescan all files" : "Znovu naskenovat veškeré soubory",
    "Terminal commands" : "Příkazy v terminálu",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Pokud chcete ručně spustit kompletní určování, spusťte v terminálu serveru následující příkaz.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Pokud chcete před vykonáním úloh určování stáhnout všechny modely, spusťte v terminálu serveru následující příkaz.",
    "You can reset the tags of all files that have been previously classified by recognize with the following command:" : "Štítky je možné ze všech dříve určených souborů odebrat následujícím příkazem:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Štítky, které už nejsou přiřazené žádným souborům je možné smazat následujícím příkazem:",
    "CPU cores" : "Jader procesoru",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "Ve výchozím stavu budou použita veškerá dostupná jádra procesoru, což může vámi využívaný systém podstatně vytížit. Pokud se tomu chcete vyhnout, je možné množství využívaných jader procesoru omezit.",
    "Number of CPU Cores (0 for no limit)" : "Počet jader procesoru (0 znamená bez omezení)",
    "Tensorflow plain mode" : "Holý režim Tensorflow",
    "Checking CPU" : "Kontrola procesoru",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Vámi využívaný stroj podporuje nativní fungování TensorFlow, není třeba využívat režim WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Protože vámi využívaný stroj nepodporuje nativní fungování TensorFlow, byl automaticky náhradně aktivován režim WASM:",
    "Enable WASM mode" : "Zapnout režim WASM",
    "Node.js path" : "Popis umístění Node.js",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Pokud dodávaný spustitelný soubor Node.js z nějakého důvodu na vámi využívaném systému nefunguje, je možné nasměrovat na uživatelsky určený spustitelný soubor node.js. V tuto chvíli je podporováno Node v14.17 a novější v řadě 14.",
    "Your server does not support AVX instructions" : "Vámi využívaný server nepodporuje instrukce AVX",
    "Your server does not have an x86 64-bit CPU" : "Vámi využívaný server nemá 64 bitový procesor x86",
    "Your server uses musl libc" : "Vámi využívaný server používá knihovnu musl libc",
    "Failed to load settings" : "Nepodařilo se načíst nastavení",
    "Failed to save settings" : "Nastavení se nepodařilo uložit",
    "never" : "nikdy",
    "{time} ago" : "před {time}",
    "Cat" : "Kočka",
    "Animal" : "Zvíře",
    "Wildlife" : "Divoká příroda",
    "Nature" : "Příroda",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Lev",
    "Wild cat" : "Divoká kočka",
    "Cheetah" : "Gepard",
    "Seashore" : "Pobřeží",
    "Beach" : "Pláž",
    "Water" : "Voda",
    "Lakeside" : "Jezero",
    "Flower" : "Květina",
    "Plant" : "Rostlina",
    "Window" : "Okno",
    "Architecture" : "Architektura",
    "Stairs" : "Schody",
    "Building" : "Stavby",
    "Field" : "Pole",
    "Farm" : "Farma",
    "Landscape" : "Krajina",
    "Portrait" : "Portrét",
    "People" : "Lidé",
    "Fashion" : "Móda",
    "Ship" : "Loď",
    "Vehicle" : "Vozidlo",
    "Grasshopper" : "Luční koník",
    "Insect" : "Hmyz",
    "Fish" : "Ryba",
    "Shark" : "Žralok",
    "Chicken" : "Kuře",
    "Bird" : "Pták",
    "Ostrich" : "Pštros",
    "Owl" : "Sova",
    "Salamander" : "Mlok",
    "Frog" : "Žába",
    "Turtle" : "Želva",
    "Reptile" : "Plazi",
    "Lizard" : "Ještěrka",
    "Chameleon" : "Chameleon",
    "Crocodile" : "Krokodýl",
    "Alligator" : "Aligátor",
    "Scorpion" : "Škorpion",
    "Spider" : "Pavouk",
    "Duck" : "Kachna",
    "Worm" : "Červ",
    "Shell" : "Ulita",
    "Snail" : "Šnek",
    "Crab" : "Krab",
    "Lobster" : "Rak",
    "Cooking" : "Vaření",
    "Penguin" : "Tučňák",
    "Whale" : "Velryba",
    "Dog" : "Pes",
    "Wolf" : "Vlk",
    "Fox" : "Liška",
    "Bear" : "Medvěd",
    "Beetle" : "Brouk",
    "Butterfly" : "Motýl",
    "Rabbit" : "Králík",
    "Hippo" : "Hroch",
    "Cow" : "Kráva",
    "Buffalo" : "Bizon",
    "Sheep" : "Ovce",
    "Ape" : "Lidoop",
    "Monkey" : "Opice",
    "Lemur" : "Lemur",
    "Elephant" : "Slon",
    "Panda" : "Panda",
    "Instrument" : "Nástroj",
    "Music" : "Hudba",
    "Aircraft" : "Letadlo",
    "Airport" : "Letiště",
    "Tractor" : "Traktor",
    "Weapon" : "Zbraň",
    "Backpack" : "Batoh",
    "Shop" : "Obchod",
    "Office" : "Kancelář",
    "Outdoor" : "Venku",
    "Living" : "Bydlení",
    "Tower" : "Věž",
    "Drinks" : "Nápoje",
    "Beverage" : "Nápoje",
    "Food" : "Jídlo",
    "Shelter" : "Přístřešek",
    "Furniture" : "Nábytek",
    "Book" : "Kniha",
    "Train" : "Vlak",
    "Butcher" : "Řezník",
    "Car" : "Auto",
    "Historic" : "Historické",
    "Boat" : "Loď",
    "Electronics" : "Elektronika",
    "Indoor" : "Uvnitř",
    "Church" : "Kostel",
    "Shoe" : "Bota",
    "Candle" : "Svíčka",
    "Coffee" : "Káva",
    "Keyboard" : "Klávesnice",
    "Computer" : "Počítač",
    "Helmet" : "Přilba",
    "Wall" : "Stěna",
    "Clock" : "Hodiny",
    "Dining" : "Snídaně",
    "Kitchen" : "Kuchyně",
    "Snow" : "Sníh",
    "Dome" : "Kopule",
    "Screen" : "Obrazovka",
    "Flag" : "Vlajka",
    "Truck" : "Nákladní auto",
    "Store" : "Obchod",
    "Tool" : "Nástroj",
    "Pumpkin" : "Dýně",
    "Vegetables" : "Zelenina",
    "Photography" : "Fotografie",
    "Library" : "Knihovna",
    "Display" : "Zobrazit",
    "Bag" : "Zavazadlo",
    "Cup" : "Pohár",
    "Rocks" : "Skály",
    "Bus" : "Autobus",
    "Bowl" : "Mísa",
    "Monitor" : "Monitor",
    "Bike" : "Kolo",
    "Scooter" : "Skútr",
    "Camping" : "Kempování",
    "Cart" : "Nákupní vozík",
    "Piggy bank" : "Kasička",
    "Bottle" : "Láhev",
    "Plate" : "Talíř",
    "Camera" : "Kamera",
    "Camper" : "Obytný vůz",
    "Barbecue" : "Grilování",
    "Basket" : "Košík",
    "Diving" : "Potápění",
    "Snowmobile" : "Sněžný skútr",
    "Bridge" : "Most",
    "Couch" : "Pohovka",
    "Theater" : "Divadlo",
    "Spoon" : "Lžíce",
    "Comic" : "Komix",
    "Soup" : "Polévka",
    "Dessert" : "Dezert",
    "Bakery" : "Pečivo",
    "Fruit" : "Ovoce",
    "Pasta" : "Těstoviny",
    "Meat" : "Maso",
    "Pizza" : "Pizza",
    "Wine" : "Víno",
    "Alpine" : "Hory",
    "Mountains" : "Hory",
    "Sand" : "Písek",
    "Wool" : "Vlna",
    "Glass" : "Sklo",
    "Moment" : "Okamžik",
    "Info" : "Informace",
    "Document" : "Dokument",
    "Puzzle" : "Pucle",
    "Heritage" : "Dědictví",
    "Safe" : "Trezor",
    "Bucket" : "Bucket",
    "Baby" : "Dítě",
    "Cradle" : "Kolébka",
    "Patio" : "Terasa",
    "Mountain" : "Hora",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Zábavní park",
    "Festival" : "Festival",
    "Event" : "Událost",
    "Monument" : "Památník",
    "Balloon" : "Balon",
    "Crib" : "Postýlka",
    "Fan" : "Větrák",
    "Gas station" : "Čerpací stanice",
    "Wood" : "Dřevo",
    "Bench" : "Lavice",
    "Parking" : "Parkoviště",
    "Traffic" : "Provoz",
    "Public transport" : "Veřejná doprava",
    "Umbrella" : "Deštník",
    "Stage" : "Jeviště",
    "Toy" : "Hračka",
    "Vase" : "Váza",
    "Mailbox" : "Poštovní schránka",
    "Sign" : "Podepsat",
    "Gallery" : "Galerie",
    "Park" : "Park"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
