import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionNav from "@/components/SectionNav";

export default function Beginnen() {
  const sections = [
    { id: "eerste-stappen", title: "Eerste stappen" },
    { id: "dagritme", title: "Dagritme opbouwen" },
    { id: "dag-structureren", title: "De dag structureren" },
    { id: "materialen", title: "Materialen & bronnen" },
    { id: "combineren", title: "Combineren met gezinsleven" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-serif text-lg text-foreground mb-6 lg:mb-8">
                  Overzicht
                </h2>
                <SectionNav sections={sections} />
              </div>
            </aside>

            <article className="flex-1 max-w-3xl">
              <header className="mb-16">
                <h1 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight mb-6">
                  Beginnen
                </h1>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  Praktische hulp voor je eerste stappen in thuisonderwijs.
                </p>
              </header>

              <section id="eerste-stappen" className="mb-20 scroll-mt-32">
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Eerste stappen
                </h2>
                <div className="space-y-4 font-sans text-foreground/90 leading-relaxed">
                  <p>
                    Beginnen met thuisonderwijs kan overweldigend voelen. Waar begin je? Wat heb je nodig? De eerste stap is simpel: rust nemen.
                  </p>
                  <p>
                    Geef jezelf en je kind tijd om te wennen aan het nieuwe ritme. Er is geen haast. Gebruik de eerste weken om elkaar beter te leren kennen als leerpartners.
                  </p>
                  <p>
                    Observeer wat werkt en wat niet. Elk kind is anders, elk gezin ook. Probeer verschillende aanpakken totdat je vindt wat bij jullie past.
                  </p>
                </div>
              </section>

              <div className="h-px bg-border mb-20"></div>

              <section id="dagritme" className="mb-20 scroll-mt-32">
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Dagritme opbouwen
                </h2>
                <div className="space-y-4 font-sans text-foreground/90 leading-relaxed">
                  <p>
                    Een vast ritme geeft houvast, maar hoeft niet star te zijn. Begin met vaste ankerpunten: opstaan, maaltijden, naar bed.
                  </p>
                  <p>
                    Bouw daar langzaam leeractiviteiten omheen. Sommige gezinnen leren 's ochtends, anderen verspreiden het door de dag.
                  </p>
                  <p>
                    Houd rekening met natuurlijke energie-pieken. Sommige kinderen zijn 's ochtends scherp, anderen juist 's middags. Pas je ritme daarop aan.
                  </p>
                </div>
              </section>

              <div className="h-px bg-border mb-20"></div>

              <section id="dag-structureren" className="mb-20 scroll-mt-32">
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  De dag structureren
                </h2>
                <div className="space-y-4 font-sans text-foreground/90 leading-relaxed">
                  <p>
                    Structuur kan verschillende vormen aannemen. Sommige gezinnen werken met vaste blokken, anderen met losse thema's.
                  </p>
                  <p>
                    Probeer een balans te vinden tussen structuur en vrijheid. Te strak voelt als school, te los kan leiden tot planloosheid.
                  </p>
                  <p>
                    Bouw pauzes in. Kinderen hebben tijd nodig om te spelen, te bewegen, en te ontspannen. Leren gebeurt ook buiten de 'lesuren'.
                  </p>
                </div>
              </section>

              <div className="h-px bg-border mb-20"></div>

              <section id="materialen" className="mb-20 scroll-mt-32">
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Materialen & bronnen
                </h2>
                <div className="space-y-4 font-sans text-foreground/90 leading-relaxed">
                  <p>
                    Je hebt niet veel nodig om te beginnen. Basismateriaal: papier, potloden, boeken uit de bibliotheek, en toegang tot internet.
                  </p>
                  <p>
                    Er zijn talloze gratis bronnen online: Khan Academy, educatieve YouTube-kanalen, werkbladen, en digitale bibliotheken.
                  </p>
                  <p>
                    Investeer vooral in goede kinderboeken en materiaal dat past bij de interesses van je kind. Kwaliteit boven kwantiteit.
                  </p>
                </div>
              </section>

              <div className="h-px bg-border mb-20"></div>

              <section id="combineren" className="mb-20 scroll-mt-32">
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Combineren met gezinsleven
                </h2>
                <div className="space-y-4 font-sans text-foreground/90 leading-relaxed">
                  <p>
                    Thuisonderwijs is geen apart onderdeel van je leven, maar verweven met je gezinsleven. Dat vraagt om grenzen en afspraken.
                  </p>
                  <p>
                    Communiceer duidelijk met je partner, andere kinderen, en je kind zelf. Wat zijn de verwachtingen? Wanneer is er ruimte voor wat?
                  </p>
                  <p>
                    Wees genadig voor jezelf. Sommige dagen lopen perfect, andere dagen niet. Dat hoort erbij. Het is een proces van vallen en opstaan.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
