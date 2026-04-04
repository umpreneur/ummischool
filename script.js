function scrollToTop() {
  // Voor normale pagina scroll
  const root = document.scrollingElement || document.documentElement;
  root.scrollTop = 0;
  document.body.scrollTop = 0;

  // Voor het geval jouw site in een scroll-container zit (meest voorkomend)
  const main = document.querySelector("main");
  if (main) main.scrollTop = 0;

  const wrapper = document.querySelector(".app-wrapper");
  if (wrapper) wrapper.scrollTop = 0;

  const container = document.querySelector(".container");
  if (container) container.scrollTop = 0;
}

const blogPreviews = [
  {
  id: "1",
  title: "Zij Legde Het Fundament",
  excerpt: "Grote geleerden begonnen nooit met hun eigen naam. Hun verhaal startte bij moeders die in stilte bouwden, dapper bleven en iets groots durfden te planten.",
  slug: "Zij-Legde-Het-Fundament",
       thumbnailUrl: "https://umpreneur.github.io/ummischool/blog1img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog1img.png",
  },
  {
    id: "2",
    title: "Bewust Kiezen",
    excerpt: "In een tijd van likes, luidste meningen en populaire ‘waarheden’ herinnert de Qur’an ons eraan dat waarheid geen democratie is.",
    slug: "Bewust-Kiezen",
    thumbnailUrl: "https://umpreneur.github.io/ummischool/blog2img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog2img.png",
  },
{
  id: "3",
  title: "Waarom een dagstart?",
  excerpt:
    "Een dagstart is een moment om samen de dag te openen, verwachtingen af te stemmen en ruimte te geven aan wat nodig is op dat moment.",
  slug: "Waarom-een-dagstart?",
    thumbnailUrl: "https://umpreneur.github.io/ummischool/blog3img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog3img.png",
  },
{
  id: "4",
  title: "Dagafsluiting",
  excerpt:
    "Een dagafsluiting is een moment om samen terug te kijken, ervaringen te delen en de dag bewust af te ronden.",
  slug: "dagafsluiting",
    thumbnailUrl: "https://umpreneur.github.io/ummischool/blog4img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog4img.png",
},
  {
  id: "5",
  "title": "Inhoud Dagplanning",
  "excerpt": "Een rustige dag met vaste ritmes maakt thuisonderwijs helder, haalbaar en vol te houden. Geen strak schema, wel structuur die past bij jouw gezin en geloof.",
  "slug": "Thuisonderwijs-en-Dagplanning",
  "thumbnailUrl": "https://umpreneur.github.io/ummischool/blog5img.png",
  "imageUrl": "https://umpreneur.github.io/ummischool/blog5img.png",
  },
  {
  id: "6",
  title: "Inhoud dagstart",
  excerpt: "Hoe je de dag rustig begint met contact, structuur en ruimte voor leren binnen het thuisonderwijs.",
  slug: "Inhoud-dagstart",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/blog6img.png",
  imageUrl: "https://umpreneur.github.io/ummischool/blog6img.png",
},

  {
  id: "7",
  title: "Gemotiveerd leren",
  excerpt:
    "Motivatie groeit niet door druk, maar door rust, duidelijkheid en betekenis.Tips voor gemotiveerd leren",
  slug: "gemotiveerd-leren-thuis",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/blog2img7.png",
    imageUrl: "https://umpreneur.github.io/ummischool//blog2img7.png",
  },
  {
  id: "8",
  title: "Groeimindset en fixed mindset",
  excerpt:
    "Hoe de manier waarop een kind naar leren kijkt bepaalt of vastlopen voelt als falen of als groeien.",
  slug: "groeimindset-fixed-mindset",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/fixedvsgroei.png",
  imageUrl: "https://umpreneur.github.io/ummischool/fixedvsgroei.png", 
  },
{
  id: "9",
  title: "Qur’aan en thuisonderwijs",
  excerpt:
    "Wat jonge kinderen vaak horen, blijft hangen. Door herhaling en luisteren wordt in de vroege jaren een stevige basis gelegd voor het memoriseren van de Qur’an.",
  slug: "quran-en-thuisonderwijs",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/Quraan.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Quraan.png",
},
  {
  id: "10",
  title: "Peuters en Kleuters leren",
  excerpt: "Jonge kinderen leren vanuit nieuwsgierigheid. Door aan te sluiten bij hun vragen, dagelijkse handelingen en spel, ontstaat thuis een natuurlijke basis voor later leren.",
  slug: "Thuisonderwijs-Peuters-Kleuters",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/penk.png",
  imageUrl:"https://umpreneur.github.io/ummischool/penk.png",
  },

{
  "id": "11",
  "title": "Leren Schrijven",
  "excerpt": "Het aanbod groeit, de verwarring ook. Toch is leren schrijven verrassend eenvoudig: minder spullen, meer doen en de kracht van herhaling.",
  "slug": "leren-schrijven",
  "thumbnailUrl": "https://umpreneur.github.io/ummischool/schrijven.png",
  "imageUrl": "https://umpreneur.github.io/ummischool/schrijven.png"
},

  {
  id: "12",
  title: "Spelenderwijs leren",
  excerpt: "Waarom spel belangrijk is, maar niet alles hoeft te zijn. Over leren, oefenen en volhouden.",
  slug: "spelenderwijs-leren",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/spelenderwijze.png",
  imageUrl: "https://umpreneur.github.io/ummischool/spelenderwijze.png",
},

 
  {
  id: "13",
  title: "Thematisch werken met jonge kinderen",
  excerpt: "Thematisch werken betekent dat je een tijdje met één onderwerp bezig bent. Dat thema komt terug in spelen, praten, lezen, bouwen en ontdekken. Alles hoort bij elkaar en helpt kinderen om betekenisvol te leren.",
  slug: "Thematisch-werken-met-jonge-kinderen",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/thema.png",
  imageUrl: "https://umpreneur.github.io/ummischool/thema.png",
},
{
  id: "14",
  title: "Denken en Doen",
  excerpt: "Leren gaat niet alleen over weten, maar over hoe het brein informatie verwerkt, keuzes maakt en gedrag aanstuurt in het dagelijks leven.",
  slug: "denken-en-doen",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/excutieve.png",
  imageUrl: "https://umpreneur.github.io/ummischool/executieve.png",
},

  {
  id: "15",
  title: "Thuisonderwijs met meerdere kinderen",
  excerpt: "Thuisonderwijs met meerdere kinderen vraagt veel schakelen. Met kleine, slimme gewoontes—wachten leren, zelfstandig materiaal, jaloezie benoemen en kinderen betrekken—breng je meer rust en overzicht in je dag.",
  slug: "Meerderekinderen",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/Meerdere.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Meerdere.png",
  },
  
  {
id: "16",
  title: "Adab en Akhlaaq",
  excerpt: "Karakter wordt niet gevormd door één moment, maar door verhalen die blijven terugkomen, het geduld van Ayyub, het tawhied van Ibrahim en de vergeving van Yusufén door het waken over wat een kinderhart binnenkomt.",
  slug: "Adab-en-Akhlaaq",
  thumbnailUrl: "https://umpreneur.github.io/ummischool/Adab.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Adab.png",
},


{
  "id": "17",
  "title": "Thuisonderwijs Is Een Amanah",
  "excerpt": "Onderwijs is een recht. Wie kiest voor thuisonderwijs draagt volledige verantwoordelijkheid, ook als niemand meekijkt.",
  "slug": "thuisonderwijs-is-een-amanah",
  "thumbnailUrl": "https://umpreneur.github.io/ummischool/amanah1.png",
  "imageUrl": "https://umpreneur.github.io/ummischool/amanah1.png"
},

  {
  id: "18",
  title: "Leren lezen thuis",
  excerpt:
    "Technisch lezen is de basis: letters zien, klanken maken, en woorden bouwen. Met rust, herhaling en haalbare oefening groeit vlot lezen vanzelf.",
  slug: "Leren-lezen-thuis",
   thumbnailUrl: "https://umpreneur.github.io/ummischool/Lezen.png",
    imageUrl: "https://umpreneur.github.io/ummischool/Lezen.png",
},
];


const blogContent = {
  "Zij-Legde-Het-Fundament": {
  title: "Zij Legde Het Fundament",
  category: "Reflectie",
headerImageUrl: "https://umpreneur.github.io/ummischool/blog1img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog1img.png",
    
  content: [
    "Het verhaal van grote geleerden begon nooit met hén. Niet met hun boeken, hun kennis of hun woorden. Het begon bij de vrouwen achter hen, moeders met moed, geduld en een doel dat verder reikte dan hun eigen gemak.",
    "De moeder van Imam Ahmad had weinig middelen, maar een helder hart: <strong><i>‘Mijn kind moet Allah leren kennen.’</i> </strong> Ze stond op in koude ochtenden, begeleidde hem richting kennis, zonder te beseffen dat haar stille inspanning generaties zou raken.",
    "De moeder van Imam al-Bukhari bad nachtenlang voor haar zoon. Toen hij zijn zicht verloor, zocht ze geen oplossingen bij mensen, <strong>maar bij Allah.</strong> Haar dua werd de deur naar een toekomst die zij zelf nooit zou meemaken, maar waarvan de wereld tot vandaag profiteert.",
    "Deze vrouwen waren gewone moeders die deden wat zij konden, op momenten waarop niemand keek, met harten die vastbesloten waren om iets goeds te planten in hun kinderen.",
    { type: "highlight", text: "Ze kregen geen erkenning, maar zij legden wel de eerste bouwstenen overtuiging, dua en liefde voor kennis." },
    "Ze wisten niet wat hun kinderen later zouden worden. Ze werkten met oprechtheid, en Allah schonk groei aan wat zij in stilte neerlegden.",
    "Dat is het bijzondere aan hun nalatenschap: grootheid ontstaat vaak uit eenvoud. Een moeder die geeft, een kind dat groeit, een toekomst die doorwerkt in sha Allah.",
   "Je hoeft niet gezien te worden om blijvende invloed te hebben. Alles wat jij aan kennis, imaan en waarden meegeeft, kan verder reiken dan jouw leven, misschien verder dan je je nu kunt voorstellen.", 
    {type: "highlight", 
      text: "Het begint bij een moeder zoals jij die in stilte het fundament legt, en in stilte beloond wordt."},
    
  ]
  },
  "Bewust-Kiezen": {
    title: "Bewust Kiezen",
    category: "Reflectie",
    headerImageUrl: "https://umpreneur.github.io/ummischool/blog2img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog2img.png",

    content: [
      "<strong><i>“En als jij de meeste mensen op aarde zou gehoorzamen, zouden zij jou doen afdwalen van het pad van Allah. Zij volgen slechts vermoedens en zij speculeren alleen maar.” </i></strong> (Qur’an 6:116)",
      
      "We leven in het tijdperk van de meerderheid. <br>De meeste likes. <br>De luidste meningen. <br>De populairste ‘waarheden’.",
      "En Allah waarschuwt ons hier keihard voor: de meerderheid is geen maatstaf voor waarheid.",
      "Deze ayah snijdt dwars door onze moderne illusies heen. Want hoe vaak laten we ons leiden door wat ‘normaal’ is? Door trends, door sociale druk, door wat iedereen zegt dat goed voelt? Allah noemt dat geen kennis. Hij noemt het vermoedens en giswerk.",
      "“<strong><i>Zij volgen slechts aannames.</strong></i>”<br/>“<strong><i>Zij verzinnen.</strong></i>”",
      "Dat is pijnlijk herkenbaar. Meningen worden feiten. Gevoelens worden wetten. En wie twijfelt, wordt weggezet als ouderwets, extremistisch of gewoon gek.",
      {type: "highlight",
        text: "Maar de Qur’an leert ons iets radicaals: Waarheid buigt niet."},
      "De weg van Allah is zelden de weg van de massa. Het is een weg van bewust kiezen, van kennis boven gevoel, van openbaring boven opinie. Het vraagt moed om anders te zijn. Om niet mee te buigen. Om niet te verdwalen in het lawaai.",
      "Deze ayah is geen uitnodiging tot arrogantie, maar tot wakker zijn. Niet alles wat vaak herhaald wordt, is waar. Niet alles wat normaal voelt, is juist. En niet iedereen die zeker klinkt, heeft kennis.",
      "De vraag is dus niet: ‘Wat doen de meeste mensen?’",
      {type: "highlight",
        text: "Maar: ‘Waar leidt dit mij naartoe dichter bij Allah, of verder van Hem?’"},
      "Soms is het pad smal. Soms loop je alleen. Maar Allah herinnert ons hier: leiding komt niet van aantallen, maar van de waarheid."
    ]
  },

     "Waarom-een-dagstart?": {
    title: "Waarom een dagstart?",
       category: "Reflectie",
       headerImageUrl: "https://umpreneur.github.io/ummischool/blog3img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog3img.png",
 content: [
    "Een dagstart is een moment aan het begin van de dag om samen stil te staan bij wat er gaat komen en hoe iedereen zich voelt</strong>. In verschillende vormen van onderwijs wordt dit gebruikt om de dag gezamenlijk te beginnen. Ook binnen thuisonderwijs kan een dagstart een plek hebben. Hoe dit moment eruitziet, ligt niet vast en verschilt per gezin en per kind. Bekijk de invullingen voor de dagstart in deze blog: <a href='https://umpreneur.github.io/ummischool/?blog=Inhoud-dagstart' target='_blank'>Inhoud dagstart</a>.",
  

    {
      type: "highlight",
      text:
        "Een dagstart ligt niet vast, maar is een moment om samen af te stemmen."
    },
    "Binnen thuisonderwijs bestaat een dagstart vaak uit het samen doornemen van wat er die dag op de planning staat, het geven van ruimte aan het kind om mee te denken en het kort aandacht hebben voor hoe iedereen zich op dat moment voelt.<br/>Dit kan op verschillende momenten van de dag gebeuren, bijvoorbeeld na Fajr, tijdens het ontbijt of later op de ochtend.",
    "Tijdens de dagstart wordt de dag doorgenomen. Dat maakt duidelijk wat er ongeveer komt en in welke volgorde activiteiten plaatsvinden. Kinderen kunnen delen waar ze naar uitkijken, wat ze spannend vinden of wat ze liever op een ander moment doen.",
    {
      type: "highlight",
      text:
        "Het kind heeft inspraak, de ouder geeft richting."
    },
    "Voor veel kinderen is het prettig om te weten hoe de dag eruitziet. De mate van detail verschilt per leeftijd. Voor jonge kinderen is een globaal overzicht vaak voldoende. Oudere kinderen hebben vaker baat bij een meer uitgewerkte planning, waarin duidelijk is wat wanneer gebeurt.",
    
    "Een dagstart kan elke dag op hetzelfde moment plaatsvinden, maar dat hoeft niet. Het kan kort zijn of iets uitgebreider. Wat past, hangt samen met leeftijd, behoefte en de situatie van dat moment.",
    "Binnen thuisonderwijs kan een dagstart helpen om samen <strong>doelen</strong> en <strong>verwachtingen</strong> voor de dag te bespreken. Dat geeft duidelijkheid voor zowel kind als ouder."
  ]


},

    "dagafsluiting": {
    title: "Dagafsluiting",
    category: "Reflectie",
        headerImageUrl: "https://umpreneur.github.io/ummischool/blog4img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog4img.png",
content: [
    "Een dagafsluiting is een moment aan het einde van de dag om samen stil te staan bij <strong>wat er is gebeurd</strong> en <strong>hoe de dag is ervaren</strong>. In veel gezinnen krijgt dit moment een vaste plek, bijvoorbeeld voor het slapen of tijdens het avondeten.",
    "Ook binnen thuisonderwijs kan een dagafsluiting een rol spelen. Hoe dit moment wordt ingevuld, verschilt per gezin en per kind.",
    {type: "highlight",
      text:
        "Een dagafsluiting biedt ruimte om de dag af te ronden."},
"Een dagafsluiting bestaat vaak uit eenvoudige vragen, zoals:" +
"<ul>" +
  "<li>Wat heb je vandaag gedaan (ook als je daar bij was)?</li>" +
  "<li>Wat vond je het leukst vandaag?</li>" +
  "<li>Was er iets dat je niet zo leuk vond?</li>" +
  "<li>Wat vond je vandaag interessant of bijzonder?</li>" +
"</ul>" +
"Deze vragen helpen om de dag in woorden te brengen.",
    "Voor kinderen ondersteunt het terugvertellen van de dag de taalontwikkeling. Het helpt bij <strong>navertellen</strong>, het <strong>ordenen van gebeurtenissen</strong> en het benoemen van ervaringen, zowel positieve als lastige.",
    {type: "highlight",
      text:
        "Terugvertellen helpt een kind ook om ervaringen te verwerken en onder woorden te brengen."},
    "Naast het terugkijken is er aandacht voor wat een kind die dag heeft geleerd. Dat kan gaan over iets nieuws dat is ontdekt, een inzicht dat is ontstaan of een moment waarop iets moeilijk was.",
  "Dit moment kan ook gebruikt worden voor het geven van <strong>complimenten</strong> of het delen van <strong>advies</strong>, zonder te beoordelen of eerdere situaties opnieuw op te halen. Ook is er binnen de dagafsluiting aandacht voor dankbaarheid en het erkennen van de zegeningen van Allah",
  
    {type: "highlight",
      text:
        "Een vaste dagafsluiting kan helpen om de dag met rust en aandacht af te sluiten."},
  ]
 },

"Thuisonderwijs-en-Dagplanning": {
 title: "Inhoud Dagplanning",
    category: "Reflectie",
   headerImageUrl: "https://umpreneur.github.io/ummischool/blog5img.png",
    imageUrl: "https://umpreneur.github.io/ummischool/blog5img.png",
  content: [
"Thuisonderwijs loopt het fijnst als er een duidelijke dagplanning is. Niet strak, maar wel overzichtelijk voor iedereen. Zo weet iedereen wat de dag brengt en ontstaat er rust.",
"De dagplanning hoeft niet ingewikkeld te zijn. Sommige momenten liggen vast, zoals opstaan, bidden, eten en slapen. Die vormen de basis van de dag. Daaromheen plan je de rest.",
"Daarna komt de vraag hoe je de leerblokken indeelt. Hoeveel tijd heb je daarvoor nodig? Werk je liever in één langer blok met korte pauzes, of verdeel je het over de dag, bijvoorbeeld een moment in de ochtend en één later op de dag?",
    "Vervolgens bepaal je waar die leerblokken in de dag passen. Je kiest momenten waarop er rust en aandacht is om te werken en stemt de rest van de dag daarop af. Kijk daarbij ook naar het energieniveau van je kind. Vaak werkt leren beter op momenten waarop je kind nog fris is, bijvoorbeeld in de ochtend.",
    
    { "type": "highlight", "text": "Gebedstijden kunnen dienen als natuurlijke ankerpunten in de dag. Ze verdelen de dag en geven houvast voor een praktische en haalbare planning." },
    "Dit is mijn eigen globale dagplanning. Afhankelijk van of we ’s ochtends binnen of buiten zijn, verschuif ik de leerblokken naar de ochtend of de middag. Zo blijf ik flexibel, terwijl de kinderen toch vastigheid ervaren.",
     "<ul>" +
  "<li>Ontbijt en dagstart</li>" +
  "<li>Na het ontbijt: opruimen en zelfzorg</li>" +
  "<li>Leerblok</li>" +
  "<li> Buitenactiviteit</li>" +
 "<li>16:00 Thuis: vrij spel</li>" +
  "<li>17:00  Avondeten</li>" +
  "<li>Leerblok en gezamenlijke afronding</li>" +
  "<li>Bedtijd </li>" +
"</ul>",
    "Hoeveel leerblokken je gebruikt, wanneer je ze plant en hoe je de dag opbouwt, hangt af van je kind, je aanpak en jullie ritme.<br>",
    "Een passende dagplanning vinden kost tijd. Het is vaak zoeken, proberen, bijstellen. Wat op papier goed lijkt, voelt in de praktijk soms anders. Daarom is het normaal om verschillende schema’s uit te testen voordat duidelijk wordt wat echt werkt in jullie situatie.<br>",
    "Ritme ontstaat door herhaling. Geef jezelf de ruimte om bij te sturen tot er een dagritme ontstaat dat rust brengt, helder is en bij jullie leven past.",
    { "type": "highlight", "text": "Structuur geeft rust, herhaling geeft resultaat en samen maken ze thuisonderwijs vol te houden, in sha Allah." },
  ]
},

  "Inhoud-dagstart": {
  title: "Inhoud dagstart",
  category: "Thuisonderwijs",
  headerImageUrl: "https://umpreneur.github.io/ummischool/blog5img.png",
  imageUrl: "https://umpreneur.github.io/ummischool/blog5img.png",
 content: [
"Een dagstart begint vaak met even samen zijn, kort zitten en met elkaar praten. Zo krijgen kinderen de ruimte om woorden te geven aan wat ze voelen en wat ze van de dag verwachten.",
  "Hoe dat eruitziet, verschilt per leeftijd. Bij jonge kinderen blijft het eenvoudig, bij oudere kinderen ontstaat vaak vanzelf wat meer gesprek. Door dit dagelijks terug te laten komen, groeit er structuur, vertrouwen en openheid.",

  "Daarna kan er, als dat past, een klein leermoment volgen. Denk aan de dag van de week, het dagdeel of het weer. Zo wordt leren op een rustige manier onderdeel van de dagstart.",

  "<strong>Een leermoment kan gevuld worden met onderwerpen zoals:</strong>",

  "<ul>" +
    "<li>Dagen van de week</li>" +
    "<li>Eergisteren, gisteren, vandaag, morgen en overmorgen</li>" +
    "<li>Dagdelen</li>" +
    "<li>Maanden</li>" +
    "<li>Seizoenen</li>" +
    "<li>Het weer en passende kleding</li>" +
    "<li>Tijdsaanduidingen</li>" +
    "<li>Klokkijken</li>" +
  "</ul>",

  "<strong>Materialen die hierbij kunnen helpen</strong>",

  "<ul>" +
    "<li>Goula houten kalender: een educatieve houten kalender waarmee kinderen spelenderwijs inzicht krijgen in dag, datum, seizoen, weer en tijd.</li>" +
    "<li>Hijri-kalender: eventueel online te downloaden</li>" +
    "<li>Whiteboard: Kan worden gebruikt om de dagplanning te visualiseren, dagdelen te ordenen en meer.</li>" +
    "<li>Dagritmekaarten: Je kunt dagritmekaarten gratis downloaden op (link)</li>" +
    "<li>Kerndoeltrainer (A, B, C): oefenmateriaal voor klokkijken en kalenderbegrip.</li>" +
  "</ul>",

"Na het leermoment kan de dag kort worden doorgenomen. Door in eenvoudige stappen te benoemen wat er komt (eerst dit, daarna dat) ontstaat er overzicht en rust.",
"Het helpt om de dag zichtbaar te maken, bijvoorbeeld met dagritmekaarten of een whiteboard, zodat de dag voorspelbaar wordt. Wat werkt, verschilt per kind. Bij jonge kinderen is het vaak fijner om per moment of dagdeel te kijken, in plaats van alles in één keer.",
"Het hoeft niet volledig of strak te zijn. Het gaat er vooral om dat het overzicht geeft. Waar het past, kan het kind betrokken worden bij kleine keuzes, terwijl de ouder richting geeft.",
  {
    type: "highlight",
    text: "Een dagstart hoeft niet perfect te zijn. Het gaat er vooral om samen de dag te beginnen."
  }
]
  },



  
  "gemotiveerd-leren-thuis": {
  title: "Gemotiveerd leren",
  category: "Thuisonderwijs",
  headerImageUrl: "https://umpreneur.github.io/ummischool/blog2img7.png",
    imageUrl: "https://umpreneur.github.io/ummischool//blog2img7.png",

content: [
"Leren komt het meest tot bloei wanneer een kind zich betrokken voelt. Als iets aansluit bij wat een kind bezighoudt, ontstaat er vaak vanzelf meer aandacht en bereidheid om moeite te doen.<br>", 
"Motivatie groeit dan van binnenuit. Niet door druk of beloning, maar doordat iets betekenis krijgt. Leren voelt dan minder als iets dat moet, en meer als iets waar een kind zelf in wil investeren. Dit wordt ook wel intrinsieke motivatie genoemd. Intrinsieke motivatie groeit mee met hoe leren eruitziet en wordt ervaren, en natuurlijk met de wil van Allah. Er zijn verschillende manieren die, met Zijn toestemming, kunnen helpen om motivatie te laten groeien.",
  "<strong>Structuur en keuze</strong><br> Leren vraagt om structuur. Zonder houvast kan er onrust ontstaan of steeds opnieuw discussie. Een vast leermoment geeft duidelijkheid en rust. Tegelijk hoeft die structuur niet strak te zijn. Binnen dat moment kan het kind kleine keuzes maken, zoals in volgorde, tempo of plek. Zo blijft er richting, terwijl er ook ruimte is voor eigen inbreng.<br>", 

   
  "<strong>Vooruitgang maakt motivatie zichtbaar </strong> <br> Wanneer structuur en keuze in balans zijn, ontstaat er ruimte voor groei. Kleine stappen vooruit geven een kind vertrouwen en zorgen vaak voor meer motivatie. Zo wordt zichtbaar dat inspanning iets oplevert.<br>", 
 {
      type: "highlight",
      text: "Leren mag moeite kosten. Juist door met frustratie om te leren gaan, ontstaat veerkracht."
    },
"<strong>Betekenis houdt leren vast </strong> <br> Zelfs wanneer alles goed is ingericht, blijft de vraag belangrijk: waarom wordt dit geleerd? Zonder betekenis voelt leren al snel leeg. Betekenis hoeft niet groot te zijn, soms zit het in iets kleins en herkenbaars. Wanneer duidelijk is waar leren toe dient, krijgt inspanning richting. Wat moeilijk is, wordt draaglijker wanneer het ergens voor is.", 
  
       
    "<strong>Leren door voorbeeld</strong> <br> Ook voorbeelden kunnen helpen om liefde voor kennis te laten groeien.Verhalen over sahaba, zoals Abu Hurayra of Mu’adh ibn Jabal laten zien dat kennis iets is om naar te verlangen, niet alleen om te behalen. Die verhalen vormen en inspireren. Ze laten zien dat leren niet stopt, maar een leven lang doorgaat. Kennis wordt niet gezien als iets dat je afrondt, maar als iets waar je in blijft groeien.",
   "Daarnaast speelt het dagelijks voorbeeld ook een rol. Wat een kind ziet, hoe je omgaat met moeite of nieuwsgierigheid laat zien hoe leren eruitziet in het echte leven. Zo leert een kind, vaak zonder woorden, hoe leren voelt en wat het betekent.",
  
  
  
  {
      type: "highlight",
      text: "Door zelf bezig te zijn met kennis opdoen, laat je zonder woorden zien: leren hoort bij het leven."
    },
  ]

},

  "groeimindset-fixed-mindset": {
  title: "Groeimindset en fixed mindset",
  category: "Thuisonderwijs",
  headerImageUrl: "https://umpreneur.github.io/ummischool/fixedvsgroei.png",
    imageUrl: "https://umpreneur.github.io/ummischool//fixedvsgroei.png",
      
  content: [

"Soms lukt iets meteen, soms niet. Een kind loopt vast, probeert opnieuw en raakt gefrustreerd. Juist in die momenten gebeurt er meer dan leren alleen. Een kind vormt ideeën over wat leren is, wat moeite betekent en wat vastlopen zegt over zichzelf. Deze manier van kijken groeit mee in het dagelijks leren. Vaak zie je daarin twee richtingen: een fixed mindset en een groeimindset.<br>",   
    "<strong>Fixed mindset</strong> <br> Bij een fixed mindset ligt de nadruk sterk op het beeld dat een kind van zichzelf heeft. Gedachten als “Ik ben slim, waarom lukt dit mij niet?” of “Als ik het niet meteen snap, kan ik het blijkbaar niet” komen dan snel op. Vastlopen voelt niet als een onderdeel van leren, maar als een teken dat er iets mis is met het kind zelf. Leren moet lukken. En als het niet lukt, overheerst teleurstelling of twijfel.",

    {
      type: "highlight",
      text: "Wanneer leren voelt als een test van wie je bent, wordt vastlopen iets om te vermijden."
    },

    "<strong>Groeimindset</strong> <br> Bij een groeimindset ligt de nadruk niet op wie je bent, maar op wat je aan het doen bent. Vastlopen hoort erbij. Moeite betekent niet: ik kan dit niet, maar: ik ben nog aan het leren. Begrip mag groeien. Oefenen mag tijd kosten. En opnieuw beginnen is geen mislukking, maar onderdeel van het proces.",

    {
      type: "highlight",
      text: "Moeite is geen teken dat het niet lukt, maar dat het leren gaande is."
    },

    "<strong>De rol van jouw woorden</strong> <br> Wat jij zegt tijdens het leren, wanneer iets moeilijk is en wanneer iets lukt, geeft richting aan of je kind een groei- of fixed mindset ontwikkelt. Benoem wat er gebeurt, zonder oordeel of haast. “Dit lukt nu nog niet. We blijven oefenen en in sha Allah wordt het duidelijker.” “Je zit vast bij deze stap. Dat hoort bij leren.” Vermijd zinnen die onbedoeld druk leggen, zoals “Dit moet je toch kunnen” of “Het is niet zo moeilijk”, en ook meteen overnemen. Vraag liever: “Wat heb je al geprobeerd?” of “Zullen we samen kijken?”",

    "<strong>Wanneer iets lukt</strong> <br>  Bij succes leert een kind iets belangrijks, namelijk waar het resultaat vandaan komt. “Je bleef oefenen en Allah liet het lukken.”, “Je deed je best en met de wil van Allah ging het beter.”, Zo leert een kind tegelijk dat moeite doen mag, en dat de uitkomst bij Allah ligt.",

    {
      type: "highlight",
      text: "Dat geeft rust in het leren zelf, los van presteren of falen."
    },

    "<strong>Wat groeit mee</strong> <br> Terwijl een kind leert lezen, rekenen of schrijven, groeit er iets dat verder gaat dan de lesstof. Een houding tegenover moeite. Een vertrouwen in blijven proberen. En het besef dat inzet telt, terwijl de uitkomst bij Allah ligt. En dat neemt een kind overal mee naartoe.",
 
  "<strong><i>Het boek Mindset van Carol Dweck gaat dieper in op dit onderwerp, zeker een aanrader.</i></strong>.
  
  ]
},


"quran-en-thuisonderwijs": {
  title: "Qur’aan en thuisonderwijs",
  category: "Qur’an & opvoeding",
  headerImageUrl: "https://umpreneur.github.io/ummischool/Quraan.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Quraan.png",

  content: [
    
    "Bij jonge kinderen verloopt leren op een natuurlijke manier. Wat zij regelmatig horen, nemen zij vanzelf op. Dit gebeurt zonder uitleg of druk en wordt niet als leren ervaren, maar als een vanzelfsprekend onderdeel van het dagelijks leven. <strong>Op deze manier wordt ook de taal die thuis wordt gesproken aangeleerd.</strong>",
    "Dit natuurlijke leerproces hangt samen met de neuroplasticiteit van het brein. Neuroplasticiteit betekent dat het brein zich kan aanpassen en nieuwe verbindingen kan vormen. Bij jonge kinderen (0-7jaar) is dit vermogen het grootst; dit wordt de hoogste neuroplastische periode genoemd. In deze fase reageert het brein sterk op wat een kind ziet, hoort en herhaalt, waardoor informatie die terugkeert sneller wordt herkend en opgeslagen.",

      { 
      type: "highlight",
      text: "Een jong brein leert het meest van wat het vaak ziet en hoort."
    },
    
    "Omdat het brein in deze periode zo open staat voor nieuwe informatie, kan dezelfde manier van leren worden benut bij het memoriseren van de Quraan. Door veel te luisteren en mee te reciteren raken ayahs vertrouwd en worden zij geleidelijk in het geheugen vastgelegd.",
  
      "<i><strong>Hieronder een eenvoudige manier om jonge kinderen te begeleiden bij het memoriseren van de Koran.</strong></i>",
   
 "<strong>Het begin</strong><br/> Begin met Surah al-Fātiḥah, de basis van het gebed en een logische eerste stap. Ga daarna verder met de korte suwar uit Juz’ ‘Amma, die door hun lengte en opbouw goed te volgen zijn voor jonge kinderen.",

    "<strong>Luisteren als basis</strong><br/> Kies één ayah of een paar ayat en blijf daarbij. Benoem dat dit de ayah is die jullie samen gaan leren. Zet dezelfde recitatie zo vaak mogelijk aan, bij voorkeur van één vaste recitator, zodat de klank herkenbaar wordt </br> Laat het op verschillende momenten terugkomen tijdens het spelen, in de auto, bij het opruimen of in rustige momenten. Zorg voor een rustige sfeer, zodat het kind de klanken goed kan opnemen.</br> Het kind kan ondertussen vrij spelen. Alleen luisteren is al leren.",
{ 
      type: "highlight",
      text: "Wat vaak wordt gehoord, blijft vanzelf hangen."
    },

    "Na een periode van luisteren kun je samen gaan oefenen. Het kind kan hierin meebeslissen: samen reciteren of zelf opzeggen. Zo ontstaat er een gevoel van eigen regie. Bij jonge kinderen kan dit speels en in beweging zijn.",
    "Naast speels oefenen is het waardevol om ook korte, rustige leermomenten zonder spel aan te bieden. Door dit stap voor stap op te bouwen, leert het kind op een natuurlijke manier omgaan met meer traditioneel leren.",
"<strong>Samen herhalen</strong><br/>Wat geleerd is, blijft het best door herhaling. Maak daar een gezamenlijk moment van. Ga samen zitten en reciteer om de beurt een ayah van de geleerde suwar met één kind, meerdere kinderen of het hele gezin. <br> Je kunt hier een vast moment voor nemen, bijvoorbeeld een wekelijkse Qur’aankring, waarin je samen zit en om de beurt een ayah reciteert van dezelfde surah, totdat de hele surah is doorlopen. ",

 "<strong>Tips</strong>"+
 "<ul>" +
    "<li>Kun je zelf niet goed reciteren? Gebruik duidelijke audio met correcte tajwīd, zoals Shaykh al-Husary (Ḥafṣ).</li>" +
    "<li>Stop altijd vóór vermoeidheid. Een kind dat prettig stopt, begint de volgende keer makkelijker.</li>" +
       "<li>Prijs de inzet, niet alleen het resultaat. Uiteindelijk is het resultaat van Allah.</li>" +
    "<li>Gebruik handige Qur’an-kanalen voor kinderen zoals DawoodKidsTV op youtube. </li>" +
"<li><a href='https://nl.pinterest.com/pin/545991154850141576/' target='_blank' rel='noopener noreferrer'>Gebruik een Juz ‘Amma-tracker om de voortgang zichtbaar te maken. voorbeeld</a></li>" +
"<li><a href='https://app.quranflash.com/book/Tajweed#/reader' target='_blank' rel='noopener noreferrer'>Online Qur’an met tajweedkleuren en audio, herhaling tot 10 keer per ayah.</a></li>" +
    
  "</ul>",

     "<strong>Nog even dit </strong> </br>Deze manier van werken vervangt geen traditionele Qur’an-lessen. Het laat zien hoe je in de vroege jaren de natuurlijke manier van leren bij jonge kinderen benut. Zo leg je een stevige basis en groeit er een natuurlijke vertrouwdheid met de Qur’an. Later kan een docent hier moeiteloos op voortbouwen.",
  ]
},

"Thuisonderwijs-Peuters-Kleuters": {
  title: "Peuters en Kleuters leren",
  category: "Onderwijs",
  headerImageUrl: "https://umpreneur.github.io/ummischool/penk.png",
  imageUrl: "https://umpreneur.github.io/ummischool/penk.png",
  
 content: [

"Thuisonderwijs met jonge kinderen begint bij hun nieuwsgierigheid. Peuters en kleuters willen begrijpen wat ze zien en meemaken. Door samen te kijken en te praten over wat het kind ziet en vraagt, ontstaat leren vanzelf in het dagelijks leven.<br>",
"Vanuit die dagelijkse momenten groeit ook zelfstandigheid, in kleine stappen. Een peuter begint met eenvoudige handelingen zoals aankleden, opruimen of inschenken. Later worden taken preciezer, zoals een rits sluiten, iets snijden of schoonmaken.",
"In deze handelingen ontdekt een kind wat het al kan, oefent het controle over bewegingen en ervaart het het plezier van zelf doen. Zo groeit het van grove naar fijnere handelingen. Hieruit ontstaat geleidelijk de basis voor langere focus en het afronden van activiteiten. Door het kind mee te laten doen in het dagelijks leven en kleine taken te laten kiezen, sluit je hier vanzelf op aan.",
   
  {
    type: "highlight",
    text: "Praktische handelingen versterken zowel motoriek als denkontwikkeling."
  },

  "<strong>De wereld begrijpen</strong><br>Jonge kinderen zijn van nature nieuwsgierig. Hun vragen lijken eenvoudig, maar gaan over wat hen bezighoudt, zoals: “Waarom komt er water uit de lucht?” of “Waarom heeft dat dier haren en die niet?”<br>",

"Met zulke vragen probeert een kind grip te krijgen op de wereld. Begrip geeft houvast en maakt situaties voorspelbaarder. Door samen te praten, te kijken en te benoemen wat ze zien, voelen kinderen zich zekerder.", 

"Thema’s kunnen helpen om die nieuwsgierigheid te volgen. Sluit aan bij wat het kind bezighoudt zoals weer, seizoenen, dieren, thuis of gevoelens. Zo krijgt het woorden voor wat het ziet en voelt, herkent het dingen terug en kan het gebeurtenissen beter plaatsen.", 
  {
    type: "highlight",
    text: "Begrijpen begint wanneer een kind woorden krijgt voor wat het ziet."
  },

  "<strong>De basis voor later leren</strong><br> In de kleutertijd groeit het vermogen van kinderen om zich stap voor stap langer te concentreren en ergens bij te blijven. Wat eerst kort en wisselend is, wordt geleidelijk langer en gerichter.<>br",
   "In hun spel en dagelijkse bezigheden ontwikkelen kleuters vaardigheden die ze later nodig hebben. Door te doen, te herhalen en te ontdekken, groeit hun begrip. Ze leren ergens mee bezig te blijven, door te zetten en iets af te ronden.Zo ontstaat een basis waarop later leren verder kan bouwen, in een tempo dat past bij het kind.", 

]
 },
"leren-schrijven": {
  "title": "Leren Schrijven",
  "category": "Praktisch",
  "headerImageUrl": "https://umpreneur.github.io/ummischool/schrijven.png",
  "imageUrl": "https://umpreneur.github.io/ummischool/schrijven.png",

  "content": [
    
    "Vroeger begon schrijven meestal gewoon met een potlood en een schrift. Kinderen herhaalden letters tot hun hand ze vanzelf leek te begrijpen. De focus lag vooral op doen: schrijven en steeds handiger worden in het proces.",
    
    "Vandaag de dag ligt de nadruk vaker op allerlei voorbereidende activiteiten: vormen tekenen, kralen rijgen, knippen, spelen met zand en klei, motoriekspelletjes en het oefenen van de pengreep. Deze activiteiten worden gezien als bouwstenen vóór het echte schrijven.",
"Beide benaderingen hebben waarde. Aandacht voor motoriek helpt, maar schrijven leer je door het te doen. Tekenen en kleuren kunnen ondersteunen en de hand en pols soepel maken. Overtrekletters en -cijfers kunnen helpen om vormen beter te begrijpen, zolang het een tijdelijke stap blijft. De voorbereiding mag het schrijven zelf niet naar de achtergrond drukken.",   
    { 
      "type": "highlight", 
      "text": "Een kind leert uiteindelijk schrijven door te schrijven." 
    },

    "Wat een kind écht nodig heeft: een fijn HB-potlood, papier en korte momenten van oefening die regelmatig terugkomen. Slordigheid hoort erbij; het is een teken dat een kind aan het ontdekken is.",
    
    "Alles wat de start onnodig ingewikkeld maakt, kun je loslaten. Lange voorbereidende trajecten, dure materialen en methodes die beloven dat schrijven vanzelf gaat, zijn geen voorwaarde voor succes. Eenvoud werkt, en het werkt betrouwbaar.",
    
    "Schrijven ontstaat niet uit spullen, maar uit herhaling. En dat is precies wat kinderen het meest nodig hebben."
  ]
},

"spelenderwijs-leren": {
  title: "Spelenderwijs leren",
  category: "Onderwijs & Opvoeding",
  headerImageUrl: "https://umpreneur.github.io/ummischool/spelenderwijze.png",
  imageUrl: "https://umpreneur.github.io/ummischool/spelenderwijze.png",

  content: [
"Spelenderwijs leren sluit aan bij hoe jonge kinderen van nature leren. Door te spelen, te doen en te ontdekken, zijn ze betrokken bij wat ze leren. Het voelt minder als iets dat moet en meer als iets wat vanzelf ontstaat.",
"Daarom voelt deze manier van leren vaak prettig. Kinderen blijven nieuwsgierig, proberen dingen uit en durven fouten te maken. Leren wordt minder zwaar en vaak ook leuker.",
"Tijdens het spel gebeurt er meer dan alleen leren. Kinderen oefenen in omgaan met anderen, leren communiceren en ontwikkelen hun eigen ideeën.",
    { 
      type: "highlight", 
      text: "Niet alles wat kinderen moeten leren is meteen leuk, en dat hoeft ook niet zo te zijn." 
    },
    "Tegelijk heeft deze manier van leren ook een grens. Niet alles kan via spel. Sommige dingen vragen oefening, aandacht en doorzetten, ook wanneer het lastig is.",
    "Daarnaast bestaat het risico dat het onderwijs te veel meegaat in de belevingswereld van het kind. Kinderen zijn dan wel bezig, maar leren niet altijd wat nodig is. Vooral basisvaardigheden zoals lezen, schrijven en rekenen vragen oefening, herhaling en soms gewoon even volhouden.",

    "Door spel af te wisselen met momenten van luisteren, proberen en herhalen, krijgen kinderen wat ze op dat moment nodig hebben. Zo leren ze dat leren niet altijd makkelijk is, maar wel de moeite waard.",

    { 
      type: "highlight", 
      text: "Wanneer spel en oefenen elkaar afwisselen, ontstaat leren dat blijft hangen en kinderen sterker maakt." 
    },
  ]
},

"Thematisch-werken-met-jonge-kinderen": {
  title: "Thematisch werken met jonge kinderen",
  category: "Onderwijs & Opvoeding",
  headerImageUrl: "https://umpreneur.github.io/ummischool/thema.png",
  imageUrl: "https://umpreneur.github.io/ummischool/thema.png",

  content: [
"Thematisch werken betekent dat er gedurende een periode wordt gewerkt aan één onderwerp: het thema. <br>Dit thema kan terugkomen in verschillende activiteiten en leermomenten. Soms worden meerdere vakken betrokken, soms staat het thema op zichzelf. Er is ruimte om mee te bewegen met wat past en nodig is.",
    "Deze manier van werken past vooral goed bij jonge kinderen. Zij leren door ervaringen op te doen, dingen uit te proberen en te herhalen. Het belangrijkste is dat kinderen betekenis geven aan wat ze doen en daarvan leren.",

"Deze manier van werken sluit goed aan bij jonge kinderen. Zij leren door te ervaren, te proberen en te herhalen. Wat daarbij centraal staat, is dat kinderen betekenis geven aan wat ze doen en daarvan leren.",

    
"Thematisch werken helpt kinderen om zich betrokken te voelen. Een thema dat aansluit bij hun eigen leven roept herkenning op en maakt nieuwsgierig. Dat nodigt uit om mee te doen en verder te ontdekken. Door een periode met hetzelfde onderwerp bezig te zijn, krijgen kinderen de tijd om woorden, ideeën en inzichten te laten groeien.",
    "Een thema wordt daarom het liefst gekozen dicht bij de leefwereld van kinderen. Dat kan iets zijn wat hen bezighoudt, iets alledaags of iets dat op dat moment speelt. Ook een verhaal of prentenboek kan helpen om een thema te openen en richting te geven.",
    { 
      type: "highlight", 
      text: "Wanneer leren aansluit bij wat kinderen herkennen, voelen zij zich betrokken en gezien." 
    },

    "Binnen een thema kun je verschillende activiteiten aanbieden. Denk aan gesprekken, onderzoek, creatieve opdrachten, bouwen, bewegen en het bekijken of voorlezen van boeken. Niet alles hoeft tegelijk of op dezelfde manier; het gaat erom dat activiteiten betekenisvol passen bij het thema.",

    "Het plannen van een thema hoeft niet strak vast te liggen. Een thema duurt zo lang als nodig is, zolang er herhaling en verdieping plaatsvindt. Door te kijken naar wat kinderen laten zien en waar ze in blijven hangen, kun je het aanbod aanpassen.",

    "Wanneer kinderen steeds terugkomen op hetzelfde onderwerp, erover praten of ermee bezig blijven, laat dat zien dat het thema betekenisvol voor hen is. Dan vindt leren plaats op een manier die aansluit bij hun ontwikkeling.",

"<p><a href='https://www.slo.nl/publish/pages/16605/handreiking-thematiseren-met-jonge-kinderen-slo-01-2021.pdf' target='_blank' rel='noopener noreferrer'>Wil je meer achtergrondinformatie en verdieping over thematisch werken met jonge kinderen? Download hier de uitgebreide handreiking van SLO (pdf).</a></p>",
  ]
},

"denken-en-doen": {
  title: "Cognitieve en Executieve Functies",
  category: "Ontwikkeling",
  headerImageUrl: "https://umpreneur.github.io/ummischool/cognitieve-executieve-functies.png",
  imageUrl: "https://umpreneur.github.io/ummischool/cognitieve-executieve-functies.png",
  content: [
    "Kinderen zijn de hele dag bezig met leren. Soms gaat dat vanzelf, soms loopt het stroef. Ze nemen dingen in zich op, reageren op wat er gebeurt en proberen hun weg te vinden thuis, buiten en contact met anderen. Dat leren gaat niet alleen over wat ze weten, maar ook over hoe hun brein alles aanstuurt wat ze doen.",

    "Cognitieve functies hebben te maken met denken en begrijpen. Ze helpen een kind om te luisteren, dingen te onthouden, verbanden te zien en betekenis te geven aan wat het meemaakt. Dankzij deze functies kan een kind een verhaal volgen, een puzzel maken of begrijpen wat er van hem of haar verwacht wordt. Ze vormen de basis van het denken.",

    "Executieve functies zorgen ervoor dat dat denken ook echt gebruikt kan worden. Ze helpen een kind om te stoppen en even na te denken, om te beginnen aan een taak, om door te gaan als iets lastig is en om met emoties om te gaan wanneer iets niet lukt. Ze zijn niet altijd zichtbaar, maar spelen voortdurend mee in het dagelijks leven.",

    { 
      type: "highlight",
      text: "Begrijpen en weten is cognitief, het inzetten en sturen daarvan is executief."
    },

    "De belangrijkste executieve functies zijn:" +
    "<ul>" +
      "<li><strong>Inhibitie</strong>: impulsen kunnen remmen, wachten, niet direct reageren</li>" +
      "<li><strong>Werkgeheugen</strong>: informatie tijdelijk vasthouden en ermee werken</li>" +
      "<li><strong>Cognitieve flexibiliteit</strong>: kunnen schakelen tussen taken, regels of ideeën</li>" +
      "<li><strong>Planning en organisatie</strong>: stappen vooruitdenken en ordenen</li>" +
      "<li><strong>Emotieregulatie</strong>: omgaan met spanning, teleurstelling en frustratie</li>" +
      "<li><strong>Taakinitiatie</strong>: kunnen beginnen aan een taak</li>" +
      "<li><strong>Volgehouden aandacht</strong>: aandacht vasthouden ondanks afleiding</li>" +
      "<li><strong>Zelfmonitoring</strong>: eigen gedrag en werk controleren en bijsturen</li>" +
    "</ul>",

    "Deze functies ontwikkelen zich niet allemaal tegelijk. Een kind kan veel begrijpen, maar toch moeite hebben met plannen, starten of volhouden. Dat verklaart waarom iets de ene dag wel lukt en de andere dag niet.",

    "Ontwikkeling gebeurt vooral in gewone momenten. In spel, in gesprekken, in samen dingen doen en stap voor stap oefenen. Door herhaling en duidelijke verwachtingen krijgt het brein houvast om verder te groeien.",

  ]
},


"Meerderekinderen": {
  title: "Meerdere kinderen, één leerplek",
  category: "Thuisonderwijs",
  headerImageUrl: "https://umpreneur.github.io/ummischool/Meerdere.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Meerdere.png",

  content: [
    "Thuisonderwijs met meerdere kinderen betekent vaak veel schakelen. De één heeft uitleg nodig, de ander wil aandacht, en jij probeert ondertussen het overzicht te houden. Als dat soms voelt als veel: je bent niet alleen.",

    "Wat enorm helpt, is kinderen leren dat ze even mogen wachten tot jij bij hen komt. Dat klinkt simpel, maar wachten is iets wat kinderen echt moeten leren. Begin klein. Een paar minuten zelfstandig bezig zijn is al genoeg om dit rustig op te bouwen.",

    "Zelfstandig bezig zijn gaat makkelijker als een kind weet wát het kan doen. Daarom is het fijn om spullen in huis te hebben die ze zelf kunnen pakken, zoals tekenen, klei, een puzzel. Zo kun jij even rustig met één kind zitten, terwijl de ander bezig is.",

    "Wanneer één kind ouder is en meer aandacht krijgt bij het leren, kan dat jaloezie oproepen bij jongere kinderen. Zeker als ze dicht in leeftijd bij elkaar zitten en normaal veel samen spelen. Jongere kinderen willen die aandacht ook en willen vaak doen wat hun oudere broer of zus doet, ook als ze het nog niet kunnen. Dat is heel normaal.",

    "In plaats van dit tegen te houden, helpt het om jongere kinderen erbij te betrekken. Geef ze een potlood en papier en laat ze meedoen op hun eigen manier. Krassen is ook leren. Zo voelen ze zich gezien, zonder dat jij steeds hoeft te stoppen.",

    "Kinderen kunnen bovendien veel van elkaar leren. Oudere kinderen vinden het vaak leuk om iets uit te leggen, en jongere kinderen kijken mee en doen na. Dat scheelt jou energie en versterkt tegelijk hun band.",
    "Wat voor ons goed werkt, is dat we tegelijk met hetzelfde vak bezig zijn, ieder op zijn eigen niveau. We beginnen vaak met iets gezamenlijks, zoals voorlezen. Daarna gaat ieder kind verder met een taak die past bij zijn of haar niveau: de één leest met mij, de ander schrijft, knipt of werkt op een andere manier met taal. Zo is iedereen met hetzelfde vak bezig, maar krijgt ieder kind wat het nodig heeft.",

    "Niet alles hoeft samen en niet alles hoeft apart. Soms werkt naast elkaar werken fijn, soms juist samen. Kijk per moment wat past, niet wat ‘zou moeten’.",

    "En misschien wel het belangrijkste: neem de tijd. Haast maakt alles lastiger. Als er al frustratie is, wordt die alleen maar groter. Een rustiger tempo helpt niet alleen de kinderen, maar jou ook.",

  ]
},


"Adab-en-Akhlaaq": {
  title: "Adab en Akhlaaq",
  category: "Karaktervorming",
  headerImageUrl: "https://umpreneur.github.io/ummischool/Adab.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Adab.png",

  content: [
    "Adab en akhlaaq zijn geen vakken. Ze zijn een manier van leven. Ze laten zien hoe iemand omgaat met Allah, met mensen en met zichzelf.",

    "Karakter wordt niet gevormd door één gesprek of één correctie. Het groeit door wat een kind steeds opnieuw hoort, ziet en ervaart. Door woorden die terugkomen. Door gedrag dat bevestigd wordt. Door grenzen die beschermen in plaats van breken.",

    "Daarom spelen verhalen zo’n grote rol. Niet om te vermaken, maar om richting te geven. De Qur’an herhaalt verhalen niet zonder reden. Harten hebben herhaling nodig om te rijpen.",

    "Het geduld van Ayyub leert dat sabr geen stilte zonder pijn is, maar vasthouden aan Allah wanneer het moeilijk blijft. <br>Het tawhied van Ibrahim laat zien dat waarheid soms betekent: alleen durven staan. <br>En de vergeving van Yusuf toont dat waardigheid niet verloren gaat door loslaten, maar juist wordt versterkt.",

    { 
      type: "highlight",
      text: "Wat blijft terugkomen, wordt een innerlijk kompas."
    },

    "Maar adab groeit niet alleen door verhalen. Het wordt bevestigd in het dagelijks leven. In hoe conflicten worden benaderd. In hoe fouten worden hersteld. In hoe zachtheid wordt gekozen boven vernedering.",

    "Naast opbouwen vraagt karaktervorming ook om waken. Niet elke invloed voedt het hart. Woorden, beelden, omgevingen en gezelschap vormen mee vaak stiller dan verwacht.",

    "Waken betekent niet afsluiten van de wereld, maar bewust begeleiden.",

    "Daarom begrepen de vrome moeders van vroeger dat kennis alleen niet genoeg was. De moeder van Imam Malik zei tegen haar zoon dat hij eerst adab moest leren, vóór kennis. Omdat karakter wortels nodig heeft.",

    "Wanneer verhalen blijven terugkomen, gedrag dit bevestigt en het hart wordt beschermd, wordt adab geen instructie maar een manier van zijn."
  ]
},


"thuisonderwijs-is-een-amanah": {
  title: "Thuisonderwijs Is Een Amanah",
  category: "Reflectie",
  headerImageUrl: "https://umpreneur.github.io/ummischool/amanah1.png",
  imageUrl: "https://umpreneur.github.io/ummischool/amanah1.png",

  content: [
    "Thuisonderwijs is geen lifestylekeuze en geen pedagogisch experiment. <strong>Onderwijs is een recht.</strong> Dat recht verdwijnt niet zodra een kind thuis leert het komt volledig op de schouders van de ouders te liggen.",
    "Wie kiest voor thuisonderwijs neemt een grote <strong>amanah</strong> op zich.",
    "In de islam is kennis geen bijzaak. Het eerste woord van de openbaring was <strong>iqra</strong> lees. Kennis vraagt inspanning, structuur en overdracht. Zonder dat blijft thuisonderwijs een naam zonder inhoud.",
    "Wat thuisonderwijs confronterend maakt, is dat bijna alle externe controle wegvalt. Geen vaste toetsen, geen systeem dat ingrijpt als het misgaat. Dat betekent niet dat er minder verantwoordelijkheid is. Het betekent dat ouders zichzelf moeten controleren.",
    { type: "highlight", text:     "Goede bedoelingen zijn onvoldoende. Liefde is geen lesmethode. Vrijheid is geen curriculum. Een kind leert niet vanzelf lezen, schrijven of denken omdat de omgeving ‘goed bedoeld’ is." },

    "Thuisonderwijs vraagt dat ouders ondernemen: tijd maken en bewaken, plannen, herhalen, evalueren — en eerlijk durven bijsturen wanneer iets niet werkt.",
    "Dat vraagt ook om volwassenheid: erkennen waar kennis of vaardigheden ontbreken, en dan hulp inschakelen in plaats van hopen dat het vanzelf goedkomt.",
    "Niet elk kind leert hetzelfde en niet elk traject ziet er hetzelfde uit. Maar elk kind heeft recht op onderwijs dat <strong>daadwerkelijk</strong> plaatsvindt niet alleen op intentie.",
    { type: "highlight", text: "Amanah zit niet in woorden, maar in daden. Niet in hoe thuisonderwijs klinkt, maar in wat er dagelijks gebeurt." },
    "Dit is geen oordeel en geen checklist. Wel een spiegel: <strong>als onderwijs een recht is, wat wordt er vandaag concreet gedaan om dat recht waar te maken?</strong>",
  ]
},

"Leren-lezen-thuis": {
  title: "Leren lezen thuis",
  category: "Onderwijs",
  headerImageUrl: "https://umpreneur.github.io/ummischool/Lezen.png",
  imageUrl: "https://umpreneur.github.io/ummischool/Lezen.png",
  content: [
    "Lezen lijkt soms iets heel groots. Maar eigenlijk begint het heel klein. <br>Eerst leert een kind letters herkennen. Die letters krijgen klanken. En die klanken worden samen een woord. Dat heet technisch lezen. Het is misschien niet het leukste stukje, maar het is wél de basis. Zonder die basis wordt alles wat daarna komt moeilijker.", 
    "Pas als dat steeds makkelijker gaat, ontstaat er ruimte voor de volgende stap: begrijpen wat er staat. Dan leest je kind niet alleen de woorden, maar snapt het ook echt het verhaal of de tekst. <br><br>En dan gebeurt er iets moois. Dan kan lezen ook leuk worden. Samen lachen om een grappige zin. Nieuwsgierig zijn naar hoe het verder gaat. Helemaal opgaan in een verhaal. Maar dat kan alleen als het lezen zelf niet meer voelt als hard werken. <br><br>Daarom is rust zo belangrijk in het begin. En herhaling. Steeds weer oefenen, op een ontspannen manier. Want vloeiend lezen ontstaat vanzelf wanneer een kind niet meer over elke letter hoeft na te denken.",
       { type: "highlight", text: "Als woorden herkennen makkelijker wordt, komt er ruimte in het hoofd. Ruimte voor tempo. Voor begrip. En vooral: voor leesplezier." },
    

"<strong>Begin je met de naam van de letter? Of met de klank?</strong> <br>Bij jonge kinderen, peuters en jonge kleuters is het heel logisch om te starten met de letternamen. Letters worden dan iets vertrouwds. De M van mama. De eerste letter van hun eigen naam. Dat voelt speels en veilig. Het gaat nog niet om lezen, maar om herkennen. <br><br>Zodra je kind écht woorden gaat lezen, verandert er iets. Dan worden de klanken belangrijk. Want woorden maak je niet met “em” en “en”, maar met “mmm” en “nnn”. Klanken zijn eigenlijk het gereedschap. Daarmee bouwt een kind woorden. Zonder klanken kun je geen woord in elkaar zetten.",


    
    "Vroeger ging leren lezen best simpel. Letters leren, klanken oefenen, woordjes hakken en plakken, hardop lezen en veel herhalen. Steeds hetzelfde kunstje, totdat het vanzelf ging. Dat gaf rust en zekerheid: kinderen leerden woorden echt lezen, niet raden.",
    "Tegenwoordig hoor je vaak dat er “meer” nodig is. Meer visueel. Meer auditief. Meer verschillende manieren door elkaar.Kinderen mogen natuurlijk op verschillende manieren ondersteund worden. Maar als het gaat om technisch leren lezen, blijft de kern heel eenvoudig. Letters leren. Klanken oefenen. Woorden opbouwen. Veel herhalen.",
"Soms loopt een kind vast. Vaak zit er dan één stukje in de basis dat nog niet stevig genoeg is. Dan helpt het om rustig te kijken: waar precies gaat het mis? <br>bij kijken (letters goed zien en onderscheiden), <br>bij horen (klanken in woorden herkennen en samenvoegen), <br>of bij doen (letters vormen, schrijven, voelen en herhalen zodat het blijft hangen).",
    { type: "highlight", text: "Begin bij de basis. En blijf herhalen, herhalen, herhalen." },
"Een goede leesaanpak bouwt rustig op. Eerst een paar letters. Dan woorden die daarbij passen. En veel herhaling. Zo leert een kind woorden echt lezen. Niet gokken, maar opbouwen. Materialen die op deze manier werken, sluiten daar goed bij aan. Zelf werk ik graag met materialen uit Veilig leren lezen, omdat ze precies die rustige opbouw en herhaling bieden.",
    
    "Dit zijn de materialen die ik gebruik bij Veilig leren lezen:",
    "Leesboek maan/zon – Oefenleesboekjes (vaak goedkoop te vinden via Vinted).",
    "<p><a href='https://leestrainer.nl/vll%20nieuw/overzicht%20kernen/index.html' target='_blank' rel='noopener noreferrer'>Leestrainer (VLL): Online oefenen per kern.</a></p>" +
"<p><a href='https://samenvooronderwijs.com/Home/Shop/Juf-Cindy' target='_blank' rel='noopener noreferrer'>Juf Cindy (VLL): Werkbladen per kern.</a></p>" +
"<p><a href='https://kleuteridee.nl/downloads-2/abc-letters/' target='_blank' rel='noopener noreferrer'>Kleuteridee (ABC letters): Letterkaarten en materiaal om letters en klanken te oefenen.</a></p>" +
"<p><a href='https://www.youtube.com/playlist?list=PLaBIbD83O7-YIKCUYjbpZpprb3iom9LbL' target='_blank' rel='noopener noreferrer'>Letters en woorden flitsen (YouTube): Flitsoefeningen voor automatiseren.</a></p>" +
"<p><a href='https://obspwa.nl/wp-content/uploads/2018/04/vllkim-art-leerlijn-maan-technisch-lezen.pdf' target='_blank' rel='noopener noreferrer'>Leerlijn maan (pdf): Overzicht per kern met bijbehorende letters.</a></p>" +
"<p><a href='https://obspwa.nl/wp-content/uploads/2018/04/vllkim-leerlijn-technisch-lezen-voor-zon-in-vll-kim-versie.pdf' target='_blank' rel='noopener noreferrer'>Leerlijn zon (pdf): Overzicht van de zonlijn met opbouw per kern.</a></p>",
    
"Er is veel te koop, veel te downloaden en veel te proberen. Maar sterk leren lezen begint en eindigt bij de basis. Letters. Klanken. Woorden. En ze vaak genoeg oefenen tot het vanzelf gaat.",
  ]
},

  
};

const faqItems = [
  {
    id: "leraar",
    question: "Maar ik ben toch geen leraar?",
    main: "Een diploma is nodig om op een school te werken, maar uitleg geven, een kind iets leren en begeleiden is geen exclusieve vaardigheid van mensen met een  lerarenopleiding. Ouders leren hun kinderen van jongs af aan al van alles. Met kennis van de lesstof, duidelijke doelen en goede methodes kan ook zonder lerarenopleiding verantwoord onderwijs worden gegeven. Waar extra expertise nodig is, kan altijd hulp worden ingeschakeld.",
  },
    
  {
    id: "isolatie",
    question: "Krijgt mijn kind genoeg sociale contacten?",
    main: "Sociale contacten kunnen op verschillende manieren ontstaan. Veel gezinnen ontmoeten andere kinderen via sportclubs, speelafspraken, speeltuinen, uitstapjes of thuisonderwijsgroepen. Hoe vaak dat gebeurt, hangt ook af van de initiatieven die ouders nemen.",
  },
   {
    id: "vervolgonderwijs",
    question: "Kan mijn kind doorstromen naar vervolgonderwijs?",
    main: "Kinderen uit het thuisonderwijs kunnen instromen in het voortgezet onderwijs of later door naar mbo, hbo of universiteit. Dat kan via een reguliere aanmelding, een toelatingstoets of staatsexamens. Welke route nodig is, hangt af van de opleiding.",
  },
   {
    id: "kinderen",
    question: "Is thuisonderwijs met meerdere kinderen haalbaar?",
    main: "Ja, dat kan, maar het vraagt organisatie en realistische verwachtingen. Veel gezinnen zoeken een vorm die bij hen past. Wat mogelijk is, verschilt per gezin, per kind en per fase.",
  },
 
  {
    id: "islamitisch",
    question: "Thuisonderwijs of een islamitische school?",
    main: "Thuisonderwijs maakt het mogelijk om geloof direct mee te nemen in de lessen, het lesmateriaal, de dagelijkse structuur en zelfs de omgeving waarin je kind leert. Voor veel moslimgezinnen sluit dat beter aan bij wat zij hun kinderen religieus willen meegeven. Tegelijk is thuisonderwijs niet voor iedereen praktisch haalbaar, en zijn islamitische scholen voor veel gezinnen daarom een waardevolle en dankbare uitkomst. Welke keuze je maakt, hangt uiteindelijk af van jouw situatie, jouw kind en wat voor jullie het beste werkt.",
  },
  {
    id: "familie",
    question: "Wat als mensen in mijn omgeving het niet begrijpen?",
    main: "Je kunt uitleggen hoe jij ernaar kijkt, maar je hoeft niet iedereen te overtuigen. Niet iedereen zal het meteen begrijpen, en dat kan soms lastig zijn. Uiteindelijk beslis jij wat het beste past bij jouw gezin.",
  },

  {
    id: "werk",
    question: "Hoe combineer je thuisonderwijs met werk?",
    main: "Dat verschilt per gezin. In veel gezinnen werkt één ouder voltijd en is de andere ouder overdag beschikbaar voor de kinderen. Als beide ouders willen werken, is thuisonderwijs vaak moeilijk te combineren, omdat er iemand nodig is om het kind te begeleiden. Deeltijdwerk of (gedeeltelijk) thuiswerken kan dan meer ruimte geven. Het vraagt duidelijke keuzes, planning en soms ook financiële aanpassing.",
  },
 
 {
    id: "stoppen",
    question: "Wat als het niet lukt of we willen stoppen?",
    main: "Situaties kunnen veranderen, en dat is oké. Je kind kan altijd weer naar school. Houd er wel rekening mee dat het vaak moeilijker is om opnieuw vrijstelling te krijgen als je kind eerder op school heeft gezeten. Denk daarom goed na voordat je begint en zoek vooraf uit hoe het in jouw gemeente geregeld is.",
  },
];

const watIsItems = [
  {
    id: "wat-is",
    title: "Wat is thuisonderwijs?",
    content: "Thuisonderwijs betekent dat ouders zelf verantwoordelijk zijn voor het onderwijs van hun kind, buiten een reguliere school. Zij bepalen wat hun kind leert, hoe het leren wordt ingericht en welke materialen, methoden en bronnen daarbij worden gebruikt.",
  },
  {
    id: "leraar",
    title: "Moet je een leraar zijn?",
    content: "<strong>Nee, een lerarenopleiding is niet verplicht.</strong> Met lesmateriaal en ondersteuning kunnen ouders hun kind zelf begeleiden, eventueel met extra hulp voor bepaalde vakken.",
  },
  {
    id: "nederland",
    title: "Mag thuisonderwijs in Nederland?",
    content: "<strong>Ja, soms.</strong> In Nederland is thuisonderwijs mogelijk in bijzondere situaties, zoals bij levensovertuiging, medische of psychische redenen, of wanneer een gezin geen vaste woonplek heeft.",
  },
  {
    id: "sociale",
    title: "Is er toezicht op thuisonderwijs?",
    content: "Er is geen toezicht op de inhoud van het onderwijs zoals bij scholen. Wel wordt gecontroleerd of een gezin aan de voorwaarden voor thuisonderwijs voldoet.",
  },
  {
    id: "mogelijkheden",
    title: "Welke mogelijkheden hebben kinderen na thuisonderwijs?",
    content: "Kinderen met thuisonderwijs kunnen later verder studeren. Via staatsexamens of andere routes kunnen zij officiële diploma’s behalen en doorstromen naar vervolgonderwijs. De weg is soms anders dan op school, maar de kansen zijn hetzelfde.",
  },
  {
    id: "kosten",
    title: "Wat kost thuisonderwijs?",
    content: "Bij thuisonderwijs betalen ouders zelf voor lesmateriaal, activiteiten en eventuele examens. Dit kan bestaan uit boeken, online leermiddelen of zelfgemaakt materiaal. De kosten verschillen per gezin, maar thuisonderwijs hoeft niet duur te zijn en kan goed worden aangepast aan het beschikbare budget.",
  },
  
];

// Page state
let currentPage = 'home';
let expandedFaq = null;
let mobileMenuOpen = false;

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const nav = document.getElementById('mobile-nav');
  const hamburger = document.getElementById('hamburger-btn');
  
  if (mobileMenuOpen) {
    nav.classList.add('active');
    hamburger.classList.add('active');
  } else {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  }
}

// Close mobile menu
function closeMobileMenu() {
  mobileMenuOpen = false;
  const nav = document.getElementById('mobile-nav');
  const hamburger = document.getElementById('hamburger-btn');
  nav.classList.remove('active');
  hamburger.classList.remove('active');
}

// Initialize app
function init() {
  renderApp();
  attachEventListeners();
 handleRoute(); // ✅ belangrijk
}

// Render main app structure
function renderPage(page) {
  switch (page) {
    case "wat-is-ummi": return renderWatIsUmmiPage();
    case "waar-begin-ik": return renderWaarBeginIkPage();
    case "printables": return renderPrintablesPage();
    case "blog": return renderBlogPage();
    case "post": return renderBlogPostPage();
    case "faq": return renderFaqPage();
    case "contact": return renderContactPage();
    default: return renderHomePage();
  }
}

function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="app-wrapper">
      ${renderHeader()}
      <main>
        <div class="container">
          <div id="pages">
            ${renderHomePage()}
            ${renderWatIsUmmiPage()}
            ${renderWaarBeginIkPage()}
            ${renderPrintablesPage()}
            ${renderBlogPage()}
            ${renderBlogPostPage()}
            ${renderFaqPage()}
            ${renderContactPage()}
          </div>
        </div>
      </main>
      ${renderFooter()}
    </div>
  `;
}

// Header
function renderHeader() {
  return `
    <header>
      <div class="header-container">
<div class="logo-brand" data-testid="link-logo">
  <img src="favicon-512.png" alt="Thuisonderwijsinfo logo" class="logo-image" />
</div>
        <button class="hamburger-btn" id="hamburger-btn" data-testid="button-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="mobile-nav">
        
          <a data-page="faq" class="nav-link" data-testid="link-nav-faq">Ik Twijfel!</a>
          <a data-page="waar-begin-ik" class="nav-link" data-testid="link-nav-waar-begin-ik">Waar Begin Ik?</a>
           <a data-page="printables" class="nav-link" data-testid="link-nav-printables">Printables</a>
          <a data-page="blog" class="nav-link" data-testid="link-nav-blog">Blog</a>
          <a data-page="contact" class="nav-link" data-testid="link-nav-contact">Contact</a>
          <button data-page="wat-is-ummi" class="nav-btn-primary" data-testid="button-nav-wat-is-thuisonderwijs">Wat is Thuisonderwijs?</button>
        </nav>
      </div>
    </header>
  `;
}

// Home page
function renderHomePage() {
  return `
    <div id="page-home" class="page active">
      <div class="home-hero">
        <h1 class="home-title" data-testid="text-home-title">Thuisonderwijs</h1>
        <button class="btn-primary" data-page="waar-begin-ik" data-testid="button-waar-begin-ik-home">Waar Begin Ik?</button>
      </div>
    </div>
  `;
}

// Wat is Thuisonderwijs page
function renderWatIsUmmiPage() {
  const itemsHtml = watIsItems.map(item => `
    <div class="faq-item" data-faq-id="${item.id}" data-testid="card-thuisonderwijs-${item.id}">
      <button class="faq-button" data-testid="button-thuisonderwijs-${item.id}">
        <h3>${item.title}</h3>
        <div class="faq-toggle">
          <svg viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
      <div class="faq-content" data-testid="text-thuisonderwijs-${item.id}">
        <p>${item.content}</p>
        ${item.highlight ? `<div class="faq-highlight-quote">${item.highlight}</div>` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div id="page-wat-is-ummi" class="page">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 class="page-title" data-testid="text-wat-is-thuisonderwijs-title">Wat is Thuisonderwijs?</h1>
        <p class="faq-subtitle" data-testid="text-wat-is-thuisonderwijs-subtitle">Steeds meer gezinnen in Nederland kiezen voor thuisonderwijs. Misschien ben je benieuwd wat dit precies inhoudt. Hieronder volgt een uitleg om een goed beeld te krijgen.</p>
      </div>
      <div class="faq-section">
        ${itemsHtml}
      </div>
    </div>
  `;
}

// Waar Begin Ik page
function renderWaarBeginIkPage() {
  const steps = [
   {
  id: "intentie",
  title: "Visie",
content:
 "Thuisonderwijs begint niet bij boeken. Het begint met de vraag:<br>" +
"<strong>wat wil je voor jouw kinderen in de toekomst?</strong><br>" +
  "Welke waarden wil je meegeven?<br>" +
"Wat hebben zij nodig om te leren en te groeien?<br>" +
"En hoe leren zij het beste?<br><br>" +
 
  "Als je dit helder hebt, ontstaat er richting.<br>" +
  "Van daaruit bouw je stap voor stap aan onderwijs dat past bij jouw kind en jouw gezin.<br><br>" +
  
  "Je kunt je ideeën opschrijven in een plan.<br>"+
  "Dat is niet verplicht, maar het geeft overzicht en rust.<br>",
     highlight: "Praktisch aan de slag?<br>" + "<a href='https://www.thuisonderwijs.nl/wp-content/uploads/2023/09/Handleiding-schrijf-je-to-plan.pdf' target='_blank'>Download de handleiding schrijf je thuisonderwijs plan van NVvTO</a>"
   },

    {
      id: "leren",
      title: "Wat is er te leren?",
content:
  "Thuisonderwijs richt zich op drie gebieden: <strong>kennis, vaardigheden en waarden</strong>.<br>" +
  "Het gaat niet alleen om wat je kind leert, maar ook om hoe het zich ontwikkelt als persoon in gedrag, karakter en dagelijkse vaardigheden.<br>" +
  "Wat je aanbiedt, verschilt per leeftijd en per kind; elk kind leert op zijn of haar eigen tempo.<br><br>" +

  "In het islamitisch thuisonderwijs leren kinderen onder andere:<br>" +
  "<ul style='margin: 0.5rem 0 1rem 1.2rem; padding: 0; line-height: 1.6;'>"+
    "<li><strong>Qur’aan en (fusha) Arabisch</strong></li>" +
    "<li><strong>Adab en akhlaaq:</strong> manieren, omgangsvormen en karaktervorming</li>" +
    "<li><strong>Schoolvakken</strong> zoals taal, rekenen </li>" +
    "<li><strong>Sport</strong></li>" +
    "<li><strong>Praktische vaardigheden</strong> zoals zelfzorg, zorg voor de omgeving en verantwoordelijkheid nemen</li>" +
  "</ul>"+

  "Hieronder lees je per thema kort wat elk onderdeel inhoudt.",
     highlight: ""   // ← lege string = GEEN highlight
    },

 {
      id: "quran",
      title: "Qur'an en (fusha) Arabisch",
  content:
  "Binnen het islamitisch thuisonderwijs vormt <strong>Qur’aan en Arabisch</strong> voor veel gezinnen een belangrijk leergebied.<br><br>" +
    
  "<strong>Wat kinderen hierin leren, verschilt per leeftijd en niveau, denk aan:</strong>" +
  "<ul style='margin: 0.5rem 0 1rem 1.2rem; padding: 0; line-height: 1.6;'>" +
    "<li>het herkennen van klanken</li>" +
    "<li>het lezen van Arabische letters in verschillende schrijfvormen</li>" +
    "<li>correcte uitspraak volgens de basisregels van <strong>tajwied</strong></li>" +
    "<li>vloeiend reciteren en het stapsgewijs memoriseren van Qur’aan</li>" +
    "<li>de Arabische taal (woordenschat, zinsopbouw en eenvoudige teksten)</li>" +
  "</ul>" +

  "Je kunt dit uitbesteden, of ervoor kiezen het (deels) zelf aan te bieden.",
},


   
    {
      id: "adab",
      title: "Adab en Akhlaaq",
  content:
  "Adab en akhlaaq verwijzen naar het zichtbare gedrag en de innerlijke houding die een kind ontwikkelt in de dagelijkse omgang met anderen.<br>" +
  "Binnen het islamitisch thuisonderwijs maken deze onderwerpen vaak onderdeel uit van de opvoeding en het leerproces.<br><br>" +

  "<strong>Wat kinderen kunnen ontwikkelen:</strong><br>" +
  "<ul style='margin: 0.5rem 0 1rem 1.2rem; padding: 0; line-height: 1.6;'>" +
    "<li><strong>Adab:</strong> zichtbaar gedrag, zoals respect, beleefdheid en zorg voor anderen</li>" +
    "<li><strong>Akhlaaq:</strong> innerlijke eigenschappen, zoals eerlijkheid, zelfbeheersing en betrouwbaarheid</li>" +
    "<li><strong>Karaktervorming:</strong> vaardigheden zoals doorzetten, verantwoordelijkheid nemen en omgaan met uitdagingen</li>" +
  "</ul>" +

  "Verhalen uit de Qur’aan, sunnah en de geschiedenis van de profeten en sahaba worden gebruikt om kinderen te inspireren en te vormen, en hen voorbeelden te geven die richting en betekenis bieden.",
},

    {
      id: "schoolvakken",
      title: "Schoolvakken",
  content:
    "In Nederland zijn er kerndoelen voor het basisonderwijs.<br>" +
    "Deze zijn opgesteld door de SLO. Ze geven per leeftijd en leergebied een overzicht van onderwerpen zoals taal, rekenen en wereldoriëntatie.<br>" +
    "Je gebruikt deze informatie als richting: jij bepaalt welke vakken je thuis aanbiedt en in welk tempo dat past bij jullie gezin.<br><br>" +

    "<strong>Je bent niet gebonden aan het Nederlandse curriculum</strong><br>" +
    "Thuisonderwijs geeft ruimte om een curriculum te kiezen dat bij jullie past. Je kunt:<br>" +
    "• de Nederlandse kerndoelen volgen<br>" +
    "• kiezen voor een buitenlands curriculum, zoals het UK-curriculum, US-curriculum of het internationale IB-programma<br><br>" +

    "Welke keuze je ook maakt, het kan helpen om de ontwikkeling van je kind goed bij te houden. Zo zie je hoe je kind zich ontwikkelt en wordt aansluiten bij vervolgonderwijs makkelijker.",
  
  highlight:
    "<i>Handige bronnen:</i><br><br>" +
    "• SLO-kerndoelen:<br>" +
    "<a href='https://www.slo.nl/thema/meer/jonge-kind/doelen-jonge-kind/' target='_blank'>Bekijk de Inhoudslijnen</a><br><br>" +
    "• Wereldoriëntatie (natuur, geschiedenis, aardrijkskunde) <br>" +
    "<a href='https://www.slo.nl/sectoren/po/inhoudslijnen-po/inhoudslijnen-orientatie-jezelf-wereld/' target='_blank'>Bekijk de Inhoudslijnen</a>",
},

    {
      id: "dagelijks",
      title: "Vaardigheden uit het dagelijks leven",
  content:
  "<strong>Binnen thuisonderwijs leert je kind niet alleen uit boeken, maar ook door zelf te ontdekken, experimenteren en ervaren.</strong><br>" +
"Veel leren gebeurt in het dagelijks leven, bijvoorbeeld tijdens het koken, opruimen of wanneer je kind zelf iets uitprobeert.<br>" +
"Door deze praktische momenten groeit je kind stap voor stap in zelfstandigheid en leert het verantwoordelijkheid te nemen. Deze vaardigheden vormen een belangrijk onderdeel van de ontwikkeling.<br>",
},

  
    {
      id: "methode",
      title: "Hoe kun je thuisonderwijs vormgeven?",
      content:
  

      "<strong> Binnen thuisonderwijs zijn er verschillende manieren om het leren vorm te geven. Er is geen vaste aanpak: ieder gezin kiest wat past bij hun kind, ritme en doelen.</strong><br>" +
"Sommige ouders kiezen voor een duidelijke structuur met vaste lesmomenten. Zij werken bijvoorbeeld met lesmethodes en werkboeken per vak, vergelijkbaar met het onderwijs op school.<br>" +
"Andere ouders pakken het flexibeler aan. Zij gebruiken minder werkboeken en laten hun kind leren via leesboeken, thema’s, projecten of praktische activiteiten.<br><br>" +
"In de praktijk ontstaat vaak een combinatie van beide. Per vak of onderwerp kies je wat het beste werkt voor jouw kind.<br>"+
"<strong>Zo groeit er stap voor stap een manier van leren die aansluit bij jullie gezin en de behoeften van je kind.</strong>",
    },

    
    {
      id: "dagritme",
      title: "Dagplanning, ritme en structuur",
      content:
"Thuisonderwijs hoeft niet hetzelfde ritme te volgen als een schooldag.<br>" +
"Om structuur aan te brengen, helpt het om eerst te bepalen wat je wilt aanbieden. Daarna kun je kijken hoe je dit op een passende manier over de dag of week verdeelt.<br>" +
"Het belangrijkste is dat je kind op een regelmatige en gestructureerde manier blijft leren.<br><br>" +
"Sommige gezinnen kiezen voor vaste leermomenten. Andere gezinnen pakken het flexibeler aan. Er is geen vaste vorm die voor iedereen werkt.<br><br>" +

"<strong>Je kiest wat past bij jouw kind en jullie gezin.</strong>",

    },
    {
      id: "community",
      title: "Community",
      content:
        "Een community binnen thuisonderwijs kan er voor ieder gezin anders uitzien. Sommige gezinnen richten zich vooral op leren binnen het eigen gezin, terwijl anderen actief contact zoeken met andere thuisonderwijzers.<br>" +
"Zij spreken bijvoorbeeld af met andere gezinnen, organiseren gezamenlijke activiteiten of sluiten zich aan bij een (online) groep.<br><br>" +

"Zo’n community kan een waardevolle aanvulling zijn. Kinderen krijgen de kans om vrienden te maken en samen ervaringen op te doen, terwijl ouders ideeën kunnen uitwisselen, vragen stellen en steun vinden.<br>" +
"Een community is niet noodzakelijk om te starten met thuisonderwijs, maar veel gezinnen ervaren het wel als helpend en verrijkend.",


    },
    {
      id: "juridisch",
      title: "Juridisch: hoe regel ik een vrijstelling?",
      content:
  "In Nederland geldt leerplicht, maar geen schoolplicht. Een kind moet onderwijs krijgen, maar dat hoeft niet per se op een school, mits je voldoet aan de voorwaarden voor vrijstelling. De regels en voorwaarden kunnen per situatie verschillen. Het is daarom belangrijk om je hier goed in te verdiepen.<br><br>" +
  "In shaa Allah vind je op de onderstaande websites meer uitleg en ondersteuning.<br>",

highlight:
  "Praktische informatie:<br><br>" +

  "Meer informatie over het wettelijk kader:<br>" +
  "<a href='https://www.thuisonderwijs.nl/wettelijk/' target='_blank'>Website NVvTO</a><br><br>" +

  "Uitleg over artikel 5 onder b van de Leerplichtwet (richtingbezwaar):<br>" +
  "<a href='https://www.thuisonderwijs.nl/wettelijk/5onderb/' target='_blank'>Website NVvTO</a><br><br>" +

  "Kom je er niet uit of heb je vragen?<br>" +
  "<a href='https://thuisonderwijs.net/contact/' target='_blank'>Neem contact op met een jurist</a><br><br>" +

  "Facebookgroep voor juridische vragen:<br>" +
  "<a href='https://www.facebook.com/groups/1427208630825489' target='_blank'>Ga naar de Facebookgroep</a><br><br>" +

  "<em>Disclaimer: De bovenstaande links verwijzen naar externe websites. ik ben niet betrokken bij de inhoud of werking van deze platforms en kan geen garantie geven over de juistheid of actualiteit van de informatie.</em>",

    },
    
  ];

  const stepsHtml = steps.map(step => `
    <div class="faq-item" data-faq-id="${step.id}" data-testid="card-stap-${step.id}">
      <button class="faq-button" data-testid="button-stap-${step.id}">
        <h3>${step.title}</h3>
        <div class="faq-toggle">
          <svg viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
      <div class="faq-content" data-testid="text-stap-${step.id}">
        <p>${step.content}</p>
       ${step.highlight && step.highlight.trim() !== ""
  ? `<div class="faq-highlight-quote">${step.highlight}</div>`
  : ""
}
      </div>
    </div>
  `).join('');

  return `
    <div id="page-waar-begin-ik" class="page">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 class="page-title" data-testid="text-waar-begin-ik-title">Waar Begin Ik?</h1>
        <p class="faq-subtitle" data-testid="text-waar-begin-ik-subtitle">Je hebt besloten om voor thuisonderwijs te kiezen. Allahumma barik. Moge Allah jullie hierin bijstaan. Maar waar begin je? In sha Allah vind je hieronder een helder beginpunt.</p>
      </div>
      <div class="faq-section">
        ${stepsHtml}
      </div>
    </div>
  `;
}

// Blog page
function renderBlogPage() {
  const cardsHtml = blogPreviews.map(post => `
    <a class="blog-card" data-blog-slug="${post.slug}" data-testid="card-blog-${post.id}">
          <img src="${post.thumbnailUrl}" loading="lazy" decoding="async" alt="${post.title}" class="blog-card-image" data-testid="img-blog-${post.id}" />
      <div class="blog-card-content">
        <h3 data-testid="text-blog-title-${post.id}">${post.title}</h3>
        <p data-testid="text-blog-excerpt-${post.id}">${post.excerpt}</p>
        <span class="blog-card-link" data-testid="link-read-more-${post.id}">Lees verder →</span>
      </div>
    </a>
  `).join('');

  return `
    <div id="page-blog" class="page">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 class="page-title" data-testid="text-blog-page-title">Blog</h1>
        <p class="faq-subtitle" data-testid="text-blog-subtitle">  Deze blog is een wegwijzer voor nieuwe en zoekende ouders die hun thuisonderwijs voor jonge kinderen vorm willen geven. Niet als dé manier, maar als inspiratie om jouw eigen weg te kiezen.</p>
      </div>
      <div class="blog-stack">
        ${cardsHtml}
      </div>
    </div>
  `;
}

// Blog post page
function renderBlogPostPage() {
  return `
    <div id="page-post" class="page">
      <div style="text-align: left; margin-bottom: 2rem;">
        <button class="btn-secondary" data-page="blog" data-testid="button-back-to-blog">← Terug naar Blog</button>
      </div>
      <div class="blog-post">
        <img id="post-header-image" data-testid="img-post-header" alt="" class="blog-post-header-image" />
        <div class="blog-post-header">
          <h1 class="blog-post-title" data-testid="text-post-title" id="post-title"></h1>
          <p class="blog-post-meta" data-testid="text-post-date" id="post-date"></p>
        </div>
        <div class="blog-post-content" id="post-body" data-testid="text-post-content"></div>
      </div>
    </div>
  `;
}




// FAQ page
function renderFaqPage() {
  const itemsHtml = faqItems.map(item => `
    <div class="faq-item" data-faq-id="${item.id}" data-testid="card-faq-${item.id}">
      <button class="faq-button" data-testid="button-faq-${item.id}">
        <h3>${item.question}</h3>
        <div class="faq-toggle">
          <svg viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
      <div class="faq-content" data-testid="text-faq-${item.id}">
        <p>${item.main}</p>
${item.highlight && item.highlight.trim() !== "" 
  ? `<div class="faq-highlight-quote">${item.highlight}</div>` 
  : ""
}

      </div>
    </div>
  `).join('');

  return `
    <div id="page-faq" class="page">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 class="page-title" data-testid="text-faq-title">Ik Twijfel!</h1>
        <p class="faq-subtitle" data-testid="text-faq-subtitle">Twijfels horen erbij. Thuisonderwijs is geen klusje dat je ‘even tussendoor’ doet. Veel ouders die thuisonderwijs overwegen stellen dezelfde vragen. In sha Allah helpen de antwoorden hieronder om goed geïnformeerd keuzes te maken.</p>
      </div>
      <div class="faq-section">
        ${itemsHtml}
      </div>
    </div>
  `;
}

// Contact page
function renderContactPage() {
  return `
    <div id="page-contact" class="page">
      <div class="contact-header">
        <h1 class="page-title" data-testid="text-contact-title">Contact</h1>
        <p class="contact-subtitle" data-testid="text-contact-subtitle"><span class="highlight-accent">Altijd voor vragen</span></p>
      </div>
      <div class="contact-form-wrapper">
        <form action="https://formspree.io/f/mldqgory" method="POST" data-testid="form-contact">
          <div class="form-group">
            <label data-testid="label-name">Naam *</label>
            <input 
              type="text" 
              name="name" 
              data-testid="input-name"
              required
            />
          </div>
          <div class="form-group">
            <label data-testid="label-email">E-mail *</label>
            <input 
              type="email" 
              name="email" 
              data-testid="input-email"
              required
            />
          </div>
          <div class="form-group">
            <label data-testid="label-subject">Onderwerp *</label>
            <input 
              type="text" 
              name="subject" 
              data-testid="input-subject"
              required
            />
          </div>
          <div class="form-group">
            <label data-testid="label-message">Bericht *</label>
            <textarea 
              name="message" 
              data-testid="textarea-message"
              placeholder="Je bericht..."
              rows="6"
              required
            ></textarea>
          </div>
          <div class="form-submit">
            <button 
              type="submit" 
              class="btn-primary" 
              data-testid="button-send-contact"
            >
              Verstuur bericht
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// Footer
function renderFooter() {
  return `
    <footer data-testid="footer">
      <p data-testid="text-footer-copyright">&copy; 2025 Thuisonderwijsinfo. Alle rechten voorbehouden.</p>
    </footer>
  `;
}

function attachEventListeners() {
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // Close menu when navigation link is clicked
  const navLinks = document.querySelectorAll('#mobile-nav .nav-link, #mobile-nav .nav-btn-primary');
  navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage(link.dataset.page);
    });
  });

  // Buttons with data-page
  document.querySelectorAll('[data-page]').forEach(btn => {
    if (!btn.classList.contains('nav-link') && btn.tagName !== 'A') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage(btn.dataset.page);
      });
    }
  });

  // Blog cards
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToBlog(card.dataset.blogSlug);
    });
  });

  // FAQ items
  document.querySelectorAll('.faq-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      toggleFaq(item.dataset.faqId, item);
    });
  });

  // Contact form submission
  const contactForm = document.querySelector('form[data-testid="form-contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);

      fetch('https://formspree.io/f/mldqgory', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          const modal = document.createElement('div');
          modal.className = 'success-modal';
          modal.innerHTML = `
            <div class="success-modal-content">
              <div class="success-modal-icon">✓</div>
              <h2>Bedankt!</h2>
              <p>Je bericht is succesvol verzonden.</p>
              <p class="success-modal-subtitle">We nemen snel contact op.</p>
            </div>
          `;
          document.body.appendChild(modal);

          setTimeout(() => modal.classList.add('show'), 10);
          contactForm.reset();

          setTimeout(() => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
          }, 5000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Er is een fout opgetreden. Probeer het later opnieuw.');
      });
    });
  }

  // Logo brand home
  const logo = document.querySelector('.logo-brand');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage('home');
    });
  }
}

// Reset all FAQ items
function resetAllFaq() {
  document.querySelectorAll('.faq-item.open').forEach(item => {
    item.classList.remove('open');
  });
  expandedFaq = null;
}

window.showPage = function(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show selected page
  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');

  // Update nav highlight
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  currentPage = page;
  requestAnimationFrame(scrollToTop);
};

function showBlogPost(slug) {
  const post = blogContent[slug];
  if (!post) {
    showPage("blog");
    return;
  }

  document.getElementById('post-title').textContent = post.title;

  const img = document.getElementById('post-header-image');
  img.src = post.headerImageUrl || post.imageUrl;
  img.alt = post.title;

  const postBody = document.getElementById('post-body');
  postBody.innerHTML = post.content.map(p => {
    if (typeof p === 'string') {
      return `<p>${p}</p>`;
    }
    if (p.type === 'highlight') {
      return `<div class="blog-highlight"><p>${p.text}</p></div>`;
    }
    return '';
  }).join('');

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-post').classList.add('active');

  requestAnimationFrame(scrollToTop);
}


// Toggle FAQ
function toggleFaq(id, item) {
  if (expandedFaq === id) {
    // Close
    item.classList.remove('open');
    expandedFaq = null;
  } else {
    // Close previous
    if (expandedFaq) {
      const prevItem = document.querySelector(`[data-faq-id="${expandedFaq}"]`);
      if (prevItem) prevItem.classList.remove('open');
    }
    // Open new
    item.classList.add('open');
    expandedFaq = id;
  }
}
function navigateToPage(page) {
  const url = new URL(window.location);

  // home = helemaal schoon
  if (page === "home") {
    url.search = "";
  } else if (page === "blog") {
    url.search = "?blog";
  } else {
    // alle andere pagina’s: ?pagename
    url.search = "?" + encodeURIComponent(page);
  }

  history.pushState({}, "", url);
  showPage(page);
  resetAllFaq();
}

function navigateToBlog(slug) {
  const url = new URL(window.location);
  url.search = "?blog=" + encodeURIComponent(slug);
  history.pushState({}, "", url);
  showBlogPost(slug);
}


// ===== PRINTABLES / DOWNLOADS PAGE (VOLLEDIG) =====

// Data (sluit aan op je bestaande stijl)
  
// ========== PRINTABLES DATA ==========
const printablesItems = [
  {
    title: "Salahtracker",
    description:
      "Een weekplanner voor kinderen om hun gebeden bij te houden.",
    imageUrl: "https://umpreneur.github.io/ummischool/SalahTracker.png",
    url: "https://umpreneur.github.io/ummischool/Salahtracker.pdf",
    available: false
  },
   {
    title: "Dagritmekaarten",
    description:
      "Visuele dagritmekaarten die kinderen helpen overzicht te krijgen in de dag.",
    imageUrl: "https://umpreneur.github.io/ummischool/Dagritmekaarten.png",
    url: "https://umpreneur.github.io/ummischool/Dagritmekaarten.pdf",
    available: false
  },
  {
    title: "Duakaarten",
    description:
      "NOg iets.",
    imageUrl: "",
    url: "",
    available: false
  },

    {
    title: "Emotiekaarten",
    description:
      "iets",
    imageUrl: "",
    url: "",
    available: false
  },
      {
    title: "Themaplanning",
    description:
      "iets",
    imageUrl: "",
    url: "",
    available: false
  },

];

// ========== RENDER PRINTABLES PAGE ==========
function renderPrintablesPage() {
  const cardsHtml = printablesItems
    .map(
      item => `
        <div class="printables-card">
         <img 
  src="${item.imageUrl}" 
  alt="${item.title}" 
  class="printables-card-image"
  loading="lazy"
  decoding="async"
/>

          <div class="printables-card-content">
            <h3 class="printables-card-title">${item.title}</h3>
            <p class="printables-description">${item.description}</p>

            ${
              item.available
                ? `<a href="${item.url}" target="_blank" rel="noreferrer">
                     <button class="btn-primary printables-btn">Download</button>
                   </a>`
                : `<button class="btn-primary printables-btn" disabled>
                     Binnenkort
                   </button>`
            }
          </div>
        </div>
      `
    )
    .join("");

  return `
    <div id="page-printables" class="page">
      <div style="text-align:center; margin-bottom:3rem;">
        <h1 class="page-title">Printables</h1>
        <p class="faq-subtitle">
          Handige hulpmiddelen om structuur te brengen in jullie thuisonderwijs.
        </p>
      </div>

      <div class="printables-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

// Start app
document.addEventListener('DOMContentLoaded', init);

function handleRoute() {
  const search = window.location.search; // bv "?faq" of "?blog=Bewust-Kiezen"
  const params = new URLSearchParams(search);

  // Blogpost: ?blog=slug
  const blogSlug = params.get("blog");
  if (blogSlug) {
    showBlogPost(blogSlug);
    return;
  }

  // Blog overzicht: ?blog
  if (search === "?blog") {
    showPage("blog");
    resetAllFaq();
    return;
  }

  // Andere pagina's: ?faq / ?contact / ?printables etc.
  if (search.startsWith("?") && !search.includes("=")) {
    const page = decodeURIComponent(search.slice(1));
    showPage(page || "home");
    resetAllFaq();
    return;
  }

  // Default: home
  showPage("home");
}
window.addEventListener("popstate", handleRoute);
