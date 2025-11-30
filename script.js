// Blog Data
const blogPreviews = [
  {
    id: "1",
    title: "Jouw Pad, Niet dat van de Massa",
    excerpt: "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid.",
    slug: "jouw-pad-niet-dat-van-de-massa",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Dagstart",
    excerpt: "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
    slug: "dagstart",
    imageUrl: "https://images.unsplash.com/photo-1507842621343-583f20270319?w=800&h=600&fit=crop",
  },
];

const blogContent = {
  "jouw-pad-niet-dat-van-de-massa": {
    title: "Jouw Pad, Niet dat van de Massa",
    category: "Reflectie",
    date: "2024-11-15",
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
    id: "social",
    question: "Is thuisonderwijs niet te eenzaam voor kinderen?",
    main: "Ja. Sociale vaardigheden ontstaan op veel manieren. Thuisonderwijs vraagt wél initiatief: je organiseert ontmoetingen, activiteiten, sport, familiebezoek of gezamenlijke leermomenten.",
    highlight: "Veel kinderen bouwen hierdoor juist diepere en natuurlijkere vriendschappen op.",
  },
  {
    id: "school",
    question: "Waarom niet gewoon een islamitische school?",
    main: "Een islamitische school is een goede optie voor veel gezinnen. Thuisonderwijs is een andere mogelijkheid. In gesprekken, in omgangsvormen, in gedrag en in praktische situaties kan je geloof op een natuurlijke manier doorgegeven worden. Welke vorm je kiest, hangt af van wat het beste past bij jullie.",
    highlight: "Het biedt meer ruimte om islam op een natuurlijke manier door de dag heen te verweven.",
  },
  {
    id: "world",
    question: "Bereidt thuisonderwijs kinderen voor op de echte wereld?",
    main: "Ja. De echte wereld bestaat niet uit één leeftijdsgroep of vaste schema's. Ze leren niet minder, maar op een rustiger tempo dat beter aansluit bij hun ontwikkeling.",
    highlight: "Kinderen leren plannen, samenwerken, problemen oplossen en verantwoordelijkheid nemen.",
  },
  {
    id: "isolated",
    question: "Hoe voorkom ik dat we geïsoleerd raken?",
    main: "Door actief te blijven. Ook online zijn er gemeenschappen waar ouders elkaar steunen en ideeën delen.",
    highlight: "Zoek contact met andere gezinnen, sluit aan bij sport, clubjes, uitstapjes of lokale groepen.",
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
          <a data-page="waar-begin-ik" class="nav-link" data-testid="link-nav-waar-begin-ik">Waar Begin Ik</a>
          <a data-page="blog" class="nav-link" data-testid="link-nav-blog">Blog</a>
          <a data-page="contact" class="nav-link" data-testid="link-nav-contact">Contact</a>
          <button data-page="wat-is-ummi" class="nav-btn-primary" data-testid="button-nav-wat-is-thuisonderwijs">Wat is Thuisonderwijs</button>
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
  const items = [
    {
      id: "wat-is",
      title: "Wat is Thuisonderwijs?",
      content: "Thuisonderwijs is een keuze om je kind thuis te onderwijzen in plaats van naar een reguliere school te gaan. <span class='highlight-accent'>Het gaat niet zomaar om lessen geven, maar om een bewuste, doordachte manier van opgroeien en leren.</span>"
    },
    {
      id: "waarom-kiezen",
      title: "Waarom kiezen ouders hiervoor?",
      content: "Ouders kiezen voor thuisonderwijs om verschillende redenen: <span class='highlight-accent'>meer rust in het leven, aandacht voor de hele persoonlijkheid van het kind, ruimte voor geloof en waarden,</span> en de vrijheid om te leren op het tempo van je kind."
    },
    {
      id: "hoe-werkt",
      title: "Hoe werkt Thuisonderwijs?",
      content: "<strong>Er is veel vrijheid hoe je thuisonderwijs inricht.</strong> Sommige gezinnen werken met een vast schema, anderen volgen meer een natuurlijk ritme. <span class='highlight-accent'>Het gaat erom wat het beste past bij jullie gezin.</span>"
    },
    {
      id: "rechtelijk",
      title: "Is het rechtelijk toegestaan?",
      content: "In Nederland is thuisonderwijs onder bepaalde voorwaarden wettelijk toegestaan. <span class='highlight-accent'>Je moet toestemming krijgen van de school waar je kind was ingeschreven, of aanmelden bij de gemeente.</span>"
    },
  ];

  const itemsHtml = items.map(item => `
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
      </div>
    </div>
  `).join('');

  return `
    <div id="page-wat-is-ummi" class="page">
      <h1 class="page-title" data-testid="text-wat-is-thuisonderwijs-title">Wat is Thuisonderwijs?</h1>
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
      id: "stap1",
      title: "Stap 1: Leer jezelf kennen",
      content: "<strong>Begin met jezelf vragen te stellen:</strong> <span class='highlight-accent'>Waarom wil ik thuisonderwijs? Wat zijn mijn waarden? Welk ritme past bij ons gezin?</span> Neem tijd voor zelfreflectie."
    },
    {
      id: "stap2",
      title: "Stap 2: Verzamel informatie",
      content: "<span class='highlight-accent'>Lees boeken, blader door ons blog, kijk naar online bronnen.</span> Begrijp hoe andere gezinnen het doen en wat het juridisch inhoudt."
    },
    {
      id: "stap3",
      title: "Stap 3: Verbind met anderen",
      content: "Zoek contact met andere gezinnen die thuisonderwijs doen. <span class='highlight-accent'>Een gemeenschap geeft steun, inspiratie en praktische tips.</span>"
    },
    {
      id: "stap4",
      title: "Stap 4: Maak een plan",
      content: "<strong>Bepaal hoe jij thuisonderwijs wilt inrichten.</strong> <span class='highlight-accent'>Welk ritme? Welke vakken? Welke methode?</span> Zorg dat het aansluit bij je gezin."
    },
    {
      id: "stap5",
      title: "Stap 5: Start voorzichtig",
      content: "<strong>Begin klein.</strong> Probeer, leer, pas aan. <span class='highlight-accent'>Thuisonderwijs is een journey.</span> Er hoeft geen haast bij. Neem de tijd die je nodig hebt."
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
      </div>
    </div>
  `).join('');

  return `
    <div id="page-waar-begin-ik" class="page">
      <h1 class="page-title" data-testid="text-waar-begin-ik-title">Waar Begin Ik?</h1>
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
      <img src="${post.imageUrl}" alt="${post.title}" class="blog-card-image" data-testid="img-blog-${post.id}" />
      <div class="blog-card-content">
        <div class="blog-card-tag" data-testid="tag-blog-${post.id}">${post.title}</div>
        <h3 data-testid="text-blog-title-${post.id}">${post.title}</h3>
        <p data-testid="text-blog-excerpt-${post.id}">${post.excerpt}</p>
        <span class="blog-card-link" data-testid="link-read-more-${post.id}">Lees verder →</span>
      </div>
    </a>
  `).join('');

  return `
    <div id="page-blog" class="page">
      <div style="margin-bottom: 3rem; text-align: center;">
        <h1 class="page-title" data-testid="text-blog-page-title">Blog</h1>
        <p style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--color-dark);">wij leren thuis</p>
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
        <div class="blog-post-header">
          <h1 class="blog-post-title" data-testid="text-post-title" id="post-title"></h1>
          <p class="blog-post-meta" data-testid="text-post-date" id="post-date"></p>
        </div>
        <img id="post-image" data-testid="img-post" alt="" />
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
        <div class="faq-highlight-quote">${item.highlight}</div>
      </div>
    </div>
  `).join('');

  return `
    <div id="page-faq" class="page">
      <h1 class="page-title" data-testid="text-faq-title">Ik Twijfel!</h1>
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
        <p class="contact-subtitle" data-testid="text-contact-subtitle">Altijd voor vragen</p>
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
  document.getElementById('post-image').src = post.imageUrl;
  document.getElementById('post-image').alt = post.title;
  
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
