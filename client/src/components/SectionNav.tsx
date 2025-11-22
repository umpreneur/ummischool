import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

interface SectionNavProps {
  sections: Section[];
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-32" style={{ borderRight: "1px solid #f1f1f1", paddingRight: "1rem" }}>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          data-testid={`button-nav-${section.id}`}
          className={`block w-full text-left font-sans transition-colors py-2 mb-1 bg-transparent border-none ${
            activeSection === section.id ? "text-[#a07c68]" : "text-[#999999] hover:text-[#a07c68]"
          }`}
          style={{
            fontSize: "0.85rem",
            fontWeight: 400,
            paddingLeft: "0px",
          }}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}
