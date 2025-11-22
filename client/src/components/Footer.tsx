export default function Footer() {
  return (
    <footer className="py-8 text-center bg-background">
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
  );
}
