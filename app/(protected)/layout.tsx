import Nav from "@/components/Nav";
import Grid from "@/components/ui/Grid/Grid";

export default function ProtectedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main">
      <Grid className="flex">
        <Nav />
        {children}
      </Grid>
    </main>
  );
}
