OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Разпознаване",
    "Smart media tagging for Nextcloud" : "Интелигентно медийно етикетиране/маркиране/ за приложението Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Това приложение преглежда вашата медийна колекция и добавя подходящи етикети, като автоматично категоризира вашите снимки и музика.\n\n* 📷 👪 Разпознава лица от снимки на контакти\n* 📷 🏔 Разпознава животни, пейзажи, храна, превозни средства, сгради и други обекти\n* 📷 🗼 Разпознава забележителности и паметници\n* 👂 🎵 Разпознава музикални жанрове\n* ⚡ Маркирането работи чрез функцията за съвместно етикетиране Collaborative Tags на приложението Nextcloud, което позволява достъп от всяко от вашите приложения\n* 👂 слушайте маркираната от вас музика с приложението за аудиоплейър\n* 📷 преглеждайте вашите маркирани снимки с приложението за снимки\n\nСлед инсталирането можете да активирате маркирането/етикетирането/ в настройките на администратора.\n\nИзисквания:\n- PHP 7.4 и по-нова версия\n– „Съвместно етикетиране“ на приложението е активирано\n- За основна скорост:\n- Процесор: x86 64bit (с поддръжка на AVX инструкции)\n- Система с glibc ( обикновено това е норма за Linux; FreeBSD, Alpine linux, следователно и официалният контейнер Nextcloud Docker и Nextcloud AIO не са такива системи)\n\n- За суб-основна скорост (използвайки режим на WASM)\n- Процесор: x86 64bit, arm64, armv7l (не е необходим AVX)\n- Система с glibc или musl (вкл. Alpine linux, а така също и официалният контейнер Nextcloud Docker, както и Nextcloud AIO)\n- ~ 4 GB свободна RAM (ако сте близо до това ограничение, уверете се, че имате налично място за прехвърляне)\n- Това приложение в момента е несъвместимо с приложението *Suspicious Login* поради конфликт на зависимости (т.е. може да имате инсталирано само едно от двете)\n\nПриложението не изпраща чувствителни данни към облачни доставчици или подобни услуги. Цялата обработка се извършва на вашата Nextcloud машина, като се използва Tensorflow.js, работещ в Node.js.",
    "Status" : "Състояние",
    "The machine learning models have been downloaded successfully." : "Моделите за машинно обучение са изтеглени успешно.",
    "The machine learning models still need to be downloaded." : "Моделите за машинно обучение трябва да бъдат изтеглени.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Не можа да изпълни двоичния файл на Node.js. Може да се наложи да зададете пътя до работещ двоичен файл ръчно.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Фоновите задачи не се изпълняват чрез cron. /Приложението Разпознаване/ Recognize изисква фоновите задачи да се изпълняват чрез cron.",
    "The app is installed and will automatically classify files in background processes." : "Приложението е инсталирано и ще класифицира автоматично файлове във фонови процеси.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "не . В момента не е избрана нито една от опциите за маркиране по-долу. За сега приложението няма да направи нищо.",
    "Image tagging" : "Етикетиране на изображение",
    "Face recognition is working. " : "Разпознаването на лица работи.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Възникнала е грешка по време на разпознаването на лица, моля, проверете регистрационните файлове/журнали/ на Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "В изчакване на отчети за състоянието на разпознаването на лица. Ако това съобщение продължава и след 15 минути, моля да проверите регистрите/журнали/ на Nextcloud.",
    "Face recognition:" : "Лицево разпознаване:",
    "Queued files" : "Редица от файлове, чакащи за изпълнение",
    "Last classification: " : "Последна класификация:",
    "Object recognition is working." : "Разпознаването на обекти работи.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Възникнала е грешка по време на разпознаването на обекти, моля, проверете регистрационните файлове/журнали/ на Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "В изчакване на отчети за състоянието на разпознаването на обекти. Ако това съобщение продължава и след 15 минути, моля да проверите регистрите/журнали/ на Nextcloud.",
    "Object recognition:" : "Разпознаване на обект:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Активиране на лицево разпознаване (групира снимките спрямо хората, които се появяват в тях в приложението за снимки)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Броят на файловете, които трябва да се обработят за едно изпълнение на задачата (Задачата ще е планирана на всеки 5 минути; За нормална работа ~500 или повече, в режим WASM се препоръчва ~50)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Активиране на разпознаване на обект (напр. храна, превозни средства, пейзажи)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Броят на файловете, които трябва да се обработят за едно изпълнение на задачата (Задачата ще е планирана на всеки 5 минути; За нормална работа ~100 или повече, в режим WASM се препоръчва ~20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Активиране на разпознаване на забележителности (напр. Айфеловата кула, мостът Голдън Гейт)",
    "Audio tagging" : "Аудио етикетиране",
    "Audio recognition is working." : "Разпознаването на аудио работи.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Възникнала е грешка по време на разпознаването на аудио, моля, проверете регистрационните файлове/журнали/ на Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "В изчакване на отчети за състоянието на разпознаването на аудио. Ако това съобщение продължава и след 15 минути, моля да проверите регистрите/журнали/ на Nextcloud.",
    "Music genre recognition:" : "Разпознаване на музикален жанр:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Активиране на разпознаването на музикален жанр (напр. поп, рок, фолк, метъл, ню ейдж)",
    "Video tagging" : "Видео етикетиране",
    "Video recognition is working." : "Разпознаването на видео работи.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Възникнала е грешка по време на разпознаването на видео, моля, проверете регистрационните файлове/журнали/ на Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "В изчакване на отчети за състоянието на разпознаването на видео. Ако това съобщение продължава и след 15 минути, моля да проверите регистрите/журнали/ на Nextcloud.",
    "Video recognition:" : "Видео разпознаване:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Активиране на разпознаването на човешки действия (напр. канадска борба, дриблиране при баскетбол, въртене на обръч)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Броят на файловете, които трябва да се обработят за едно изпълнение на задачата (Задачата ще е планирана на всеки 5 минути; За нормална работа ~20 или повече, в режим WASM се препоръчва ~5)",
    "Reset" : "Възстановяване",
    "Click the button below to remove all tags from all files that have been classified so far." : "Щракване върху долният бутон, за премахване на всички етикети от всички файлове, които са били класифицирани досега.",
    "Reset tags for classified files" : "Възстановяване на етикети за класифицирани файлове",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Щракване върху долният бутон, за премахване на всички разпознавания на лица от всички класифицирани до момента файлове.",
    "Reset faces for classified files" : "Възстановяване на лица за класифицирани файлове",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Щракване върху долният бутон, за повторно сканиране на всички файлове в този случай и за тяхното добавяне към опашките на класификатора.",
    "Rescan all files" : "Повторно сканиране на всички файлове",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Кликване върху бутона по-долу, за изчистване на опашките на класификаторите и за изчистване на всички фонови задачи. Това е подходящо, в случай че искате да извършите първоначалната класификация с помощта на терминална команда.",
    "Clear queues and background jobs" : "Изчистване на опашки и фонови задачи",
    "Terminal commands" : "Терминални команди",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "За задействане на пълна класификация, изпълнете следната команда на терминала на сървъра. (Класификацията ще се изпълни в няколко фонови задачи, които могат да се изпълняват паралелно.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "За изпълнение на пълна класификация на терминала, изпълнете следното. (Класификацията ще се изпълни последователно във вашия терминал.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that recognize scheduled upon installation to avoid interference." : "Преди стартиране на пълното първоначално класифициране на терминала, трябва да се спрат всички фонови обработки, които са планирани при инсталирането на приложението recognize, за да се избегнат смущения.",
    "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)" : "За стартиране на клъстериране на лица за всеки потребител в терминала, изпълнете следното. (Клъстерирането ще се изпълни последователно във вашия терминал.)",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "За изтегляне на всички модели преди изпълнението на задачите за класификация, пуснете следната команда на сървърния терминал.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Можете да възстановите етикетите на всички файлове, които преди това са били класифицирани чрез приложението за разпознаване Recognize със следната команда:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Можете да изтриете всички етикети, които вече нямат свързани с тях файлове със следната команда:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "За премахване на всички открити лица и клъстери от лица, изпълнете следното на терминала:",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "За премахване на всички открити лица, но да се запазят необработените открити лица, изпълнете следното на терминала:",
    "To remove tags that were created by recognize version 2 from all files run the following on the terminal:" : "За премахване на етикетите, създадени от версия 2 на разпознаването, от всички файлове, изпълнете следното на терминала:",
    "CPU cores" : "Ядра на процесора",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Ще се използват всички налични ядра на процесора по подразбиране, което може да постави системата ви под значително натоварване. За да се избегне това, може да се ограничи количеството използвани CPU ядра. (Забележка: В режим WASM в момента може да се използва само 1 ядро през цялото време.)",
    "Number of CPU Cores (0 for no limit)" : "Брой CPU ядра (0 е без ограничение)",
    "Tensorflow WASM mode" : "Режим WASM на Tensorflow",
    "Checking CPU" : "Проверка на централния процесор",
    "Could not check whether your machine supports native TensorFlow operation." : "Неуспешна проверка, дали машината ви поддържа собствена работа с TensorFlow.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Вашето устройство поддържа основен оперативен режим на работа с TensorFlow, нямате нужда от режим WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Режимът WASM беше активиран автоматично, защото вашето устройство не поддържа основен оперативен режим на работа с TensorFlow:",
    "Enable WASM mode" : "Активиране на режим WASM",
    "Tensorflow GPU mode" : "Режим GPU на Tensorflow",
    "Enable GPU mode" : "Активиране на режим GPU",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Проверка на Node.js",
    "Node.js {version} binary was installed successfully." : "Бинарната версия на Node.js {version} е инсталирана успешно.",
    "Checking libtensorflow" : "Проверка на libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "libtensorflow не можа да се зареди в Node.js. Можете да опитате да инсталирате libtensorflow ръчно или да стартирате в режим WASM.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "libtensorflow е успешно зареден в Node.js, но не можа да зареди GPU. Уверете се, че CUDA Toolkit и cuDNN са инсталирани и достъпни, или изключете GPU режима.",
    "Libtensorflow was loaded successfully into Node.js." : "libtensorflow беше успешно зареден в Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Неуспешно зареждане на Tensorflow WASM в Node.js. Нещо не е наред с настройката ви.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM беше успешно зареден в Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Ако доставеният двоичен файл на Node.js, поради някаква причина не работи на вашата система, може да зададете пътя към персонализиран двоичен файл на node.js. В момента се поддържат Node v14.17 и по-нови версии v14.",
    "Your server does not support AVX instructions" : "Вашият сървър не поддържа AVX инструкции",
    "Your server does not have an x86 64-bit CPU" : "Вашият сървър няма x86 64-битов процесор",
    "Your server uses musl libc" : "Сървърът ви използва musl libc",
    "Failed to load settings" : "Неуспешно зареждане на настройки",
    "Failed to save settings" : "Неуспешно запазване на настройките",
    "never" : "никога",
    "{time} ago" : "преди {time}",
    "Cat" : "Котка",
    "Animal" : "Животно",
    "Wildlife" : "Дива природа",
    "Nature" : "Природа",
    "Puma" : "Пума",
    "Leopard" : "Леопард",
    "Lion" : "Лъв",
    "Wild cat" : "Дива котка",
    "Cheetah" : "Гепард",
    "Seashore" : "Морски бряг",
    "Beach" : "Плаж",
    "Water" : "Вода",
    "Lakeside" : "Край езерото",
    "Flower" : "Цвете",
    "Plant" : "Растение",
    "Window" : "Прозорец",
    "Architecture" : "Архитектура",
    "Stairs" : "Стълби",
    "Building" : "Сграда",
    "Field" : "Поле",
    "Farm" : "Ферма",
    "Landscape" : "Пейзаж",
    "Portrait" : "Портрет",
    "People" : "Хора",
    "Fashion" : "Мода",
    "Ship" : "Кораб",
    "Vehicle" : "Превозно средство",
    "Grasshopper" : "Скакалец",
    "Insect" : "Насекомо",
    "Fish" : "Риба",
    "Shark" : "Акула",
    "Chicken" : "Пиле",
    "Bird" : "Птица",
    "Ostrich" : "Щраус",
    "Owl" : "Бухал",
    "Salamander" : "Саламандър",
    "Frog" : "Жаба",
    "Turtle" : "Костенурка",
    "Reptile" : "Влечуго",
    "Lizard" : "Гущер",
    "Chameleon" : "Хамелеон",
    "Crocodile" : "Крокодил",
    "Alligator" : "Алигатор",
    "Scorpion" : "Скорпион",
    "Spider" : "Паяк",
    "Duck" : "Патица",
    "Worm" : "Червей",
    "Shell" : "Черупка",
    "Snail" : "Охлюв",
    "Crab" : "Рак",
    "Lobster" : "Омар",
    "Cooking" : "Готвене",
    "Penguin" : "Пингвин",
    "Whale" : "Кит",
    "Dog" : "Куче",
    "Wolf" : "Вълк",
    "Fox" : "Лисица",
    "Bear" : "Мечка",
    "Beetle" : "Бръмбар",
    "Butterfly" : "Пеперуда",
    "Rabbit" : "Заек",
    "Hippo" : "Хипопотам",
    "Cow" : "Крава",
    "Buffalo" : "Бивол",
    "Sheep" : "Овца",
    "Ape" : "Човекоподобна маймуна",
    "Monkey" : "Маймуна",
    "Lemur" : "Лемур",
    "Elephant" : "Слон",
    "Panda" : "Панда",
    "Instrument" : "Инструмент",
    "Music" : "Музика",
    "Aircraft" : "Самолет",
    "Airport" : "Летище",
    "Tractor" : "Трактор",
    "Weapon" : "Оръжие",
    "Backpack" : "Раница",
    "Shop" : "Магазин",
    "Office" : "Офис",
    "Outdoor" : "На открито/навън/",
    "Living" : "Живот",
    "Tower" : "Кула",
    "Drinks" : "Напитки",
    "Beverage" : "Питие",
    "Food" : "Храна",
    "Shelter" : "Подслон",
    "Furniture" : "Мебели",
    "Book" : "Книга",
    "Train" : "Влак",
    "Butcher" : "Касапин",
    "Car" : "Кола",
    "Historic" : "Исторически",
    "Boat" : "Лодка",
    "Electronics" : "Електроника",
    "Indoor" : "На закрито /вътре/",
    "Church" : "Църква",
    "Shoe" : "Обувка",
    "Candle" : "Свещ",
    "Coffee" : "Кафе",
    "Keyboard" : "Клавиатура",
    "Computer" : "Компютър",
    "Helmet" : "Каска",
    "Wall" : "Стена",
    "Clock" : "Часовник",
    "Dining" : "Хранене",
    "Kitchen" : "Кухня",
    "Snow" : "Сняг",
    "Dome" : "Купол",
    "Screen" : "Дисплей",
    "Flag" : "Знаме",
    "Truck" : "Камион",
    "Store" : "Магазин",
    "Tool" : "Инструмент",
    "Pumpkin" : "Тиква",
    "Vegetables" : "Зеленчуци",
    "Photography" : "Фотография",
    "Library" : "Библиотека",
    "Display" : "Показване",
    "Bag" : "Чанта",
    "Cup" : "Чаша",
    "Rocks" : "Скали",
    "Bus" : "Автобус",
    "Bowl" : "Купа",
    "Monitor" : "Монитор",
    "Bike" : "Велосипед",
    "Scooter" : "Скутер",
    "Camping" : "Къмпинг",
    "Cart" : "Количка /каруца/",
    "Piggy bank" : "Касичка",
    "Bottle" : "Бутилка",
    "Plate" : "Чиния",
    "Camera" : "Камера",
    "Camper" : "Кемпер",
    "Barbecue" : "Барбекю",
    "Basket" : "Кошница",
    "Diving" : "Гмуркане",
    "Snowmobile" : "Моторна шейна",
    "Bridge" : "Мост",
    "Couch" : "Диван",
    "Theater" : "Театър",
    "Spoon" : "Лъжица",
    "Comic" : "Комичен",
    "Soup" : "Супа",
    "Dessert" : "Десерт",
    "Bakery" : "Пекарна",
    "Fruit" : "Плод",
    "Pasta" : "Паста",
    "Meat" : "Месо",
    "Pizza" : "Пица",
    "Wine" : "Вино",
    "Alpine" : "Алпийски",
    "Mountains" : "Планини",
    "Sand" : "Пясък",
    "Wool" : "Вълна",
    "Glass" : "Стъкло /Стъклена чаша/",
    "Moment" : "Момент",
    "Info" : "Информация",
    "Document" : "Документ",
    "Puzzle" : "Пъзел",
    "Heritage" : "Наследство",
    "Safe" : "Безопасен",
    "Bucket" : "Bucket",
    "Baby" : "Бебе",
    "Cradle" : "Бебешко кошче /люлка/",
    "Patio" : "Вътрешен двор",
    "Mountain" : "Планина",
    "Radio telescope" : "Радиотелескоп",
    "Theme park" : "Увеселителен парк",
    "Festival" : "Фестивал",
    "Event" : "Събитие",
    "Monument" : "Паметник",
    "Balloon" : "Балон",
    "Crib" : "Детско креватче",
    "Fan" : "Вентилатор",
    "Gas station" : "Бензиностанция",
    "Wood" : "Дърво",
    "Bench" : "Пейка",
    "Parking" : "Паркинг",
    "Traffic" : "Трафик",
    "Public transport" : "Обществен транспорт",
    "Umbrella" : "Чадър",
    "Stage" : "Сцена",
    "Toy" : "Играчка",
    "Vase" : "Ваза",
    "Mailbox" : "Пощенска кутия",
    "Sign" : "Подпис",
    "Gallery" : "Галерия",
    "Park" : "Парк"
},
"nplurals=2; plural=(n != 1);");
