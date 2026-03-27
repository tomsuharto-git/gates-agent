export interface Brand {
  name: string;
  detail: string;
  stat?: string;
  price?: string;
}

export interface ParentCultureCategory {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  topTargets: Brand[];
  whiteSpace?: string[];
}

export const keyStats = [
  { value: '512M', label: 'new parents in US, UK & Germany' },
  { value: '$750M', label: 'Babylist revenue (2025), +45% YoY' },
  { value: '55.6B', label: 'minutes of Bluey streamed in 2024' },
  { value: '88%', label: 'of parents trust their pediatrician' },
];

export const categories: ParentCultureCategory[] = [
  {
    id: 'buy',
    label: 'What They Buy',
    title: 'Products parents already purchase.',
    subtitle: 'New parents spend luxury goods prices on baby products and use them to signal identity. The brand shows up as a co-branded version of what they\'re buying anyway.',
    icon: '01',
    color: '#E8C368',
    topTargets: [
      { name: 'Babylist', detail: 'Universal registry platform. 22% of US families having a baby use it. The discovery layer for the entire category.', stat: '$750M revenue' },
      { name: 'Hatch', detail: '#1 most registered nursery item on Babylist. Sound machine + night light in every nursery. Parents see it every single night.', price: '$70-$90' },
      { name: 'Coterie', detail: '"Rolls-Royce of diapers." Created a luxury subcategory in a commodity product. 120K subscribers.', stat: '$160M revenue' },
      { name: 'Doona', detail: '#1 most registered infant car seat. Converts car seat to stroller. Celebrity magnet.', price: '$550-$650' },
      { name: 'Lovevery', detail: 'Montessori-aligned play kit subscription. Chan Zuckerberg Initiative invested. Cult following among developmental-minded parents.', stat: '$149M revenue est.' },
      { name: 'SNOO', detail: 'Smart bassinet. Auto-rocks + white noise. The ultimate "serious parents" purchase. Also available as $159/mo rental.', price: '$1,695' },
      { name: 'Artipoppe', detail: 'The Louis Vuitton of baby carriers. Celebrity gifting strategy. Strong dupe market proves cultural penetration.', price: '$420-$800+' },
      { name: 'Mockingbird', detail: '#1 most registered stroller on Babylist (2026). Positioned as the "smart UPPAbaby alternative."', price: '$549' },
    ],
  },
  {
    id: 'consume',
    label: 'What They Consume',
    title: 'Content partnerships made for parents.',
    subtitle: 'Nobody has done Product Red for audio. Branded episodes where ad revenue goes to the cause. Content parents consume because it\'s genuinely good. The cause rides inside.',
    icon: '02',
    color: '#7ED6A4',
    topTargets: [
      { name: 'Dr. Becky Kennedy / Good Inside', detail: 'Clinical psychologist. TIME100 Creator 2025. Turned Instagram into a $34M/year membership business. 3.4M social + 100K+ paying subscribers.', stat: '$34M/year revenue' },
      { name: 'Bluey / Disney+', detail: '#1 most-streamed show of all of 2024. 55.62B minutes. Written for parents as much as kids. Dads report it taught them how to play.', stat: '#1 streamed show' },
      { name: 'Parenting Hell (UK)', detail: 'Rob Beckett & Josh Widdicombe. Consistently chart-topping in UK. Sells out The O2. THE dominant UK parenting podcast.', stat: '50M+ downloads' },
      { name: 'Scary Mommy', detail: 'Biggest US parenting media brand by social reach. Unfiltered, relatable tone. Part of BDG Media.', stat: '100M+ monthly social reach' },
      { name: 'Huckleberry', detail: 'AI-powered sleep optimization. "SweetSpot" nap predictor. 93% of users report improved sleep. ~$600K/month revenue.', stat: '5M+ families' },
      { name: 'Peanut', detail: '"Tinder for mom friends." Only social app built specifically for moms. Undervalued ad inventory. Index Ventures backed.', stat: '5M+ users' },
      { name: 'Emily Oster / ParentData', detail: 'Brown economist. Dismantles parenting myths with data. Created a reader who distrusts received wisdom and wants evidence.', stat: '250K+ newsletter subscribers' },
      { name: 'ELTERNgespräch (DE)', detail: '"Almost the mother of parenting podcasts" in Germany. Expert-led. No Dr. Becky equivalent exists in German yet.', stat: 'Top DE parenting pod' },
    ],
  },
  {
    id: 'go',
    label: 'Where They Go',
    title: 'Spaces and events parents already visit.',
    subtitle: 'Buy Buy Baby is dead. Target is filling the vacuum. Play cafes are the fastest-growing format with no national chain. The cause brand can build physical presence in the places parents already take their kids.',
    icon: '03',
    color: '#6B9FFF',
    topTargets: [
      { name: 'Target', detail: 'Filling Buy Buy Baby vacuum. Rolling out Baby Boutiques at ~200 stores. Baby Concierge service. "The Target Run" is a cultural phenomenon.', stat: '1,956 US stores' },
      { name: 'KaBOOM!', detail: 'Nonprofit that funds and builds community playgrounds. Corporate-sponsored community builds. The direct analog for branded playground idea.', stat: '17,000+ playgrounds built' },
      { name: 'FIT4MOM / Stroller Strides', detail: 'Outdoor stroller fitness franchise. Social as much as fitness. Top 50 Franchises (Franchise Business Review 2024).', stat: '1,800+ class locations' },
      { name: 'Mamava', detail: 'Dominant provider of nursing pods in airports, stadiums, malls, museums. 52% of breastfeeding parents struggle to find pumping spaces.', stat: '10,000+ locations' },
      { name: 'Children\'s Museums (ACM)', detail: '470+ member institutions across 50 states. Among the most universally attended spaces for parents with kids 0-5.', stat: '470+ institutions' },
      { name: 'Peppa Pig Theme Park', detail: 'Standalone preschool park (ages 2-6). Winter Haven FL + Günzburg, Bavaria. Merlin Entertainments.', price: '$29-$34 tickets' },
      { name: 'Pediatrician Offices', detail: '~14 well visits birth-to-5 plus sick visits. Average wait: 19 min. Highest-frequency captive touchpoint. Consistently under-designed.', stat: '~20+ visits by age 5' },
      { name: 'Play Cafes (Emerging)', detail: 'Coffee for parents + supervised play for kids. No national chain exists. Fastest-growing parent space format. Brand could fund or build.', stat: 'No national chain' },
    ],
  },
  {
    id: 'wear',
    label: 'What They Wear',
    title: 'Merch and co-branded products that signal identity.',
    subtitle: 'No parent cause wearable has achieved mass cultural penetration. No brand owns the hospital birth moment. The matching parent-kid clothing market is growing 8-10% annually. This is wide open.',
    icon: '04',
    color: '#D4A0E8',
    topTargets: [
      { name: 'New Balance', detail: 'THE dadcore shoe. Already has a "Family Matching Shoes" section. Parent-kid matching sneakers are a real trend. Kids Foot Locker has a "Mommy & Me" category.', stat: '990 is iconic' },
      { name: 'Vuori', detail: 'Explicitly called "the new mom uniform" in editorial. Softer than Lululemon. Slightly more relaxed silhouette.', stat: '$288M revenue' },
      { name: 'Hanna Andersson', detail: 'Invented matching family pajamas (1993). Kylie Jenner\'s Grinch PJ post: 9.3M likes. "Hanna-me-downs" passed between generations.', stat: 'OG matching brand' },
      { name: 'Kyte Baby', detail: 'Bamboo sleepwear with cult following. 100K+ member Facebook group. "Bamboo Moms" identity. Limited drops create frenzy.', stat: '100K+ FB community' },
      { name: 'Hospital Systems', detail: 'The iconic pink-striped newborn hat is unbranded. Most photographed moment of a parent\'s life. No consumer brand has colonized the birth visual.', stat: 'Unowned gap' },
      { name: 'Lululemon', detail: 'Aspirational standard. "Lulu mom aesthetic" is a Pinterest and TikTok category. Postpartum-friendly stretch.', price: '$98-$148/item' },
      { name: 'Caraa / Dagne Dover', detail: 'Premium diaper bags that don\'t look like diaper bags. Fashion-adjacent. Signal status through subtlety.', price: '$250-$390' },
      { name: 'Freshly Picked', detail: 'Soft-sole moccasins. "First shoe" Instagram status. Started as influencer brand, became a category.', price: '$50-$60' },
    ],
  },
  {
    id: 'follow',
    label: 'Who They Follow',
    title: 'Creators who co-brand, not endorse.',
    subtitle: '88% trust their pediatrician. Only 15% trust a specific influencer for health decisions. But influencers win on normalization and discovery. The creators who bridge expert credibility with peer voice are the most valuable.',
    icon: '05',
    color: '#E8C368',
    topTargets: [
      { name: 'Dr. Becky Kennedy', detail: 'Clinical psychologist. TIME100 Creator 2025. Good Inside membership: $34M/year revenue. The ceiling for expert-to-brand.', stat: '3.4M social' },
      { name: 'Big Little Feelings', detail: 'Therapist-founded but peer-voiced. 500K+ "Winning the Toddler Stage" course enrollments. Celebrity fans (Blake Lively).', stat: '4M Instagram' },
      { name: 'Stacey Solomon (UK)', detail: 'Home organization, gentle parenting, DIY. Warmth-first brand. The clear #1 for mass reach in UK.', stat: '5.7M Instagram' },
      { name: 'Laro Benz', detail: 'Comedic dad content with infant son Zaza. 1.2B likes. Massive reach among young fathers.', stat: '16.8M TikTok' },
      { name: 'Rob Kenney / Dad How Do I', detail: '"Dad, How Do I?" Life skills for those without father figures. Disproportionately high trust factor.', stat: '5M+ YouTube' },
      { name: 'Hand Fuß Mund (DE)', detail: 'Doctors providing pediatric health info. Highest-trust German parenting account. Hebamme culture = outsized influence.', stat: '651K Instagram' },
      { name: 'Parenting Hell — Rob & Josh (UK)', detail: '50M+ downloads. Comedy format. Sells out live shows at The O2. Dominant UK parenting podcast.', stat: '50M+ downloads' },
      { name: 'Momma Cusses', detail: 'Comedy-therapy hybrid. Toddler standoffs and mom rage. Published book on responsive parenting. Substance under the humor.', stat: '4.3M TikTok' },
    ],
  },
];

export const whiteSpaceOpportunities = [
  {
    title: 'Hospital birth moment',
    description: 'No brand owns the birth visual. The iconic newborn hat is hospital-generic. Most photographed moment of a parent\'s life.',
    category: 'Wear',
  },
  {
    title: 'Parent cause wearable',
    description: 'Livestrong sold 100M bracelets. Pink ribbon owns October. Movember owns facial hair. Nobody has created this for parents.',
    category: 'Wear',
  },
  {
    title: 'Podcast Red',
    description: 'Nobody has done Product Red for audio. Branded episodes where ad revenue goes to the cause. Zero effort from listeners.',
    category: 'Consume',
  },
  {
    title: 'Play cafe chain',
    description: 'Coffee for parents + supervised play for kids. No national chain. Fastest-growing parent space format.',
    category: 'Go',
  },
  {
    title: 'Dad content',
    description: 'Only two major outlets exist (Fatherly, Dad Tired). Half the parent audience is underserved. First brand to own this wins.',
    category: 'Follow',
  },
  {
    title: 'Men\'s changing tables',
    description: 'Viral gap. NYC passed a law. Dads forced onto bathroom floors. Brand that funds installations = instant earned media.',
    category: 'Go',
  },
];
