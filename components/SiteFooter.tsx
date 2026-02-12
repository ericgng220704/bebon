import Container from "@/components/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Bebon Cookies</p>
        <p>Winnipeg • Pre-order pickup</p>
      </Container>
    </footer>
  );
}
