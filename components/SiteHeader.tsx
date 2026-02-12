import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          bebon
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/menu" className="hover:text-foreground">
            Menu
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>

        <Button asChild variant="outline" className="rounded-full">
          <Link href="/contact">Get a box</Link>
        </Button>
      </Container>
    </header>
  );
}
