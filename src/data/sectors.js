import {
  FileCheck2, Route, Layers, Factory, Flame, Package,
  Coins, Mountain, MapPinned, Apple, Sprout, ClipboardList,
  CloudFog, Wrench, FileSearch, Leaf, Fuel, Cog,
  Droplets, ShieldCheck, MapPin, TrendingUp, Repeat, ShoppingBag,
} from 'lucide-react'
import { img } from './images'

/*
  Story content for each sector chapter on the Our Businesses page.
  "Areas of focus", "About the company" and the process steps follow each company's own website:
    plastroots.com, shetahit.com, geoclaimenergy.com, flow-up-website-2vgm.vercel.app
  Sector landscape and challenge text is general public context. Review before launch.
*/
export const sectorStories = {
  plastroots: {
    opener: img.plasticPile,
    hook: 'Every product we use leaves something behind.',
    landscape: {
      lead: 'As consumption grows, so does the volume of plastic and packaging waste.',
      body: [
        'Urbanisation, packaged goods and online retail have changed what households and businesses throw away. A growing share of that waste is plastic: light, durable and difficult to manage once it leaves a formal system.',
        'Without proper collection, segregation and recycling, much of this material ends up in landfills, drains, rivers and open land, harming ecosystems and the communities who live alongside them. Handled responsibly, the same material becomes a resource.',
      ],
    },
    gallery: [img.recycleBin, img.oceanPlastic],
    challenge: {
      intro: 'Managing waste well depends on a chain of steps working together. A break anywhere in that chain means valuable material is lost.',
      items: [
        { icon: Layers, t: 'Mixed, unsegregated waste', d: 'When waste is not separated where it is created, recyclable material is contaminated and its value drops sharply.' },
        { icon: Route, t: 'Gaps in collection', d: 'Inconsistent and informal collection means a large share of material never reaches a recycler.' },
        { icon: FileCheck2, t: 'Accountability for packaging', d: "Under India's Plastic Waste Management Rules, producers, importers and brand owners must meet Extended Producer Responsibility (EPR) obligations for the plastic packaging they introduce." },
      ],
    },
    wayForward: {
      label: 'The Plastroots approach',
      intro: 'Plastroots follows a lifecycle that moves material from the waste stream back into productive use.',
      steps: [
        { t: 'Collect', d: 'Efficient gathering of waste from its sources.' },
        { t: 'Segregate', d: 'Precise sorting so each material can be handled correctly.' },
        { t: 'Recover', d: 'Extracting value from what would otherwise be discarded.' },
        { t: 'Recycle', d: 'Sustainable processing into usable material.' },
        { t: 'Reintroduce', d: 'Returning material to industry as part of a circular economy.' },
      ],
    },
    pullQuote: 'Waste is only waste when we stop managing it.',
    company: img.plastroots,
    about: [
      'Plastroots Waste Management & Solutions Private Limited is the Sarvaya Group’s business in waste management, working to move industry from landfill dependency towards a circular economy.',
      'Through EPR compliance, industrial scrap recovery and the production of alternative fuel, the company supplies manufacturing industries with recycled granules and cement kilns with Refuse Derived Fuel (RDF).',
    ],
    focus: [
      { icon: FileCheck2, t: 'EPR compliance', d: 'Helping producers and brand owners meet their Extended Producer Responsibility obligations.' },
      { icon: Factory, t: 'Industrial scrap recovery', d: 'Recovering usable material from industrial plastic scrap.' },
      { icon: Package, t: 'Recycled granules', d: 'Supplying manufacturing industries with recycled plastic granules.' },
      { icon: Flame, t: 'Refuse Derived Fuel (RDF)', d: 'Supplying cement kilns with RDF as an alternative to fossil fuel.' },
    ],
  },

  shetahit: {
    opener: img.wheat,
    hook: 'Everything on our plate begins with a farmer.',
    landscape: {
      lead: 'Agriculture feeds the nation and supports the livelihoods of close to half of India’s workforce.',
      body: [
        'Most Indian farms are small and family-run. Their success depends on decisions made every season: what to sow, how to nourish the soil, which products to trust and where to sell.',
        'Years of heavy chemical use have taken a toll on soil health in many regions. Organic inputs, sound guidance and better links to markets help farmers protect their land while improving their returns.',
      ],
    },
    gallery: [img.farmerPlanting, img.seedTray],
    challenge: {
      intro: 'Farmers carry a great deal of risk every season, often with limited support close at hand.',
      items: [
        { icon: Coins, t: 'Rising input costs', d: 'Fertilizers, seeds and other inputs form a large part of a farmer’s expenses, putting pressure on already thin margins.' },
        { icon: Mountain, t: 'Declining soil health', d: 'Chemical-heavy practices over many seasons can degrade soil and disturb its natural microbial life.' },
        { icon: MapPinned, t: 'Access to markets and advice', d: 'Reaching reliable buyers and getting the right guidance at the right time is not always easy, especially in rural areas.' },
      ],
    },
    wayForward: {
      label: 'The Shetahit approach',
      intro: 'Shetahit works through an execution chain that starts with the farm itself and continues long after the products are delivered.',
      steps: [
        { t: 'Farm assessment', d: 'Soil testing and environmental analysis to understand each farm’s needs.' },
        { t: 'Report', d: 'Clear insights and actionable recommendations for the land.' },
        { t: 'Product finalisation', d: 'Selecting the right organic fertilizers, seeds and solutions for the farm.' },
        { t: 'Ground execution', d: 'Experts help put the recommended practices into action.' },
        { t: 'Ongoing support', d: 'Continued monitoring, support and market linkages.' },
      ],
    },
    pullQuote: 'When farmers grow, communities grow with them.',
    company: img.shetahit,
    about: [
      'Shetahit Farm Solutions Private Limited is the Sarvaya Group’s business in agriculture, bridging the gap between farmers and markets.',
      'The company delivers quality agricultural products and farming solutions with a focus on organic practices that reduce input costs, restore soil health and protect the environment, building a sustainable ecosystem for farmers, businesses and communities.',
    ],
    focus: [
      { icon: Apple, t: 'Food, Vegetable & Fruit (FVF) Supply', d: 'Connecting farm produce with buyers and markets.' },
      { icon: Sprout, t: 'Agri-products (Agri-MPD)', d: 'Quality agricultural products, including organic solutions.' },
      { icon: ClipboardList, t: 'Farm Consulting Services', d: 'Assessment, guidance and on-ground support for farmers.' },
    ],
  },

  geoclaim: {
    opener: img.windSunset,
    hook: 'The energy of tomorrow is being built today.',
    landscape: {
      lead: 'India has set a goal of 500 GW of non-fossil fuel electricity capacity by 2030.',
      body: [
        'Meeting rising energy demand while reducing emissions requires a steady shift towards renewable sources. Alongside solar and wind, energy recovered from waste and biomass has an important role to play.',
        'Agricultural residue, municipal waste and organic material are too often burned or sent to landfill. Processed correctly, they become biomass fuel, Refuse Derived Fuel and biogas: cleaner energy made from material that would otherwise be wasted.',
      ],
    },
    gallery: [img.hayBales, img.solarField],
    challenge: {
      intro: 'The transition to cleaner energy is as much about execution on the ground as it is about ambition.',
      items: [
        { icon: CloudFog, t: 'Waste burned or landfilled', d: 'Crop residue burning and landfilling waste pollute the air and land while wasting a usable energy resource.' },
        { icon: Wrench, t: 'Infrastructure and machinery', d: 'Waste-to-energy projects need the right plant, machinery and technical expertise to succeed.' },
        { icon: FileSearch, t: 'Matching waste to the right solution', d: 'Every site and waste stream is different, so solutions must be assessed and planned carefully before they are built.' },
      ],
    },
    wayForward: {
      label: 'The Geoclaim approach',
      intro: 'Geoclaim follows a circular journey that turns waste streams into clean, value-driven energy products.',
      steps: [
        { t: 'Site assessment', d: 'Site evaluation, waste audits and feasibility studies before planning.' },
        { t: 'Waste source alignment', d: 'Identifying and validating suitable waste streams and feedstock.' },
        { t: 'Processing', d: 'Conversion into RDF, biomass or biogas precursors.' },
        { t: 'Energy conversion', d: 'Recovering energy through thermal, fuel and chemical routes.' },
        { t: 'Sustainability', d: 'A reduced carbon footprint and measurable circular outcomes.' },
      ],
    },
    pullQuote: 'Cleaner energy is a choice we make, project by project.',
    company: img.windHills,
    about: [
      'Geoclaim Energy Private Limited is the Sarvaya Group’s business in renewable energy and biomass, focused on transforming waste into clean fuels and renewable energy.',
      'The company works with industries, government bodies and institutions, using waste-to-energy approaches to bridge the gap between the waste businesses produce and the renewable, sustainable energy they need.',
    ],
    focus: [
      { icon: Leaf, t: 'Biomass Fuel Supply', d: 'Sourcing and distribution of high-grade biomass fuels.' },
      { icon: Fuel, t: 'RDF Processing & Supply', d: 'Converting municipal and industrial waste into high-calorific fuel.' },
      { icon: Flame, t: 'Biogas Plant Establishment', d: 'Turnkey anaerobic digestion for organic waste and renewable gas.' },
      { icon: Cog, t: 'Plant Machinery Supply & Consulting', d: 'Machinery and advice for waste management infrastructure.' },
    ],
  },

  flowup: {
    opener: img.waterPour,
    hook: 'The most essential drink of all.',
    landscape: {
      lead: 'Safe drinking water is something everyone needs, every single day.',
      body: [
        'For people on the move, at work, in hotels, gyms and events, packaged drinking water has become an everyday essential. With so many choices, people want to know the water they drink is pure, safe and handled with care.',
        'That trust is built on more than the water itself. The source, the bottle, the seal and the way it reaches the customer all shape whether a brand earns a place in daily life.',
      ],
    },
    gallery: [img.waterBottleDark, img.waterHands],
    challenge: {
      intro: 'In a crowded market, standing out takes more than filling a bottle.',
      items: [
        { icon: ShieldCheck, t: 'Trust in purity', d: 'Customers expect water that is safe, clean and consistent, with confidence in where it comes from.' },
        { icon: Repeat, t: 'Quality in every bottle', d: 'Packaging must protect the water, prevent leaks and tampering, and hold up in everyday use.' },
        { icon: ShoppingBag, t: 'Freshness and reach', d: 'Getting every bottle to customers quickly and in perfect condition depends on a dependable distribution network.' },
      ],
    },
    wayForward: {
      label: 'The Flowup approach',
      intro: 'Flowup Drinks focuses on purity, a better bottle and local distribution that keeps every bottle fresh.',
      steps: [
        { t: 'Trusted sourcing', d: 'Partnering with trusted local manufacturers for safe, high-quality water.' },
        { t: 'Essential minerals', d: 'Water naturally containing minerals such as calcium and magnesium.' },
        { t: 'A better bottle', d: 'Crush-resistant, BPA-free, double-sealed and fully recyclable.' },
        { t: 'Local distribution', d: 'Serving a dedicated area for peak freshness and quality control.' },
      ],
    },
    pullQuote: 'Purity you can see, in every bottle.',
    company: img.waterBottle,
    about: [
      'Aayuneer Enterprises is the Sarvaya Group’s business in beverages. Its consumer brand, Flowup Drinks, is a premium hydration brand committed to delivering pure, safe and refreshing drinking water.',
      'With its flagship bottled water, Flowup focuses on quality, trust and customer satisfaction. It currently serves a 200 km radius around its headquarters in Nagpur, Maharashtra, so every bottle reaches customers at peak freshness.',
    ],
    focus: [
      { icon: Droplets, t: 'Packaged drinking water', d: 'Pure, safe drinking water with a crystal clear taste.' },
      { icon: ShieldCheck, t: 'Premium bottle design', d: 'Crush-resistant, BPA-free, double-sealed and 100% recyclable.' },
      { icon: MapPin, t: 'Local distribution', d: 'A dedicated 200 km service area around Nagpur, Maharashtra.' },
    ],
  },
}
