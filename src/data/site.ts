import textureThread from "@/assets/texture-thread.jpeg";
import textureSequence from "@/assets/texture-sequence.jpeg";
import textureNet from "@/assets/texture-net.jpeg";

const work82 = "/hero-1.jpeg";
const work85 = "/hero-2.jpeg";
const work83 = "/hero-3.jpeg";
const work87 = "/hero-4.jpeg";
const work84 = "/hero-5.jpeg";
const work88 = "/hero-6.jpeg";
const work86 = "/hero-7.jpeg";

export const brand = {
  name: "Wings_Of_a_design_by_puu",
  artist: "Punya",
  phone: "+91 81474 06201",
  phoneHref: "tel:+918147406201",
  instagram: "@_wings_of_a_design_by_puu_",
  instagramUrl:
    "https://www.instagram.com/_wings_of_a_design_by_puu_?igsi=MXJ4amNmZ200Nno0ag==",
  tagline: "Handmade means Heart-Made",
  secondaryTagline: "Where every stitch tells a story.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type Category = "BEADS" | "ZARDOSI" | "THREAD" | "STONE" | "SEQUENCE" | "NET";

export const categories: Array<"ALL" | Category> = [
  "ALL",
  "BEADS",
  "ZARDOSI",
  "THREAD",
  "STONE",
  "SEQUENCE",
  "NET",
];

export type PortfolioItem = {
  id: string;
  image: string;
  title: string;
  category: Category;
  description: string;
  /** true for genuine photographs of Punya's work */
  realWork: boolean;
};

/**
 * Portfolio content. To add work: append an object here — nothing else changes.
 */
export const portfolio: PortfolioItem[] = [
  {
    id: "rani-beadwork-blouse",
    image: work86,
    title: "Rani Pink Beaded Neckline",
    category: "BEADS",
    description:
      "Hand-set gold bead detailing tracing a deep neckline on rani pink silk, finished with a scalloped drop edge.",
    realWork: true,
  },
  {
    id: "gold-scallop-set",
    image: work87,
    title: "Gold Scallop Neckline Study",
    category: "BEADS",
    description:
      "Bead and zardosi scallop borders on magenta silk with matching sleeve borders and scattered buti motifs.",
    realWork: true,
  },
  {
    id: "green-saree-pink-blouse",
    image: work88,
    title: "Emerald Silk, Rani Blouse",
    category: "ZARDOSI",
    description:
      "A green kanjivaram paired with a hand-embellished rani pink blouse worked in gold beads and zardosi.",
    realWork: true,
  },
  {
    id: "pink-emerald-stone-blouse",
    image: work84,
    title: "Blush & Emerald Stone Work",
    category: "STONE",
    description:
      "Emerald drops and pearl-white teardrop motifs framed by dense gold beadwork on soft blush fabric.",
    realWork: true,
  },
  {
    id: "emerald-drop-border",
    image: work85,
    title: "Emerald Drop Border",
    category: "STONE",
    description:
      "A layered hanging border of emerald stones and gold beads with delicate scattered buti across the panel.",
    realWork: true,
  },
  {
    id: "yellow-blue-stone-blouse",
    image: work83,
    title: "Lime & Sapphire Stone Blouse",
    category: "STONE",
    description:
      "Sapphire blue stones outlined in crystal chain, worked across neckline, sleeves and body of a lime silk blouse.",
    realWork: true,
  },
  {
    id: "gold-brown-zardosi",
    image: work82,
    title: "Antique Gold Zardosi Blouse",
    category: "ZARDOSI",
    description:
      "Antique gold zardosi over brocade with a hand-worked border, beaded tassels and finished dori ties.",
    realWork: true,
  },
  {
    id: "thread-study",
    image: textureThread,
    title: "Thread Work — Studio Notes",
    category: "THREAD",
    description:
      "Silk threads chosen for an upcoming piece. Photographs of finished thread work are coming soon.",
    realWork: false,
  },
  {
    id: "sequence-study",
    image: textureSequence,
    title: "Sequence Work — Studio Notes",
    category: "SEQUENCE",
    description:
      "Gold sequins and glass beads laid out before stitching. Finished sequence work will be added shortly.",
    realWork: false,
  },
  {
    id: "net-study",
    image: textureNet,
    title: "Net Work — Studio Notes",
    category: "NET",
    description:
      "Blush net and gold thread prepared in the studio. Finished net work photographs coming soon.",
    realWork: false,
  },
];

export const services = [
  {
    number: "01",
    name: "Beads Work",
    description:
      "Elegant bead detailing that adds texture, dimension and sophistication.",
    image: work86,
    category: "BEADS" as Category,
  },
  {
    number: "02",
    name: "Zardosi Work",
    description:
      "Traditional Zardosi craftsmanship with intricate and luxurious detailing.",
    image: work82,
    category: "ZARDOSI" as Category,
  },
  {
    number: "03",
    name: "Thread Work",
    description: "Creative thread embroidery designed to bring every pattern to life.",
    image: textureThread,
    category: "THREAD" as Category,
  },
  {
    number: "04",
    name: "Stone Work",
    description:
      "Beautiful stone embellishments for a sophisticated and glamorous finish.",
    image: work84,
    category: "STONE" as Category,
  },
  {
    number: "05",
    name: "Sequence Work",
    description: "Delicate sequin detailing that adds sparkle and elegance.",
    image: textureSequence,
    category: "SEQUENCE" as Category,
  },
  {
    number: "06",
    name: "Net Work",
    description:
      "Intricate net work created with delicate craftsmanship and fine detailing.",
    image: textureNet,
    category: "NET" as Category,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description: "Tell us what type of work or design you are looking for.",
  },
  {
    number: "02",
    title: "Discuss The Design",
    description: "Discuss colors, patterns, materials and finishing details.",
  },
  {
    number: "03",
    title: "Handmade Crafting",
    description: "Punya carefully creates the design by hand.",
  },
  {
    number: "04",
    title: "Final Creation",
    description: "Your finished handcrafted design is ready.",
  },
];

export const instagramGrid = [
  work86,
  work84,
  work88,
  work82,
  work85,
  work83,
];

export const featuredImage = work82;
export const heroImage = work88;
