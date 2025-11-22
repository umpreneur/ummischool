import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-6xl lg:text-8xl text-foreground">404</h1>
        <p className="font-sans text-lg text-muted-foreground">
          Deze pagina bestaat niet
        </p>
        <Link href="/">
          <span
            className="inline-block text-sm font-sans text-foreground hover:underline cursor-pointer"
            data-testid="link-home"
          >
            Terug naar home →
          </span>
        </Link>
      </div>
    </div>
  );
}
