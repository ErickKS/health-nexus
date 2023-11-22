import { Nav } from "@/components/home/nav";
import { Banner } from "@/components/home/banner";
import { Partnership } from "@/components/home/partnership";
import { About } from "@/components/home/about";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <header>
        <Nav />
        <Banner />
      </header>

      <Partnership />

      <About />

      <Footer />
    </main>
  );
}
