import Nav from "@/components/Nav";
import Grid from "@/components/ui/Grid/Grid";

export default function ProtectedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main flex">
      {/* <Grid className="flex"> */}
        {/* <div className="col-start-auto col-end-auto"> */}
        <Nav />
        {/* </div> */}
        <div className="w-full">
        {children}
        </div>
      {/* </Grid> */}
    </main>
  );
}
