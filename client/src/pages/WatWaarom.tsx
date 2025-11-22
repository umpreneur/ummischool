import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

export default function WatWaarom() {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const items = [
    {
      id: "wat-is-thuisonderwijs",
      question: "Wat is thuisonderwijs?",
      answer: (
        <>
          <p className="mb-4">
            Thuisonderwijs betekent dat <strong>ouders hun kind begeleiden</strong> bij het leren buiten een reguliere school. Dat gebeurt op een manier die past bij het gezin, met ruimte voor <strong>eigen tempo</strong>, interesses en dagelijks ritme.
          </p>
          <p className="mb-4">
            Het is een vorm van onderwijs die kinderen meer <strong>rust en aandacht</strong> kan bieden. Niet als tegenreactie op school, maar als een aanpak die soms beter aansluit.
          </p>
          <p className="font-semibold" style={{ color: "#1E1E1E" }}>
            Kort gezegd: thuisonderwijs is niet minder leren, maar <strong>anders leren</strong>.
          </p>
        </>
      )
    },
    {
      id: "leraar-zijn",
      question: "Moet je een leraar zijn om thuisonderwijs te geven?",
      answer: (
        <>
          <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
            Nee. Ouders hoeven geen docent te zijn.
          </p>
          <p>
            Thuisonderwijs draait niet om school nabootsen, maar om <strong>aansluiten bij wat een kind nodig heeft</strong>. Ouders begeleiden en bieden een <strong>rijke leeromgeving</strong>. Leren kan overal plaatsvinden: in boeken, online, musea, cursussen en dagelijkse situaties.
          </p>
        </>
      )
    },
    {
      id: "waarom-kiezen",
      question: "Waarom kiezen sommige gezinnen voor thuisonderwijs?",
      answer: (
        <>
          <p className="mb-4">
            Niet alle kinderen leren op dezelfde manier. Sommige kinderen floreren bij meer <strong>rust</strong>, <strong>flexibiliteit</strong> en <strong>persoonlijke aandacht</strong>.
          </p>
          <p>
            Thuisonderwijs geeft ruimte om te leren zonder tijdsdruk, in een <strong>tempo dat past bij het kind</strong>.
          </p>
        </>
      )
    },
    {
      id: "mag-dat-wel",
      question: "Mag thuisonderwijs in Nederland?",
      answer: (
        <>
          <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
            In bepaalde situaties wel.
          </p>
          <p className="mb-3">
            In Nederland is <strong>leren verplicht</strong>, maar <strong>school niet</strong>. Thuisonderwijs is mogelijk wanneer:
          </p>
          <ul className="mb-4" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• er geen school past bij de <strong>levensovertuiging</strong> van het gezin</li>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• een kind om <strong>medische of psychische redenen</strong> niet naar school kan</li>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• een gezin een <strong>reizend leven</strong> leidt</li>
          </ul>
          <p>
            Ouders melden dit bij de gemeente, die het besluit registreert.
          </p>
        </>
      )
    },
    {
      id: "sociaal-contact",
      question: "Hoe zit het met sociale contacten?",
      answer: (
        <>
          <p className="mb-4">
            <strong>Sociale contacten ontstaan op verschillende manieren.</strong>
          </p>
          <p>
            Kinderen ontmoeten anderen via <strong>sport</strong>, <strong>thuisonderwijsgroepen</strong>, uitstapjes, familie of vrienden. Bij elk gezin ziet dat er anders uit, maar contactmogelijkheden zijn er volop.
          </p>
        </>
      )
    },
    {
      id: "mogelijkheden-later",
      question: "Welke mogelijkheden hebben kinderen later?",
      answer: (
        <>
          <p className="mb-3">
            <strong>Kinderen die thuis leren kunnen verder via:</strong>
          </p>
          <ul className="mb-4" style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>staatsexamens</strong></li>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>vervolgonderwijs</strong></li>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• <strong>praktijkroutes</strong></li>
            <li className="mb-3" style={{ lineHeight: 1.6 }}>• werk, ondernemerschap of <strong>creatieve paden</strong></li>
          </ul>
          <p className="font-semibold" style={{ color: "#1E1E1E" }}>
            Thuisonderwijs biedt een andere route, niet minder mogelijkheden.
          </p>
        </>
      )
    },
    {
      id: "kosten",
      question: "Zijn er veel kosten aan thuisonderwijs verbonden?",
      answer: (
        <>
          <p className="mb-4 font-semibold" style={{ color: "#1E1E1E" }}>
            Thuisonderwijs hoeft niet duur te zijn.
          </p>
          <p>
            Er is veel <strong>gratis of laagdrempelig materiaal</strong> beschikbaar: bibliotheken, online bronnen, musea, natuur, thuisonderwijsgroepen en dagelijkse leermomenten.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        {/* Desktop: Accordion Style */}
        <div className="hidden lg:block">
          <div className="max-w-4xl mx-auto">
            <h1 
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3.5rem",
                fontWeight: 400,
                color: "#1E1E1E",
                marginBottom: "3rem",
                textAlign: "center"
              }}
              data-testid="text-page-title"
            >
              Wat is thuisonderwijs?
            </h1>

            <div className="space-y-4">
              {items.map((item) => {
                const isOpen = openAccordionId === item.id;
                
                return (
                  <div 
                    key={item.id}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      padding: "2rem",
                      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)"
                    }}
                    data-testid={`desktop-card-${item.id}`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left font-serif flex items-start justify-between gap-6"
                      style={{
                        color: "#1E1E1E",
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
                      <span className="flex-1">{item.question}</span>
                      
                      {isOpen ? (
                        <Minus 
                          style={{ 
                            width: "24px", 
                            height: "24px", 
                            flexShrink: 0, 
                            color: "#C1562F",
                            marginTop: "4px"
                          }} 
                        />
                      ) : (
                        <Plus 
                          style={{ 
                            width: "24px", 
                            height: "24px", 
                            flexShrink: 0, 
                            color: "#C1562F",
                            marginTop: "4px"
                          }} 
                        />
                      )}
                    </button>

                    <div 
                      id={`content-desktop-${item.id}`}
                      hidden={!isOpen}
                      data-testid={`content-desktop-${item.id}`}
                    >
                      {isOpen && (
                        <div 
                          className="mt-6"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                            color: "#3B2C24"
                          }}
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Accordion Style */}
        <div className="lg:hidden">
          <h1 
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2rem",
              fontWeight: 400,
              color: "#1E1E1E",
              marginBottom: "2rem",
              textAlign: "center"
            }}
            data-testid="text-page-title-mobile"
          >
            Wat is thuisonderwijs?
          </h1>

          <div className="space-y-3">
            {items.map((item) => {
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
                  data-testid={`mobile-card-${item.id}`}
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
                    <span className="flex-1">{item.question}</span>
                    
                    {isOpen ? (
                      <Minus 
                        style={{ 
                          width: "20px", 
                          height: "20px", 
                          flexShrink: 0, 
                          color: "#C1562F",
                          marginTop: "2px"
                        }} 
                      />
                    ) : (
                      <Plus 
                        style={{ 
                          width: "20px", 
                          height: "20px", 
                          flexShrink: 0, 
                          color: "#C1562F",
                          marginTop: "2px"
                        }} 
                      />
                    )}
                  </button>

                  <div 
                    id={`content-mobile-${item.id}`}
                    hidden={!isOpen}
                    data-testid={`content-mobile-${item.id}`}
                  >
                    {isOpen && (
                      <div 
                        className="mt-4"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "#3B2C24"
                        }}
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
