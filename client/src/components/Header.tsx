import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/is-het-iets-voor-ons", label: "Ik twijfel!" },
    { path: "/waar-begin-ik", label: "Hoe begin ik?" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ borderBottom: "1px solid #f0f0f0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <span
              className="font-serif text-base tracking-wide cursor-pointer nav-link"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              UmmiSchool
            </span>
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: "2.5rem" }}>
            <nav className="flex items-center" style={{ gap: "2.5rem" }}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{
                    color: location === item.path ? "#C1562F" : "#2f2f2f",
                    textDecoration: "none"
                  }}
                >
                  <span
                    className={`text-sm font-sans tracking-wide cursor-pointer inline-block nav-link ${
                      location === item.path ? "nav-link-active" : ""
                    }`}
                    style={{
                      color: location === item.path ? "#C1562F" : "#2f2f2f"
                    }}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
            <Link href="/wat-waarom">
              <button
                data-testid="button-header-wat-is-thuisonderwijs"
                className="font-sans transition-colors"
                style={{
                  backgroundColor: "#C1562F",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.65rem 1.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "none"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#A84928"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C1562F"}
              >
                Wat is thuisonderwijs?
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav 
            className="md:hidden pb-6 pt-2 border-t border-border"
            style={{
              backgroundColor: "#ffffff",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem"
            }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span
                    className={`text-base font-sans block cursor-pointer transition-colors ${
                      location === item.path ? "nav-link-active" : ""
                    }`}
                    style={{ 
                      color: location === item.path ? "#C1562F" : "#2f2f2f"
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/wat-waarom">
                <button
                  data-testid="button-mobile-wat-is-thuisonderwijs"
                  className="font-sans transition-colors w-full"
                  style={{
                    backgroundColor: "#C1562F",
                    color: "#ffffff",
                    border: "none",
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "none",
                    marginTop: "0.5rem"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#A84928"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C1562F"}
                >
                  Wat is thuisonderwijs?
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
