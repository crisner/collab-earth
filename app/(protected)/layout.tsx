import Header from "@/components/Header"
import Nav from "@/components/Nav"

export default function ProtectedLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Header>
   <Nav />
   </Header>
        {children}
      </section>
    )
  }