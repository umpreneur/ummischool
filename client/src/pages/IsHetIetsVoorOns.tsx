import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IsHetIetsVoorOns() {
  const [openAccordionId, setOpenAccordionId] = useState<string>("");

  const sections = [
    {
      id: "persoonlijke-twijfels",
      title: "Persoonlijke twijfels",
      items: [
        {
          id: "geen-lerares",
          question: "Ik ben geen lerares. Kan ik dit wel?",
          answer: (
            <>
              <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
                Ja. Je hebt geen onderwijsdiploma nodig om je kind goed te begeleiden.
              </p>
              <p className="mb-4">
                Wat telt, is dat je <strong>betrouwbare materialen</strong> gebruikt, je voorbereidt en <strong>betrokken</strong> blijft.
              </p>
              <p className="mb-4">
                Binnen de thuisonderwijsgemeenschap is veel <strong>kennis en ondersteuning</strong> te vinden.
              </p>
              <p>
                Met tijd, motivatie en zelfstudie kun je onderwijs bieden dat past bij jullie gezin.
              </p>
            </>
          )
        },
        {
          id: "kind-tekort",
          question: "Doe ik mijn kind niet tekort?",
          answer: (
            <>
              <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
                Niet wanneer je betrokken blijft en bereid bent om te leren als ouder.
              </p>
              <p className="mb-4">
                Thuisonderwijs is een <strong>bewuste keuze</strong>, geen gok.
              </p>
              <p>
                Als je openstaat voor groei, hulp zoekt wanneer dat nodig is en zorgt voor een <strong>veilige, liefdevolle omgeving</strong>, krijgt je kind een <strong>stevige basis</strong>.
              </p>
            </>
          )
        },
        {
          id: "familie-begrijpt-niet",
          question: "Wat als familie het niet begrijpt?",
          answer: (
            <>
              <p className="mb-4">
                Dat komt vaak voor.
              </p>
              <p className="mb-4">
                Leg rustig uit waarom je deze keuze maakt, maar voel <strong>geen druk</strong> om iedereen te overtuigen.
              </p>
              <p className="mb-4">
                Je hebt <strong>geen goedkeuring van anderen</strong> nodig om te kiezen wat bij jullie past.
              </p>
              <p className="font-semibold">
                Blijf vriendelijk, maar laat je koers niet bepalen door de mening van anderen.
              </p>
            </>
          )
        },
        {
          id: "partner-steunt-niet",
          question: "Wat als mijn partner het niet steunt?",
          answer: (
            <>
              <p className="mb-4">
                Dat vraagt <strong>tijd, gesprekken</strong> en <strong>wederzijds begrip</strong>.
              </p>
              <p className="mb-4">
                Thuisonderwijs werkt het beste wanneer <strong>beide ouders</strong> achter de keuze staan.
              </p>
              <p className="mb-4">
                Deel informatie, luister naar zorgen en betrek elkaar bij het proces.
              </p>
              <p className="mb-4">
                Gesprekken met andere gezinnen kan helpen om een eerlijk beeld te krijgen.
              </p>
              <p className="font-semibold">
                Met openheid groeit vaak ook vertrouwen.
              </p>
            </>
          )
        },
        {
          id: "combineren-met-werk",
          question: "Hoe combineer je thuisonderwijs met werk?",
          answer: (
            <>
              <p className="mb-4">
                Dat verschilt per gezin.
              </p>
              <p className="mb-4">
                <strong>Voltijd werken</strong> naast thuisonderwijs is meestal lastig.
              </p>
              <p className="mb-4">
                <strong>Deeltijdwerk, thuiswerken of ondernemen</strong> biedt vaak meer ruimte.
              </p>
              <p className="mb-4">
                Het vraagt planning, <strong>realistische verwachtingen</strong> en soms ook financiële aanpassing.
              </p>
              <p>
                Kijk wat haalbaar is binnen jullie situatie.
              </p>
            </>
          )
        },
        {
          id: "geen-zin-leren",
          question: "Wat als mijn kind geen zin heeft om te leren?",
          answer: (
            <>
              <p className="mb-4">
                Dat is normaal.
              </p>
              <p className="mb-4">
                Als ouder geef je <strong>richting</strong>: wat er geleerd wordt, waarom en met welk doel.
              </p>
              <p className="mb-4">
                Het helpt om het <strong>waarom duidelijk</strong> te maken, bijvoorbeeld dat lezen, schrijven en rekenen nodig zijn voor <strong>zelfstandigheid</strong> of voor het verdiepen van het geloof.
              </p>
              <p className="font-semibold">
                Duidelijkheid en structuur blijven belangrijk.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: "praktische-vragen",
      title: "Praktische vragen",
      items: [
        {
          id: "meerdere-kinderen",
          question: "Wat als ik meerdere kinderen heb?",
          answer: (
            <>
              <p className="mb-4">
                Dat vraagt <strong>organisatie</strong>, maar het kan goed werken.
              </p>
              <p className="mb-4">
                Jonge kinderen leren vooral door <strong>spelen, kijken en meedoen</strong>.
              </p>
              <p className="mb-4">
                Oudere kinderen kun je <strong>zelfstandigheid</strong> aanleren en laten helpen bij jongere broertjes of zusjes.
              </p>
              <p className="mb-4">
                Niet alles hoeft tegelijk: de één leert terwijl de ander speelt, leest of een taak doet.
              </p>
              <p className="font-semibold">
                Dagelijkse bezigheden vormen ook leermomenten in verantwoordelijkheid, samenwerking en discipline.
              </p>
            </>
          )
        },
        {
          id: "omgaan-met-anderen",
          question: "Leren ze nog omgaan met anderen?",
          answer: (
            <>
              <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
                Ja. Sociale vaardigheden ontstaan op veel manieren.
              </p>
              <p className="mb-4">
                Thuisonderwijs vraagt wél <strong>initiatief</strong>: je organiseert ontmoetingen, activiteiten, sport, familiebezoek of gezamenlijke leermomenten.
              </p>
              <p>
                Veel kinderen bouwen hierdoor juist <strong>diepere en natuurlijkere vriendschappen</strong> op.
              </p>
            </>
          )
        },
        {
          id: "islamitische-school",
          question: "Waarom niet gewoon een islamitische school?",
          answer: (
            <>
              <p className="mb-4">
                Een islamitische school is een goede optie voor veel gezinnen.
              </p>
              <p className="mb-4">
                Thuisonderwijs is een <strong>andere mogelijkheid</strong>.
              </p>
              <p className="mb-4">
                Het biedt meer ruimte om islam op een <strong>natuurlijke manier</strong> door de dag heen te verweven: in gesprekken, in omgangsvormen, in gedrag en in praktische situaties.
              </p>
              <p className="font-semibold">
                Welke vorm je kiest, hangt af van wat het beste past bij jullie waarden, ritme en behoeften.
              </p>
            </>
          )
        },
        {
          id: "echte-wereld",
          question: "Bereidt thuisonderwijs kinderen voor op de echte wereld?",
          answer: (
            <>
              <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
                Ja. De echte wereld bestaat niet uit één leeftijdsgroep of vaste schema's.
              </p>
              <p className="mb-4">
                Kinderen leren <strong>plannen, samenwerken, problemen oplossen</strong> en <strong>verantwoordelijkheid nemen</strong>.
              </p>
              <p>
                Ze leren niet minder, maar op een <strong>rustiger tempo</strong> dat beter aansluit bij hun ontwikkeling.
              </p>
            </>
          )
        },
        {
          id: "niet-geisoleerd",
          question: "Hoe voorkom ik dat we geïsoleerd raken?",
          answer: (
            <>
              <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
                Door actief te blijven.
              </p>
              <p className="mb-4">
                Zoek <strong>contact met andere gezinnen</strong>, sluit aan bij sport, clubjes, uitstapjes of lokale groepen.
              </p>
              <p>
                Ook online zijn er <strong>gemeenschappen</strong> waar ouders elkaar steunen en ideeën delen.
              </p>
            </>
          )
        },
        {
          id: "niet-lukt-stoppen",
          question: "Wat als het niet lukt of we willen stoppen?",
          answer: (
            <>
              <p className="mb-4">
                Situaties kunnen veranderen, en dat is oké.
              </p>
              <p className="mb-4">
                Een kind kan altijd weer naar school.
              </p>
              <p className="mb-4">
                Let er wel op dat het <strong>juridisch lastiger</strong> is om vrijstelling te krijgen wanneer een kind eerder op school heeft gezeten.
              </p>
              <p className="font-semibold">
                Denk daarom goed na voordat je begint en informeer je goed over de regels.
              </p>
            </>
          )
        }
      ]
    }
  ];

  // Flatten all questions for accordion
  const allQuestions = sections.flatMap(section => 
    section.items.map(item => ({
      ...item,
      sectionTitle: section.title
    }))
  );

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
            Ik twijfel!
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
                Ik twijfel!
              </h1>

              <div className="space-y-4">
                {allQuestions.map((item) => {
                  const isOpen = openAccordionId === item.id;
                  
                  return (
                    <div 
                      key={item.id}
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "2rem",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                      }}
                      data-testid={`desktop-question-${item.id}`}
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full text-left flex items-start justify-between gap-6"
                        style={{
                          color: "#1E1E1E",
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          cursor: "pointer",
                          background: "transparent",
                          border: "none",
                          padding: 0
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`content-desktop-${item.id}`}
                        data-testid={`button-desktop-${item.id}`}
                      >
                        <span style={{ flex: 1 }}>{item.question}</span>
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
                        id={`content-desktop-${item.id}`}
                        hidden={!isOpen}
                        style={{
                          marginTop: "1.5rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "1.05rem",
                          lineHeight: 1.8,
                          color: "#3B2C24"
                        }}
                        data-testid={`content-desktop-${item.id}`}
                      >
                        {item.answer}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Accordion Style */}
          <div className="lg:hidden">
            <div className="space-y-3">
              {allQuestions.map((item) => {
                const isOpen = openAccordionId === item.id;
                
                return (
                  <div 
                    key={item.id}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)"
                    }}
                    data-testid={`mobile-question-${item.id}`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
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
                      aria-controls={`content-mobile-${item.id}`}
                      data-testid={`button-mobile-${item.id}`}
                    >
                      <span style={{ flex: 1 }}>{item.question}</span>
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
                      id={`content-mobile-${item.id}`}
                      hidden={!isOpen}
                      style={{
                        marginTop: "1.25rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "#3B2C24"
                      }}
                      data-testid={`content-mobile-${item.id}`}
                    >
                      {item.answer}
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
