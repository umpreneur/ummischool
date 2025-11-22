import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>("");
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const getInputStyle = (fieldName: string): React.CSSProperties => ({
    width: "100%",
    border: "none",
    borderBottom: "2px solid",
    borderBottomColor: focusedField === fieldName ? "#C1562F" : "#E5E5E5",
    backgroundColor: "transparent",
    padding: "0.75rem 0",
    fontSize: "1rem",
    fontFamily: "inherit",
    color: "#1E1E1E",
    outline: "none",
    transition: "border-bottom-color 0.2s ease",
  });

  const getTextareaStyle = (fieldName: string): React.CSSProperties => ({
    width: "100%",
    border: "none",
    borderBottom: "2px solid",
    borderBottomColor: focusedField === fieldName ? "#C1562F" : "#E5E5E5",
    backgroundColor: "transparent",
    padding: "0.75rem 0",
    fontSize: "1rem",
    fontFamily: "inherit",
    color: "#1E1E1E",
    outline: "none",
    resize: "none" as const,
    transition: "border-bottom-color 0.2s ease",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#6B6B6B",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div>
      {submitted ? (
        <div
          className="text-center py-12"
          data-testid="text-success-message"
        >
          <h3 
            className="font-serif mb-3"
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#1E1E1E"
            }}
          >
            Bedankt voor je bericht
          </h3>
          <p 
            className="font-sans"
            style={{
              color: "#6B6B6B",
              fontSize: "1rem"
            }}
          >
            We nemen zo snel mogelijk contact met je op.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="name" style={labelStyle}>
              Naam *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
              required
              data-testid="input-name"
              className="font-sans"
              style={getInputStyle("name")}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="email" style={labelStyle}>
              E-mail *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              required
              data-testid="input-email"
              className="font-sans"
              style={getInputStyle("email")}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="subject" style={labelStyle}>
              Onderwerp *
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField("")}
              required
              data-testid="input-subject"
              className="font-sans"
              style={getInputStyle("subject")}
            />
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <label htmlFor="message" style={labelStyle}>
              Bericht *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              required
              rows={6}
              data-testid="input-message"
              className="font-sans"
              style={getTextareaStyle("message")}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
            <button
              type="submit"
              data-testid="button-submit"
              className="font-sans transition-colors"
              style={{
                backgroundColor: isHoveringButton ? "#A24A29" : "#C1562F",
                color: "#ffffff",
                border: "none",
                padding: "1rem 3rem",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                borderRadius: "12px",
                cursor: "pointer",
                boxShadow: "none"
              }}
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
            >
              Verstuur bericht
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
