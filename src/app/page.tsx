import { Nav } from "@/components/home/nav";
import { Banner } from "@/components/home/banner";
import { Partnership } from "@/components/home/partnership";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#CBD3DE]">
      <header className="">
        <Nav />
        <Banner />
      </header>

      <Partnership />
    </main>
  );
}
