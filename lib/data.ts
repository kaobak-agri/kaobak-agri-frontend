import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bean,
  Globe2,
  HandHeart,
  Hotel,
  Leaf,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Trees,
  Users,
  Wheat
} from "lucide-react";

export const contact = {
  address: [
    "Officers Ward",
    "Kuthuru Road",
    "Tuensang Town",
    "District - Tuensang, Pin - 798612",
    "Nagaland"
  ],
  phone: "9401214331",
  mapUrl: "https://maps.app.goo.gl/RVQewLNzgXw4SpLX7?g_st=ic",
  email: "info@kaobakagri.com"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/shop" },
  { label: "Traceability", href: "/traceability" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Gifting", href: "/gifting" },
  { label: "Contact", href: "/contact" }
];

export type Product = {
  slug: string;
  name: string;
  category: "Coffee" | "Tea" | "Honey" | "Spices" | "Gifting" | "Export";
  price: number | null;
  image: string;
  origin: string;
  summary: string;
  story: string;
  notes: string[];
  trace: {
    batch: string;
    village: string;
    harvest: string;
    process: string;
    certification: string;
  };
};

export const products: Product[] = [
  {
    slug: "highland-arabica-coffee",
    name: "Nagaland Arabica — Washed",
    category: "Coffee",
    price: 899,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132568/Nagaland_Arabica_Washed_d3sifw.jpg",
    origin: "Nagaland highlands, 1,300–1,800 MASL",
    summary: "A clean, bright high-altitude Arabica with citrus, jasmine, and honeyed sweetness.",
    story:
      "Handpicked cherries are fully washed and dried with care, revealing the floral clarity, bright acidity, and refined finish of Nagaland's shade-grown highland coffee.",
    notes: ["Citrus", "Jasmine floral", "Honey sweet", "Clean finish"],
    trace: {
      batch: "KBK-CF-0426",
      village: "Misty Ridge Cluster",
      harvest: "March 2026",
      process: "Fully washed, sun-dried, hand-sorted",
      certification: "Organic transition, fair trade aligned"
    }
  },
  {
    slug: "wild-forest-honey",
    name: "Wild Forest Honey",
    category: "Honey",
    price: 620,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785130689/Wild_forest_honey_r04s9s.jpg",
    origin: "Protected forest belts",
    summary: "Raw amber honey with floral depth and a mineral forest finish.",
    story:
      "Collected in limited seasonal batches, this honey reflects forest bloom cycles and the conservation ethics of local producer groups.",
    notes: ["Amber floral", "Resin", "Long finish"],
    trace: {
      batch: "KBK-HN-2402",
      village: "Long Forest Belt",
      harvest: "April 2026",
      process: "Cold strained, unheated",
      certification: "Raw, forest-linked sourcing"
    }
  },
  {
    slug: "apis-cerana-wild-cherry-honey",
    name: "Apis Cerana Wild Cherry Honey",
    category: "Honey",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132607/Apis_cerana_wild_cherry_honey_cfjc8k.jpg",
    origin: "Nagaland highland cherry belts",
    summary: "A rare early-spring honey with gentle blossom aromatics and a warm reddish-amber hue.",
    story:
      "Asian honey bees forage among short-lived wild cherry blossoms across Nagaland's highlands. The narrow flowering window makes each raw, cold-strained batch distinctly seasonal.",
    notes: ["Thick texture", "Mild floral", "Very sweet", "Reddish amber"],
    trace: {
      batch: "KBK-HN-CER-CHR",
      village: "Nagaland Apis cerana producer network",
      harvest: "Early spring seasonal lot",
      process: "Cold strained, unheated",
      certification: "Raw, forest-linked sourcing"
    }
  },
  {
    slug: "apis-cerana-wild-apple-honey",
    name: "Apis Cerana Wild Apple Honey",
    category: "Honey",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917306/Apis_Cerana_Wild_Apple_Honey_wdyzbw.png",
    origin: "Nagaland wild apple groves",
    summary: "Delicate fruit-blossom aromatics meet a rounded sweetness and pale amber clarity.",
    story:
      "Gathered during the wild apple bloom, this seasonal Apis cerana honey carries the softer expression of Nagaland's highland orchards and forest-edge groves.",
    notes: ["Thick texture", "Fruity aroma", "Rounded sweet", "Pale amber"],
    trace: {
      batch: "KBK-HN-CER-APL",
      village: "Nagaland Apis cerana producer network",
      harvest: "Spring seasonal lot",
      process: "Cold strained, unheated",
      certification: "Raw, forest-linked sourcing"
    }
  },
  {
    slug: "apis-cerana-wildflower-honey",
    name: "Apis Cerana Wildflower Honey",
    category: "Honey",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917306/Apis_Cerana_Wildflower_Honey_ogyjbe.png",
    origin: "Nagaland mixed forest blooms",
    summary: "A light golden forest honey whose floral character shifts naturally with each season.",
    story:
      "Asian honey bees forage across many native blossoms rather than a single crop. Every small batch is an edible record of the forest flowers open at harvest time.",
    notes: ["Fluid texture", "Seasonal floral", "Clean sweet", "Light golden"],
    trace: {
      batch: "KBK-HN-CER-WLD",
      village: "Nagaland Apis cerana producer network",
      harvest: "Seasonal wildflower lot",
      process: "Cold strained, unheated",
      certification: "Raw, multi-floral sourcing"
    }
  },
  {
    slug: "rock-bee-wildflower-honey",
    name: "Rock Bee Wildflower Honey",
    category: "Honey",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917305/Rock_Bee_Wildflower_Honey_jjvycg.jpg",
    origin: "Kiphire forest and cliff belts, Nagaland",
    summary: "A deep amber wild honey with a fluid body, measured sweetness, and robust forest character.",
    story:
      "Wild rock bees build exposed combs along remote cliffs and tall forest trees. Experienced community harvesters gather limited lots using knowledge passed between generations.",
    notes: ["Fluid texture", "Moderately sweet", "Forest floral", "Deep amber"],
    trace: {
      batch: "KBK-HN-RCK-WLD",
      village: "Kiphire wild-harvest network",
      harvest: "Seasonal wildflower lot",
      process: "Traditional wild harvest, cold strained",
      certification: "Community sourced, wild harvested"
    }
  },
  {
    slug: "stingless-bee-wildflower-honey",
    name: "Stingless Bee Wildflower Honey",
    category: "Honey",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917307/Stingless_Bee_Wildflower_Honey_rbsums.jpg",
    origin: "Nagaland forest villages",
    summary: "A rare runny honey balancing bright natural acidity with a subtle forest sweetness.",
    story:
      "Small stingless-bee colonies are traditionally tended in log hives and wooden boxes. Their low-yield honey develops a lively sweet-sour profile shaped by forest herbs and wild blossoms.",
    notes: ["Runny texture", "Sweet-sour", "Forest herbs", "Light golden"],
    trace: {
      batch: "KBK-HN-STG-WLD",
      village: "Nagaland stingless-bee producer network",
      harvest: "Seasonal wildflower lot",
      process: "Traditional hive harvest, cold strained",
      certification: "Small-batch community sourcing"
    }
  },
  {
    slug: "apis-cerana-wild-banana-honey",
    name: "Apis Cerana Wild Banana Honey",
    category: "Honey",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917306/Apis_Cerana_Wild_Banana_Honey_y1s0k2.png",
    origin: "Nagaland forest gardens",
    summary: "A small seasonal lot guided by the lush floral character of wild banana blossoms.",
    story:
      "Apis cerana colonies forage through biodiverse forest gardens when wild banana plants are in bloom, creating a distinctive origin honey tied to a brief local flowering cycle.",
    notes: ["Seasonal floral", "Tropical blossom", "Raw", "Small batch"],
    trace: {
      batch: "KBK-HN-CER-BAN",
      village: "Nagaland forest-garden network",
      harvest: "Seasonal blossom lot",
      process: "Cold strained, unheated",
      certification: "Raw, forest-garden sourcing"
    }
  },
  {
    slug: "nagaland-arabica-honey-process",
    name: "Nagaland Arabica — Honey Process",
    category: "Coffee",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917308/Nagaland_Arabica_Honey_Process_uzcj0m.jpg",
    origin: "Nagaland highlands, 1,300–1,800 MASL",
    summary: "A round, sweet microlot with caramel, honeycomb, tropical fruit, and a creamy body.",
    story:
      "Part of the cherry's mucilage is retained during drying, building natural sweetness and a generous texture while keeping the distinct highland character intact.",
    notes: ["Caramel", "Honeycomb", "Tropical fruit", "Creamy body"],
    trace: {
      batch: "KBK-CF-HNY",
      village: "Nagaland producer network",
      harvest: "Seasonal lot",
      process: "Honey process, raised-bed dried",
      certification: "Organic-by-practice sourcing"
    }
  },
  {
    slug: "nagaland-arabica-natural-process",
    name: "Nagaland Arabica — Natural",
    category: "Coffee",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917308/Nagaland_Arabica_Natural_svuks5.jpg",
    origin: "Nagaland highlands, 1,300–1,800 MASL",
    summary: "A fruit-forward whole-cherry lot with strawberry, mango, dark berry, and wine-like depth.",
    story:
      "Whole ripe cherries dry slowly before milling, concentrating fruit character and giving this expressive microlot its juicy body and long, vibrant finish.",
    notes: ["Strawberry", "Mango", "Dark berry", "Wine-like"],
    trace: {
      batch: "KBK-CF-NAT",
      village: "Nagaland producer network",
      harvest: "Seasonal lot",
      process: "Natural whole-cherry process",
      certification: "Organic-by-practice sourcing"
    }
  },
  {
    slug: "rosella-tea",
    name: "Rosella Tea",
    category: "Tea",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917306/rosella_tea_lr0bkf.jpg",
    origin: "Northeast India smallholder gardens",
    summary: "Ruby-red rosella calyces with a bright, naturally tart fruit character.",
    story:
      "Carefully harvested rosella is dried in small lots to preserve its vivid colour and refreshing hibiscus-like acidity for hot or cold infusions.",
    notes: ["Bright tartness", "Ruby infusion", "Fruit-forward", "Caffeine free"],
    trace: {
      batch: "KBK-TEA-RSL",
      village: "Northeast India producer network",
      harvest: "Seasonal lot",
      process: "Handpicked and naturally dried",
      certification: "Smallholder sourced"
    }
  },
  {
    slug: "blue-pea-tea",
    name: "Blue Pea Tea",
    category: "Tea",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917306/Blue_Pea_tea_naqngi.jpg",
    origin: "Northeast India smallholder gardens",
    summary: "Whole butterfly-pea flowers yielding a luminous blue, delicately earthy infusion.",
    story:
      "The blossoms are gathered and gently dried to retain their natural colour, creating an elegant caffeine-free infusion that shifts tone when paired with citrus.",
    notes: ["Luminous blue", "Delicate floral", "Caffeine free", "Citrus responsive"],
    trace: {
      batch: "KBK-TEA-BPT",
      village: "Northeast India producer network",
      harvest: "Seasonal lot",
      process: "Handpicked and shade-dried",
      certification: "Smallholder sourced"
    }
  },
  {
    slug: "lakadong-turmeric",
    name: "Lakadong Turmeric",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785157047/lakadong_turmeric_gxncvb.jpg",
    origin: "West Jaintia Hills, Meghalaya",
    summary: "A prized turmeric cultivar known for exceptional colour, aroma, and naturally high curcumin.",
    story: "Cultivated in the Lakadong landscape and harvested in winter, this celebrated turmeric is sought by culinary, wellness, cosmetic, and specialty food buyers.",
    notes: ["Earthy", "Warm", "7–9% curcumin", "December harvest"],
    trace: { batch: "KBK-SP-LKT", village: "West Jaintia Hills", harvest: "December", process: "Cleaned, cured, dried and milled", certification: "Organic-by-practice sourcing" }
  },
  {
    slug: "nadia-ginger",
    name: "Nadia Ginger",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917308/Nadia_Ginger_nizwqz.jpg",
    origin: "Garo Hills and Ri-Bhoi, Meghalaya",
    summary: "A low-fibre ginger variety with bright heat, clean aroma, and strong culinary versatility.",
    story: "Raised across Meghalaya's humid hill gardens, Nadia ginger is valued for its low fibre and suitability for fresh use, drying, powders, and extracts.",
    notes: ["Bright heat", "Low fibre", "Citrus warmth", "Oleoresin rich"],
    trace: { batch: "KBK-SP-NDG", village: "Garo Hills producer cluster", harvest: "Seasonal", process: "Washed and naturally dried", certification: "Organic-by-practice sourcing" }
  },
  {
    slug: "sohmarit-black-pepper",
    name: "Sohmarit Black Pepper",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_jpg,q_auto:good/v1785917307/Sohmarit_Black_pepper_czxqsx.heic",
    origin: "Meghalaya forest gardens",
    summary: "Forest-grown black pepper with layered warmth, fragrant lift, and a lingering piperine finish.",
    story: "Known locally as Soh Marit Khlaw, the vines climb within mixed forest gardens and pair beautifully with Lakadong turmeric in culinary blends.",
    notes: ["Woody warmth", "Piperine", "Forest grown", "Slow finish"],
    trace: { batch: "KBK-SP-SBP", village: "Meghalaya grower network", harvest: "Seasonal", process: "Sun-dried whole peppercorn", certification: "Forest-garden sourcing" }
  },
  {
    slug: "indian-bay-leaf-meghalaya",
    name: "Indian Bay Leaf — Meghalaya",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917308/Indian_bay_leaf_-Meghalaya_em6wvi.jpg",
    origin: "Meghalaya forest belts",
    summary: "A forest aromatic with cinnamon-like sweetness and a softly peppered, earthy finish.",
    story: "Cinnamomum tamala leaves are gathered and dried as a fragrant pantry staple for rice, curries, stews, tea, and essential-oil applications.",
    notes: ["Cinnamon", "Sweet pepper", "Forest leaf", "Warm aroma"],
    trace: { batch: "KBK-SP-MBL", village: "Meghalaya forest cluster", harvest: "Seasonal", process: "Shade-dried whole leaf", certification: "Forest-sourced" }
  },
  {
    slug: "black-ginger",
    name: "Black Ginger",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917306/black_ginger_pm2con.jpg",
    origin: "Meghalaya hill gardens",
    summary: "A rare premium rhizome offered in dried slices and powder for specialty wellness applications.",
    story: "Kaempferia parviflora is produced in limited quantities and carefully dried to preserve the deep colour and characteristic aromatic compounds of the rhizome.",
    notes: ["Rare", "Earthy", "Dried slices", "Wellness grade"],
    trace: { batch: "KBK-SP-BGN", village: "Meghalaya hill cluster", harvest: "Limited seasonal harvest", process: "Cleaned, sliced and low-temperature dried", certification: "Smallholder sourced" }
  },
  {
    slug: "black-cardamom",
    name: "Black Cardamom",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917304/black_cardamom_angsor.jpg",
    origin: "High-altitude Meghalaya",
    summary: "Bold forest cardamom with smoky, camphorous, and menthol-rich aromatic depth.",
    story: "Grown within high-altitude agroforestry systems, black cardamom develops its powerful character through careful curing and traditional drying.",
    notes: ["Smoky", "Camphor", "Menthol", "Forest grown"],
    trace: { batch: "KBK-SP-BCD", village: "Highland agroforestry cluster", harvest: "Seasonal", process: "Cured and traditionally dried", certification: "Agroforestry sourced" }
  },
  {
    slug: "meghalaya-cinnamon",
    name: "Meghalaya Cinnamon",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917308/Meghalaya_Cinnamon_kc1scx.jpg",
    origin: "Meghalaya semi-wild forest trees",
    summary: "Warm, sweet-spicy cinnamon bark from semi-wild trees, available as chips or quills.",
    story: "Harvested from forest-linked trees and dried in small batches, this aromatic bark brings gentle sweetness and rounded warmth to food and beverages.",
    notes: ["Sweet spice", "Warm bark", "Forest sourced", "Quills"],
    trace: { batch: "KBK-SP-CIN", village: "Meghalaya forest cluster", harvest: "Seasonal bark harvest", process: "Hand-cut and naturally dried", certification: "Semi-wild forest sourced" }
  },
  {
    slug: "raja-mircha-king-chilli",
    name: "Raja Mircha — Naga King Chilli",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917305/Raja_Mirchi_byqpaj.jpg",
    origin: "Nagaland",
    summary: "Nagaland's celebrated GI-tagged chilli, intensely hot, fruity, and deeply aromatic.",
    story: "Also known as Bhut Jolokia, Raja Mircha is cultivated in Naga kitchen gardens and fields, then offered fresh, dried, powdered, or as flakes.",
    notes: ["Extreme heat", "Fruity aroma", "GI tagged", "Approx. 1M SHU"],
    trace: { batch: "KBK-SP-RMC", village: "Nagaland grower network", harvest: "Summer–autumn", process: "Whole dried or milled to order", certification: "GI-origin aligned" }
  },
  {
    slug: "nagaland-ginger",
    name: "Nagaland Ginger",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917309/Nagaland_Ginger_clc8r2.jpg",
    origin: "Nagaland hill farms",
    summary: "An assertive local ginger with deep citrus heat and stronger character than common commercial varieties.",
    story: "Regular, blue, and black local strains are cultivated in mixed hill farms and remain central to Naga cooking, preservation, and seasonal trade.",
    notes: ["Strong heat", "Citrus", "Local strains", "Hill grown"],
    trace: { batch: "KBK-SP-NGG", village: "Nagaland farmer groups", harvest: "Seasonal", process: "Washed, sliced and naturally dried", certification: "Organic-by-practice sourcing" }
  },
  {
    slug: "nagaland-turmeric",
    name: "Nagaland Turmeric",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917305/Nagaland_Turmeric_icxvsy.jpg",
    origin: "Nagaland hill farms",
    summary: "A richly coloured hill turmeric grown with organic manure and traditional low-input methods.",
    story: "One of Nagaland's most important spices, the rhizomes are tended in mixed plots, cured after harvest, and prepared for regional and export markets.",
    notes: ["Golden", "Earthy", "Organic manure", "Export grade"],
    trace: { batch: "KBK-SP-NGT", village: "Nagaland farmer groups", harvest: "Winter", process: "Cured, dried and milled", certification: "Organic-by-practice sourcing" }
  },
  {
    slug: "sichuan-peppercorn-nagaland",
    name: "Nagaland Sichuan Peppercorn",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917305/Nagaland_Sichuan_peppercorn_f1dmme.jpg",
    origin: "Eastern Nagaland",
    summary: "Prickly-ash husks with an electric numbing sensation and bright citrus-earth complexity.",
    story: "Known locally as Makat or Timur, the pink-red husks are gathered from family plots, dried, and separated from the inner seed for spice blends and oils.",
    notes: ["Numbing", "Citrus", "Earthy", "Compost grown"],
    trace: { batch: "KBK-SP-SCP", village: "Eastern Nagaland", harvest: "Seasonal", process: "Handpicked husks, naturally dried", certification: "Compost-only family farms" }
  },
  {
    slug: "naga-black-sesame",
    name: "Naga Black Sesame",
    category: "Spices",
    price: null,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917309/Naga_Black_sesame_s2udmw.jpg",
    origin: "Eastern Nagaland",
    summary: "An indigenous black sesame strain with rich nuttiness and a deep, roasted finish.",
    story: "Used for oil, powder, tea, and the Chang Naga dish Naam Shik, this seed remains one of Eastern Nagaland's defining pantry ingredients.",
    notes: ["Nutty", "Toasted", "Indigenous strain", "Naam Shik"],
    trace: { batch: "KBK-SP-BSS", village: "Eastern Nagaland", harvest: "Autumn", process: "Cleaned and sun-dried", certification: "Indigenous smallholder crop" }
  },
  {
    slug: "wild-naga-sumac",
    name: "Wild Naga Sumac",
    category: "Spices",
    price: null,
    image: "/images/spices.png",
    origin: "Eastern Nagaland",
    summary: "Wild clusters of deep red berries milled into a vivid, tangy, under-discovered hill spice.",
    story: "Long used in Eastern Naga kitchens, wild sumac is hand-gathered from the hills and prepared as a tart powder for food and traditional tonics.",
    notes: ["Tangy", "Deep red", "Wild harvested", "Berry spice"],
    trace: { batch: "KBK-SP-SUM", village: "Eastern Nagaland", harvest: "Limited wild season", process: "Hand-gathered, dried and milled", certification: "Wild-harvested" }
  },
  {
    slug: "origin-gift-hamper",
    name: "The Origin Gift Hamper",
    category: "Gifting",
    price: 2490,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917309/The_origin_gift_hamper_h0hhok.png",
    origin: "Northeast India curation",
    summary: "Coffee, honey, spices, tasting cards, and traceability notes.",
    story:
      "A premium hamper designed for corporate gifting, festival moments, and clients who want story-rich products.",
    notes: ["Luxury packaging", "Tasting cards", "Custom inserts"],
    trace: {
      batch: "KBK-GF-2401",
      village: "Multi-origin curation",
      harvest: "Seasonal",
      process: "Packed to order",
      certification: "Traceable components"
    }
  },
  {
    slug: "export-spice-selection",
    name: "Export Spice Selection",
    category: "Export",
    price: 4200,
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785917307/export_spice_selection_uh3owh.jpg",
    origin: "Nagaland, Assam, Meghalaya",
    summary: "Wholesale-ready spice lots for retailers, hotels, and export buyers.",
    story:
      "Designed for buyers seeking consistent lots, MOQ clarity, packaging flexibility, and origin-led documentation.",
    notes: ["Bulk formats", "Private label", "Documentation"],
    trace: {
      batch: "KBK-EX-2404",
      village: "Regional producer network",
      harvest: "By crop calendar",
      process: "Graded, packed, export-ready",
      certification: "Buyer-specific documentation"
    }
  }
];

export const collections = [
  {
    category: "Coffee" as const,
    title: "Specialty Coffee",
    href: "/shop?category=Coffee",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785130601/Speciality_coffee_mp5anf.jpg",
    copy: "Single-origin beans from highland gardens, roasted with restraint."
  },
  {
    category: "Honey" as const,
    title: "Wild Forest Honey",
    href: "/shop?category=Honey",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785130689/Wild_forest_honey_r04s9s.jpg",
    copy: "Raw, seasonal honey shaped by forest bloom cycles."
  },
  {
    category: "Spices" as const,
    title: "Organic Spices",
    href: "/shop?category=Spices",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785130767/Organic_spices_pibfvy.heic",
    copy: "Turmeric, ginger, pepper, and aromatics grown in living soils."
  }
];

export const impactMetrics = [
  { value: "1,200+", label: "Farmers supported" },
  { value: "42", label: "Village partners" },
  { value: "64%", label: "Women-led activity" },
  { value: "100%", label: "Traceable lots" }
];

export const pillars: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Single origin traceable",
    text: "Batch proof from village to pack, so every product can be traced back to its place.",
    icon: MapPin
  },
  {
    title: "Forest and farm sourced",
    text: "Protecting forests while growing livelihoods through responsible sourcing.",
    icon: Trees
  },
  {
    title: "Women-led enterprise",
    text: "Local women leading resilient producer groups, sorting, packing, and trade readiness.",
    icon: Users
  },
  {
    title: "Export-grade quality",
    text: "Graded lots prepared for global buyers, private label programs, and premium retail.",
    icon: PackageCheck
  }
];

export const originRegions = [
  {
    region: "Tuensang, Nagaland",
    focus: "ARABICA COFFEE",
    detail: "Highland gardens, careful drying, producer-led sorting.",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_jpg,q_auto:good/v1785214078/Tuensang_Nagaland_pu5o5q.heic"
  },
  {
    region: "Forest Belts",
    focus: "Wild honey",
    detail: "Seasonal honey collection aligned with forest conservation.",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132689/Forest_belts_nneehy.png"
  },
  {
    region: "Meghalaya - Species and Honey",
    focus: "Species and honey",
    detail: "Regional sourcing relationships for larger commerce requirements.",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132714/Assam_ans_Meghalaya_clusters_elrcxh.png"
  }
];

export const impactInitiatives = [
  { title: "Fair prices", icon: HandHeart },
  { title: "Women empowerment", icon: Users },
  { title: "Forest conservation", icon: Trees },
  { title: "Education and healthcare", icon: ShieldCheck }
];

export const journalPosts = [
  {
    slug: "brewing-highland-coffee",
    title: "Brewing highland coffee without masking origin",
    category: "Coffee",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132813/Brewing_highland_coffee_without_masking_origin_e9qlns.jpg",
    excerpt: "A slow, clean brewing guide for preserving sweetness, clarity, and the character of its mountain origin."
  },
  {
    slug: "forest-honey-cycles",
    title: "How wild honey changes with forest bloom cycles",
    category: "Honey",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132851/How_wild_honey_changes_with_forest_bloom_cycles_ykdrv6.jpg",
    excerpt: "A seasonal look at texture, color, aroma, sustainable harvesting practices, and conservation-linked forest bloom cycles."
  },
  {
    slug: "spice-pantry",
    title: "Cooking with turmeric, ginger, and black pepper",
    category: "Recipes",
    image:
      "https://res.cloudinary.com/dmot064z/image/upload/f_auto,q_auto:good/v1785132881/Cooking_with_turmeric_ginger_and_black_pepper_rdtwe5.jpg",
    excerpt: "Regional recipes and field notes for building warmth, depth, and wellness into daily food."
  }
];

export const wholesaleSegments = [
  { title: "Cafes", icon: Bean, moq: "25 kg roasted coffee or green coffee lots" },
  { title: "Hotels", icon: Hotel, moq: "Curated breakfast, wellness, and gifting packs" },
  { title: "Retailers", icon: Store, moq: "Shelf-ready pouches, jars, and mixed cartons" },
  { title: "Export buyers", icon: Globe2, moq: "Bulk lots, private label, documentation support" }
];

export const storyTimeline = [
  "Sourcing with care",
  "Harvesting by hand",
  "Processing naturally",
  "Packing with proof",
  "Delivering with pride"
];

export const values = [
  { title: "Origin before scale", icon: Leaf },
  { title: "Traceability before claims", icon: BadgeCheck },
  { title: "People before margins", icon: HandHeart },
  { title: "Craft before noise", icon: Sparkles },
  { title: "Living soils before shortcuts", icon: Wheat }
];
