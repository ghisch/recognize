OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Recognize",
    "Smart media tagging for Nextcloud" : "Étiquetage intelligent des médias pour Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Cette application parcourt votre collection de médias et ajoute les étiquettes appropriées, catégorisant ainsi automatiquement vos photos et votre musique.\n\n* 📷 👪 Reconnaît les visages à partir des photos de contacts\n* 📷 🏔 Reconnaît les animaux, les paysages, la nourriture, les véhicules, les constructions et autres objets\n* 📷 🗼 Reconnaît les sites et bâtiments\n* 👂 🎵 Reconnaît les genres musicaux\n* ⚡ L'étiquetage fonctionne grâce aux étiquettes collaboratives Nextcloud, permettant l'utilisation par toutes vos applications Nextcloud,\n* 👂 Écoutez votre musique étiquetée dans l'application lecteur audio\n* 📷 Visionnez vos photos étiquetées dans l'application photos\n\nAprès installation, vous pouvez activer l'étiquetage dans les options d'administration.\n\nPré-requis :\n- PHP 7.4 ou supérieur ;\n- Application \"étiquettes collaboratives\" installée et activée ;\n- Pour des performances natives :\n  - Processeur : x86 64-bits (avec support des instructions AVX) ;\n  - Système : glibc (généralement le cas des sous Linux ; Alpine Linux et FreeBSD ne font *pas* partie de ces systèmes) ;\n- Pour des performances moindres :\n  - Processeur : x86 64-bits, arm64, armv7l (AVX pas nécessaire) ;\n  - Système : glibc ou musl (inclus Alpine Linux) ;\n- ~4 Go de RAM disponible (si vous êtes limités, assurez-vous de disposer d'un espace d'échange - SWAP - disponible).\n\nL'application n'envoie aucune donnée sensible à des fournisseurs Cloud ou services similaires. L'ensemble des traitements est effectué sur votre instance Nextcloud, grâce à Tensorflow.js, exécuté dans Node.js.",
    "Status" : "Statut",
    "The machine learning models have been downloaded successfully." : "Les modèles de machine learning ont été téléchargés avec succès.",
    "The machine learning models still need to be downloaded." : "Les modèles de machine learning doivent encore être téléchargés.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Impossible de lancer l'exécutable Node.js. Il peut être nécessaire de configurer manuellement le chemin vers un exécutable fonctionnel.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Les tâches de fond ne sont pas exécutées avec cron. Recognize nécessite que celles-ci soient exécutées par cron.",
    "The app is installed and will automatically classify files in background processes." : "Cette application est installée et va automatiquement classer les fichiers en arrière-plan.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Aucune des options d'étiquetage ci-dessous n'est actuellement sélectionnée. L'application ne fera rien pour le moment.",
    "Image tagging" : "Étiquetage des images",
    "Face recognition is working. " : "La reconnaissance faciale est en cours.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Une erreur s'est produite pendant la reconnaissance faciale, merci de consulter les journaux de Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En attente des rapports d'état de la reconnaissance faciale. Si ce message persiste au-delà de 15 minutes, veuillez vérifier les journaux de Nextcloud.",
    "Face recognition:" : "Reconnaissance faciale :",
    "Queued files" : "Fichiers en file d'attente",
    "Last classification: " : "Dernière classification :",
    "Object recognition is working." : "La reconnaissance d'objets est en cours.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Une erreur inattendue pendant la reconnaissance d'objets, veuillez consulter les journaux Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En attente des rapports d'état de la reconnaissance d'objets. Si ce message persiste au-delà de 15 minutes, veuillez vérifier les journaux de Nextcloud.",
    "Object recognition:" : "Reconnaissance d'objets :",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Activer la reconnaissance faciale (regroupe les photos selon les personnes présentes dans l'application photos)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Nombre de fichiers à traiter par lancement (une tâche sera programmée toute les 5 minutes ; ~500 ou plus pour un fonctionnement normal, ~50 est recommandé en mode WASM)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Activer la reconnaissance d'objets (ex : nourriture, véhicules, paysages)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Nombre de fichiers à traiter par lancement (une tâche sera programmée toute les 5 minutes ; ~100 ou plus pour un fonctionnement normal, ~20 est recommandé en mode WASM)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Activer la reconnaissance de monuments (ex : Tour Eiffel, pont du Golden Gate)",
    "Audio tagging" : "Étiquetage des fichiers audio",
    "Audio recognition is working." : "Reconnaissance sonore en cours.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Une erreur s'est produire pendant la reconnaissance sonore , veuillez consulter les journaux Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En attente des rapports d'état de la reconnaissance audio. Si ce message persiste au-delà de 15 minutes, veuillez vérifier les journaux de Nextcloud.",
    "Music genre recognition:" : "Reconnaissance du genre de la musique :",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Activer la reconnaissance du genre de la musique (ex : pop, rock, folk, métal, new age)",
    "Video tagging" : "Étiquetage des vidéos",
    "Video recognition is working." : "La reconnaissance vidéo est en cours.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Une erreur s'est produite pendant la reconnaissance vidéo, veuillez consulter les journaux Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En attente de rapports d'état sur la reconnaissance vidéo. Si ce message persiste au-delà de 15 minutes, veuillez vérifier les journaux de Nextcloud.",
    "Video recognition:" : "Reconnaissance vidéo :",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Activer la reconnaissance d'actions humaines (ex : bras de fer, dribble de basketball, le hula hoop)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Le nombre de fichiers à traiter par tâche (une tâche sera programmée toutes les 5 minutes ; pour un fonctionnement normal, ~20 ou plus, en mode WASM, ~5 est recommandé).",
    "Reset" : "Réinitialiser",
    "Click the button below to remove all tags from all files that have been classified so far." : "Cliquez sur le bouton ci-dessous pour supprimer toutes les étiquettes de tous les fichiers qui ont été classifiés jusqu'à présent.",
    "Reset tags for classified files" : "Réinitialiser les étiquettes pour les fichiers classés",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Cliquez sur le bouton ci-dessous pour supprimer toutes les détections de visage de tous les fichiers qui ont été classifiés jusqu'à présent.",
    "Reset faces for classified files" : "Réinitialisation des visages pour les dossiers classifiés",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Cliquez sur le bouton ci-dessous pour rescanner tous les fichiers de cette instance et les ajouter aux files d'attente du classifieur.",
    "Rescan all files" : "Rescanner tous les fichiers",
    "Terminal commands" : "Commandes de terminal",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Pour déclencher manuellement une exécution de classification complète, exécutez la commande suivante sur le terminal du serveur.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Pour télécharger tous les modèles avant d'exécuter les travaux de classification, exécutez la commande suivante sur le terminal du serveur.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Vous pouvez réinitialiser les étiquettes de tous les fichiers qui ont été précédemment classifiés par Recognize avec la commande suivante :",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Vous pouvez supprimer toutes les étiquettes qui n'ont plus de fichiers associés avec la commande suivante :",
    "CPU cores" : "Cœurs de processeur",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Par défaut, tous les cœurs de processeurs seront utilisés, ce qui peut soumettre votre système à une charge considérable. Pour éviter cela, vous pouvez limiter le nombre de cœurs de processeur utilisés. (Note : actuellement, en mode WASM, seul un cœur peut fonctionner à un instant donné.)",
    "Number of CPU Cores (0 for no limit)" : "Nombre de cœurs du processeur (0 pour aucune limite)",
    "Tensorflow WASM mode" : "Mode WASM de Tensorflow",
    "Checking CPU" : "Vérification du CPU",
    "Could not check whether your machine supports native TensorFlow operation." : "Impossible de vérifier si votre machine prend en charge les opérations natives de TensorFlow.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Votre machine supporte le fonctionnement natif de TensorFlow, vous n'avez pas besoin du mode WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Le mode WASM a été activé automatiquement, car votre machine ne prend pas en charge le fonctionnement natif de TensorFlow :",
    "Enable WASM mode" : "Activer le mode WASM",
    "Tensorflow GPU mode" : "Mode GPU pour Tensorflow",
    "Enable GPU mode" : "Activer le mode GPU",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Vérification de Node.js",
    "Node.js {version} binary was installed successfully." : "Le binaire Node.js {version} a été installé avec succès.",
    "Checking libtensorflow" : "Vérification de libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Impossible de charger libtensorflow dans Node.js. Vous pouvez essayer d'installer manuellement libtensorflow ou de l'exécuter en mode WASM.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Chargement de libtensorflow réussi dans Node.js, mais échec de chargement de GPU. Assurez-vous que CUDA Toolkit et cuDNN sont installés et accessibles, ou désactivez le mode GPU.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow a été chargé avec succès dans Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Impossible de charger Tensorflow WASM dans Node.js. Quelque chose n'est pas correct dans votre configuration.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM a correctement été chargé dans Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Si le binaire Node.js fourni ne fonctionne pas sur votre système pour une raison quelconque, vous pouvez définir le chemin vers un binaire node.js personnalisé. Actuellement, Node v14.17 et les versions plus récentes de la v14 sont supportées.",
    "Your server does not support AVX instructions" : "Votre serveur ne prend pas en charge les instructions AVX",
    "Your server does not have an x86 64-bit CPU" : "Votre serveur ne possède pas un processeur 64 bits",
    "Your server uses musl libc" : "Votre serveur utilise musl libc",
    "Failed to load settings" : "Echec du chargement des paramètres",
    "Failed to save settings" : "Echec de la sauvegarde des paramètres",
    "never" : "jamais",
    "{time} ago" : "il y a {time}",
    "Cat" : "Chat",
    "Animal" : "Animal",
    "Wildlife" : "Faune sauvage",
    "Nature" : "Nature",
    "Puma" : "Puma",
    "Leopard" : "Léopard",
    "Lion" : "Lion",
    "Wild cat" : "Chat sauvage",
    "Cheetah" : "Guépard",
    "Seashore" : "Bord de mer",
    "Beach" : "Plage",
    "Water" : "Eau",
    "Lakeside" : "Bord de lac",
    "Flower" : "Fleur",
    "Plant" : "Plante",
    "Window" : "Fenêtre",
    "Architecture" : "Architecture",
    "Stairs" : "Escalier",
    "Building" : "Bâtiment",
    "Field" : "Champ",
    "Farm" : "Ferme",
    "Landscape" : "Paysage",
    "Portrait" : "Portrait",
    "People" : "Personnes",
    "Fashion" : "Mode",
    "Ship" : "Bateau",
    "Vehicle" : "Véhicule",
    "Grasshopper" : "Sauterelle",
    "Insect" : "Insecte",
    "Fish" : "Poisson",
    "Shark" : "Requin",
    "Chicken" : "Poulet",
    "Bird" : "Oiseau",
    "Ostrich" : "Autruche",
    "Owl" : "Hibou",
    "Salamander" : "Salamandre",
    "Frog" : "Grenouille",
    "Turtle" : "Tortue",
    "Reptile" : "Reptile",
    "Lizard" : "Lézard",
    "Chameleon" : "Caméléon",
    "Crocodile" : "Crocodile",
    "Alligator" : "Alligator",
    "Scorpion" : "Scorpion",
    "Spider" : "Araignée",
    "Duck" : "Canard",
    "Worm" : "Ver",
    "Shell" : "Coquillage",
    "Snail" : "Serpent",
    "Crab" : "Crabe",
    "Lobster" : "Homard",
    "Cooking" : "Cuisine",
    "Penguin" : "Manchot",
    "Whale" : "Baleine",
    "Dog" : "Chien",
    "Wolf" : "Loup",
    "Fox" : "Renard",
    "Bear" : "Ours",
    "Beetle" : "Coccinelle",
    "Butterfly" : "Papillon",
    "Rabbit" : "Lapin",
    "Hippo" : "Hippopotame",
    "Cow" : "Vache",
    "Buffalo" : "Buffle",
    "Sheep" : "Mouton",
    "Ape" : "Singe",
    "Monkey" : "Singe",
    "Lemur" : "Lémurien",
    "Elephant" : "Éléphant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musique",
    "Aircraft" : "Avion",
    "Airport" : "Aéroport",
    "Tractor" : "Tracteur",
    "Weapon" : "Arme",
    "Backpack" : "Sac à dos",
    "Shop" : "Boutique",
    "Office" : "Suite bureautique",
    "Outdoor" : "En extérieur",
    "Living" : "Vie",
    "Tower" : "Tour",
    "Drinks" : "Boissons",
    "Beverage" : "Boisson",
    "Food" : "Nourriture",
    "Shelter" : "Abri",
    "Furniture" : "Mobilier",
    "Book" : "Livre",
    "Train" : "Train",
    "Butcher" : "Boucherie",
    "Car" : "Voiture",
    "Historic" : "Historique",
    "Boat" : "Bateau",
    "Electronics" : "Électronique",
    "Indoor" : "En intérieur",
    "Church" : "Église",
    "Shoe" : "Chaussure",
    "Candle" : "Bougie",
    "Coffee" : "Café",
    "Keyboard" : "Clavier",
    "Computer" : "Ordinateur",
    "Helmet" : "Casque",
    "Wall" : "Mur",
    "Clock" : "Horloge",
    "Dining" : "Repas",
    "Kitchen" : "Cuisine",
    "Snow" : "Neige",
    "Dome" : "Dôme",
    "Screen" : "Écran",
    "Flag" : "Drapeau",
    "Truck" : "Camion",
    "Store" : "Boutique",
    "Tool" : "Outil",
    "Pumpkin" : "Citrouille",
    "Vegetables" : "Légumes",
    "Photography" : "Photographie",
    "Library" : "Bibliothèque",
    "Display" : "Affichage",
    "Bag" : "Sac",
    "Cup" : "Tasse",
    "Rocks" : "Roches",
    "Bus" : "Bus",
    "Bowl" : "Bol",
    "Monitor" : "Moniteur",
    "Bike" : "Vélo",
    "Scooter" : "Scooter",
    "Camping" : "Camping",
    "Cart" : "Panier",
    "Piggy bank" : "Tirelire",
    "Bottle" : "Bouteille",
    "Plate" : "Plat",
    "Camera" : "Caméra",
    "Camper" : "Campement",
    "Barbecue" : "Barbecue",
    "Basket" : "Basket",
    "Diving" : "Plongée",
    "Snowmobile" : "Motoneige",
    "Bridge" : "Pont",
    "Couch" : "Canapé",
    "Theater" : "Théâtre",
    "Spoon" : "Cuillère",
    "Comic" : "Bande dessinée",
    "Soup" : "Soupe",
    "Dessert" : "Dessert",
    "Bakery" : "Boulangerie",
    "Fruit" : "Fruit",
    "Pasta" : "Pâtes",
    "Meat" : "Viande",
    "Pizza" : "Pizza",
    "Wine" : "Vin",
    "Alpine" : "Alpes",
    "Mountains" : "Montagnes",
    "Sand" : "Sable",
    "Wool" : "Laine",
    "Glass" : "Verre",
    "Moment" : "Instant",
    "Info" : "Info",
    "Document" : "Document",
    "Puzzle" : "Puzzle",
    "Heritage" : "Patrimoine",
    "Safe" : "Sécurité",
    "Bucket" : "Bucket",
    "Baby" : "Bébé",
    "Cradle" : "Berceau",
    "Patio" : "Patio",
    "Mountain" : "Montagne",
    "Radio telescope" : "Radio télescope",
    "Theme park" : "Parc à thème",
    "Festival" : "Festival",
    "Event" : "Événement",
    "Monument" : "Monument",
    "Balloon" : "Ballon",
    "Crib" : "Lit d'enfant",
    "Fan" : "Ventilateur",
    "Gas station" : "Station service",
    "Wood" : "Bois",
    "Bench" : "Banc",
    "Parking" : "Parking",
    "Traffic" : "Trafic",
    "Public transport" : "Transport en commun",
    "Umbrella" : "Parapluie",
    "Stage" : "Étape ",
    "Toy" : "Jouet",
    "Vase" : "Vase",
    "Mailbox" : "Boite aux lettres",
    "Sign" : "Signer",
    "Gallery" : "Galerie",
    "Park" : "Promenade au parc"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
