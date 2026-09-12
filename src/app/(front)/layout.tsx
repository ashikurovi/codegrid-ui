import { Navbar } from "@/components/landing/navber";
import { Footer } from "@/components/landing/footer";

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white relative font-sans">
      {/* Global Notebook Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:100%_32px] pointer-events-none opacity-50"></div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
