import { Navbar } from "@/components/landing/navber";
import { Footer } from "@/components/landing/footer";

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
