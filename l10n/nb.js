OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Gjenkjenn",
    "Smart media tagging and face recognition with on-premises machine learning models" : "Smart mediemerking og ansiktsgjenkjenning med lokale maskinlæringsmodeller",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Smart mediemerking og ansiktsgjenkjenning med lokale maskinlæringsmodeller.\nDenne appen går gjennom mediesamlingen din og legger til passende merker, og kategoriserer automatisk bildene og musikken din.\n\n* 📷 👪 Gjenkjenner ansikter fra kontaktbilder\n* 📷 🏔  Gjenkjenner dyr, landskap, mat, kjøretøy, bygninger og andre gjenstander\n* 📷 🗼 Gjenkjenner landemerker og monumenter\n* 👂 🎵 Gjenkjenner musikksjangre\n* 🎥 🤸 Gjenkjenner menneskelige handlinger på video\n\n⚡ Merking fungerer via Nextclouds Samarbeidende Merker\n  * 👂 Lytt til den merkede musikken din med AudioPlayer-appen\n  * 📷 se dine merkede bilder og videoer med bilder-appen\n\nModellstørrelser:\n\n * Objektgjenkjenning: 1GB\n * Landemerkegjenkjenning: 300MB\n * Videohandlingsgjenkjenning: 50MB\n * Gjenkjenning av musikksjangre: 50MB\n\n## Etisk AI-vurdering\n### Vurdering for gjenkjenning av fotoobjekt: 🟢\n\nPositivt:\n* programvaren for opplæring og slutning av denne modellen er åpen kildekode\n* den trente modellen er fritt tilgjengelig, og kan derfor kjøres lokalt\n* treningsdataene er fritt tilgjengelige, noe som gjør det mulig å kontrollere eller korrigere for skjevhet eller optimere ytelsen og CO2-bruken.\n\n### Vurdering for bildeansiktsgjenkjenning: 🟢\n\nPositivt:\n* programvaren for opplæring og slutning av denne modellen er åpen kildekode\n* den opplærte modellen er fritt tilgjengelig, og kan dermed kjøres lokalt\n* treningsdataene er fritt tilgjengelige, noe som gjør det mulig å kontrollere eller korrigere for skjevhet eller optimere ytelsen og CO2-bruken.\n\n### Vurdering for videohandlingsgjenkjenning: 🟢\n\nPositivt:\n* tprogramvaren for opplæring og slutning av denne modellen er åpen kildekode\n* den opplærte modellen er fritt tilgjengelig, og kan dermed kjøres lokalt\n* treningsdataene er fritt tilgjengelige, noe som gjør det mulig å kontrollere eller korrigere for skjevhet eller optimere ytelsen og CO2-bruken.\n\n## Etisk AI-vurdering\n### Vurdering av musikksjangergjenkjenning: 🟡\n\nPositivt:\n* programvaren for opplæring og slutning av denne modellen er åpen kildekode\n* den opplærte modellen er fritt tilgjengelig, og kan dermed kjøres lokalt\n\nNegativt:\n* treningsdataene er ikke fritt tilgjengelig, noe som begrenser eksterne parters mulighet til å kontrollere og korrigere for skjevhet eller optimalisere modellens ytelse og CO2-bruk.\n\nLær mer om Nextcloud Etisk AI-vurdering [i vår blogg](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nEtter installasjonen kan du aktivere merking i admininnstillingene.\n\nKrav:\n- php 7.4 og høyere\n- Appen \"collaborative tags\" aktivert\n- For opprinnelig hastighet:\n  - Prosessor: x86 64-bit (med støtte for AVX-instruksjoner)\n  - System med glibc (vanligvis standard på Linux; FreeBSD, Alpine linux og således også den offisielle Nextcloud Docker-konteineren og Nextcloud AIO er *ikke* slike systemer)\n- For under-opprinnelig hastighet (ved å bruke WASM-modus)\n  - Prosessor: x86 64-bit, arm64, armv7l (ingen AVX behøves)\n  - System med glibc eller musl (inkl. Alpine linux og således også denne offisielle Nextcloud Docker-konteineren og også Nextcloud AIO)\n- ~4GB med ledig RAM (hvis du kjører på grensen, sørg for at du har noe swap tilgjengelig)\n- Denne appen er for øyeblikket ikke kompatibel med *Mistenkelig pålogging*-appen på grunn av en avhengighetskonflikt (dvs. du kan bare ha en av de to installert)\n\nAppen sender ingen sensitive data til skyleverandører eller lignende tjenester. All behandling gjøres på din Nextcloud-maskin, ved hjelp av Tensorflow.js som kjører i Node.js.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "Maskinlæringsmodellene er lastet ned.",
    "The machine learning models still need to be downloaded." : "Maskinlæringsmodellene må fortsatt lastes ned.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Kunne ikke kjøre Node.js-binærfilen. Du må kanskje angi banen til en fungerende binærfil manuelt.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Bakgrunnsjobber utføres ikke via cron. Gjennkjenn krever at bakgrunnsjobber utføres via cron.",
    "The app is installed and will automatically classify files in background processes." : "Appen er installert og vil automatisk klassifisere filer i bakgrunnsprosesser.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Ingen av merkingsalternativene nedenfor er valgt for øyeblikket. Appen vil for øyeblikket ikke gjøre noe.",
    "Face recognition" : "Ansiktsgjenkjenning",
    "Face recognition is working. " : "Ansiktsgjenkjenning fungerer.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Det oppsto en feil under ansiktsgjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om ansiktsgjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Face recognition:" : "Ansiktsgjenkjenning:",
    "Queued files" : "Filer i kø",
    "Last classification: " : "Siste klassifisering:",
    "Scheduled background jobs: " : "Planlagte bakgrunnsjobber:",
    "Last background job execution: " : "Siste bakgrunnsjobbutførelse: ",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "Det er filer i kø i køen for ansiktsgjenkjenning, men det er ikke planlagt noen bakgrunnsjobb for å behandle dem.",
    "Face clustering:" : "Ansiktshoping:",
    "faces left to cluster" : "ansikter igjen til klynge",
    "Last clustering run: " : "Siste klyngekjøring:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "Minst 120 ansikter per bruker er nødvendig for at klynger skal slå inn",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "Aktiver ansiktsgjenkjenning (grupperer bilder etter ansikter som vises i dem; UI er i bilder-appen)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Antall filer som skal behandles per jobbkjøring (En jobb vil bli planlagt hvert 5. minutt; For normal drift ~500 eller mer, i WASM-modus anbefales ~50)",
    "Object detection & landmark recognition" : "Objektdeteksjon og gjenkjenning av landemerker",
    "Object recognition is working." : "Objektgjenkjenning fungerer.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Det oppsto en feil under gjenkjenning av objekter, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om objektgjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Object recognition:" : "Objektgjenkjenning:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "Det er filer i kø i objektgjenkjenningskøen, men ingen bakgrunnsjobb er planlagt for å behandle dem.",
    "Landmark recognition is working." : "Gjenkjenning av landemerker fungerer.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "Det oppstod en feil under landemerkegjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om landemerkegjenkjenning. Hvis denne meldingen vedvarer utover 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Landmark recognition:" : "Landemerkegjenkjenning:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "Det er filer i kø i landemerkekøen, men ingen bakgrunnsjobb er planlagt for å behandle dem.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Aktiver gjenkjenning av objekter (f.eks. mat, kjøretøy, landskap)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Antall filer som skal behandles per jobbkjøring (En jobb vil bli planlagt hvert 5. minutt; For normal drift ~100 eller mer, i WASM-modus anbefales ~20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Aktiver landemerkegjenkjenning (f.eks. Eiffeltårnet, Golden Gate Bridge)",
    "Audio tagging" : "Lydmerking",
    "Audio recognition is working." : "Lydgjenkjenning fungerer.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Det oppsto en feil under lydgjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om lydgjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Music genre recognition:" : "Musikksjangergjenkjenning:",
    "There are queued files but no background job is scheduled to process them." : "Det er filer i kø, men ingen bakgrunnsjobb er planlagt for å behandle dem.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Aktiver gjenkjenning av musikksjanger (f.eks. pop, rock, folk, metal, new age)",
    "Video tagging" : "Videomerking",
    "Video recognition is working." : "Videogjenkjenning fungerer.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Det oppsto en feil under videogjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om videogjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Video recognition:" : "Videogjenkjenning:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Aktiver menneskelig handlingsgjenkjenning (f.eks. armbryting, dribling av basketball, hulahopring)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Antall filer som skal behandles per jobbkjøring (En jobb vil bli planlagt hvert 5. minutt; For normal drift ~20 eller mer, i WASM-modus anbefales ~5)",
    "Reset" : "Tilbakestill",
    "Click the button below to remove all tags from all files that have been classified so far." : "Klikk på knappen nedenfor for å fjerne alle tagger fra alle filer som har blitt klassifisert så langt.",
    "Reset tags for classified files" : "Tilbakestill merkelapper for klassifiserte filer",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Klikk på knappen nedenfor for å fjerne alle ansiktsgjenkjenninger fra alle filer som har blitt klassifisert så langt.",
    "Reset faces for classified files" : "Tilbakestill ansikter for klassifiserte filer",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Klikk på knappen nedenfor for å skanne alle filene på nytt i dette tilfellet og legge dem til klassifiseringskøene.",
    "Rescan all files" : "Skann alle filene på nytt",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Klikk på knappen nedenfor for å fjerne klassifiseringskøene og fjerne alle bakgrunnsjobber. Dette er nyttig når du vil gjøre den første klassifiseringen ved hjelp av terminalkommandoen.",
    "Clear queues and background jobs" : "Fjern køer og bakgrunnsjobber",
    "Resource usage" : "Ressursbruk",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Som standard vil alle tilgjengelige CPU-kjerner bli brukt, noe som kan sette systemet under betydelig belastning. For å unngå dette kan du begrense antall CPU-kjerner som brukes. (Merk: I WASM-modus kan for øyeblikket bare én kjerne brukes til enhver tid.)",
    "Number of CPU Cores (0 for no limit)" : "Antall CPU-kjerner (0 for ingen grense)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "Som standard vil gjenkjenning bare kjøre én klassifiseringsprosess om gangen. Hvis du har mange ressurser tilgjengelig og vil kjøre så mange prosesser parallelt som mulig, kan du aktivere samtidighet her.",
    "Enable unlimited concurrency of classifier processes" : "Aktiver ubegrenset samtidighet for klassifiseringsprosesser",
    "Tensorflow WASM mode" : "Tensorflow WASM-modus",
    "Checking CPU" : "Sjekker CPU",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Kunne ikke sjekke om maskinen din støtter innebygd TensorFlow-drift. Forsikre deg om at operativsystemet ditt har GNU lib C, at CPU-en din støtter AVX-instruksjoner, og at du kjører på x86. Hvis en av disse tingene ikke er tilfelle, må du kjøre i WASM-modus.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Maskinen din støtter innebygd TensorFlow, du trenger ikke WASM-modus.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "WASM-modus ble aktivert automatisk fordi maskinen din ikke støtter innebygd TensorFlow:",
    "Enable WASM mode" : "Aktiver WASM-modus",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize bruker Tensorflow til å kjøre maskinlæringsmodellene. Ikke alle installasjoner støtter Tensorflow, enten fordi CPU-en ikke støtter AVX-instruksjoner, eller fordi plattformen ikke er x86 (dvs. på en Raspberry Pi, som er ARM), eller fordi operativsystemet som Nextcloud kjører på (når du bruker docker, så er det operativsystemet inne i docker-avbildingen) ikke kommer med GNU lib C (for eksempel Alpine Linux, som også brukes av Nextcloud AIO). I de fleste tilfeller, selv om installasjonen din ikke støtter opprinnelig Tensorflow-drift, kan du fortsatt kjøre Tensorflow ved hjelp av WebAssembly (WASM) i Node.js. Dette er noe tregere, men fungerer fortsatt.",
    "Tensorflow GPU mode" : "Tensorflow GPU-modus",
    "Enable GPU mode" : "Aktiver GPU-modus",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Som de fleste maskinlæringsmodeller vil Gjenkjenning kjøre enda raskere når du bruker en GPU. Å sette opp dette er ikke trivielt, men fungerer bra når alt er satt opp riktig.",
    "Learn how to setup GPU mode with Recognize" : "Lær hvordan du konfigurerer GPU-modus med Gjenkjenning",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Sjekker Node.js",
    "Node.js {version} binary was installed successfully." : "Node.js {version} binærfil ble installert.",
    "Checking libtensorflow" : "Sjekker libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Kunne ikke laste libtensorflow i Node.js. Du kan prøve å installere libtensorflow manuelt eller kjøre i WASM-modus.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Lastet libtensorflow i Node.js, men kunne ikke laste inn GPU. Sørg for at CUDA Toolkit og cuDNN er installert og tilgjengelig, eller slå av GPU-modus.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow ble lastet inn i Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Kunne ikke laste Tensorflow WASM i Node.js. Noe er galt med oppsettet ditt.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM ble lastet inn i Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v20.9 and newer v20 releases." : "Hvis den medfølgende Node.js-binærfilen av en eller annen grunn ikke fungerer på systemet ditt, kan du sette banen til en tilpasset node.js-binærfil. Node v20.9 og nyere v20-utgivelser støttes for øyeblikket.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "For Nextcloud Snap-brukere må du justere denne banen for å peke på snapens \"nåværende\" katalog, da den forhåndskonfigurerte banen vil endres med hver oppdatering. Sett den for eksempel til \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" i stedet for \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"",
    "Classifier process priority" : "Prioritet for klassifiseringsprosess",
    "Checking Nice binary" : "Sjekker Nice-binær",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Kunne ikke finne Nice-binæren. Du må kanskje angi banen til en fungerende binær manuelt.",
    "Nice binary path" : "Nice-binærbane",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Nice-verdi for å sette prioriteten til Node.js-prosessene. Verdien kan bare være fra 0 til 19 siden Node.js-prosessen kjører uten superbrukerrettigheter. Jo høyere nice-verdi, jo lavere prioritet på prosessen.",
    "Terminal commands" : "Terminalkommandoer",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "For å laste ned alle modellene før utførelse av klassifiseringsjobbene, kjør følgende kommando på serverterminalen.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "For å utløse en fullstendig klassifiseringskjøring, kjør følgende kommando på serverterminalen. (Klassifiseringen vil kjøre i flere bakgrunnsjobber som kan kjøre parallelt).",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "Kjør følgende for å kjøre en fullstendig klassifiseringskjøring på terminalen. (Klassifiseringen vil kjøre i rekkefølge inne i terminalen din).",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "Før du kjører en full innledende klassifiseringskjøring på terminalen, bør du stoppe all bakgrunnsbehandling som Gjenkjenning planlagte ved installasjon for å unngå forstyrrelser.",
    "To run a face clustering run on for each user in the terminal, run the following. Consider adding the parameter --batch-size 10000 for large libraries to avoid PHP memory exhaustion. (The clustering will run in sequence inside your terminal.)" : "Kjør følgende for å kjøre en ansiktsklynge for hver bruker i terminalen. Vurder å legge til parameteren --batch-size 10000 for store biblioteker for å unngå PHP-minneutmattelse. (Klyngen vil kjøre i rekkefølge inne i terminalen din).",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "For å fjerne alle ansiktsklynger, men beholde de rå oppdagede ansiktene, kjør følgende på terminalen:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "For å fjerne alle oppdagede ansikter og ansiktsklynger, kjør følgende på terminalen:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Du kan tilbakestille merkelappene for alle filer som tidligere har blitt klassifisert av Gjennkjenn med følgende kommando:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Du kan slette alle merkelappene som ikke lenger har noen filer knyttet til seg med følgende kommando:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "For å fjerne merker som ble opprettet av Gjenkjenning versjon 2 fra alle filer, kjør følgende på terminalen:",
    "Your server does not support AVX instructions" : "Serveren din støtter ikke AVX-instruksjoner",
    "Your server does not have an x86 64-bit CPU" : "Serveren din har ikke en x86 64-bit CPU",
    "Your server uses musl libc" : "Serveren din bruker musl libc",
    "Failed to load settings" : "Klarte ikke å laste inn innstillinger",
    "Failed to save settings" : "Klarte ikke å lagre innstillinger",
    "never" : "aldri",
    "{time} ago" : "{time} siden",
    "Cat" : "Katt",
    "Animal" : "Dyr",
    "Wildlife" : "Dyreliv",
    "Nature" : "Natur",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Løve",
    "Wild cat" : "Villkatt",
    "Cheetah" : "Gepard",
    "Seashore" : "Kysten",
    "Beach" : "Strand",
    "Water" : "Vann",
    "Lakeside" : "Ved innsjø",
    "Flower" : "Blomst",
    "Plant" : "Plante",
    "Window" : "Vindu",
    "Architecture" : "Arkitektur",
    "Stairs" : "Trapp",
    "Building" : "Bygning",
    "Field" : "Jorde",
    "Farm" : "Gård",
    "Landscape" : "Landskap",
    "Portrait" : "Portrett",
    "People" : "Mennesker",
    "Fashion" : "Mote",
    "Ship" : "Skip",
    "Vehicle" : "Kjøretøy",
    "Grasshopper" : "Gresshoppe",
    "Insect" : "Insekt",
    "Fish" : "Fisk",
    "Shark" : "Hai",
    "Chicken" : "Kylling",
    "Bird" : "Fugl",
    "Ostrich" : "Struts",
    "Owl" : "Ugle",
    "Salamander" : "Salamander",
    "Frog" : "Frosk",
    "Turtle" : "Skilpadde",
    "Reptile" : "Reptil",
    "Lizard" : "Øgle",
    "Chameleon" : "Kameleon",
    "Crocodile" : "Krokodille",
    "Alligator" : "Alligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Edderkopp",
    "Duck" : "And",
    "Worm" : "Mark",
    "Shell" : "Skall",
    "Snail" : "Snegle",
    "Crab" : "Krabbe",
    "Lobster" : "Hummer",
    "Cooking" : "Matlaging",
    "Penguin" : "Pingvin",
    "Whale" : "Hval",
    "Dog" : "Hund",
    "Wolf" : "Ulv",
    "Fox" : "Rev",
    "Bear" : "Bjørn",
    "Beetle" : "Bille",
    "Butterfly" : "Sommerfugl",
    "Rabbit" : "Kanin",
    "Hippo" : "Flodhest",
    "Cow" : "Ku",
    "Buffalo" : "Bøffel",
    "Sheep" : "Sau",
    "Ape" : "Ape",
    "Monkey" : "Ape",
    "Lemur" : "Lemur",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musikk",
    "Aircraft" : "Fly",
    "Airport" : "Flyplass",
    "Tractor" : "Traktor",
    "Weapon" : "Våpen",
    "Backpack" : "Ryggsekk",
    "Shop" : "Butikk",
    "Office" : "Office",
    "Outdoor" : "Utendørs",
    "Living" : "Leve",
    "Tower" : "Tårn",
    "Drinks" : "Drinker",
    "Beverage" : "Drikke",
    "Food" : "Mat",
    "Shelter" : "Husly",
    "Furniture" : "Møbel",
    "Book" : "Bok",
    "Train" : "Tog",
    "Butcher" : "Slakter",
    "Car" : "Bil",
    "Historic" : "Historisk",
    "Boat" : "Båt",
    "Electronics" : "Elektronikk",
    "Indoor" : "Innendørs",
    "Church" : "Kirke",
    "Shoe" : "Sko",
    "Candle" : "Stearinlys",
    "Coffee" : "Kaffe",
    "Keyboard" : "Tastatur",
    "Computer" : "Datamaskin",
    "Helmet" : "Hjelm",
    "Wall" : "Vegg",
    "Clock" : "Klokke",
    "Dining" : "Servering",
    "Kitchen" : "Kjøkken",
    "Snow" : "Snø",
    "Dome" : "Kuppel",
    "Screen" : "Skjerm",
    "Flag" : "Flagg",
    "Truck" : "Lastebil",
    "Store" : "Butikk",
    "Tool" : "Verktøy",
    "Pumpkin" : "Gresskar",
    "Vegetables" : "Grønnsaker",
    "Photography" : "Fotografi",
    "Library" : "Bibliotek",
    "Display" : "Vis",
    "Bag" : "Veske",
    "Cup" : "Kopp",
    "Rocks" : "Stein",
    "Bus" : "Buss",
    "Bowl" : "Bolle",
    "Monitor" : "Monitor",
    "Bike" : "Sykkel",
    "Scooter" : "Scooter",
    "Camping" : "Camping",
    "Cart" : "Handlevogn",
    "Piggy bank" : "Sparegris",
    "Bottle" : "Flaske",
    "Plate" : "Tallerken",
    "Camera" : "Kamera",
    "Camper" : "Bobil",
    "Barbecue" : "Grill",
    "Basket" : "Kurv",
    "Diving" : "Dykking",
    "Snowmobile" : "Snøscooter",
    "Bridge" : "Bro",
    "Couch" : "Sofa",
    "Theater" : "Teater",
    "Spoon" : "Skje",
    "Comic" : "Tegneserie",
    "Soup" : "Suppe",
    "Dessert" : "Dessert",
    "Bakery" : "Bakeri",
    "Fruit" : "Frukt",
    "Pasta" : "Pasta",
    "Meat" : "Kjøtt",
    "Pizza" : "Pizza",
    "Wine" : "Vin",
    "Alpine" : "Alpint",
    "Mountains" : "Fjell",
    "Sand" : "Sand",
    "Wool" : "Ull",
    "Glass" : "Glass",
    "Moment" : "Øyeblikk",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Puslespill",
    "Heritage" : "Arv",
    "Safe" : "Safe",
    "Bucket" : "Bøtte",
    "Baby" : "Baby",
    "Cradle" : "Vugge",
    "Patio" : "Uteplass",
    "Mountain" : "Fjell",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Fornøyelsespark",
    "Festival" : "Festival",
    "Event" : "Begivenhet",
    "Monument" : "Monument",
    "Balloon" : "Ballong",
    "Crib" : "Krybbe",
    "Fan" : "Vifte",
    "Gas station" : "Bensinstasjon",
    "Wood" : "Trevirke",
    "Bench" : "Benk",
    "Parking" : "Parkering",
    "Traffic" : "Trafikk",
    "Public transport" : "Offentlig transport",
    "Umbrella" : "Paraply",
    "Stage" : "Scene",
    "Toy" : "Leketøy",
    "Vase" : "Vase",
    "Mailbox" : "Postkasse",
    "Sign" : "Skilt",
    "Gallery" : "Galleri",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
