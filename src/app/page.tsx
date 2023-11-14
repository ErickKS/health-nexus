import { Nav } from "@/components/home/nav";
import { Banner } from "@/components/home/banner";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="">
        <Nav />
        <Banner />
      </header>
    </main>
  );
}
