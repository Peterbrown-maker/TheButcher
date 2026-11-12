// Everything the site says about The Butcher Monate Corner lives here, so a
// price, the address or the opening hours only ever need changing in one place.
//
// Address and phone numbers come from the "Monate Sunday" event poster.
// TODO (owner): confirm the food prices, opening hours and social media links.

const IMG = "/images/butcher";

export const BRAND = {
  name: "The Butcher",
  fullName: "The Butcher Monate Corner",
  descriptor: "Meat & Shisanyama · Block FF, Soshanguve",
  slogan: "Monate Corner",
  tagline: "Fresh meat, open flames, good music. This is where Sosha gets together.",
  address: {
    street: "342 Block FF",
    area: "Block FF, Soshanguve",
    city: "Soshanguve, Pretoria, Gauteng",
  },
  phones: ["012 023 0860", "083 343 9259"],
  logo: `${IMG}/logo.png`,
  heroImage: `${IMG}/entrance.webp`,
} as const;

export const ADDRESS_LINE = `${BRAND.address.street}, ${BRAND.address.city}`;
const MAP_QUERY = encodeURIComponent(`The Butcher Monate Corner, ${BRAND.address.street}, Soshanguve`);
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
export const telHref = (phone: string) => `tel:+27${phone.replace(/\s/g, "").replace(/^0/, "")}`;

export const SOCIALS = {
  facebook: "https://www.facebook.com/search/top?q=The%20Butcher%20Monate%20Corner",
  instagram: "https://www.instagram.com/explore/search/keyword/?q=The%20Butcher%20Monate%20Corner",
};

export const PHOTOS = {
  entrance: `${IMG}/entrance.webp`,
  danceFloor: `${IMG}/dance_floor.webp`,
  insideEvent: `${IMG}/inside_event.webp`,
  dj: `${IMG}/dj_event.webp`,
  dj2: `${IMG}/dj_event2.webp`,
  poster: `${IMG}/monate_sunday_poster.webp`,
  feast: `${IMG}/feast_collage.jpg`,
  chicken: `${IMG}/grilled_chicken.jpg`,
  wings: `${IMG}/wings_and_sausage.jpg`,
  steak: `${IMG}/steak_and_lamb_chops.jpg`,
  ribs: `${IMG}/glazed_ribs.jpg`,
  mixedGrill: `${IMG}/mixed_grill_platter.jpg`,
  burger: `${IMG}/cheeseburger_and_chips.jpg`,
  seafood: `${IMG}/seafood_platter.jpg`,
  cocktails: `${IMG}/cocktails.jpg`,
  kasiPlate: `${IMG}/full_plate.jpg`,
  pap: `${IMG}/pap.jpg`,
};

// TODO (owner): confirm these hours. Keep src/lib/hours.ts in sync.
export const OPENING_HOURS = [
  { days: "Monday – Thursday", hours: "10:00 – 22:00" },
  { days: "Friday – Saturday", hours: "10:00 – 02:00" },
  { days: "Sunday", hours: "10:00 – 22:00" },
];

export interface MenuItem {
  name: string;
  /** Rand amount, or a pre-formatted price like "R35 each / R180". */
  price: number | string;
  description?: string;
}

export interface MenuGroup {
  name?: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  name: string;
  kind: "food" | "drinks";
  tagline?: string;
  note?: string;
  image?: string;
  groups: MenuGroup[];
}

export const formatPrice = (price: MenuItem["price"]) => (typeof price === "number" ? `R${price}` : price);

const WITH = "Served with pap & chakalaka or chips";

// TODO (owner): these food prices are placeholders. Replace them with your real menu.
export const MENU: MenuSection[] = [
  {
    id: "shisanyama",
    name: "Shisanyama Plates",
    kind: "food",
    tagline: "Flame grilled daily",
    note: "Choose your sauce: peri-peri (hot or mild), BBQ or lemon & herb.",
    image: PHOTOS.steak,
    groups: [
      {
        items: [
          { name: "Quarter Chicken", price: 75, description: WITH },
          { name: "Half Chicken", price: 120, description: WITH },
          { name: "Full Chicken", price: 210, description: "Whole flame-grilled chicken with 2 pap or chips and chakalaka" },
          { name: "Chicken Wings (6)", price: 95, description: WITH },
          { name: "Boerewors", price: 80, description: WITH },
          { name: "Rump Steak 300g", price: 150, description: WITH },
          { name: "T-Bone 400g", price: 170, description: WITH },
          { name: "Lamb Chops", price: 160, description: WITH },
          { name: "Pork Chops", price: 110, description: WITH },
          { name: "Sticky Pork Ribs", price: 165, description: WITH },
          { name: "Beef Short Ribs", price: 140, description: WITH },
          { name: "Mixed Grill", price: 185, description: "Steak, wors, wings and a lamb chop with pap, chakalaka or chips" },
        ],
      },
    ],
  },
  {
    id: "platters",
    name: "Braai Platters",
    kind: "food",
    tagline: "Made for sharing",
    note: "Platters take a little longer. Good meat takes time on the fire.",
    image: PHOTOS.mixedGrill,
    groups: [
      {
        items: [
          { name: "Butcher's Platter for 2", price: 380, description: "Short ribs, wings, wors and lamb chops with 2 pap, chakalaka & chips" },
          { name: "Monate Platter for 4", price: 690, description: "Steak, short ribs, wings, wors, pork chops and lamb chops with 4 pap, chakalaka, salad & chips" },
          { name: "Family Feast for 6", price: 990, description: "Full chicken, short ribs, wings, wors, T-bone and lamb chops with 6 pap, chakalaka, salad & chips" },
          { name: "Seafood Platter for 2", price: 420, description: "Hake, calamari, prawns and mussels with chips and salad" },
        ],
      },
    ],
  },
  {
    id: "kasi",
    name: "Kasi Classics",
    kind: "food",
    tagline: "Ask what's cooking today",
    note: "Availability changes daily. Ask your waitron.",
    image: PHOTOS.kasiPlate,
    groups: [
      {
        items: [
          { name: "Mogodu (Tripe)", price: 90, description: "Served with pap or dumpling" },
          { name: "Half Skop", price: 110, description: "Spiced and slow cooked, served with pap" },
          { name: "Mogodu & Skop Mix", price: 130, description: "Served with pap and atchaar" },
          { name: "Beef Stew", price: 95, description: "Served with pap, rice or dumpling and veggies" },
          { name: "Oxtail", price: 140, description: "Slow cooked, served with pap, rice or dumpling and veggies" },
        ],
      },
    ],
  },
  {
    id: "burgers-wraps",
    name: "Burgers & Wraps",
    kind: "food",
    tagline: "Quick bites",
    image: PHOTOS.burger,
    groups: [
      {
        items: [
          { name: "Butcher Beef Burger", price: 95, description: "200g beef patty, cheese, lettuce, tomato and our house sauce, with chips" },
          { name: "Chicken Burger", price: 85, description: "Grilled chicken breast, lettuce, tomato and mayo, with chips" },
          { name: "Steak Wrap", price: 95, description: "Grilled strips of steak, onions, peppers and sauce, with chips" },
          { name: "Chicken Wrap", price: 85, description: "Peri-peri chicken, lettuce, tomato and mayo, with chips" },
        ],
      },
    ],
  },
  {
    id: "seafood",
    name: "From the Sea",
    kind: "food",
    tagline: "Fresh & fried",
    image: PHOTOS.seafood,
    groups: [
      {
        items: [
          { name: "Hake & Chips", price: 95, description: "Grilled or fried, with chips and salad" },
          { name: "Calamari & Chips", price: 110, description: "With chips and tartare sauce" },
          { name: "Prawns (8)", price: 180, description: "Grilled in garlic butter, with rice or chips" },
        ],
      },
    ],
  },
  {
    id: "sides",
    name: "Sides & Extras",
    kind: "food",
    groups: [
      {
        items: [
          { name: "Pap", price: 15 },
          { name: "Chakalaka", price: 20 },
          { name: "Chips (Large)", price: 35 },
          { name: "Dumpling", price: 20 },
          { name: "Garden Salad", price: 40 },
          { name: "Coleslaw", price: 25 },
          { name: "Garlic Roll", price: 20 },
          { name: "Extra Sauce", price: 10 },
        ],
      },
    ],
  },
  {
    id: "soft-drinks",
    name: "Cold Drinks",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Coke / Fanta / Sprite", price: 20 },
          { name: "Coke Zero / Fanta Zero", price: 20 },
          { name: "Stoney Ginger Beer", price: 20 },
          { name: "Appletiser / Grapetiser", price: 30 },
          { name: "Sparkling Water 500ml", price: 20 },
          { name: "Still Water 500ml", price: 20 },
          { name: "Red Bull", price: 30 },
          { name: "Liqui-Fruit Orange", price: 25 },
          { name: "Pure Valley Juice", price: 25 },
          { name: "Cappy Apple Juice", price: 25 },
          { name: "Cappy Juice (Orange Mango / Tropical)", price: 20 },
          { name: "Cranberry Can", price: 25 },
          { name: "Fitch & Leedes Pink Tonic", price: 20 },
          { name: "Fitch & Leedes Ginger Ale", price: 20 },
          { name: "Fitch & Leedes Lemonade", price: 20 },
          { name: "Fitch & Leedes Soda / Tonic", price: 20 },
          { name: "Tonic Water 1L", price: 30 },
        ],
      },
    ],
  },
  {
    id: "ciders",
    name: "Ciders",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Savanna", price: 30 },
          { name: "Brutal Fruit", price: 30 },
          { name: "Bernini", price: 30 },
          { name: "Belgravia", price: 30 },
          { name: "Hunters", price: 30 },
          { name: "Strongbow", price: 30 },
          { name: "Smirnoff Spin", price: 30 },
          { name: "Black Crown", price: 30 },
          { name: "Rekorderlig", price: 45 },
          { name: "Tutti", price: 80 },
          { name: "Ice Tropez", price: 110 },
          { name: "Ice Tropez Zero", price: 95 },
        ],
      },
    ],
  },
  {
    id: "pre-mix",
    name: "Pre-Mix",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Klipdrift & Cola", price: 30 },
          { name: "BuzzBallz", price: 65 },
        ],
      },
    ],
  },
  {
    id: "beers",
    name: "Beers",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Heineken / Heineken Lite / Heineken 0.0", price: 30 },
          { name: "Corona", price: 35 },
          { name: "Castle Lite", price: 30 },
          { name: "Castle Lager", price: 30 },
          { name: "Miller Genuine Draft", price: 25 },
          { name: "Stella Artois", price: 30 },
          { name: "Windhoek Lager / Windhoek Draught", price: 30 },
        ],
      },
    ],
  },
  {
    id: "wines",
    name: "Wines",
    kind: "drinks",
    groups: [
      {
        name: "Sparkling Wines",
        items: [
          { name: "Krone", price: 350 },
          { name: "Pongrácz Brut", price: 300 },
          { name: "Pongrácz Noble Nectar", price: 350 },
          { name: "Steenberg", price: 350 },
          { name: "Simonsig", price: 350 },
          { name: "MCC", price: 650 },
          { name: "Mimosa", price: 150 },
          { name: "Sparkling Wine / Champagne (Glass)", price: 55 },
        ],
      },
      {
        name: "Dry Reds",
        items: [
          { name: "R&R", price: 380 },
          { name: "Warwick First Lady", price: 180 },
          { name: "Warwick Professor Black", price: 480 },
          { name: "Kanonkop", price: 250 },
          { name: "Chocolate Block", price: 470 },
          { name: "Vilafonté Series M", price: 1500 },
          { name: "Fat Bastard", price: 250 },
          { name: "La Motte", price: 150 },
        ],
      },
      {
        name: "Dry Whites",
        items: [
          { name: "R&R", price: 380 },
          { name: "Warwick First Lady", price: 200 },
          { name: "Durbanville Hills Chardonnay", price: 150 },
        ],
      },
    ],
  },
  {
    id: "spirits",
    name: "Spirits",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Rum", price: 30 },
          { name: "Jägermeister", price: 30 },
        ],
      },
      {
        name: "Whiskey",
        items: [
          { name: "Jameson", price: 750 },
          { name: "Jameson Select Reserve", price: 1100 },
          { name: "Jameson 18 Year Old", price: 3800 },
          { name: "Johnnie Walker Black Label", price: 750 },
          { name: "Johnnie Walker Double Black", price: 900 },
          { name: "Johnnie Walker Green Label", price: 1800 },
          { name: "Johnnie Walker Blue Label", price: 6000 },
          { name: "Johnnie Walker Gold Label", price: 1400 },
          { name: "Johnnie Walker 18 Year Old", price: 4800 },
          { name: "Glenfiddich 12 Year Old", price: 1200 },
          { name: "Glenfiddich 15 Year Old", price: 1800 },
          { name: "Glenfiddich 18 Year Old", price: 3200 },
          { name: "Glenfiddich 21 Year Old", price: 4600 },
          { name: "Glenlivet 12 Year Old", price: 1200 },
          { name: "Glenlivet 15 Year Old", price: 1800 },
          { name: "Glenlivet 18 Year Old", price: 3800 },
        ],
      },
      {
        name: "Cognac",
        items: [
          { name: "Hennessy VS", price: 1100 },
          { name: "Hennessy VSOP", price: 1700 },
          { name: "Hennessy XO", price: 5500 },
          { name: "Rémy Martin VS", price: 1000 },
          { name: "Rémy Martin VSOP", price: 1800 },
          { name: "Rémy Martin XO", price: 4900 },
          { name: "Rémy Martin 1738", price: 2600 },
          { name: "Martell VS", price: 980 },
          { name: "Martell VSOP", price: 1400 },
          { name: "Honor VS", price: 900 },
          { name: "Courvoisier VS", price: 950 },
          { name: "Courvoisier VSOP", price: 1600 },
          { name: "D'Ussé", price: 1600 },
        ],
      },
      {
        name: "Tequila",
        items: [
          { name: "Olmeca", price: 600 },
          { name: "Don Julio", price: 2100 },
          { name: "Don Julio 1942", price: 8500 },
          { name: "Clase Azul", price: 6000 },
          { name: "Casamigos", price: 2000 },
        ],
      },
      {
        name: "Vodka",
        items: [
          { name: "Cruz Vodka", price: 500 },
          { name: "Cîroc", price: 950 },
          { name: "Smirnoff 1818", price: 300 },
        ],
      },
      {
        name: "Liqueurs",
        items: [
          { name: "Amarula", price: 280 },
          { name: "Jägermeister", price: 650 },
        ],
      },
      {
        name: "Gin",
        items: [
          { name: "Tanqueray", price: 620 },
          { name: "Tanqueray No. Ten", price: 950 },
          { name: "Tanqueray Royale", price: 500 },
          { name: "Hendrick's", price: 980 },
          { name: "Inverroche", price: 850 },
          { name: "Amarula Gin", price: 400 },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    name: "Cocktails",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Paloma", price: 88 },
          { name: "Ginbull", price: 110 },
          { name: "Peach Reader", price: 105 },
          { name: "Screaming Orgasm", price: 75 },
          { name: "Pan Galactic", price: 90 },
          { name: "Long Island Iced Tea", price: 95 },
          { name: "Sex on the Beach", price: 68 },
          { name: "Strawberry Daiquiri", price: 85 },
          { name: "Gin & Cranberry Twist", price: 88 },
          { name: "Love Potion", price: 100 },
          { name: "Classic Margarita", price: 68 },
          { name: "Steel Works", price: 65 },
          { name: "Whiskey Sour", price: 85 },
          { name: "Rock Shandy", price: 65 },
          { name: "Mojito", price: 78 },
          { name: "Aperol Spritz", price: 65 },
          { name: "Mimosa", price: 65 },
        ],
      },
    ],
  },
  {
    id: "shooters",
    name: "Shooters",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Don Julio 1942", price: 300 },
          { name: "Olmeca (Gold & Silver)", price: 30 },
          { name: "Don Julio (Blanco & Reposado)", price: 70 },
          { name: "Jägermeister", price: 30 },
          { name: "Blow Job", price: 30 },
          { name: "Springbok", price: 30 },
          { name: "Abortion", price: 30 },
          { name: "Bubblegum", price: 30 },
        ],
      },
    ],
  },
  {
    id: "champagne",
    name: "Champagne",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Veuve Clicquot Rich", price: 1800 },
          { name: "Veuve Clicquot Brut", price: 1600 },
          { name: "Moët Nectar Impérial", price: 1600 },
          { name: "Moët Brut Impérial", price: 1300 },
          { name: "Armand de Brignac (Ace of Spades)", price: 9000 },
          { name: "Dom Pérignon", price: 6500 },
          { name: "G.H. Mumm", price: 1600 },
        ],
      },
    ],
  },
  {
    id: "hot-drinks",
    name: "Hot Beverages",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Filter Coffee", price: 50 },
          { name: "Rooibos Tea", price: 30 },
          { name: "Hot Chocolate", price: 58 },
          { name: "Coffee & Cake Slice", price: 80 },
        ],
      },
    ],
  },
];

export const MENU_ITEM_COUNT = MENU.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.items.length, 0), 0);

/** Event posters and nights at The Butcher. */
export const SPECIALS = [
  { src: PHOTOS.poster, alt: "Monate Sunday: wrap combo and cocktail for R200, with live DJs" },
  { src: PHOTOS.danceFloor, alt: "The dance floor at a Butcher event" },
  { src: PHOTOS.dj, alt: "DJ playing a set at The Butcher" },
  { src: PHOTOS.insideEvent, alt: "Guest at a Butcher Monate Corner event" },
  { src: PHOTOS.dj2, alt: "Another DJ set at The Butcher" },
];

export const GALLERY = [
  { src: PHOTOS.entrance, alt: "The Butcher Monate Corner sign lit up at night" },
  { src: PHOTOS.mixedGrill, alt: "A mixed grill platter" },
  { src: PHOTOS.danceFloor, alt: "People dancing at The Butcher" },
  { src: PHOTOS.steak, alt: "Steak and lamb chops" },
  { src: PHOTOS.dj, alt: "DJ set at The Butcher" },
  { src: PHOTOS.ribs, alt: "Sticky pork ribs" },
  { src: PHOTOS.insideEvent, alt: "A night out at Monate Corner" },
  { src: PHOTOS.cocktails, alt: "Cocktails from the bar" },
];

export const FAQS = [
  {
    q: "Where are you?",
    a: `${BRAND.address.street}, Soshanguve. Tap "Get Directions" anywhere on the site to open it in Google Maps.`,
  },
  {
    q: "What's Monate Sunday?",
    a: "Our Sunday session with live DJs. Look out for the wrap combo and cocktail deal (R200, 12:00 – 18:00). Check the Specials page for what's coming up.",
  },
  {
    q: "Do you have power during load shedding?",
    a: "Yes. We run a backup generator, so the music and the fire keep going.",
  },
  {
    q: "Can I book a table or a platter for a group?",
    a: `Yes. Call us on ${BRAND.phones[0]} or ${BRAND.phones[1]}, or order ahead on this site and choose "Dine in".`,
  },
  {
    q: "Can you cater for allergies?",
    a: "Tell your waitron about any allergies or dietary needs before you order and we'll do our best to help.",
  },
];
