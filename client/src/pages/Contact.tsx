import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20 px-4 sm:px-6 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Witte kaart met schaduw */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              padding: "3rem 2rem",
            }}
            className="sm:p-16"
          >
            {/* Gecentreerde titel en subtitel */}
            <header className="mb-12 text-center">
              <h1 
                className="font-serif leading-tight mb-4"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 400,
                  color: "#1E1E1E"
                }}
                data-testid="text-page-title"
              >
                Contact
              </h1>
              <p 
                className="font-sans leading-relaxed mx-auto"
                style={{
                  fontSize: "1rem",
                  color: "#6B6B6B",
                  maxWidth: "500px",
                  lineHeight: 1.6
                }}
                data-testid="text-subtitle"
              >
                Je mag alles delen, ik lees (women only).
              </p>
            </header>

            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
