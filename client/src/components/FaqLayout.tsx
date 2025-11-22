import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FaqSection {
  id: string;
  title: string;
  items: FaqItem[];
}

interface FaqLayoutProps {
  title: string;
  sections: FaqSection[];
}

export default function FaqLayout({ title, sections }: FaqLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id || "");
  const [activeItemId, setActiveItemId] = useState<string>("");
  const [openMobileId, setOpenMobileId] = useState<string>("");

  const activeSection = sections.find(section => section.id === activeSectionId);
  
  // For single section pages, use items as navigation
  const showItemNavigation = sections.length === 1;
  const navItems = showItemNavigation ? sections[0]?.items || [] : [];

  const toggleMobile = (id: string) => {
    setOpenMobileId(openMobileId === id ? "" : id);
  };

  const scrollToItem = (itemId: string) => {
    setActiveItemId(itemId);
    const element = document.getElementById(`faq-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          {/* Mobile: Title above content */}
          <h1 
            className="leading-tight mb-12 lg:hidden" 
            style={{ 
              fontFamily: "'Lora', serif",
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#1f1f1f",
            }}
            data-testid="text-page-title"
          >
            {title}
          </h1>

          {/* Desktop: Sidebar + Content */}
          <div className="hidden lg:flex gap-12">
            {/* Left Sidebar - 220px breed */}
            <aside style={{ width: "220px", flexShrink: 0 }}>
              <div className="sticky top-32">
                <nav 
                  style={{
                    backgroundColor: "#FAF8F6",
                    borderRadius: "8px",
                    padding: "1.5rem"
                  }}
                >
                  {/* Show sections if multiple, otherwise show items */}
                  {showItemNavigation ? (
                    <>
                      {navItems.map((item) => {
                        const isActive = activeItemId === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToItem(item.id)}
                            className="w-full text-left font-sans transition-all"
                            style={{
                              padding: "0.75rem 1rem",
                              margin: "0 -1rem",
                              color: isActive ? "#C1562F" : "#2B1C14",
                              fontSize: "0.9rem",
                              fontWeight: isActive ? 600 : 400,
                              lineHeight: 1.5,
                              cursor: "pointer",
                              backgroundColor: isActive ? "#f8e9e3" : "transparent",
                              border: "none",
                              borderBottom: "1px solid #ede9e3",
                              borderRadius: "4px"
                            }}
                            onMouseEnter={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.backgroundColor = "#e8c2b4";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.backgroundColor = "transparent";
                              }
                            }}
                            data-testid={`button-nav-${item.id}`}
                          >
                            {item.question}
                          </button>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {sections.map((section) => {
                        const isActive = activeSectionId === section.id;
                        return (
                          <button
                            key={section.id}
                            onClick={() => setActiveSectionId(section.id)}
                            className="w-full text-left font-sans transition-all"
                            style={{
                              padding: "0.75rem 1rem",
                              margin: "0 -1rem",
                              color: isActive ? "#C1562F" : "#2B1C14",
                              fontSize: "0.95rem",
                              fontWeight: isActive ? 600 : 400,
                              lineHeight: 1.5,
                              cursor: "pointer",
                              backgroundColor: isActive ? "#f8e9e3" : "transparent",
                              border: "none",
                              borderBottom: "1px solid #ede9e3",
                              borderRadius: "4px"
                            }}
                            onMouseEnter={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.backgroundColor = "#e8c2b4";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.backgroundColor = "transparent";
                              }
                            }}
                            data-testid={`button-section-${section.id}`}
                          >
                            {section.title}
                          </button>
                        );
                      })}
                    </>
                  )}
                </nav>
              </div>
            </aside>

            {/* Right Content - All Q&As in two columns */}
            <article className="flex-1">
              {/* Witte kaart/box rondom content */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  padding: "3rem 2.5rem"
                }}
              >
                {/* Desktop: Title aligned with content */}
                <h1 
                  className="leading-tight" 
                  style={{ 
                    fontFamily: "'Lora', serif",
                    fontSize: "clamp(2rem, 5vw, 2.75rem)",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: "#1f1f1f",
                    marginBottom: "2.5rem"
                  }}
                  data-testid="text-page-title-desktop"
                >
                  {title}
                </h1>

                {activeSection && (
                  <div 
                    key={activeSectionId}
                    style={{
                      columnCount: 2,
                      columnGap: "3rem",
                      maxWidth: "1100px"
                    }}
                  >
                    {activeSection.items.map((item, index) => (
                      <div 
                        key={item.id}
                        id={`faq-${item.id}`}
                        style={{
                          breakInside: "avoid",
                          marginBottom: "3rem",
                          paddingBottom: "3rem",
                          borderBottom: index < activeSection.items.length - 1 ? "1px solid #f2f2f2" : "none",
                          scrollMarginTop: "8rem"
                        }}
                        data-testid={`faq-item-${item.id}`}
                      >
                        <h2 
                          className="font-serif mb-3" 
                          style={{ 
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            color: "#1E1E1E",
                            letterSpacing: "0.01em",
                            lineHeight: 1.3
                          }}
                          data-testid={`text-question-${item.id}`}
                        >
                          {item.question}
                        </h2>
                        <div 
                          className="font-sans space-y-3" 
                          style={{ 
                            lineHeight: 1.7, 
                            color: "#3B2C24",
                            fontSize: "0.95rem"
                          }}
                          data-testid={`text-answer-${item.id}`}
                        >
                          {item.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Mobile: Card-based Accordion */}
          <div className="lg:hidden">
            {sections.map((section) => (
              <div key={section.id} style={{ marginBottom: "2rem" }}>
                {sections.length > 1 && (
                  <h2 
                    className="font-serif mb-4"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "#1f1f1f"
                    }}
                  >
                    {section.title}
                  </h2>
                )}
                {section.items.map((item, index) => {
                  const isOpen = openMobileId === item.id;
                  
                  return (
                    <div 
                      key={item.id}
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        marginBottom: index < section.items.length - 1 ? "1rem" : "0",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)"
                      }}
                      data-testid={`mobile-faq-card-${item.id}`}
                    >
                      <button
                        onClick={() => toggleMobile(item.id)}
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
                        data-testid={`button-mobile-faq-${item.id}`}
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
                      
                      {isOpen && (
                        <div 
                          className="font-sans space-y-4"
                          style={{
                            marginTop: "1.25rem",
                            lineHeight: 1.7,
                            color: "#3B2C24",
                            fontSize: "0.95rem"
                          }}
                          data-testid={`text-mobile-answer-${item.id}`}
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
