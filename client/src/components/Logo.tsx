export default function Logo() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="-60 -70 340 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Thuisonderwijs"
      className="logo-svg"
      data-testid="logo-circular"
    >
      <path id="topArc" d="M18,190 A122,122 0 0 1 262,190" fill="none" />
      <text
        fontFamily="'Playfair Display', serif"
        fontSize="44"
        letterSpacing="0.5"
        fill="#4B3826"
      >
        <textPath
          href="#topArc"
          startOffset="50%"
          textAnchor="middle"
        >
          Thuisonderwijs
        </textPath>
      </text>
    </svg>
  );
}
