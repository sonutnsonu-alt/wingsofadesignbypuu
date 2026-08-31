import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Featured } from "@/components/site/Featured";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Wings_Of_a_design_by_puu — Handmade Embroidery by Punya";
const description =
  "Handmade beads, zardosi, thread, stone, sequence and net embroidery by Punya. Handmade means Heart-Made — where every stitch tells a story.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState("ALL");

  const viewWork = (category: string) => {
    setFilter(category);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services onViewWork={viewWork} />
        <Portfolio filter={filter} setFilter={setFilter} />
        <Featured />
        <Process />
        <WhyUs />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}
