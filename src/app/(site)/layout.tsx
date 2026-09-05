import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
