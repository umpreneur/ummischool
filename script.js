// Blog Data
const blogPreviews = [
  {
    id: "1",
    title: "Jouw Pad, Niet dat van de Massa",
    excerpt: "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid.",
    slug: "jouw-pad-niet-dat-van-de-massa",
    thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=300&h=200&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Dagstart",
    excerpt: "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
    slug: "dagstart",
    thumbnailUrl: "https://images.unsplash.com/photo-1507842621343-583f20270319?w=300&h=200&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1507842621343-583f20270319?w=800&h=600&fit=crop",
  },
];

const blogContent = {
  "jouw-pad-niet-dat-van-de-massa": {
    title: "Jouw Pad, Niet dat van de Massa",
    category: "Reflectie",
    date: "2024-11-15",
    headerImageUrl: "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=1200&h=500&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=800&h=600&fit=crop",
    content: [
      "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid. En precies in zo'n wereld is het gemakkelijk om te twijfelen aan een keuze die niet mainstream is, zoals thuisonderwijs.",
      { type: "highlight", text: "Maar wat als het niet gaat om wat anderen vinden? Wat als het gaat om wat jij diep van binnen weet dat goed is voor jouw kind?" },
      "Thuisonderwijs is niet voor iedereen. Dat hoeft ook niet. Maar voor sommige gezinnen is het de mooiste, meest passende weg. Een weg die rust biedt, diepgang, aandacht. Een weg die ruimte maakt voor wie je kind werkelijk is.",
      "Het is oké om je eigen pad te kiezen. Ook al begrijpt niet iedereen het. Ook al zijn er vragen en twijfels van buitenaf. Jij kent je kind. Jij ziet wat werkt en wat niet werkt.",
      { type: "highlight", text: "Vertrouw daarop. Vertrouw op jezelf. En blijf lopen op het pad dat voor jullie goed voelt, ook al loopt de massa een andere kant op." },
    ],
  },
  dagstart: {
    title: "Dagstart",
    category: "Praktisch",
    date: "2024-11-10",
    headerImageUrl: "https://images.unsplash.com/photo-1507842621343-583f20270319?w=1200&h=500&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1507842621343-583f20270319?w=800&h=600&fit=crop",
    content: [
      "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
      "Bij ons begint de dag vaak met een kopje thee, een gesprek over hoe iedereen zich voelt, en een kort moment om stil te staan bij wat we die dag gaan doen. Soms lezen we een kort verhaal, soms kijken we samen naar buiten en praten we over het weer of de seizoenen.",
      { type: "highlight", text: "Het hoeft niet lang te duren. Tien minuten is vaak genoeg. Het gaat om de intentie: we starten samen, we zijn even bij elkaar, en daarna gaan we aan de slag." },
      "Deze dagstart geeft rust en richting. Het helpt kinderen om zich veilig en gezien te voelen voordat de dag echt begint. En het helpt ons als ouders om bewust aanwezig te zijn, in plaats van meteen in de hectiek te schieten.",
      { type: "highlight", text: "Probeer het eens. Begin de dag samen, met rust en aandacht. Je zult merken dat de hele dag anders aanvoelt." },
    ],
  },
};

const faqItems = [
  {
    id: "leraar",
    question: "Ik ben geen lerares. Kan ik dit wel?",
    main: "Ja, dat kan. Veel ouders zonder lerarendiploma zijn je al voorgegaan. Het vraagt inzet: informatie opzoeken en werken met betrouwbaar materiaal. Met boeken, lesmateriaal en online uitleg kom je ver, en voor lastige vakken kun je altijd extra hulp of deelnemen aan gezamenlijke lessen met andere gezinnen.",
  },
  {
    id: "tekort",
    question: "Doe ik mijn kind niet tekort?",
    main: "Niet wanneer je betrokken blijft en bereid bent om te leren als ouder. Thuisonderwijs is een bewuste keuze, geen gok. Als je openstaat voor groei, hulp zoekt wanneer dat nodig is en zorgt voor een veilige, liefdevolle omgeving, krijgt je kind een stevige basis.",
  },
  {
    id: "familie",
    question: "Wat als mensen in mijn omgeving het niet begrijpen?",
    main: "Je kunt uitleggen hoe jij ernaar kijkt, maar je hoeft niet iedereen te overtuigen. Niet iedereen zal het meteen begrijpen, en dat kan soms lastig zijn. Uiteindelijk beslis jij wat het beste past bij jouw gezin.",
  },
  {
    id: "partner",
    question: "Wat als mijn man of vrouw het niet steunt?",
    main: "Dat vraagt tijd, gesprekken en wederzijds begrip. Thuisonderwijs werkt het beste wanneer jij en je man of vrouw allebei achter de keuze staan. Je kunt informatie delen, luisteren naar elkaars zorgen en samen kijken wat mogelijk is. Gesprekken met andere gezinnen kunnen helpen om een eerlijk beeld te krijgen.",
  },
  {
    id: "werk",
    question: "Hoe combineer je thuisonderwijs met werk?",
    main: "Dat verschilt per gezin. In veel gezinnen werkt één ouder voltijd en is de andere ouder overdag beschikbaar voor de kinderen. Als beide ouders willen werken, is thuisonderwijs vaak moeilijk te combineren, omdat er iemand nodig is om het kind te begeleiden. Deeltijdwerk of (gedeeltelijk) thuiswerken kan dan meer ruimte geven. Het vraagt duidelijke keuzes, planning en soms ook financiële aanpassing.",
  },
  {
    id: "kinderen",
    question: "Is thuisonderwijs met meerdere kinderen haalbaar?",
    main: "Ja, dat kan, maar het vraagt organisatie en realistische verwachtingen. Veel gezinnen ontwikkelen een eigen ritme, waarin kinderen op verschillende momenten iets doen: de één werkt even, de ander speelt of doet een eenvoudige activiteit. Jonge kinderen leren vooral in korte, begeleide momenten, terwijl oudere kinderen steeds zelfstandiger kunnen werken.",
  },
  {
    id: "islamitisch",
    question: "Thuisonderwijs of een islamitische school?",
    main: "Thuisonderwijs maakt het mogelijk om geloof direct mee te nemen in de lessen, het lesmateriaal, de dagelijkse structuur en zelfs de omgeving waarin je kind leert. Voor veel moslimgezinnen sluit dat beter aan bij wat zij hun kinderen religieus willen meegeven. Tegelijk is thuisonderwijs niet voor iedereen praktisch haalbaar, en zijn islamitische scholen voor veel gezinnen daarom een waardevolle en dankbare uitkomst. Welke keuze je maakt, hangt uiteindelijk af van jouw situatie, jouw kind en wat voor jullie het beste werkt.",
  },
  {
    id: "echte-wereld",
    question: "Bereidt thuisonderwijs kinderen voor op de echte wereld?",
    main: "Het echte leven bestaat niet uit vier muren met alleen leeftijdsgenoten of vaste schema's. Thuisonderwijs sluit dichter aan op hoe het dagelijks leven eruitziet: verschillende leeftijden door elkaar en situaties die niet altijd volgens één planning verlopen. Welke vorm het beste past, hangt af van wat jij belangrijk vindt voor jouw kind.",
  },
  {
    id: "isolatie",
    question: "Krijgt mijn kind genoeg sociale contacten?",
    main: "Contact met anderen vraagt om bewuste keuzes. Veel gezinnen sluiten aan bij sport, speelafspraken, uitstapjes of lokale thuisonderwijsgroepen. Online zijn er ook plekken waar je ervaringen kunt delen en contact kunt onderhouden. Je hoeft het niet alleen te doen, maar het komt niet vanzelf.",
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
    content: "Thuisonderwijs houdt in dat ouders zelf verantwoordelijk zijn voor het onderwijs van hun kind, buiten een reguliere school. Zij bepalen hoe het leren wordt ingericht en welke materialen of methoden zij gebruiken.",
  },
  {
    id: "leraar",
    title: "Moet je een leraar zijn?",
    content: "Nee. Ouders hebben geen lerarenopleiding nodig. Zij verzamelen zelf de benodigde kennis via lesmateriaal of andere bronnen en begeleiden hun kind daarbij. Voor specifieke vakken kunnen zij, als dat nodig is, extra hulp inschakelen.",
  },
  {
    id: "nederland",
    title: "Mag thuisonderwijs in Nederland?",
    content: "Thuisonderwijs kan in Nederland alleen in bepaalde situaties. Ouders kunnen bij de gemeente melden dat hun kind niet naar school gaat, bijvoorbeeld vanwege hun levensovertuiging, medische of psychische redenen, of omdat het gezin geen vaste woonplek heeft.",
  },
  {
    id: "sociale",
    title: "Hoe zien sociale contacten eruit bij thuisonderwijs?",
    content: "Kinderen ontmoeten anderen via sport, speelplaatsen, uitstapjes, familie, vrienden of thuisonderwijsgroepen. Hoe dit wordt ingevuld verschilt per gezin.",
  },
  {
    id: "mogelijkheden",
    title: "Welke mogelijkheden hebben kinderen later?",
    content: "Thuisonderwijsleerlingen kunnen vervolgonderwijs instromen via staatsexamens of andere trajecten. De weg is soms anders dan op school, maar uiteindelijk kunnen ze dezelfde diploma's behalen.",
  },
  {
    id: "kosten",
    title: "Wat kost thuisonderwijs?",
    content: "Ouders betalen zelf voor materialen, activiteiten en examens. Tegelijk zijn er veel gratis of goedkope opties. Zo kan elk gezin de kosten op een eigen manier vormgeven.",
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
}

// Render main app structure
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="app-wrapper">
      ${renderHeader()}
      <main>
        <div class="container">
          <div id="pages">
            ${renderHomePage()}
            ${renderWatIsUmmiPage()}
            ${renderWaarBeginIkPage()}
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
        <div class="logo-brand" data-testid="link-logo">UmmiSchool</div>
        <button class="hamburger-btn" id="hamburger-btn" data-testid="button-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="mobile-nav">
          <a data-page="faq" class="nav-link" data-testid="link-nav-faq">Ik Twijfel!</a>
          <a data-page="waar-begin-ik" class="nav-link" data-testid="link-nav-waar-begin-ik">Waar Begin Ik?</a>
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
        <p class="faq-subtitle" data-testid="text-wat-is-thuisonderwijs-subtitle">Steeds meer gezinnen kiezen in Nederland voor thuisonderwijs. Misschien ben je benieuwd wat dat precies inhoudt. Hieronder leggen we het uit, zodat je een goed beeld krijgt.</p>
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
 "Thuisonderwijs begint niet bij boeken, maar bij één vraag:<br>" +
"<strong>Wat hebben jouw kinderen nodig voor hun toekomst?</strong><br><br>" +
  "Als je dat weet, wordt kiezen eenvoudiger. Je doet alleen wat echt bij jullie gezin past.<br>" +
"Als je dat helder hebt, ontstaat er vanzelf een richting waarin je een manier van leren kunt opbouwen die echt bij jullie gezin aansluit.<br><br>"+

  "<strong>Om richting te bepalen kun je jezelf de volgende vragen stellen:</strong><br>" +
  "<ul style='margin:0.5rem 0 1rem 1rem; padding:0; line-height:1.5;'>"+
    "<li><strong>Welke waarden</strong> willen we meegeven?</li>" +
    "<li>Hoe ziet ons gezin er over <em>vijf à tien jaar</em> uit?</li>" +
    "<li>Waar wonen we dan waarschijnlijk?</li>" +
    "<li>Welke <strong>talen en vaardigheden</strong> horen bij die toekomst?</li>" +
    "<li>Welke manier van leren past bij <em>onze kinderen</em>?</li>" +
  "</ul>" +

  "<i>Deze vragen geven helderheid over wat voor jullie belangrijk is en vormen een basis om verder op te bouwen.</i>",

     highlight: "Praktisch aan de slag?<br>" + "Gebruik de NVVTO-handleiding om jouw plan te schrijven:<br><br>" + "<a href='https://www.thuisonderwijs.nl/wp-content/uploads/2023/09/Handleiding-schrijf-je-to-plan.pdf' target='_blank'>Download de handleiding</a>"
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
    "<li><strong>Basisvakken</strong> zoals taal, rekenen </li>" +
    "<li><strong>Lichaamsbeweging</strong> zoals sport</li>" +
    "<li><strong>Praktische vaardigheden</strong> zoals zelfstandigheid, verantwoordelijkheid en meedoen binnen het gezin</li>" +
  "</ul>" +

  "In de volgende onderdelen lees je per thema wat deze onderdelen inhouden."

    },

 {
      id: "quran",
      title: "Qur'an en (fusha) Arabisch",
  content:
  "Binnen het islamitisch thuisonderwijs vormt <strong>Qur’aan en Arabisch</strong> voor veel gezinnen een vast leergebied.<br>" +
  "Kinderen werken hierbij aan (afhankelijk van hun leeftijd en niveau):<br>" +

  "<ul style='margin: 0.5rem 0 1rem 1.2rem; padding: 0; line-height: 1.6;'>" +
    "<li>het herkennen van klanken</li>" +
    "<li>het lezen van Arabische letters in verschillende schrijfvormen</li>" +
    "<li>correcte uitspraak volgens de basisregels van <strong>tajwied</strong></li>" +
    "<li>vloeiend reciteren en het stapsgewijs memoriseren van Qur’aan</li>" +
    "<li>de Arabische taal (woordenschat, zinsopbouw en eenvoudige teksten)</li>" +
  "</ul>" +

  "Dit kun je zelf aanbieden, eventueel met hulp van een docent."
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

  "Verhalen uit de Qur’aan, sunnah en de geschiedenis van de profeten en sahaba worden daarbij regelmatig gebruikt om voorbeelden te bieden die aansluiten bij de belevingswereld van kinderen."
},

    {
      id: "schoolvakken",
      title: "Hoe weet ik welke schoolvakken ik moet aanbieden?",
  content:
    "Wil je weten wat kinderen in Nederland meestal leren op de basisschool? De kerndoelen van SLO geven per leeftijd en per leergebied een helder overzicht van onderwerpen zoals taal, rekenen en wereldoriëntatie.<br><br>" +

    "Je gebruikt deze informatie als richting: jij bepaalt welke vakken je thuis aanbiedt en in welk tempo dat past bij jullie gezin.<br><br>" +

    "<strong>Je bent niet gebonden aan het Nederlandse curriculum</strong><br>" +
    "Thuisonderwijs geeft ruimte om een curriculum te kiezen dat bij jullie past. Je kunt:<br>" +
    "• de Nederlandse kerndoelen volgen<br>" +
    "• kiezen voor een buitenlands curriculum, zoals het UK-curriculum, US-curriculum of het internationale IB-programma<br><br>" +

    "Welke keuze je ook maakt, het kan helpen om de ontwikkeling van je kind goed bij te houden. Dat geeft overzicht wanneer je later wilt aansluiten bij vervolgonderwijs.",
  
  highlight:
    "<i>Handige bronnen:</i><br><br>" +
    "• Huidige SLO-kerndoelen:<br>" +
    "<a href='https://www.slo.nl/thema/meer/jonge-kind/doelen-jonge-kind/' target='_blank'>Bekijk de kerndoelen</a><br><br>" +
    "• Vernieuwing kerndoelen (2025 – conceptfase):<br>" +
    "<a href='https://www.slo.nl/thema/meer/actualisatie-kerndoelen-examenprogramma/actualisatie-kerndoelen/' target='_blank'>Meer over de actualisatie</a>"
},

    {
      id: "dagelijks",
      title: "Vaardigheden uit het dagelijks leven",
  content:
  "Kinderen ontwikkelen niet alleen kennis, maar ook verschillende vaardigheden in het dagelijks leven, thuis en in hun omgeving.<br>" +
  "Tijdens alledaagse activiteiten — zoals aankleden, tafel dekken, opruimen, helpen, samenwerken of iets nieuws proberen — oefenen ze vaardigheden zoals:<br>" +

  "<ul style='margin: 0.5rem 0 1rem 1.2rem; padding: 0; line-height: 1.6;'>" +
    "<li><strong>zelfstandigheid</strong></li>" +
    "<li><strong>verantwoordelijkheid</strong></li>" +
    "<li><strong>probleemoplossend denken</strong></li>" +
    "<li><strong>samenwerken</strong></li>" +
  "</ul>" +

  "Deze vaardigheden ondersteunen het schoolse leren en maken deel uit van wat kinderen binnen thuisonderwijs kunnen ontwikkelen."

},

  
    {
      id: "methode",
      title: "Hoe kun je thuisonderwijs vormgeven?",
      content: "Thuisonderwijzers gebruiken verschillende methodes om hun onderwijs vorm te geven. Er bestaat geen vaste of voorgeschreven aanpak; ieder gezin kiest wat aansluit bij hun kinderen, ritme en doelen.<br>" +
"<strong>Veelgebruikte methodes binnen thuisonderwijs zijn onder andere:</strong><br><br>" +
        "<ul style='margin: 0.5rem 0 1rem 1.2rem; padding: 0; line-height: 1.6;'>" +

"<li><strong>Klassieke methode:</strong><br>Een aanpak die lijkt op hoe school werkt: vaste stappen, duidelijke opbouw en structuur. Dit betekent niet dat je één pakket hoeft te kopen; ouders gebruiken hiervoor vaak verschillende boeken of materialen per vak.</li>" +

"<li><strong>Charlotte Mason:</strong><br>Een methode waarbij kinderen leren met rijk geschreven, verhalende boeken (living books) in plaats van met traditionele schoolboeken. Na het lezen vertellen ze in hun eigen woorden wat ze hebben onthouden (narrations). De lessen zijn kort en afwisselend, en er is ruimte voor natuurstudie en het oefenen van goede gewoontes.</li>" +

"<li><strong>Thematisch:</strong><br>Een manier van werken waarbij één thema centraal staat. Soms worden meerdere vakken rond dat thema verbonden, maar vaak gaat het om één vak of onderdeel, terwijl andere vakken gewoon apart worden behandeld.</li>" +

"<li><strong>Montessori:</strong><br>Elementen uit de Montessori-benadering toegepast in de thuissituatie, met aandacht voor zelfstandig werken en concreet leermateriaal.</li>" +

"<li><strong>Mix:</strong><br>Veel gezinnen combineren elementen uit meerdere methodes. Zo kunnen ze bijvoorbeeld voor rekenen een gestructureerde aanpak gebruiken, voor taal rijke boeken inzetten en voor wereldoriëntatie thematisch werken. De methode past zich aan per kind en per vak.</li>" +

"</ul>"


    },
    {
      id: "dagritme",
      title: "Dagplanning, ritme en structuur",
      content: "Thuisonderwijs betekent niet dat je dezelfde tijden hoeft aan te houden als een schooldag. Je bent niet gebonden aan een vast rooster van 9:00 tot 14:30. Thuis leren werkt anders dan leren in een groep, waardoor kortere of flexibelere tijdsblokken voldoende kunnen zijn.<br><br>" +

  "Hoeveel tijd er aan leren wordt besteed, verschilt per gezin en per kind. Sommige gezinnen kiezen voor één aaneengesloten periode op de dag, anderen verdelen het over meerdere momenten. Er zijn ook gezinnen die per dag bekijken wat haalbaar is, afhankelijk van hoe de dag verloopt.<br><br>" +

  "Omdat kinderen thuis individueel kunnen werken en minder hoeven te wachten op anderen, kan de effectieve leertijd korter zijn dan in een groep. Het gaat daarbij niet om het vullen van uren, maar om momenten waarin kinderen aandachtig kunnen werken.<br><br>" +

  "Wat structuur precies betekent, verschilt eveneens per gezin. Voor de één is dat een vaste volgorde in de dag, voor de ander terugkerende momenten die herkenning geven. Thuisonderwijs kan strak, flexibel of wisselend worden ingericht — er is geen vaste vorm die voor iedereen geldt."

    },
    {
      id: "community",
      title: "Community",
      content: "Thuisonderwijs doe je als gezin, maar het kan prettig zijn om andere gezinnen te kennen die hetzelfde doen. " +
  "Ouders vinden elkaar op verschillende manieren: via online groepen zoals Facebook of WhatsApp, of door elkaar te ontmoeten bij activiteiten in de buurt.<br><br>" +

  "Soms wonen er weinig thuisonderwijzers in de directe omgeving. In dat geval starten sommige ouders zelf een kleine groep voor hun wijk of stad, zodat anderen hen makkelijker kunnen vinden. " +
  "Zo ontstaan geleidelijk contacten en kunnen gezinnen kijken wat bij hen past.<br><br>" +

  "Een netwerk kan behulpzaam zijn: kinderen ontmoeten andere kinderen, en ouders kunnen ervaringen delen met mensen die in een vergelijkbare situatie zitten. " +
  "Hoe een community eruitziet en hoe groot die is, verschilt per gezin."
    },
    {
      id: "juridisch",
      title: "Juridisch: hoe regel ik een vrijstelling?",
      content:
  "In Nederland geldt leerplicht, maar geen schoolplicht. Een kind moet leren, maar dat hoeft niet op school als je voldoet aan de voorwaarden voor vrijstelling (artikel 5b, richtingbezwaar). Dit betekent dat er geen school in de buurt is die past bij jullie levensovertuiging. Dit leg je uit in een brief aan de gemeente.<br><br>" +

  "Wanneer dien je de vrijstelling in? Je levert de vrijstellingsbrief één maand voordat je kind leerplichtig wordt in. De vrijstelling geldt per kind, dus elk kind heeft een eigen brief nodig. Je bevestigt de vrijstelling elk jaar opnieuw. Bij verhuizing meld je de vrijstelling opnieuw bij je nieuwe gemeente.<br><br>" +

  "Belangrijk om te weten: Vrijstelling is een melding, geen aanvraag. Je vraagt geen toestemming; als je aan de voorwaarden voldoet en op tijd bent, is de vrijstelling van kracht. Je hoeft niet te wachten op goedkeuring.",

highlight:
  "Praktische informatie:<br>" +
  "Bekijk uitleg en een voorbeeldbrief:<br><br>" +
  "<a href='https://www.thuisonderwijs.nl/wettelijk/5onderb/' target='_blank'>Voorbeeldbrief en juridische toelichting</a>"

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
        <div class="faq-highlight-quote">${step.highlight}</div>
      </div>
    </div>
  `).join('');

  return `
    <div id="page-waar-begin-ik" class="page">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 class="page-title" data-testid="text-waar-begin-ik-title">Waar Begin Ik?</h1>
        <p class="faq-subtitle" data-testid="text-waar-begin-ik-subtitle">Je hebt besloten om voor thuisonderwijs te gaan — Allāhumma bārik. Moge Allah jullie hierin bijstaan. En nu? Waar begin je eigenlijk? In shā' Allāh vind je hieronder een helder beginpunt.</p>
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
      <img src="${post.thumbnailUrl}" alt="${post.title}" class="blog-card-image" data-testid="img-blog-${post.id}" />
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
        <p class="faq-subtitle" data-testid="text-blog-subtitle">Welkom bij mijn blog. Hier deel ik praktische artikelen over thuisonderwijs en hoe wij het in de praktijk vormgeven.</p>
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
        ${item.highlight ? `<div class="faq-highlight-quote">${item.highlight}</div>` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div id="page-faq" class="page">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 class="page-title" data-testid="text-faq-title">Ik Twijfel!</h1>
        <p class="faq-subtitle" data-testid="text-faq-subtitle">Twijfels horen erbij. Thuisonderwijs is geen klusje dat je 'even tussendoor' doet. Veel ouders zitten met dezelfde vragen. Bi idhnillaah vind je in de antwoorden hieronder helderheid en rust.</p>
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
      <p data-testid="text-footer-copyright">&copy; 2025 UmmiSchool. Alle rechten voorbehouden.</p>
    </footer>
  `;
}

// Event listeners
function attachEventListeners() {
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Close menu when navigation link is clicked
  const navLinks = document.querySelectorAll('#mobile-nav .nav-link, #mobile-nav .nav-btn-primary');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(link.dataset.page);
      resetAllFaq();
    });
  });

  document.querySelectorAll('[data-page]').forEach(btn => {
    if (!btn.classList.contains('nav-link') && btn.tagName !== 'A') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(btn.dataset.page);
        resetAllFaq();
      });
    }
  });

  // Blog cards
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const slug = card.dataset.blogSlug;
      showBlogPost(slug);
    });
  });

  // FAQ items
  document.querySelectorAll('.faq-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const id = item.dataset.faqId;
      toggleFaq(id, item);
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
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Create and show success modal
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
          
          // Trigger animation
          setTimeout(() => modal.classList.add('show'), 10);
          
          // Reset form
          contactForm.reset();
          
          // Remove modal after 5 seconds
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
  document.querySelector('.logo-brand').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('home');
    resetAllFaq();
  });
}

// Reset all FAQ items
function resetAllFaq() {
  document.querySelectorAll('.faq-item.open').forEach(item => {
    item.classList.remove('open');
  });
  expandedFaq = null;
}

// Show page (exposed globally for inline onclick)
window.showPage = function(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show selected page
  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');
  
  // Update nav
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');
  
  currentPage = page;
  window.scrollTo(0, 0);
}

// Show blog post
function showBlogPost(slug) {
  const post = blogContent[slug];
  if (!post) {
    console.error('Post not found:', slug);
    return;
  }

  // Update post content
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('post-header-image').src = post.headerImageUrl;
  document.getElementById('post-header-image').alt = post.title;
  
  const postBody = document.getElementById('post-body');
  postBody.innerHTML = post.content.map(p => {
    if (typeof p === 'string') {
      return `<p>${p}</p>`;
    } else if (p.type === 'highlight') {
      return `<div class="blog-highlight"><p>${p.text}</p></div>`;
    }
    return '';
  }).join('');

  // Show post page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-post').classList.add('active');
  
  window.scrollTo(0, 0);
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

// Start app
document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
