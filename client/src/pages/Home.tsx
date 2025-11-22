import Header from "@/components/Header";
import { Link } from "wouter";
import { useState } from "react";

export default function Home() {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center" style={{ padding: "0 24px" }}>
        <div className="text-center" style={{ 
          paddingTop: "64px", 
          paddingBottom: "120px"
        }}>
          <h1
            className="leading-tight"
            style={{ 
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#2B2B2B",
              marginBottom: "1.5rem",
              lineHeight: 1.2
            }}
            data-testid="text-title"
          >
            Thuisonderwijs
          </h1>
          <div 
            className="flex gap-4 justify-center flex-col sm:flex-row"
            style={{ 
              marginTop: "2rem"
            }}
          >
            <Link href="/waar-begin-ik">
              <button
                data-testid="button-waar-begin-ik"
                className="font-sans transition-colors"
                style={{
                  backgroundColor: hoverPrimary ? "#A24A29" : "#C1562F",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.9rem 2.4rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  borderRadius: "12px",
                  cursor: "pointer",
                  boxShadow: "none"
                }}
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
              >
                Waar begin ik?
              </button>
            </Link>
            <Link href="/wat-waarom">
              <button
                data-testid="button-wat-is-thuisonderwijs"
                className="font-sans transition-colors"
                style={{
                  backgroundColor: hoverSecondary ? "#F0D6CC" : "#F8E9E3",
                  color: "#B34728",
                  border: "1px solid #D8A892",
                  padding: "0.9rem 2.4rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  borderRadius: "12px",
                  cursor: "pointer",
                  boxShadow: "none"
                }}
                onMouseEnter={() => setHoverSecondary(true)}
                onMouseLeave={() => setHoverSecondary(false)}
              >
                Wat is thuisonderwijs?
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center">
        <p
          className="font-sans"
          style={{ 
            fontSize: "12px",
            color: "#6E6E6E"
          }}
          data-testid="text-copyright"
        >
          © 2025 Thuisonderwijsinfo. Alle rechten voorbehouden.
        </p>
      </footer>
    </div>
  );
}
