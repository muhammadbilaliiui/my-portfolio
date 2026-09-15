export interface MarqueeItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  url: string;
}

export const marqueeItems: MarqueeItem[] = [
  {
    id: "m-01",
    title: "Space Voyage 3D",
    category: "Spatial Experience",
    tag: "Three.js / WebGL",
    url: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif"
  },
  {
    id: "m-02",
    title: "CodeNest Studio",
    category: "Interactive Dev",
    tag: "React & Motion",
    url: "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif"
  },
  {
    id: "m-03",
    title: "Vex Ventures",
    category: "Fintech Platform",
    tag: "Creative Direction",
    url: "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif"
  },
  {
    id: "m-04",
    title: "Stellar AI Neural",
    category: "Generative AI",
    tag: "Next.js & LLMs",
    url: "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif"
  },
  {
    id: "m-05",
    title: "ASME Spatial",
    category: "Industrial 3D",
    tag: "Product CAD",
    url: "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif"
  },
  {
    id: "m-06",
    title: "Data Flow Nexus",
    category: "Analytics Engine",
    tag: "Real-time Dash",
    url: "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif"
  },
  {
    id: "m-07",
    title: "Vitara Motion",
    category: "Brand Motion",
    tag: "Brand Identity",
    url: "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif"
  },
  {
    id: "m-08",
    title: "Terra Biosphere",
    category: "Virtual World",
    tag: "Environment 3D",
    url: "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif"
  },
  {
    id: "m-09",
    title: "SkyElite Portal",
    category: "Aviation Platform",
    tag: "Interactive Web",
    url: "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif"
  },
  {
    id: "m-10",
    title: "Aethera Studios",
    category: "Creative Direction",
    tag: "Showcase UI",
    url: "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif"
  },
  {
    id: "m-11",
    title: "DesignPro System",
    category: "Design System",
    tag: "UI Architecture",
    url: "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif"
  },
  {
    id: "m-12",
    title: "Stellar Interface",
    category: "AI Dashboard",
    tag: "Dark Mode UI",
    url: "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif"
  },
  {
    id: "m-13",
    title: "X-Portfolio 3D",
    category: "Creator Showcase",
    tag: "Interactive 3D",
    url: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
  },
  {
    id: "m-14",
    title: "Orbit Web3",
    category: "Decentralized App",
    tag: "DeFi Platform",
    url: "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif"
  },
  {
    id: "m-15",
    title: "Nexora Cloud",
    category: "Cloud Architecture",
    tag: "Enterprise SaaS",
    url: "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
  },
  {
    id: "m-16",
    title: "EVR Ventures",
    category: "Venture Studio",
    tag: "Editorial Web",
    url: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
  },
  {
    id: "m-17",
    title: "Planet Orbit 3D",
    category: "Physics Simulation",
    tag: "Three.js / Shaders",
    url: "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif"
  },
  {
    id: "m-18",
    title: "New Era Apparel",
    category: "Digital Fashion",
    tag: "3D Clothing",
    url: "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif"
  },
  {
    id: "m-19",
    title: "Wealth Matrix",
    category: "Fintech App",
    tag: "Motion Charts",
    url: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"
  },
  {
    id: "m-20",
    title: "Luminex Lighting",
    category: "Shader Exploration",
    tag: "Lighting Models",
    url: "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif"
  },
  {
    id: "m-21",
    title: "Celestia Spatial",
    category: "Spatial Computing",
    tag: "VisionOS Concept",
    url: "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
  }
];

export const marqueeRow1 = marqueeItems.slice(0, 11);
export const marqueeRow2 = marqueeItems.slice(11);

// Backward compatibility export if imported elsewhere
export const marqueeImages = marqueeItems.map(item => item.url);
