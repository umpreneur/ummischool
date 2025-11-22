import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EersteStappen() {
  const [openAccordionId, setOpenAccordionId] = useState<string>("");

  const steps = [
    { id: "stap-1", title: "Visie & Intentie", shortTitle: "Visie & Intentie" },
    { id: "stap-2", title: "Juridisch", shortTitle: "Juridisch" },
    { id: "stap-3", title: "Wat is er te leren?", shortTitle: "Wat te leren" },
    { id: "stap-4", title: "Methodes", shortTitle: "Methodes" },
    { id: "stap-5", title: "Dagplanning", shortTitle: "Dagplanning" },
    { id: "stap-6", title: "Community", shortTitle: "Community" }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? "" : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          {/* Mobile: Title above content */}
          <h1 
            className="leading-tight mb-8 lg:hidden" 
            style={{ 
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#1E1E1E",
              textAlign: "center"
            }}
            data-testid="text-page-title"
          >
            Waar begin ik?
          </h1>

          {/* Desktop: Accordion Layout */}
          <div className="hidden lg:block">
            <div className="max-w-4xl mx-auto">
              <h1 
                className="leading-tight mb-12"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3.5rem",
                  fontWeight: 400,
                  color: "#1E1E1E",
                  lineHeight: 1.15,
                  textAlign: "center"
                }}
                data-testid="text-page-title-desktop"
              >
                Waar begin ik?
              </h1>

              <div className="space-y-4">
                {steps.map((step) => {
                  const isOpen = openAccordionId === step.id;
                  
                  return (
                    <div 
                      key={step.id}
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "2rem",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                      }}
                      data-testid={`desktop-section-${step.id}`}
                    >
                      <button
                        onClick={() => toggleAccordion(step.id)}
                        className="w-full text-left flex items-start justify-between gap-6"
                        style={{
                          color: "#1E1E1E",
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.75rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          cursor: "pointer",
                          background: "transparent",
                          border: "none",
                          padding: 0
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`content-desktop-${step.id}`}
                        data-testid={`button-desktop-${step.id}`}
                      >
                        <span style={{ flex: 1 }}>{step.title}</span>
                        <svg
                          style={{
                            width: "24px",
                            height: "24px",
                            flexShrink: 0,
                            color: "#C1562F",
                            marginTop: "4px"
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {isOpen ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M20 12H4"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 4v16m8-8H4"
                            />
                          )}
                        </svg>
                      </button>
                      
                      <div 
                        id={`content-desktop-${step.id}`}
                        hidden={!isOpen}
                        style={{
                          marginTop: "1.5rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "1.05rem",
                          lineHeight: 1.8,
                          color: "#3B2C24"
                        }}
                        data-testid={`content-desktop-${step.id}`}
                      >
                        {/* Content will be rendered below for each step */}
                        {/* This content is identical to the mobile accordion content but with desktop font sizes */}
                        
                        {/* Step 1: Visie & Intentie */}
                        {step.id === "stap-1" && (
                          <>
                            <p className="mb-4" style={{ fontSize: "1.125rem" }}>
                              <strong style={{ color: "#1E1E1E" }}>إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ</strong><br />
                              <strong style={{ color: "#3B2C24" }}>Daden worden beoordeeld naar hun intenties.</strong>
                            </p>

                            <p className="mb-6">
                              Thuisonderwijs begint met weten waarom je het doet. Niet uit reactie, maar uit richting: je wilt je kind opvoeden en laten leren op een manier die past bij jullie geloof, waarden en toekomstplannen.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Denk verder dan vandaag
                            </h3>

                            <p className="mb-4">Stel jezelf vragen als:</p>

                            <ul className="mb-6" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Welke <strong>waarden</strong> willen we onze kinderen meegeven?</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Hoe zien we ons gezin over <strong>vijf of tien jaar</strong>?</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Blijven we in Nederland of bereiden we ons voor op <strong>emigratie</strong>?</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Welke <strong>talen en kennis</strong> zijn belangrijk?</li>
                              <li style={{ lineHeight: 1.6 }}>• Welk <strong>diploma of traject</strong> past daarbij?</li>
                            </ul>

                            <p className="mb-6">
                              Een heldere visie maakt keuzes eenvoudig: wat je aanbiedt, hoe je plant en waar je naartoe werkt.
                            </p>

                            <div 
                              className="p-5"
                              style={{
                                backgroundColor: "#FFF8F3",
                                borderRadius: "8px",
                                border: "1px solid #F4E5DB"
                              }}
                            >
                              <p className="font-semibold mb-3" style={{ color: "#C1562F", fontSize: "0.95rem" }}>
                                Handige resource
                              </p>
                              <a 
                                href="https://www.thuisonderwijs.nl/wp-content/uploads/2023/09/Handleiding-schrijf-je-to-plan.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:opacity-70"
                                style={{ color: "#C1562F", fontSize: "0.95rem" }}
                                data-testid="link-to-plan"
                              >
                                Handleiding "Schrijf je TO-plan"
                              </a>
                            </div>
                          </>
                        )}

                        {/* Step 2: Juridisch */}
                        {step.id === "stap-2" && (
                          <>
                            <p className="mb-5">
                              In Nederland geldt <strong>leerplicht, geen schoolplicht</strong>. Je kind moet leren, maar dit hoeft niet op school als je een vrijstelling hebt (artikel 5b – richtingbezwaar).
                            </p>

                            <p className="mb-6">
                              Dit betekent dat er in jouw omgeving geen school is die past bij jullie levensovertuiging. Dit onderbouw je in een brief aan de gemeente.
                            </p>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Wanneer dien je de vrijstelling in?
                            </h3>

                            <p className="mb-5">
                              Je levert de brief <strong>minimaal één maand</strong> voordat je kind leerplichtig wordt in.<br />
                              (Leerplicht begint op de eerste schooldag van de maand nadat een kind 5 jaar wordt.)
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Belangrijke punten
                            </h3>

                            <ul className="mb-6" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Vrijstelling geldt <strong>per kind</strong></li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Elk jaar</strong> opnieuw bevestigen</li>
                              <li style={{ lineHeight: 1.6 }}>• Bij verhuizing opnieuw melden bij de <strong>nieuwe gemeente</strong></li>
                            </ul>

                            <div 
                              className="p-5 mb-6"
                              style={{
                                backgroundColor: "#FFF8F3",
                                borderRadius: "8px",
                                border: "1px solid #F4E5DB"
                              }}
                            >
                              <p className="font-semibold mb-4" style={{ color: "#C1562F", fontSize: "0.95rem" }}>
                                Nuttige links
                              </p>
                              <div className="space-y-3" style={{ fontSize: "0.9rem" }}>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Voorbeeldbrief & uitleg</p>
                                  <a 
                                    href="https://www.thuisonderwijs.nl/wettelijk/5onderb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                    data-testid="link-voorbeeldbrief"
                                  >
                                    thuisonderwijs.nl/wettelijk/5onderb
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Juridische ondersteuning</p>
                                  <a 
                                    href="https://www.facebook.com/groups/tojur/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                    data-testid="link-facebook-juridisch"
                                  >
                                    Facebook groep TO Juridisch
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Uitleg Peter van Zuidam</p>
                                  <a 
                                    href="https://thuisonderwijs.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                    data-testid="link-peter"
                                  >
                                    thuisonderwijs.net
                                  </a>
                                </div>
                              </div>
                            </div>

                            <p 
                              className="p-4"
                              style={{
                                backgroundColor: "#FFF4E6",
                                borderRadius: "8px",
                                fontWeight: 500,
                                fontSize: "0.95rem"
                              }}
                            >
                              <strong>Belangrijk:</strong> Vrijstelling is een melding, geen aanvraag. Je vraagt geen toestemming; als je aan de voorwaarden voldoet en op tijd bent, is de vrijstelling van kracht.
                            </p>
                          </>
                        )}

                        {/* Step 3: Wat is er te leren? */}
                        {step.id === "stap-3" && (
                          <>
                            <p className="mb-6">
                              Bij thuisonderwijs kies je bewust wat je aanbiedt. Het gaat om geloof, gedrag en praktische schoolse vaardigheden.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Qur'an en (fusha) Arabisch
                            </h3>

                            <p className="mb-5">
                              Voor veel gezinnen is dit de basis. Hoe eerder een kind Qur'an hoort en Arabische klanken leert kennen, hoe natuurlijker lezen en memoriseren gaat.
                            </p>

                            <p className="mb-6">
                              Zelf begeleiden of via een docent — beide is goed. Belangrijk is dat het dagelijks onderdeel wordt van jullie ritme.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Adab & Akhlaaq
                            </h3>

                            <p className="mb-4">Goed gedrag groeit door:</p>

                            <ul className="mb-6" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Verhalen</strong> van de profeten</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Het goede <strong>voorbeeld</strong></li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Herhaling</strong> en consistentie</li>
                              <li style={{ lineHeight: 1.6 }}>• Duidelijke <strong>grenzen</strong></li>
                            </ul>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Schoolvakken
                            </h3>

                            <p className="mb-5">
                              Je hoeft niets te raden. Gebruik deze twee betrouwbare bronnen:
                            </p>

                            <div 
                              className="p-5 mb-6"
                              style={{
                                backgroundColor: "#FFF8F3",
                                borderRadius: "8px",
                                border: "1px solid #F4E5DB"
                              }}
                            >
                              <div className="space-y-4" style={{ fontSize: "0.9rem" }}>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>SLO</p>
                                  <p className="mb-2" style={{ color: "#5A4A42" }}>Leerdoelen per leeftijd en leergebied</p>
                                  <a 
                                    href="https://www.slo.nl/thema/meer/jonge-kind/doelen-jonge-kind/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                    data-testid="link-slo"
                                  >
                                    slo.nl/doelen-jonge-kind
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Van kerndoel tot referentieniveau</p>
                                  <p style={{ color: "#5A4A42" }}>Door Marielle van der Stap. Laat per groep zien hoe de leerstof oploopt.</p>
                                </div>
                              </div>
                            </div>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Praktische vaardigheden
                            </h3>

                            <p className="mb-4">Kinderen leren enorm veel door mee te doen:</p>

                            <ul className="mb-5" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Aankleden</strong> en zelfverzorging</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Opruimen</strong> en orde houden</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Tafel dekken</strong> en klaarmaken</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Kleine <strong>huishoudelijke taken</strong></li>
                              <li style={{ lineHeight: 1.6 }}>• Zelfstandig <strong>dingen proberen</strong></li>
                            </ul>

                            <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#5A4A42" }}>
                              Deze "practical life"-activiteiten bouwen concentratie, zelfstandigheid en verantwoordelijkheid op — zonder werkboek.
                            </p>
                          </>
                        )}

                        {/* Step 4: Methodes */}
                        {step.id === "stap-4" && (
                          <>
                            <p className="mb-5">
                              Er is niet één juiste manier van thuisonderwijs. Je kiest wat past bij jullie overtuiging, doelen en gezin.
                            </p>

                            <p className="mb-6">
                              Vrijheid betekent niet "maar wat doen", maar bewust kiezen hoe je kind het best leert.
                            </p>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Veelgebruikte methodes
                            </h3>

                            <div className="space-y-4 mb-6" style={{ color: "#5A4A42" }}>
                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Schoolgericht / traditioneel
                                </p>
                                <p>Je volgt de vakken van school. Handig voor later doorstromen of examens.</p>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Thematisch leren
                                </p>
                                <p>Je kiest een thema (bijv. dieren) en leert daaromheen met boeken, gesprekken en activiteiten.</p>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Montessori-stijl
                                </p>
                                <p>Zelfstandig leren, echte materialen, oefenen in eigen tempo.</p>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Charlotte Mason / living books
                                </p>
                                <p>Korte lessen, rijke boeken, natuurstudie, aandacht voor karakter.</p>
                              </div>
                            </div>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Methodes combineren
                            </h3>

                            <p className="mb-4">Veel gezinnen mixen wat werkt:</p>

                            <ul className="mb-5" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Taal</strong> schoolgericht → oefenen op speelse manier</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Rekenen</strong> uit een boek → toepassen met Montessori-materialen</li>
                              <li style={{ lineHeight: 1.6 }}>• <strong>Thema's</strong> ontdekken via living books zoals Charlotte Mason</li>
                            </ul>

                            <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#5A4A42" }}>
                              Zolang je weet waarom je iets kiest en het past bij je kind, werkt alles samen als één geheel.
                            </p>
                          </>
                        )}

                        {/* Step 5: Dagplanning */}
                        {step.id === "stap-5" && (
                          <>
                            <p className="mb-6">
                              Thuisonderwijs werkt het beste met rust, ritme en duidelijke ankerpunten. Niet strak, wel herkenbaar.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Denk na over
                            </h3>

                            <ul className="mb-6" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Hoeveel <strong>dagen</strong> je wilt lesgeven</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Vaste <strong>blokken</strong> of verdeeld over de dag</li>
                              <li style={{ lineHeight: 1.6 }}>• Hoe je <strong>buitentijd, huishouden en rust</strong> combineert</li>
                            </ul>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Voorbeeld dagritme
                            </h3>

                            <div className="space-y-5 mb-6">
                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Ochtend</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li className="mb-2">• Ontbijt & gesprek: dagen van de week, plannen</li>
                                  <li>• Eén <strong>kernvak</strong> (bijv. rekenen of Nederlands)</li>
                                </ul>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Middag</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li className="mb-2">• <strong>Buitentijd</strong>: wandelen, spelen, frisse lucht</li>
                                  <li>• Zelfstandig spel of <strong>creatieve activiteit</strong></li>
                                </ul>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Namiddag</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li className="mb-2">• Korte <strong>reflectie</strong></li>
                                  <li>• Voorlezen of thema-activiteit</li>
                                </ul>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Avond</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li>• Afsluiten met <strong>Qur'an en dua</strong></li>
                                </ul>
                              </div>
                            </div>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Tips
                            </h3>

                            <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Ochtend = <strong>geconcentreerd leren</strong></li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Middag = <strong>bewegen, ontmoeten, buiten</strong> zijn</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Gebruik vaste <strong>ankerpunten</strong> (eten, Qur'an, buiten)</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Betrek kinderen bij <strong>dagelijkse taken</strong></li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Rust en herhaling</strong> werken beter dan haast</li>
                              <li style={{ lineHeight: 1.6 }}>• Buitentijd = <strong>óók leren</strong></li>
                            </ul>
                          </>
                        )}

                        {/* Step 6: Community */}
                        {step.id === "stap-6" && (
                          <>
                            <p className="mb-5">
                              Thuisonderwijs hoeft niet eenzaam te zijn. Kinderen hebben vriendjes nodig, en jij hebt steun nodig van ouders die begrijpen hoe het is.
                            </p>

                            <p className="mb-6">
                              Gelukkig groeit het aantal gezinnen dat voor thuisonderwijs kiest. Je hoeft niet alles alleen te doen.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Waar vind je andere gezinnen?
                            </h3>

                            <ul className="mb-6" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Facebook-</strong> en <strong>WhatsApp-groepen</strong></li>
                              <li style={{ lineHeight: 1.6 }}>• <strong>Sport, moskee, Qur'anlessen</strong> en speeltuinen</li>
                            </ul>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Wat als je niemand vindt?
                            </h3>

                            <p className="mb-6">
                              Start zelf een WhatsAppgroep voor jouw wijk of stad. Begin klein: een buitendag, een speelafspraak of een ontmoeting voor zusters. Vaak sluiten er vanzelf gezinnen aan die hetzelfde zoeken. Zo groeit een kleine stap uit tot een vaste, hechte groep.
                            </p>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.125rem" }}>
                              Waarom community helpt
                            </h3>

                            <p>
                              Je kind maakt vrienden, en jij hebt steun van ouders die ook thuisonderwijs geven. Het vraagt soms moeite om een netwerk op te bouwen, maar je zult blij zijn dat je het hebt gedaan — en je kinderen ook.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Content - Accordion Style */}
          <div className="lg:hidden">
            <div className="space-y-3">
              {steps.map((step) => {
                const isOpen = openAccordionId === step.id;
                
                return (
                  <div 
                    key={step.id}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)"
                    }}
                    data-testid={`mobile-section-${step.id}`}
                  >
                    <button
                      onClick={() => toggleAccordion(step.id)}
                      className="w-full text-left font-serif flex items-start justify-between gap-4"
                      style={{
                        color: "#1E1E1E",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        lineHeight: 1.4,
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        padding: 0
                      }}
                      aria-expanded={isOpen}
                      aria-controls={`content-mobile-${step.id}`}
                      data-testid={`button-mobile-${step.id}`}
                    >
                      <span style={{ flex: 1 }}>{step.title}</span>
                      <svg
                        style={{
                          width: "20px",
                          height: "20px",
                          flexShrink: 0,
                          color: "#C1562F",
                          marginTop: "2px"
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M20 12H4"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                          />
                        )}
                      </svg>
                    </button>
                    
                    <div 
                      id={`content-mobile-${step.id}`}
                      hidden={!isOpen}
                      style={{
                        marginTop: "1.25rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "#3B2C24"
                      }}
                      data-testid={`content-mobile-${step.id}`}
                    >
                        {/* Step 1: Visie & Intentie */}
                        {step.id === "stap-1" && (
                          <>
                  <p className="mb-4" style={{ fontSize: "1rem" }}>
                    <strong style={{ color: "#1E1E1E" }}>إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ</strong><br />
                    <strong style={{ color: "#3B2C24" }}>Daden worden beoordeeld naar hun intenties.</strong>
                  </p>

                  <p className="mb-5">
                    Thuisonderwijs begint met weten waarom je het doet. Niet uit reactie, maar uit richting: je wilt je kind opvoeden en laten leren op een manier die past bij jullie geloof, waarden en toekomstplannen.
                  </p>

                  <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                    Denk verder dan vandaag
                  </h3>

                  <p className="mb-3">Stel jezelf vragen als:</p>

                  <ul className="mb-5" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                    <li className="mb-3" style={{ lineHeight: 1.6 }}>• Welke <strong>waarden</strong> willen we onze kinderen meegeven?</li>
                    <li className="mb-3" style={{ lineHeight: 1.6 }}>• Hoe zien we ons gezin over <strong>vijf of tien jaar</strong>?</li>
                    <li className="mb-3" style={{ lineHeight: 1.6 }}>• Blijven we in Nederland of bereiden we ons voor op <strong>emigratie</strong>?</li>
                    <li className="mb-3" style={{ lineHeight: 1.6 }}>• Welke <strong>talen en kennis</strong> zijn belangrijk?</li>
                    <li style={{ lineHeight: 1.6 }}>• Welk <strong>diploma of traject</strong> past daarbij?</li>
                  </ul>

                  <p className="mb-5">
                    Een heldere visie maakt keuzes eenvoudig: wat je aanbiedt, hoe je plant en waar je naartoe werkt.
                  </p>

                  <div 
                    className="p-4"
                    style={{
                      backgroundColor: "#FFF8F3",
                      borderRadius: "8px",
                      border: "1px solid #F4E5DB"
                    }}
                  >
                    <p className="font-semibold mb-2" style={{ color: "#C1562F", fontSize: "0.9rem" }}>
                      Handige resource
                    </p>
                    <a 
                      href="https://www.thuisonderwijs.nl/wp-content/uploads/2023/09/Handleiding-schrijf-je-to-plan.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70"
                      style={{ color: "#C1562F", fontSize: "0.9rem" }}
                    >
                      Handleiding "Schrijf je TO-plan"
                    </a>
                  </div>
                          </>
                        )}

                        {/* Step 2: Juridisch */}
                        {step.id === "stap-2" && (
                          <>
                            <p className="mb-5">
                              In Nederland geldt <strong>leerplicht, geen schoolplicht</strong>. Je kind moet leren, maar dit hoeft niet op school als je een vrijstelling hebt (artikel 5b – richtingbezwaar).
                            </p>

                            <p className="mb-6">
                              Dit betekent dat er in jouw omgeving geen school is die past bij jullie levensovertuiging. Dit onderbouw je in een brief aan de gemeente.
                            </p>

                            <h3 className="font-semibold mb-4" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Wanneer dien je de vrijstelling in?
                            </h3>

                            <p className="mb-5">
                              Je levert de brief <strong>minimaal één maand</strong> voordat je kind leerplichtig wordt in.<br />
                              (Leerplicht begint op de eerste schooldag van de maand nadat een kind 5 jaar wordt.)
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Belangrijke punten
                            </h3>

                            <ul className="mb-6" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Vrijstelling geldt <strong>per kind</strong></li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Elk jaar</strong> opnieuw bevestigen</li>
                              <li style={{ lineHeight: 1.6 }}>• Bij verhuizing opnieuw melden bij de <strong>nieuwe gemeente</strong></li>
                            </ul>

                            <div 
                              className="p-4 mb-6"
                              style={{
                                backgroundColor: "#FFF8F3",
                                borderRadius: "8px",
                                border: "1px solid #F4E5DB"
                              }}
                            >
                              <p className="font-semibold mb-3" style={{ color: "#C1562F", fontSize: "0.9rem" }}>
                                Nuttige links
                              </p>
                              <div className="space-y-3" style={{ fontSize: "0.9rem" }}>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Voorbeeldbrief & uitleg</p>
                                  <a 
                                    href="https://www.thuisonderwijs.nl/wettelijk/5onderb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                  >
                                    thuisonderwijs.nl/wettelijk/5onderb
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Juridische ondersteuning</p>
                                  <a 
                                    href="https://www.facebook.com/groups/tojur/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                  >
                                    Facebook groep TO Juridisch
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Uitleg Peter van Zuidam</p>
                                  <a 
                                    href="https://thuisonderwijs.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                  >
                                    thuisonderwijs.net
                                  </a>
                                </div>
                              </div>
                            </div>

                            <p 
                              className="p-4"
                              style={{
                                backgroundColor: "#FFF4E6",
                                borderRadius: "8px",
                                fontWeight: 500,
                                fontSize: "0.95rem"
                              }}
                            >
                              <strong>Belangrijk:</strong> Vrijstelling is een melding, geen aanvraag. Je vraagt geen toestemming; als je aan de voorwaarden voldoet en op tijd bent, is de vrijstelling van kracht.
                            </p>
                          </>
                        )}

                        {/* Step 3: Wat is er te leren? */}
                        {step.id === "stap-3" && (
                          <>
                            <p className="mb-5">
                              Bij thuisonderwijs kies je bewust wat je aanbiedt. Het gaat om geloof, gedrag en praktische schoolse vaardigheden.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Qur'an en (fusha) Arabisch
                            </h3>

                            <p className="mb-4">
                              Voor veel gezinnen is dit de basis. Hoe eerder een kind Qur'an hoort en Arabische klanken leert kennen, hoe natuurlijker lezen en memoriseren gaat.
                            </p>

                            <p className="mb-5">
                              Zelf begeleiden of via een docent — beide is goed. Belangrijk is dat het dagelijks onderdeel wordt van jullie ritme.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Adab & Akhlaaq
                            </h3>

                            <p className="mb-3">Goed gedrag groeit door:</p>

                            <ul className="mb-5" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Verhalen</strong> van de profeten</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Het goede <strong>voorbeeld</strong></li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Herhaling</strong> en consistentie</li>
                              <li style={{ lineHeight: 1.6 }}>• Duidelijke <strong>grenzen</strong></li>
                            </ul>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Schoolvakken
                            </h3>

                            <p className="mb-4">
                              Je hoeft niets te raden. Gebruik deze twee betrouwbare bronnen:
                            </p>

                            <div 
                              className="p-4 mb-5"
                              style={{
                                backgroundColor: "#FFF8F3",
                                borderRadius: "8px",
                                border: "1px solid #F4E5DB"
                              }}
                            >
                              <div className="space-y-3" style={{ fontSize: "0.9rem" }}>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>SLO</p>
                                  <p className="mb-2" style={{ color: "#5A4A42" }}>Leerdoelen per leeftijd en leergebied</p>
                                  <a 
                                    href="https://www.slo.nl/thema/meer/jonge-kind/doelen-jonge-kind/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-70"
                                    style={{ color: "#C1562F" }}
                                  >
                                    slo.nl/doelen-jonge-kind
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold mb-1" style={{ color: "#1E1E1E" }}>Van kerndoel tot referentieniveau</p>
                                  <p style={{ color: "#5A4A42" }}>Door Marielle van der Stap. Laat per groep zien hoe de leerstof oploopt.</p>
                                </div>
                              </div>
                            </div>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Praktische vaardigheden
                            </h3>

                            <p className="mb-3">Kinderen leren enorm veel door mee te doen:</p>

                            <ul className="mb-4" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Aankleden</strong> en zelfverzorging</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Opruimen</strong> en orde houden</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Tafel dekken</strong> en klaarmaken</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Kleine <strong>huishoudelijke taken</strong></li>
                              <li style={{ lineHeight: 1.6 }}>• Zelfstandig <strong>dingen proberen</strong></li>
                            </ul>

                            <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#5A4A42" }}>
                              Deze "practical life"-activiteiten bouwen concentratie, zelfstandigheid en verantwoordelijkheid op — zonder werkboek.
                            </p>
                          </>
                        )}

                        {/* Step 4: Methodes */}
                        {step.id === "stap-4" && (
                          <>
                            <p className="mb-4">
                              Er is niet één juiste manier van thuisonderwijs. Je kiest wat past bij jullie overtuiging, doelen en gezin.
                            </p>

                            <p className="mb-5">
                              Vrijheid betekent niet "maar wat doen", maar bewust kiezen hoe je kind het best leert.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Veelgebruikte methodes
                            </h3>

                            <div className="space-y-4 mb-5" style={{ color: "#5A4A42" }}>
                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Schoolgericht / traditioneel
                                </p>
                                <p>Je volgt de vakken van school. Handig voor later doorstromen of examens.</p>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Thematisch leren
                                </p>
                                <p>Je kiest een thema (bijv. dieren) en leert daaromheen met boeken, gesprekken en activiteiten.</p>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Montessori-stijl
                                </p>
                                <p>Zelfstandig leren, echte materialen, oefenen in eigen tempo.</p>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>
                                  Charlotte Mason / living books
                                </p>
                                <p>Korte lessen, rijke boeken, natuurstudie, aandacht voor karakter.</p>
                              </div>
                            </div>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Methodes combineren
                            </h3>

                            <p className="mb-3">Veel gezinnen mixen wat werkt:</p>

                            <ul className="mb-4" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Taal</strong> schoolgericht → oefenen op speelse manier</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Rekenen</strong> uit een boek → toepassen met Montessori-materialen</li>
                              <li style={{ lineHeight: 1.6 }}>• <strong>Thema's</strong> ontdekken via living books zoals Charlotte Mason</li>
                            </ul>

                            <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#5A4A42" }}>
                              Zolang je weet waarom je iets kiest en het past bij je kind, werkt alles samen als één geheel.
                            </p>
                          </>
                        )}

                        {/* Step 5: Dagplanning */}
                        {step.id === "stap-5" && (
                          <>
                            <p className="mb-5">
                              Thuisonderwijs werkt het beste met rust, ritme en duidelijke ankerpunten. Niet strak, wel herkenbaar.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Denk na over
                            </h3>

                            <ul className="mb-5" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Hoeveel <strong>dagen</strong> je wilt lesgeven</li>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• Vaste <strong>blokken</strong> of verdeeld over de dag</li>
                              <li style={{ lineHeight: 1.6 }}>• Hoe je <strong>buitentijd, huishouden en rust</strong> combineert</li>
                            </ul>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Voorbeeld dagritme
                            </h3>

                            <div className="space-y-4 mb-5">
                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Ochtend</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li className="mb-2">• Ontbijt & gesprek: dagen van de week, plannen</li>
                                  <li>• Eén <strong>kernvak</strong> (bijv. rekenen of Nederlands)</li>
                                </ul>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Middag</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li className="mb-2">• <strong>Buitentijd</strong>: wandelen, spelen, frisse lucht</li>
                                  <li>• Zelfstandig spel of <strong>creatieve activiteit</strong></li>
                                </ul>
                              </div>

                              <div>
                                <p className="font-semibold mb-2" style={{ color: "#C1562F" }}>Namiddag</p>
                                <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                                  <li className="mb-2">• Korte <strong>reflectie</strong></li>
                                  <li>• Voorlezen of samen luisteren naar Qur'an</li>
                                </ul>
                              </div>
                            </div>

                            <p className="mb-4" style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#5A4A42" }}>
                              Dit is slechts een voorbeeld. Jullie ritme ontstaat door te doen, en kan elke week anders zijn.
                            </p>

                            <div 
                              className="p-4"
                              style={{
                                backgroundColor: "#FFF4E6",
                                borderRadius: "8px",
                                fontWeight: 500,
                                fontSize: "0.9rem"
                              }}
                            >
                              <strong>Tip:</strong> Houd het dagritme eenvoudig en wees mild voor jezelf. Wat vandaag niet lukt, komt morgen wel.
                            </div>
                          </>
                        )}

                        {/* Step 6: Community */}
                        {step.id === "stap-6" && (
                          <>
                            <p className="mb-5">
                              Kinderen leren niet alleen van boeken, maar ook van andere kinderen. Groepsactiviteiten helpen sociale vaardigheden te ontwikkelen en geven je kind vriendjes.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Waar vind je andere gezinnen?
                            </h3>

                            <ul className="mb-5" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                              <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>Facebook-</strong> en <strong>WhatsApp-groepen</strong></li>
                              <li style={{ lineHeight: 1.6 }}>• <strong>Sport, moskee, Qur'anlessen</strong> en speeltuinen</li>
                            </ul>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Wat als je niemand vindt?
                            </h3>

                            <p className="mb-5">
                              Start zelf een WhatsAppgroep voor jouw wijk of stad. Begin klein: een buitendag, een speelafspraak of een ontmoeting voor zusters. Vaak sluiten er vanzelf gezinnen aan die hetzelfde zoeken. Zo groeit een kleine stap uit tot een vaste, hechte groep.
                            </p>

                            <h3 className="font-semibold mb-3" style={{ color: "#1E1E1E", fontSize: "1.05rem" }}>
                              Waarom community helpt
                            </h3>

                            <p>
                              Je kind maakt vrienden, en jij hebt steun van ouders die ook thuisonderwijs geven. Het vraagt soms moeite om een netwerk op te bouwen, maar je zult blij zijn dat je het hebt gedaan — en je kinderen ook.
                            </p>
                          </>
                        )}
                      </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
