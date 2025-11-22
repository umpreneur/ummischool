import { useRoute, Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Share2, Check } from "lucide-react";
import image1 from "@assets/stock_images/peaceful_morning_lig_eaf05b94.jpg";
import image2 from "@assets/stock_images/open_notebook_calend_87f74880.jpg";

const mockPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  content: string[];
  imageUrl: string;
  highlights: string[];
}> = {
  "jouw-pad-niet-dat-van-de-massa": {
    title: "Jouw Pad, Niet dat van de Massa",
    category: "Reflectie",
    date: "2024-11-15",
    imageUrl: image1,
    highlights: [
      "Vertrouw op je eigen keuzes, ook als anderen het niet begrijpen",
      "Thuisonderwijs biedt rust, diepgang en aandacht voor wie je kind werkelijk is",
      "Jij kent je kind het beste - volg je innerlijke wijsheid"
    ],
    content: [
      "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid. En precies in zo'n wereld is het gemakkelijk om te twijfelen aan een keuze die niet mainstream is, zoals thuisonderwijs.",
      "Maar wat als het niet gaat om wat anderen vinden? Wat als het gaat om wat jij diep van binnen weet dat goed is voor jouw kind?",
      "Thuisonderwijs is niet voor iedereen. Dat hoeft ook niet. Maar voor sommige gezinnen is het de mooiste, meest passende weg. Een weg die rust biedt, diepgang, aandacht. Een weg die ruimte maakt voor wie je kind werkelijk is.",
      "Het is oké om je eigen pad te kiezen. Ook al begrijpt niet iedereen het. Ook al zijn er vragen en twijfels van buitenaf. Jij kent je kind. Jij ziet wat werkt en wat niet werkt.",
      "Vertrouw daarop. Vertrouw op jezelf. En blijf lopen op het pad dat voor jullie goed voelt, ook al loopt de massa een andere kant op.",
    ],
  },
  "dagstart": {
    title: "Dagstart",
    category: "Praktisch",
    date: "2024-11-10",
    imageUrl: image2,
    highlights: [
      "Begin de dag samen met een rustig moment van verbinding",
      "Tien minuten is vaak genoeg voor een betekenisvolle dagstart",
      "Bewust aanwezig zijn helpt de hele dag anders aanvoelen"
    ],
    content: [
      "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
      "Bij ons begint de dag vaak met een kopje thee, een gesprek over hoe iedereen zich voelt, en een kort moment om stil te staan bij wat we die dag gaan doen. Soms lezen we een kort verhaal, soms kijken we samen naar buiten en praten we over het weer of de seizoenen.",
      "Het hoeft niet lang te duren. Tien minuten is vaak genoeg. Het gaat om de intentie: we starten samen, we zijn even bij elkaar, en daarna gaan we aan de slag.",
      "Deze dagstart geeft rust en richting. Het helpt kinderen om zich veilig en gezien te voelen voordat de dag echt begint. En het helpt ons als ouders om bewust aanwezig te zijn, in plaats van meteen in de hectiek te schieten.",
      "Probeer het eens. Begin de dag samen, met rust en aandacht. Je zult merken dat de hele dag anders aanvoelt.",
    ],
  },
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const post = mockPosts[slug];
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const text = post ? `${post.title} - ${url}` : url;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-foreground mb-4">
              Artikel niet gevonden
            </h1>
            <Link href="/blog">
              <span className="text-sm font-sans text-foreground hover:underline cursor-pointer">
                Terug naar blog →
              </span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 py-16 lg:py-24">
          <article 
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
              padding: "2.5rem 2rem"
            }}
            data-testid="article-container"
          >
            <Link href="/blog">
              <span
                className="inline-block text-sm font-sans mb-12 cursor-pointer transition-opacity hover:opacity-70"
                style={{ color: "#A5672B" }}
                data-testid="link-back-to-blog"
              >
                ← Terug naar blog
              </span>
            </Link>

            <header className="mb-12">
              <h1
                className="font-serif text-5xl lg:text-6xl leading-tight mb-6"
                style={{ color: "#1E1E1E" }}
                data-testid="text-post-title"
              >
                {post.title}
              </h1>

              <time
                className="font-sans text-sm block"
                style={{ color: "#6B655E" }}
                dateTime={post.date}
                data-testid="text-post-date"
              >
                {new Date(post.date).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </header>

            <div className="mb-12">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  objectFit: "cover",
                  maxHeight: "500px"
                }}
                data-testid="img-post-featured"
              />
            </div>

            <div 
              className="mb-12 p-8"
              style={{
                backgroundColor: "#FFF8F3",
                borderLeft: "4px solid #C1562F",
                borderRadius: "8px"
              }}
              data-testid="section-highlights"
            >
              <h2 
                className="font-serif text-xl mb-4"
                style={{ color: "#1E1E1E", fontWeight: 600 }}
              >
                Belangrijkste punten
              </h2>
              <ul style={{ paddingLeft: "1.5rem", color: "#5A4A42" }}>
                {post.highlights.map((highlight, index) => (
                  <li 
                    key={index} 
                    className="mb-3"
                    style={{ lineHeight: 1.6 }}
                    data-testid={`text-highlight-${index}`}
                  >
                    • {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-sans leading-relaxed mb-8 text-lg"
                  style={{ color: "#1E1E1E", lineHeight: "1.8" }}
                  data-testid={`text-paragraph-${index}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div 
              className="mb-12 pt-8 pb-8"
              style={{ borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5" }}
            >
              <p 
                className="font-sans text-sm mb-4"
                style={{ color: "#6B655E" }}
              >
                Deel dit artikel:
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center gap-2 px-4 py-2 font-sans text-sm"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer"
                  }}
                  data-testid="button-share-whatsapp"
                >
                  <Share2 size={16} />
                  WhatsApp
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 font-sans text-sm"
                  style={{
                    backgroundColor: copiedLink ? "#C1562F" : "#FFFFFF",
                    color: copiedLink ? "#FFFFFF" : "#1E1E1E",
                    borderRadius: "8px",
                    border: copiedLink ? "none" : "1px solid #E5E5E5",
                    cursor: "pointer"
                  }}
                  data-testid="button-copy-link"
                >
                  {copiedLink ? (
                    <>
                      <Check size={16} />
                      Gekopieerd!
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      Link kopiëren
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/blog">
                <span
                  className="inline-block text-sm font-sans cursor-pointer transition-opacity hover:opacity-70"
                  style={{ color: "#A5672B" }}
                  data-testid="link-back-bottom"
                >
                  ← Terug naar alle artikelen
                </span>
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
