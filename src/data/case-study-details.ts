export interface ImperativeScore {
  grade: string;
  reason: string;
}

export interface CaseStudyDetail {
  overview: string;
  mechanic: string;
  signal: string;
  reward: string;
  coding: string;
  durability: string;
  scalability: string;
  ladder: string;
  synthesis: string;
  cautionary: string;
  imperativeScores: Record<string, ImperativeScore>;
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  truth: {
    overview:
      'Truth was funded by the 1998 Tobacco Master Settlement Agreement — Big Tobacco paying $1.5B over five years to fund the campaign designed to destroy its customer base. It started in Florida with 600 students co-creating the brand, achieved 92% awareness, and went national in 2000 through CP+B and Arnold Worldwide. The strategic brief was explicit: do not make a PSA — build a brand.',
    mechanic:
      'Truth never had a single mechanic — it had a ladder. Phase 1 (2000-2003) was passive exposure: see the facts, be radicalized, tell your friends. Phase 2 (Finish It, 2014-2018) invited active generation with tiered asks from retweets to organizing events. Phase 3 introduced "This Is Quitting," a text-based vaping cessation tool used by 500,000 young people. Each phase designed the appropriate mechanic for where the audience was.',
    signal:
      'The orange color was chosen to read as streetwear or music channel, not nonprofit. The lowercase bold wordmark read like a zine masthead, not a health announcement. If you wore a Truth t-shirt, you were signaling counter-cultural identity — against corporate manipulation, not for health. The brand was built to be carried by young people, not worn by an institution.',
    reward:
      'The reward was never health — it was identity. Counter-cultural rebellion against tobacco industry manipulation, information as power (most teens thought farmers made cigarettes), peer status through indignation, and generational pride through "Finish It." Non-smoking was the byproduct; the reward was always who you are, which side you\'re on, and what your generation will be remembered for.',
    coding:
      'Truth broke every PSA code: enemy substitution (target the industry, not the smoker), comedy over tragedy, peer authorship (youth as heroes not cautionary tales), documentary guerrilla aesthetic, brand-not-campaign logic, and total absence of health language. The word "health" was essentially absent from the creative. "Smoking causes cancer" is a health fact. "Tobacco companies documented 1,200 daily deaths and called them health casualties" is a crime.',
    durability:
      'Twenty-five years through four distinct eras: anti-industry (2000-2003), quiet period (2004-2013), Finish It with 72andSunny (2014-2018), and vaping crisis (2018-present). Sustained by willingness to pivot the enemy and creative platform, consistent brand codes (orange, bold, youth-voiced), and new agency partnerships for each era. The cautionary note: later anti-vaping work diluted the original moral clarity because JUUL\'s harm profile is less certain than Philip Morris\'s.',
    scalability:
      'Explicitly, structurally, and intentionally US-only. The MSA funding was constitutively American, the enemy-framing required a bounded adversary (Philip Morris HQ in New York), and the counter-cultural positioning understood specific American youth culture codes. The Florida-to-national model suggests the framework travels within a country, but the Finish It generational framing may travel better internationally than the anti-industry frame.',
    ladder:
      'The key peer-reviewed study found Truth accounted for approximately 22% of the overall decline in youth smoking from 1999-2002 — roughly 300,000 fewer youth smokers. A 2009 study attributed 450,000 fewer teen smokers through 2004. The dose-response finding is the strongest evidence: areas with higher Truth exposure showed greater declines, controlling for other factors. Youth smoking went from 23% to 2.3% over 20 years.',
    synthesis:
      'Truth\'s greatest invention was the enemy-as-activation mechanism. You don\'t sell the behavior (not smoking) — you sell the enemy (industry manipulation). The behavior becomes the natural consequence of indignation. Also steal: the co-creation model as legitimacy engine, the brand-not-campaign decision that enables decade-long durability, and the tiered participation ladder from hashtag to event organizing.',
    cautionary:
      'Enemy clarity is fragile — when Truth pivoted to vaping, the enemy became less defined and critics multiplied. Funding structure shapes behavior — MSA money created legal vulnerability and funding volatility. Co-creation requires genuine relinquishment of creative control. And the original insight has an expiration — enemy-framing was novel in 2000 but is now a known playbook.',
    imperativeScores: {
      imp1: {
        grade: 'A-',
        reason:
          'Finish It made a universal truth (each generation defines itself by the problem it solved) into a visible, claimable identity. The hashtag was an orientation claim, not a campaign tag.',
      },
      imp2: {
        grade: 'A',
        reason:
          'Every structural decision — agency selection, visual identity, Grammy/VMA placements, celebrity integration — was made with the question "does this feel like culture or like a campaign?" The dominant lesson from Truth.',
      },
      imp3: {
        grade: 'A',
        reason:
          'Non-smoking was never the reward. Counter-cultural identity, generational pride, and peer status were the rewards. Every level of engagement felt like something you were gaining, not giving.',
      },
      imp4: {
        grade: 'B-',
        reason:
          'Had a participation ladder in the Finish It era, but it was not its founding genius. Never built deep membership infrastructure or CRM-style commitment escalation. Excelled at awareness and attitude change more than visible committed communities.',
      },
      imp5: {
        grade: 'B+',
        reason:
          'Demonstrated complete ladder from cultural campaign to measurable health outcomes (22% attributable decline), but the policy influence was indirect through cultural shift rather than direct legislative advocacy.',
      },
    },
  },

  movember: {
    overview:
      'Movember is the most successful cause-led movement brand of the last 25 years that is NOT a traditional charity. It raised over $1B globally across 20+ countries, generated an estimated 1.9 billion face-to-face conversations about men\'s health at its peak (2013), and turned a facial hair trend into systemic policy change. It started with 30 participants in Melbourne in 2003 and peaked at 1.1 million in 2012.',
    mechanic:
      'Core act: grow a mustache from November 1 to 30, starting clean-shaven. Participants register on movember.com, get a personal fundraising page, and solicit donations from their network. The 30-day constraint is a natural narrative arc with a beginning (clean shave), middle (awkward phase), and end (reveal). The mechanic is inherently social — you cannot grow a mustache in private. At peak, average participants had 36 face-to-face conversations.',
    signal:
      'A mustache in November is unambiguous and reads instantly, globally, even to people who don\'t know what Movember is. Crucially, it reads as funny first, serious second. Unlike a pin or wristband, the mustache is present for 30 consecutive days — it compounds. Week 1: people notice. Week 2: they ask. Week 3: they donate or make fun. Week 4: it becomes part of your identity. Each participant is both fundraiser and distribution channel.',
    reward:
      'Social currency (the mustache makes you interesting), camaraderie and team identity (Mo Teams with leaderboards turn charity into a team sport), the underdog arc (Week 2 awkwardness is the suffering before the glory), and ironic masculinity — the mustache simultaneously celebrates and parodies traditional male identity, creating a permission structure for conversations men would otherwise avoid.',
    coding:
      'Explicitly not a charity — coded as a cultural event, a tradition. The language is participatory ("Mo Bros," "Mo Sisters"), the tone irreverent and humor-forward. Early campaigns leaned into mustache jokes and slightly bawdy humor. The name "Movember" is one of the most effective brand portmanteaus in cause marketing — memorable, self-explanatory, and owned. It is not earnest, not sad, not asking for sympathy.',
    durability:
      'Peaked at 1.1M participants in 2012; by 2024, roughly 283,000 — about 25% of peak. The mustache mechanic hit awareness saturation in core English-speaking markets. Social media mentions dropped 30% YoY after 2013. Movember has evolved through cause expansion (mental health/suicide prevention), mechanic diversification (Move, Host), institutional deepening (Movember Institute of Men\'s Health 2023), and policy engagement (UK Men\'s Health Strategy).',
    scalability:
      'Scaled rapidly within Anglo-Saxon cultures: UK became the #1 market despite not being home market. US consistently underperforms relative to population (#4 market). Germany participated but with lower conversion — Germans tend toward structured institutional giving, and the mustache carries different cultural connotations. The mechanic doesn\'t translate where mustaches are normal cultural/religious markers rather than ironic props.',
    ladder:
      '$1B+ raised funding 1,300+ men\'s health projects in 20+ countries. Specific outcomes include a genetic test for prostate cancer recurrence risk, the ENZA-p clinical trial extending life for men with metastatic prostate cancer, and England\'s first-ever Men\'s Health Strategy (2024-25). Ireland\'s men\'s health policy avoided an estimated 17,000 potential years of life lost. The fundraising-to-research-to-policy pipeline is real but took 20 years.',
    synthesis:
      'Steal the visible act of participation as signal (the mustache IS the marketing), the 30-day constraint as narrative arc, peer-to-peer fundraising over broadcasting, the ironic entry point into a serious topic, the team-sport layer, and the movement brand as Trojan horse. Movember never called itself a charity when it could avoid it.',
    cautionary:
      'Signals decay — once everyone knows what the mustache means, curiosity evaporates. Fun without depth is perishable — extrinsic rewards had low retention when novelty wore off. The mechanic excluded women and culturally diverse men for years before inclusion on-ramps were added. Germany requires a fundamentally different cultural entry point. And institutional depth came 15-20 years later — cultural movements operate on decade timescales.',
    imperativeScores: {
      imp1: {
        grade: 'C+',
        reason:
          'The orientation ("I take men\'s health seriously") is implicit in the mechanic but rarely explicit. The mustache signals participation more than a specific worldview. Compared to Pride\'s rainbow flag, Movember feels more like an event badge than an identity claim.',
      },
      imp2: {
        grade: 'A',
        reason:
          'Explicitly refused to code itself as charity. At peak, Movember had genuine cultural ubiquity — referenced in sitcoms, feature articles, barbershop promotions. It behaved as a fixture of November the way New Year\'s Eve is a fixture of December.',
      },
      imp3: {
        grade: 'A+',
        reason:
          'The cleanest global example. Growing the mustache is fun, showing it is rewarding, being asked about it is gratifying, crossing fundraising thresholds is celebrated, and the month-end shave is a ritual of completion. No level of engagement feels like failure.',
      },
      imp4: {
        grade: 'B',
        reason:
          'Has concentric circles from casual observer to policy advocate, but the signal between innermost circles (top fundraisers, policy advocates) and outer circles is weak. Most people don\'t know Movember funded specific clinical trials.',
      },
      imp5: {
        grade: 'B+',
        reason:
          'England\'s first Men\'s Health Strategy and funded clinical trials are genuine policy outcomes. But these are achievements of the mature institution, not the original campaign. The campaign was the fundraising engine; the institution converted the money.',
      },
    },
  },

  'ice-bucket': {
    overview:
      'The ALS Ice Bucket Challenge (2014) was the fastest viral cause event in history — 100 million views in 6 days, $115M raised in 8 weeks, 17 million videos uploaded to Facebook alone. It was sparked by Pete Frates, a 29-year-old Boston College baseball captain diagnosed with ALS. The challenge crossed borders with minimal friction because the mechanic was non-verbal, non-culturally specific, and self-evidently participatory.',
    mechanic:
      'Accept the challenge (or get nominated), pour ice water on yourself on video, nominate 3 specific people by name, give them 24 hours, donate. The nomination mechanic shifted social pressure from the organization to the peer group — you were called out by a friend, not pestered by an NGO. Declining meant visibly ignoring a friend\'s direct request. The act took under 5 minutes with materials from any kitchen. Every participant produced their own content.',
    signal:
      'The video itself was simultaneously evidence of participation, advertisement for the cause, and entertainment. Unlike a donation receipt, it was watchable, shareable, and rewatchable. The shock reaction (gasping, shaking, laughing) was universally human and therefore universally watchable. Celebrities doing it (Bill Gates, Zuckerberg, Oprah, LeBron) amplified both entertainment value and social permission.',
    reward:
      'Immediate social proof (visible, documented, public act of virtue), entertainment value (fun to make and watch), identity signal ("I am the kind of person who does things like this"), social license (calling out friends created reciprocal bonds), and legitimate bragging rights without appearing to brag. The cause framing does the moral work. Traditional charity gives a tax receipt; Ice Bucket gave you content.',
    coding:
      'Critically NOT coded as charity. It was coded as a dare (athletic culture — you don\'t back down), an entertainment event (celebrity participation made it pop culture), a meme (the gasp was the meme unit), and a social ritual (participation was the norm, abstention required explanation). The charitable dimension was the downstream consequence, not the entry point — slipping past the "charity defense" by presenting as culture first.',
    durability:
      'Short-term extraordinary, long-term modest. The campaign ran hot for roughly 6 weeks then rapidly declined. The 2015 repeat raised approximately $1.25M — about 1% of the prior year. But durability was not the point: ALS Association fundraising went from ~$23M annually to $115M in 8 weeks, and donations remained elevated above baseline for years. The research outcomes (gene discovery, drug approval) are the durable legacy.',
    scalability:
      'Scaled globally with almost no adaptation required. The act (ice bucket + video + nomination) is universal — it doesn\'t require knowledge of the US healthcare system or cultural context about Pete Frates. In Germany it raised over one million euros. India ran adapted campaigns for drought-affected farmers. The underlying mechanic was extracted and repurposed widely.',
    ladder:
      'The most underappreciated legacy. The $115M was among the largest single infusions of ALS research capital ever. Key outcomes: NEK1 gene discovery (2016, 80+ researchers, 11 countries), C9orf72 research acceleration, Target ALS consortium breaking down competitive barriers, and Tofersen (FDA-approved 2023) — a direct lineage from Ice Bucket Challenge to approved drug. The complete arc: entertainment to participation to donation to gene discovery to drug approval.',
    synthesis:
      'The mechanic IS the message — participation simultaneously demonstrates the cause\'s values. Design for the nomination cascade (each participant recruits 3 more). Make the barrier comically low. Give participants an artifact they own. Code it as culture, not charity. Use celebrity to create permission, not just reach. Attach to an authentic story with a face.',
    cautionary:
      'The model has finite novelty — it won\'t work twice at the same scale. Don\'t rely on one viral event to build a movement. Awareness without education is a weak foundation — participants didn\'t understand ALS better. Whatever the Gates Foundation builds must have depth that sustains beyond the first viral moment.',
    imperativeScores: {
      imp1: {
        grade: 'B-',
        reason:
          'Surfaced a truth ("random illness can take someone young and strong") and created a claimable identity, but the identity was behavioral, not philosophical. Moderate alignment.',
      },
      imp2: {
        grade: 'A',
        reason:
          'The campaign was a meme before it was a cause, entertainment before advocacy. It lived in the same cultural register as the Mannequin Challenge or Harlem Shake — things you do because everyone is doing them.',
      },
      imp3: {
        grade: 'A+',
        reason:
          'The strongest case study available for this imperative. Every level of participation — watching, being nominated, doing it, nominating others — was rewarding in distinct ways. No participation level felt like work or obligation.',
      },
      imp4: {
        grade: 'B',
        reason:
          'The funnel was visible and socially reinforced: awareness to nomination to performance to nominating others to donating. But essentially flat — once you did it, you were done. No deeper circles of commitment.',
      },
      imp5: {
        grade: 'A',
        reason:
          'Complete ladder from entertainment to gene discovery to FDA-approved drug. Tofersen approval in 2023 is a direct lineage. This is the most complete research-to-therapy arc in cause campaign history.',
      },
    },
  },

  givingtuesday: {
    overview:
      'Henry Timms (92nd Street Y) and the UN Foundation launched GivingTuesday on November 27, 2012 as a counter-narrative to Black Friday commercialism. Year 1 raised $10M; by 2025, the US alone raised $4B in a single day. It operates in 105 countries with 90 independent chapters. The Gates Foundation provided the single largest grant in its history — $10M — to accelerate global expansion.',
    mechanic:
      'The core act is donating, but intentionally unbounded — you can give money, time, goods, blood, skills. GivingTuesday kept the mechanic open-ended to avoid excluding non-monetary givers. The evolution moved from "donate on this day" toward "generosity in all forms." The 2019 independence from 92NY marked this philosophical shift toward radical generosity as a human posture, not a charitable transaction.',
    signal:
      'Primarily digital. The #GivingTuesday hashtag became one of the most used in the world on its designated day. Nonprofits share donation thermometers, donors share receipts, matching gifts create social proof. The signal infrastructure is donation platforms (PayPal, GoFundMe, Venmo) all participating with GivingTuesday overlays.',
    reward:
      'Donors get moral licensing, social visibility, and identity signaling. Nonprofits get donor acquisition at a 10-point retention premium (65% vs. 52% average). Platforms get transaction volume. Country movements get local leadership credibility and international network belonging. The compressed fundraising window creates urgency that amplifies conversion.',
    coding:
      'More sophisticated than it appears. Founders deliberately positioned it as "radical generosity" — not charity, not altruism, but a fundamental human posture. The language is non-transactional: generosity as mutuality, solidarity, and reciprocity. The "unbranding" strategy is the most instructive design decision — countries create localized versions, radically decentralizing brand ownership.',
    durability:
      'Thirteen years running. Growth was consistent until 2022-2023 when it plateaued (only 0.06% YoY increase), then rebounded to $3.6B (2024) and $4B (2025). The plateau was likely macroeconomic, not structural. The donor quality metric (65% retention vs. 52% baseline) suggests it attracts higher-commitment donors.',
    scalability:
      'The most globally scalable case in the entire set. 105 countries in 2024, with 90 having independent country chapters. The decentralized model is the reason — GivingTuesday is not a brand, it\'s a protocol. Like open-source software, anyone can build on it. The Gates $10M grant specifically targeted building regional leadership infrastructure.',
    ladder:
      'Mixed evidence. $15B+ in cumulative US giving since 2012. The more significant systemic contribution may be infrastructural: habit loops (GivingTuesday givers give again), expanded donor base, and the Data Commons that the entire nonprofit sector uses. Criticism from effective altruists is substantive — it concentrates giving and is agnostic about impact.',
    synthesis:
      'The "unbranding" strategy is the play — build a protocol, not a brand. Allow co-ownership. Give away the identity so everyone can claim it. The movement grows faster when it\'s not yours. Also steal the Gates relationship model: institutional backing that becomes independent, giving moral authority corporate-owned movements can never achieve.',
    cautionary:
      'Generalizing the act (anything counts as generosity) increases participation but decreases clarity of impact. When "everything counts," nothing changes. GivingTuesday has not solved any specific problem — it has normalized the habit of giving, which is real but diffuse.',
    imperativeScores: {
      imp1: {
        grade: 'B',
        reason:
          '"Radical generosity" as identity is culturally coded but not a sharp orientation claim. It says "I give" more than it says "I believe in X." The identity is about the act, not a worldview.',
      },
      imp2: {
        grade: 'A-',
        reason:
          'The "radical generosity" frame is a cultural identity claim, not a charity pitch. GivingTuesday has embedded itself into the cultural calendar alongside Black Friday and Cyber Monday as a recognized annual moment.',
      },
      imp3: {
        grade: 'B+',
        reason:
          'Donors feel good, matching creates excitement, and the thermometer mechanic gamifies giving. But the reward is primarily transactional — there is limited community or ongoing identity reward beyond the day itself.',
      },
      imp4: {
        grade: 'A',
        reason:
          'The most sophisticated concentric circle architecture: moment of giving, habit loop, cultural posture, Data Commons infrastructure, country leadership networks. Every level of commitment is visible and rewarded.',
      },
      imp5: {
        grade: 'C+',
        reason:
          'Has changed philanthropic culture structurally (donor base expansion, giving habit formation, data infrastructure) but has no evidence of policy change or solving specific issues. The ladder is to behavior change, not systemic change.',
      },
    },
  },

  'band-aid': {
    overview:
      'Band Aid/Live Aid/Live 8 is the canonical sequence of cause entertainment achieving policy-level outcomes. From Bob Geldof and Midge Ure writing "Do They Know It\'s Christmas?" in 1984 (fastest-selling UK single ever, raised £8M) to Live Aid in 1985 (1.9 billion viewers, $127M) to Live 8 in 2005 (action-for-access concerts timed to the G8 summit), culminating in $50B additional annual development aid pledged and $40B in debt cancellation for 18 countries.',
    mechanic:
      'Band Aid: purchase a single — the lowest-possible barrier. Live Aid: watch — global shared spectatorship at unprecedented scale. Live 8: attend a free concert earned through political action (texting demands to the G8). This was the first "action-for-access" model — later perfected by Global Citizen. Each iteration raised the behavioral bar while shifting from entertainment to advocacy.',
    signal:
      'Band Aid had no visible body signal, but "I watched Live Aid" became a generation-defining cultural reference. The Make Poverty History white wristband was the underappreciated design achievement — simple, cheap, wearable, explicitly linked to a political demand (G8 debt relief). One of the most successful cause-signal artifacts in modern history.',
    reward:
      'Band Aid: being part of a collective act of historical significance. Live Aid: genuinely great entertainment independent of its cause — Queen\'s 21-minute set is widely considered the greatest live performance in rock history. Live 8: political agency — the first time cause entertainment gave participants the sense of actually influencing power.',
    coding:
      'Initially coded as emergency response — urgent, moral, demanding. Retrospectively coded as one of the defining cultural moments of the 1980s. But the coding has split: for older generations, it\'s pride. For younger people and African audiences, it\'s now coded as white saviorism. Band Aid 30 (2014) was dominated by criticism — Fuse ODG publicly refused to participate.',
    durability:
      'The Band Aid format is spent. Band Aid 30 raised a fraction of the 1984 original and was culturally toxic. The single format is structurally obsolete in streaming. Live Aid is unrepeatable — it required a pre-internet media ecosystem that no longer exists. Live 8\'s action-for-access model and explicit policy targeting remain replicable frameworks.',
    scalability:
      'Band Aid exported immediately — USA for Africa/We Are the World was recorded within weeks. Multiple countries created their own versions. The format scaled globally faster than any preceding charity model. But replicability was its undoing — by Band Aid 30, the model was parodied and participation became a reputational risk for artists.',
    ladder:
      'The Band Aid to Live Aid to G8 sequence is the most significant policy outcome in cause entertainment history. Live 8\'s explicit political frame produced the Gleneagles Communiqué: $50B additional annual development aid and $40B total debt cancellation for 18 Heavily Indebted Poor Countries. Execution was incomplete — most G8 nations were not on track — but the debt cancellation was real and delivered.',
    synthesis:
      'Steal the two-phase model: entertainment phase (creates public mandate) + advocacy phase (converts mandate to policy with specific, measurable targets). Steal the action-for-access mechanic from Live 8 — earning attendance through political action. Steal the white wristband as a visible signal of political alignment — simple, cheap, body-worn, politically specific.',
    cautionary:
      'The "music as charity" format is obsolete — you cannot sell a single for charity in a streaming era. Any narrative that simplifies a complex global health situation into a single emotional image of poverty/suffering is immediately toxic. The single-celebrity authority structure (Geldof) is brittle and personality-dependent. The "Africa" problem — the song describes 54 nations as a monolithic zone of hopelessness — is structurally disqualifying in 2025.',
    imperativeScores: {
      imp1: {
        grade: 'A-',
        reason:
          'Live Aid created a global identity statement — "I am a person who believes extreme poverty is unacceptable." The white wristband made this visible and claimable. Strong orientation foregrounding.',
      },
      imp2: {
        grade: 'A',
        reason:
          'Live Aid was culture first, charity second. It was genuinely great entertainment (Queen\'s set) that happened to raise money. It became part of British cultural mythology — "where were you during Live Aid?"',
      },
      imp3: {
        grade: 'C+',
        reason:
          'The participation reward was guilt-reduction and moral seriousness, not fun. Band Aid purchase felt dutiful. Live 8 had political agency as reward, but the model mostly asked people to feel the weight of the crisis.',
      },
      imp4: {
        grade: 'A-',
        reason:
          'The full sequence — from consumer to donor to advocate to policy pressure — is the most complete funnel in cause entertainment. The two-phase model (entertainment then advocacy) is the structural template.',
      },
      imp5: {
        grade: 'A',
        reason:
          'G8 Gleneagles debt relief ($40B delivered) is the most significant policy outcome in cause entertainment history. Demonstrates the entertainment-to-mandate-to-policy pipeline works when explicitly designed.',
      },
    },
  },

  'product-red': {
    overview:
      'Founded in 2006 at Davos by Bono and Bobby Shriver. (RED) was designed as a brand licensing mechanism to route corporate marketing budgets into the Global Fund for HIV, TB, and malaria programs. Before (RED), private sector contributions to the Global Fund totaled just $5M in four years. The model: partner brands create (RED)-branded products and donate 1-50% of profits. Over $800M raised — the largest single private sector contributor to the Global Fund ever.',
    mechanic:
      'Frictionless substitution. You buy the iPhone you were already going to buy, in red instead of black. The cause is embedded at the point of purchase with zero behavioral change required beyond color selection. Apple donates ~$8-$37 per device, Starbucks donates $0.05 per beverage on World AIDS Day, Gap donates 50% of profits on RED items. The structural flaw: donation percentages are calculated on profit, not revenue, and never disclosed.',
    signal:
      '(RED) made a color into a cause. The iPhone (PRODUCT)RED in daily use signals alignment without saying anything. The parenthetical trademark creates a visual cue of differentiation. The celebrity layer (Bono guest-editing Vanity Fair, Oprah shopping spree on Michigan Avenue, "The Lazarus Effect" documentary) created aspirational proximity. When Apple discontinued the RED iPhone in 2023, the most visible signal artifact disappeared.',
    reward:
      'Moral comfort without sacrifice — scholars call this "compassionate consumption." The reward is immediate (buy, feel good now), passive (no action beyond purchase), and social only at the product level. There is no community, no escalation, no deeper engagement. The reward never deepens — there is no journey, only a single transaction repeated.',
    coding:
      '(RED) coded itself as premium, not charitable. Launched at Davos. Bono as cultural capital. Apple as anchor partner. Giorgio Armani as early partner. The name "(RED)" not "Red Ribbon" or "AIDS Fund." The visual identity — pure red, minimal, typographically clean — avoided every visual cue of aid. It looked like fashion. The cultural coding worked until cause marketing became mainstream and the category it invented became crowded.',
    durability:
      'Twenty years old and $800M+ raised. But the trajectory shows a maturing model: $50M cumulative by 2007, $700M by 2021, $800M by 2025 — pace has slowed to ~$25M/year. Apple discontinued the RED iPhone in 2023 (replacing it with direct financial contributions). World AIDS Day as annual activation and ongoing public health need protect it from obsolescence.',
    scalability:
      'Primarily US/UK with some European penetration. Partners include Primark and Penguin Classics for UK audiences. Did not meaningfully scale into non-English-speaking markets — no German anchor partners. Scalability is constrained by dependence on corporate partner commitment. The COVID-19 pivot (redirecting 100% of eligible proceeds to COVID response) showed the model can flex the cause without losing the mechanic.',
    ladder:
      '(RED) explicitly does not do advocacy or policy. It sits at the "fund programs" layer, not the "change systems" layer — a deliberate design choice to keep corporate partners comfortable. Massive fundraising success, zero policy influence. The critique from Dambisa Moyo\'s framework applies: external philanthropy sustaining the status quo rather than demanding structural change.',
    synthesis:
      'Steal the frictionless substitution mechanic — embed participation in behavior people already perform. Steal the brand coding strategy — launch where aspiration lives (Davos, Apple, Bono), never where charity lives. Steal the cause-specificity (one disease, one fund, one number). Steal World AIDS Day as the template for annual ritual activation. Steal the documentary layer for emotional bridging.',
    cautionary:
      'Opacity kills credibility — the 2007 revelation that partners spent $100M advertising to generate $18M in donations has never left the brand. Dependence on corporate partner cycles is structural fragility. The single participation tier (purchase) means 20 years of buyers and no community. And the "slacktivism trap" — zero behavioral change required is easy to mock as "doing nothing."',
    imperativeScores: {
      imp1: {
        grade: 'B-',
        reason:
          'Visible identity through products (RED iPhone), but weak verbal identity. More a "what I bought" statement than a "who I am" statement. No deep orientation claim.',
      },
      imp2: {
        grade: 'A-',
        reason:
          'Coded as premium brand not charity. Bono/Apple/Armani halo. Documentary filmmaking (Lazarus Effect, Spike Jonze/Lance Bangs). Vanity Fair partnership. Genuinely aspirational cultural coding.',
      },
      imp3: {
        grade: 'A-',
        reason:
          'Zero friction, immediate moral reward, no sacrifice. Buying premium equals feeling good. The reward-to-effort ratio is extremely high — but shallow. No journey, just a single transaction.',
      },
      imp4: {
        grade: 'D',
        reason:
          'Single tier of participation (purchase). No escalation path, no deeper engagement, no community layer. The funnel is completely flat.',
      },
      imp5: {
        grade: 'C',
        reason:
          '$800M to the Global Fund has contributed to millions on antiretroviral treatment — real outcomes. But zero policy influence, zero systemic reform advocacy. A money machine, not a change machine.',
      },
    },
  },

  'charity-water': {
    overview:
      'Founded 2006 by Scott Harrison, a former nightclub promoter who gave up his 31st birthday to raise $15,000 for water projects in Uganda. Now 209,200+ water projects funded, 21.6 million people served across 29 countries. The 100% model (all public donations go to programs, private donors cover overhead) is the core financial innovation. Charity: Water is the clearest modern proof that a nonprofit can operate with premium brand logic.',
    mechanic:
      'The birthday campaign is the signature mechanic: donors give up their birthday, asking friends and family to donate instead of buying gifts. It converts existing social occasions into fundraising moments, leveraging relationship-based obligation. The mechanic is generative — the donor creates a campaign that creates a story that gets shared and recruits more participants. The Spring (monthly giving, 36,416 members) provides recurring revenue architecture.',
    signal:
      'The birthday campaign itself is the primary signal — a social media announcement with a fundraising page and public goal. The secondary signal is the GPS proof: donors receive coordinates and photos of the specific well their campaign funded, becoming a social object they can share. The visual identity (yellow/black/white, premium editorial quality) signals "sophisticated philanthropy" — taste and values simultaneously.',
    reward:
      'Multi-layered and long-lasting. Emotional: the birthday sacrifice creates a narrative about your values. Practical: GPS coordinates and photos of the specific project you funded. Social: the campaign page becomes a social artifact. Community: The Spring members belong to a named community. Status: contributing to a premium cause brand reflects on the donor\'s discernment. The well exists years after the donation.',
    coding:
      'Codes as design studio, impact startup, premium editorial brand — not charity. Visual language borrowed from Apple (minimalism), National Geographic (photography), fashion brands (art-directed annual reports), tech startups (GPS tracking, sensor data). Harrison explicitly recruited from advertising, fashion, and tech — not the nonprofit sector. No poverty porn, no guilt appeals, no UN-style logos.',
    durability:
      'Eighteen years, growing, financially stable. System-based not person-based: the 100% model, GPS proof, and birthday mechanic are structural, not dependent on any individual\'s charisma. The Spring provides financial stability decoupled from campaign spikes. The Rachel Beckwith story (9-year-old who raised $1.2M posthumously) functions as a permanent brand myth.',
    scalability:
      'The Spring has members from 100+ countries. Birthday campaigns work anywhere with social media. The visual brand travels with no local translation. The cause (water) has universal resonance. However, the donor base is primarily English-speaking Western countries. The mission is global; the participation community is not fully global.',
    ladder:
      'Limited direct policy impact — operates as service delivery, not advocacy. Indirect systemic effects: popularized "proof of impact" philanthropy, influencing donor expectations across the sector. The sensor infrastructure improved how water NGOs think about maintenance. GiveWell has not recommended it, noting difficulty verifying cost-effectiveness. Has not moved government policy on water access.',
    synthesis:
      'Steal the proof loop (give participants verifiable proof of specific impact — GPS coordinates, photos, real-time data). Steal the occasion mechanic (attach participation to existing social occasions). Steal the two-tiered funding architecture (separate public-facing donation from operational funding). Steal premium coding as trust signal. Steal the community architecture (The Spring as a named, membership-based recurring community).',
    cautionary:
      'The 100% model creates false standards — if the Gates campaign promises "100% goes to child survival," it will delegitimize overhead spending across the sector. Water projects have high failure rates (30-60% within 2-3 years). GiveWell has not endorsed the organization. And while less severe than Livestrong, Scott Harrison\'s personal narrative is deeply embedded — the succession question remains.',
    imperativeScores: {
      imp1: {
        grade: 'B+',
        reason:
          'The 100% model makes a values claim visible and legible. "I give 100% to the cause" becomes an identity statement. But the orientation is about generosity methodology, not a deeper worldview.',
      },
      imp2: {
        grade: 'B-',
        reason:
          'Coded as "premium philanthropy" more than culture. Lives adjacent to culture through art-directed reports and premium aesthetics, but hasn\'t produced cultural artifacts the way Livestrong did.',
      },
      imp3: {
        grade: 'A-',
        reason:
          'The birthday mechanic reframes sacrifice as status. The GPS proof converts the wait into a satisfying narrative resolution. Every level feels rewarding. The premium brand makes donors feel discerning.',
      },
      imp4: {
        grade: 'A',
        reason:
          'The clearest real-world implementation of concentric circles of commitment: one-time birthday donor to recurring campaigner to Spring monthly member to major private donor. Each level has different commitment depth, reward, and identity signal.',
      },
      imp5: {
        grade: 'C',
        reason:
          'Limited policy reach. Operates as service delivery, not advocacy. Has influenced donor expectations sectorally but has not moved government policy on water access in any documented way.',
      },
    },
  },

  sternsinger: {
    overview:
      'The Sternsinger (Star Singers) tradition has medieval origins (14th century) and was revived in 1958-1959 by Catholic Church organizations in Germany and Austria. Since 1959: approximately 1.4 billion euros raised. In 2025 alone: 48 million euros collected. Around 300,000 children participate annually in Germany, 85,000 in Austria, funding 1,400+ projects in 96 countries. Recognized in Germany\'s official intangible cultural heritage list in 2015.',
    mechanic:
      'Children ages 6-14 dress as the Three Kings, go door-to-door around January 6 (Epiphany), sing traditional carols, receive donations, and inscribe the blessing "20+C+M+B+26" in blessed chalk above the homeowner\'s front door. The act is structured, ritualized, and entirely performed by children. Adults participate by opening the door and donating. The mechanic is inherited — you grow up inside it.',
    signal:
      'Extraordinarily powerful and physically permanent. The chalk inscription above the door persists all year. Every German who sees "20+C+M+B+26" above a neighbor\'s door knows Sternsinger visited. The mark signals charity participation, religious observance, and community belonging simultaneously. There is no equivalent visible, year-long signal in any other cause campaign at this scale.',
    reward:
      'Multi-layered: children get costume, ritual importance, and the experience of doing something meaningful. Donating households get the blessing (genuinely valued by religious participants), community recognition, and the visible mark. Parents of participating children get pride, religious continuity, and values transmission. The broader community gets annual renewal of a shared ritual that predates anyone alive.',
    coding:
      'Deeply Catholic, deeply German. The tradition is tied to Epiphany, which is a public holiday in Bavaria, Baden-Württemberg, and Saxony-Anhalt. The campaign doesn\'t need to earn cultural permission — it has it by right of tradition. The Catholic Church hierarchy provides organizational infrastructure across 7,300+ parishes. The cause (children helping children worldwide) is the moral layer atop a pre-existing ritual.',
    durability:
      'Sixty-six years in its modern form, structurally indestructible. It is not a campaign that can be cancelled — it is a tradition. The key mechanism is intergenerational transmission: children participate, grow up, have children, and send them out. The Catholic Church provides the institutional backbone ensuring continuity regardless of any single organization\'s health.',
    scalability:
      'Limited international expansion. The tradition exists in Austria (since 1954), Germany, and scattered Catholic communities in other European and South American countries through Sternsinger International. It has not meaningfully scaled beyond Catholic-majority or Catholic-adjacent cultures. The religious architecture that makes it indestructible in Germany also caps its universal appeal.',
    ladder:
      'Direct government engagement is baked in. The formal reception by the German President and Chancellor positions the Sternsinger as a matter of national importance. This is cause-to-state integration unlike anything in other cases. The projects funded (schools, health infrastructure, water systems in 96 countries) represent genuine development impact at institutional scale.',
    synthesis:
      'Steal the ritual container: design a specific annual act — ideally tied to a date, ideally involving children, ideally creating a visible household signal — and make it the vehicle for the cause. The cause doesn\'t need to be explained; the ritual carries it. The "children helping children" framing is the most powerful child-survival narrative available and Sternsinger has proven it works at scale.',
    cautionary:
      'The Catholic Church\'s institutional backbone across 10,000 parishes is the reason this works operationally. There is no secular equivalent in Germany. Any campaign trying to replicate ritual depth without that infrastructure will need to partner with existing networks (churches, schools, parent organizations) or accept a much smaller scale. The trap is falling in love with the ritual and underestimating the infrastructure required.',
    imperativeScores: {
      imp1: {
        grade: 'A',
        reason:
          '"Children helping children" is the clearest expression of a universal human truth becoming a visible, claimable identity. The chalk mark makes the orientation physically permanent on your home for an entire year.',
      },
      imp2: {
        grade: 'A-',
        reason:
          'The ritual IS culture — it predates any organization and is recognized as intangible cultural heritage. It doesn\'t need to "earn" cultural permission. But it\'s specifically Catholic-German culture, not universal.',
      },
      imp3: {
        grade: 'A-',
        reason:
          'Every participant gets something meaningful: children get costume and ritual importance, donors get a blessing and community mark, parents get values transmission. The ritual container makes participation feel like tradition, not obligation.',
      },
      imp4: {
        grade: 'B+',
        reason:
          'The chalk mark is a literal funnel from blessing-receiver to understanding the cause. The door-to-door mechanic creates a natural escalation from opening the door to donating to sending your own children out. But the architecture relies on inherited tradition, not designed escalation.',
      },
      imp5: {
        grade: 'A-',
        reason:
          'Direct government engagement baked in — formal reception by German President and Chancellor. Funds 1,400+ projects in 96 countries. The cause-to-state integration is unmatched in participatory cause movements.',
      },
    },
  },

  'girl-effect': {
    overview:
      'Girl Effect was founded by the Nike Foundation in 2004 and spun out as an independent charity in 2015. It reframed adolescent girls from charity recipients to economic levers — "invest in a girl" became development finance language. The 2008 animated video (black background, stark white kinetic typography) went viral in elite circles. Now reaches 150M+ people across six countries with partners including Gates Foundation, UNICEF, GAVI, and Mastercard Foundation.',
    mechanic:
      'Phase 1 (2008-2015): radically simple — watch a two-minute video, be convinced, share it. The ask was cognitive and social, not behavioral. Optimized for conference rooms and Davos, not mass public. Phase 2 (2015-present): shifted to program participation (girls in Ethiopia using Yegna, in Kenya using INUA Health chatbot). The Western audience mechanic — what do donors actually do — became murky and has never recovered clarity.',
    signal:
      'Weak on public signal, strong on institutional signal. Sharing the video at a conference became currency inside the development and philanthropic world. But no visible act of participation that compounded — no badge, no hashtag, no community marker. Yegna functioned as a genuine cultural signal within Ethiopia, but never translated into a global participation signal for Western audiences.',
    reward:
      'For elite audiences: moral clarity plus intellectual credibility plus policy relevance — the feeling of having a sophisticated, counter-intuitive view of development. For partner institutions: legitimacy and "girl-centered" branding. For girls in program markets: access to information, peer community, health services. What was missing: any reward structure for mass Western audiences.',
    coding:
      'Girl Effect\'s best work. Visual identity was black-dominant, bold, modern — no photographs of suffering children. Tone was assertive, economic, almost cold. Framing: girls as economic actors, not victims. Investment language, not donation language. The Nike Foundation origin gave it corporate legitimacy. Yegna and Springster were media brands FOR the target audience, not aid campaigns ABOUT them.',
    durability:
      'Strong as an organization (20+ years, active in six countries, major institutional funders). Degraded as a movement brand — the 2008 viral moment has not been replicated. The Yegna/DFID crisis (Priti Patel attacking the £10.4M grant as "spending UK aid on a pop group") exposed the vulnerability: cultural coding that works on insiders can be weaponized by outsiders. Survived by becoming a competent programmatic NGO.',
    scalability:
      'The idea scaled globally (influenced DFID, USAID, World Bank to adopt adolescent girl programming). The program approach was deliberately local: Yegna in Ethiopia, Springster in Nigeria/South Africa/Kenya, Ni Nyota Yangu in Tanzania, INUA Health in Kenya. Girl Effect doesn\'t put its own brand in front of girls — it creates local brands girls trust. Smart for effectiveness, limits compounding cultural signal.',
    ladder:
      'Girl Effect\'s most underrated achievement. Measurably shifted development policy: DFID increased adolescent girl programming, World Bank adopted "invest in girls" framing, became a GAVI partner driving HPV vaccination (460,000 girls vaccinated in Tanzania). But it never mobilized democratic political will in donor countries — it influenced technocratic institutions, not legislatures.',
    synthesis:
      'Reframe the beneficiary from object to subject, and the cause from moral to economic. Girl Effect converted "poor girls need help" (charity frame) into "adolescent girls are the highest-return investment in global development" (economic frame). Also steal the locally-branded, globally-methodologized platform architecture — market-specific cultural expressions of the same idea rather than one global campaign.',
    cautionary:
      'Cultural coding that works on insiders can be weaponized by outsiders — the Yegna crisis proved sophisticated branding is exactly what makes you vulnerable to "wasteful charity" attack. Movement brands need a Western audience participation architecture or they remain elite influence operations. The gravitational pull of grant-funded organizations toward grant-optimized language kills movement energy.',
    imperativeScores: {
      imp1: {
        grade: 'A-',
        reason:
          'Identified "people who invest in girls" as an identity group. Economic framing made the orientation visible and claimable. "Invest in a girl" is a badge of orientation among development elites.',
      },
      imp2: {
        grade: 'B',
        reason:
          'Strong in program markets (Yegna IS culture in Ethiopia, Springster IS culture in Nigeria). Weak in Western markets — no equivalent cultural artifact. The original video was more briefing deck than cultural object.',
      },
      imp3: {
        grade: 'C',
        reason:
          'Sharing the video gave intellectual credibility to elites. But no mass participation architecture. No one in Kansas or Birmingham felt like a winner for being part of Girl Effect.',
      },
      imp4: {
        grade: 'C+',
        reason:
          'Built the top of the funnel (viral idea, elite buy-in) and the bottom (program delivery). Never built the middle — the concentric circles of public participation with visible signals at each level.',
      },
      imp5: {
        grade: 'A-',
        reason:
          'Measurably shifted development policy at DFID, World Bank, and GAVI levels. 460,000 girls vaccinated in Tanzania through HPV program. But influenced technocratic institutions, not democratic political will.',
      },
    },
  },

  'kony-2012': {
    overview:
      'Kony 2012 was a 30-minute documentary by Invisible Children about Joseph Kony and the Lord\'s Resistance Army. Released March 5, 2012, it reached 100 million views in 6 days — the fastest any video had reached that milestone in YouTube history. Celebrity endorsements from Oprah, Bieber, and Rihanna within 48 hours. But the campaign collapsed within weeks: counter-narratives, founder Jason Russell\'s public breakdown, and the near-zero turnout at the Cover the Night event on April 20.',
    mechanic:
      'The core call to action was fundamentally passive: watch a 30-minute video, share it, optionally buy a $30 action kit, optionally show up April 20 to poster cities. After watching and sharing, there was nowhere to go. The action kit required a purchase, delivery wait, and physical distribution. Cover the Night required showing up somewhere at a specific time — a dramatically higher barrier than the Ice Bucket Challenge\'s backyard bucket.',
    signal:
      'The Kony poster was the intended signal — a visible artifact of advocacy. But it required printing, carrying, and physically affixing in public. The digital signal (a share or tweet) was invisible within 24 hours. There was no wearable, no persistent badge. The signal was also contaminated rapidly by counter-signal: within 72 hours, African academics, journalists, and activists published devastating critiques.',
    reward:
      'Front-loaded and required no ongoing commitment. A brief sense of moral clarity, social visibility, celebrity company, and the identity signal "I care about the world\'s most serious problems." But the reward curve inverted as commitment deepened — watching felt good, sharing felt okay, buying a kit felt transactional, showing up to Cover the Night felt like showing up alone.',
    coding:
      'Coded as documentary (signals education but also passivity), activism (coded by association with political action but the actual ask was passive), crisis (urgent but crises fatigue quickly), and American foreign policy intervention. The "white savior" coding was most damaging — Jason Russell\'s son as the emotional frame, the American-centric narrative, and the poster campaign centering ordinary Americans as agents of change activated a powerful counter-narrative.',
    durability:
      'The collapse was almost exactly as fast as the rise. March 5: release. March 8: peak virality. March 10: counter-narratives emerge. March 17: Russell\'s public breakdown. April 20: Cover the Night event with negligible turnout. By end of 2012, the conversation had ended. Invisible Children closed in 2014. The campaign revealed that 100 million views can coexist with near-zero sustained action.',
    scalability:
      'Spread globally as evidence of emotional resonance. But the substance did not scale: the policy ask (US military advisors in Uganda) was irrelevant to non-US audiences. The "white savior" critique resonated more intensely among African and diaspora communities. Cover the Night required local infrastructure Invisible Children did not have internationally.',
    ladder:
      'The intended ladder was awareness to political pressure to US/UN military engagement to Kony\'s capture. What actually happened: the US had already deployed 100 advisors before the video. Kony was never captured. The LRA was weakened primarily through military pressure and defections, not campaign pressure. Invisible Children\'s on-the-ground programs (DDR, early warning) were evaluated positively, but these predated Kony 2012.',
    synthesis:
      'Steal the emotional storytelling architecture — using a child\'s innocence to establish universal value, then moving from specific child to universal cause. Steal the named, specific targets (20 culture-makers and 12 policy-makers). Steal the visual identity system. Steal celebrity seeding as ignition. But these are tactical steals from a structurally failed campaign.',
    cautionary:
      'Never let your mechanic dead-end at "share." Offline escalation requires infrastructure you must already have. Counter-narrative vulnerability is proportional to factual simplification. Institutional credibility must be established before, not during, the viral moment. Don\'t let the founder become the brand. Duration requires action depth, not just awareness width. 100 million views and near-zero sustained action is the defining cautionary data point.',
    imperativeScores: {
      imp1: {
        grade: 'B',
        reason:
          'Correctly identified "we all believe children shouldn\'t suffer" as the universal truth. But the identity claim was too tied to a specific villain — when Kony\'s story became complicated, the identity claim collapsed.',
      },
      imp2: {
        grade: 'C',
        reason:
          'Despite production values, coded as advocacy documentary — asking for political attention and moral commitment, not cultural participation. Entered culture as a moment of collective concern, which has a much shorter half-life.',
      },
      imp3: {
        grade: 'D',
        reason:
          'Watching felt good. Everything after that felt like work or obligation. The reward curve inverted as commitment deepened. Cover the Night felt like showing up alone. The structural difference from Ice Bucket in one sentence: Ice Bucket made participation feel like winning; Kony made it feel like obligation.',
      },
      imp4: {
        grade: 'D+',
        reason:
          'The design intent was watch to share to buy kit to Cover the Night to sustained advocacy. But transitions required friction participants wouldn\'t absorb. The funnel collapsed at every step past sharing.',
      },
      imp5: {
        grade: 'D',
        reason:
          'The US had already deployed military advisors before the video. Kony was never captured. The LRA was weakened through military operations and defections, not campaign pressure. The ladder from online visibility to offline policy change structurally collapsed.',
      },
    },
  },

  'liquid-death': {
    overview:
      'Liquid Death is a canned water brand founded in 2019 by Mike Cessario that uses death metal aesthetics, irreverent humor, and anti-corporate satire to sell water and iced tea. Valued at $1.4B by 2024, it demonstrated that the most powerful brand coding move is to make a commodity product feel like cultural rebellion. It sells water in tallboy cans that look like beer, with the tagline "Murder Your Thirst," and has built one of the most engaged brand communities in modern consumer marketing.',
    mechanic:
      'The core mechanic is purchase — buy a can of water. But Liquid Death layered participatory mechanics on top: the "Sell Your Soul" loyalty program (over 500,000 sign-ups), limited-edition collaborations with brands from Live Nation to Martha Stewart, and user-generated content campaigns that turn consumers into comedic brand ambassadors. The "Greatest Hates" campaign turned negative comments into a death metal album.',
    signal:
      'The tallboy can itself is the signal — visually indistinguishable from an energy drink or craft beer at a distance, it signals counter-cultural identity in contexts where water is boring. Carrying a Liquid Death at a meeting, at a bar, or on the street is a micro-identity claim: "I am the kind of person who thinks branding is absurd and wants to participate in the joke." The skull logo on merch extends the signal to wearables.',
    reward:
      'Entertainment is the primary reward — the brand is genuinely funny. Social currency through absurdist humor (sharing Liquid Death content signals taste and humor). The "Sell Your Soul" program gamifies loyalty. Community belonging in an anti-brand brand. And the meta-reward: participating in a joke about marketing while being marketed to, which flatters the consumer\'s intelligence.',
    coding:
      'This is Liquid Death\'s entire thesis. Water is coded as boring, healthy, dutiful. Liquid Death recoded water as rebellious, entertaining, counter-cultural — using death metal aesthetics, horror typography, and satirical marketing. The brand behaves like an entertainment company that happens to sell water. It is the clearest modern proof that cultural coding determines value perception more than product attributes.',
    durability:
      'Five years old and growing — $263M in revenue in 2023, $1.4B valuation. But the durability test is ahead: novelty-driven brands face the same signal decay as Movember. The question is whether Liquid Death can sustain cultural relevance once the joke is familiar. Their expansion into iced tea and energy drinks, plus the entertainment content engine, suggests they are building beyond a single product moment.',
    scalability:
      'Primarily US-based with expansion into UK and European markets. The humor translates in Anglo-Saxon markets but the death metal aesthetic may not land universally — German humor operates differently, and the satirical anti-corporate tone requires cultural context to read correctly. The canned water format itself is globally scalable; the cultural coding requires market-specific adaptation.',
    ladder:
      'Liquid Death has donated to environmental causes (reducing plastic bottle waste through aluminum cans), but this is a brand positioning choice, not a policy play. The "Death to Plastic" messaging frames environmental action as rebellion, not duty. No evidence of policy influence or systemic change — it operates entirely as a commercial brand with cause-adjacent positioning.',
    synthesis:
      'The play to steal is radical recoding of a boring category through cultural aesthetics. Child survival is coded as heavy, institutional, guilt-inflecting — exactly the kind of category that Liquid Death\'s approach suggests can be recoded. The insight: you don\'t change what you\'re selling, you change how it\'s coded. Make the participation feel like joining an in-joke, not shouldering a burden. Entertainment-first, cause-second.',
    cautionary:
      'Liquid Death is a commercial brand, not a cause movement — the lesson is about coding technique, not organizational model. Novelty-driven coding decays (the same signal saturation risk as Movember). Satirical anti-corporate positioning is hard to maintain when you ARE a $1.4B corporation. And the death metal aesthetic is culturally narrow — it works for a specific American counter-cultural register that does not automatically translate.',
    imperativeScores: {
      imp1: {
        grade: 'B+',
        reason:
          'Created a claimable identity: "I\'m the kind of person who sees through marketing BS and participates in the joke." But the orientation is about consumer identity and humor, not a deeper worldview.',
      },
      imp2: {
        grade: 'A+',
        reason:
          'The purest modern example of behaving as culture. Liquid Death is an entertainment brand that sells water, not a water brand that entertains. Every touchpoint — can design, social content, collaborations, merch — is cultural output first.',
      },
      imp3: {
        grade: 'A',
        reason:
          'Every level of engagement is rewarding: buying the can is funny, sharing content signals humor and taste, the Sell Your Soul program gamifies loyalty, and the community belonging flatters participants\' intelligence. No level feels like work.',
      },
      imp4: {
        grade: 'B-',
        reason:
          'Has some funnel depth (casual buyer to Sell Your Soul member to merch purchaser to brand ambassador), but the transitions are consumption-driven, not commitment-driven. No advocacy or systemic change layer.',
      },
      imp5: {
        grade: 'D',
        reason:
          'No policy influence, no systemic change. "Death to Plastic" is brand positioning, not environmental advocacy. Operates entirely as a commercial brand with cause-adjacent framing.',
      },
    },
  },

  'he-gets-us': {
    overview:
      'He Gets Us is the most expensive cause-adjacent branding campaign in American religious history — a $1B+ effort by the Servant Foundation to rebrand Jesus for secular, disengaged, and post-Christian audiences. It used Super Bowl placements in 2023 and 2024, stark black-and-white photography, and a solidarity-framing of Jesus. Approximately 30% of US adults became aware (Pew Research, August 2023), but there is no measurable behavioral conversion — no church attendance uptick, no affiliation shift.',
    mechanic:
      'Almost entirely cognitive, not behavioral. The campaign asks people to reconsider Jesus, explore website "journeys" with timed reflection pauses, optionally find a local discussion group, and share content. The "Find a Group" ask is where it breaks: users go through an emotionally resonant brand experience, then land on a church locator. The creative codes for something new; the conversion mechanic routes to the institution being rebranded.',
    signal:
      'Almost entirely the ads themselves — this is a broadcast campaign trying to behave like a movement. No visible participation object, no user-generated content mechanic, no community identity layer. The 2024 foot-washing Super Bowl ad (evangelical washing drag queen\'s feet) created enormous social conversation — but that conversation was about the ad, not created by participants.',
    reward:
      'The website\'s UX delivers genuine emotional reward: relief from performance anxiety. The journeys target exhaustion of modern self-optimization culture. "What if you were enough, just as you are?" is a real and sophisticated insight. But the reward is temporary — once the feeling passes, there is nothing to hold you. No belonging, no identity, no community architecture.',
    coding:
      'The campaign\'s genuine breakthrough. Aggressively not-Christian by conventional standards: stark black-and-white documentary photography, modern copy about anxiety and hustle culture, Super Bowl and streaming placement, Jesus as solidarity figure (refugee, homeless, immigrant). The foot-washing ad placed evangelical Christians in service to groups dominant evangelical culture has opposed. But funding source (Servant Foundation donating to anti-LGBTQ organizations) contaminated the coding.',
    durability:
      'Launched 2022, ran through at least 2024. Massive awareness ($1B+ spend = 30% US adult awareness), but no behavioral conversion. No measurable church attendance or affiliation uptick. No 2025 Super Bowl presence, suggesting restructuring or scale-back. The campaign\'s dependence on paid media is both its reach mechanism and structural weakness — a true movement doesn\'t need $14M Super Bowl placements to survive.',
    scalability:
      'Architecturally US-only. The specific form of American Christian anxiety (guilt about Christianity\'s cultural power) is uniquely American. The black-and-white solidarity imagery speaks to American culture war tension specifically. The Servant Foundation\'s funding model is specifically American. The meta-strategy — recoding a familiar but politically contaminated subject through secular creative conventions — is portable.',
    ladder:
      'The most honest and damning lens. Demonstrated that mass audiences will engage with Jesus content if not coded as evangelism. Shifted the creative category for religious advertising. Generated conversations including secular audiences. But: no measurable change in disaffiliation rates, church attendance, or self-reported beliefs. Awareness without participation architecture is expensive air.',
    synthesis:
      'Steal the secular creative conventions applied to a universal human truth. Strip out everything that makes the category feel like what you think it is (institutional, guilt-inflecting, NGO-adjacent) and lead with the human truth underneath. For child survival: every new parent understands at a cellular level that a child dying is the wrong order of things. Code that as secular, modern, and human.',
    cautionary:
      'Values authenticity is the floor. He Gets Us\'s creative values (radical solidarity, washing enemies\' feet) contradicted its funders\' actual behavior (anti-LGBTQ donations). When that became known, the foot-washing ad became a symbol of hypocrisy. The lesson: if your campaign\'s creative values aren\'t aligned with your funder\'s actual values, you will be destroyed by the gap. Also: awareness without participation architecture is expensive air — $1B+ with 30% awareness and zero behavioral conversion.',
    imperativeScores: {
      imp1: {
        grade: 'B+',
        reason:
          'Made "I see Jesus as a solidarity figure, not a religious authority" into a claimable identity — but only in the creative, not in behavior. No participation object or visible signal of membership.',
      },
      imp2: {
        grade: 'A-',
        reason:
          'Genuinely coded as culture, not cause. Secular media placement, documentary aesthetic, Super Bowl, non-evangelical tone. The coding is the campaign\'s genuine achievement. But funding source contaminated it.',
      },
      imp3: {
        grade: 'D',
        reason:
          'Website journeys have decent UX, but viewing an ad is not participation. No participation mechanic with status reward. No community. No way to feel like you\'ve joined something.',
      },
      imp4: {
        grade: 'D+',
        reason:
          'Awareness funnel is sophisticated and well-funded. But mid-funnel collapses completely. No concentric circles of commitment — just one giant drop between "saw the ad" and "find a church."',
      },
      imp5: {
        grade: 'D',
        reason:
          'No measurable change in religious disaffiliation, church attendance, or beliefs. Association of Religion Data Archives found no uptick. An expensive awareness campaign that calls itself a movement. Those are fundamentally different architectures.',
      },
    },
  },

  livestrong: {
    overview:
      'Founded 1997 by Lance Armstrong as the Lance Armstrong Foundation, rebranded to Livestrong in 2003. The yellow silicone wristband (2004, Nike partnership) became the most efficient participation signal in nonprofit history — an estimated 80-100 million sold in the first two years, possibly 500 million lifetime. Revenue peaked at $58M in 2012. Then Armstrong confessed to doping on Oprah in January 2013, and the brand collapsed: 69% revenue decline over two years.',
    mechanic:
      'Buy a $1 wristband, wear it, display your affiliation. Single, anonymous, transactional. No ongoing commitment required — the transaction is complete at $1. The mechanic is declarative, not generative: it broadcasts but doesn\'t recruit. There was no next step, no deepening commitment, no community architecture beyond the purchase. The entire movement was stuck at one level of the funnel.',
    signal:
      'The yellow wristband was one of the most efficient signals in cause marketing history. Always visible, body-worn, instantly legible. It encoded multiple meanings simultaneously: cancer survivorship, athletic toughness, personal courage, solidarity. The yellow was deliberately chosen to match the Tour de France leader\'s jersey. Celebrities from George W. Bush to Sheryl Crow wore it. When the symbol was contaminated, it became unremovable — people wore it and couldn\'t un-wear it without making a statement.',
    reward:
      'Social signal: the wristband was a membership badge in a community of values. Identity: "I\'m someone who fights" — encoded personal toughness and survival. Community belonging at peak cultural penetration. Celebrity proxy: wearing what Bush and Crow wore. The reward was entirely social and immediate — no feedback loop, no proof of impact, no ongoing connection.',
    coding:
      'Coded as athletic identity brand, personal strength movement, sports culture. Visual language borrowed from Nike (yellow, sport, performance). Armstrong himself was the ultimate code carrier — multiple Tour wins while surviving cancer was the most compressed expression of the "Livestrong" idea. "Livestrong" as a phrase: two words, a verb and an adverb, imperative, personal, active. Post-Armstrong: recoded as clinical survivorship resource with lower cultural valence.',
    durability:
      'Collapsed catastrophically. USADA stripped Armstrong\'s titles in August 2012. He confessed on Oprah in January 2013. Nike, Anheuser-Busch, and RadioShack dropped him. Revenue fell from $58M to $18M. Staff cut from ~100 to under 40. The wristband went from aspirational signal to mark of shame. The organization survived by narrowing to direct cancer survivor services (fertility preservation, YMCA programs), but the movement is over.',
    scalability:
      'The yellow wristband reached UK, Australia, Canada, and parts of Europe at peak. But cultural penetration was most intense in the US, where Armstrong\'s Tour de France wins were heavily broadcast. In France and Belgium (cycling culture), doping was treated with more skepticism even at peak. Post-Armstrong, programs are fundamentally US-based and have not scaled internationally.',
    ladder:
      'Stronger policy record than expected at peak: Armstrong personally lobbied Congress for cancer research funding, the "Livestrong Agenda" included increased NIH funding, policy changes around fertility preservation, and insurance coverage advocacy. The 2003 National Cancer Act update included advocacy contributions. Post-Armstrong: policy work continues at reduced scale, primarily state-level cancer survivor rights.',
    synthesis:
      'Steal the physical wearable signal at low price ($1 creates universal accessibility). Steal color ownership (yellow was ownable, specific, and defensible). Steal the celebrity halo at peak moment (timing is as important as the celebrity). Steal the imitation cascade principle — when your signal becomes a format other causes copy, you\'ve achieved category creation.',
    cautionary:
      'Personality-driven movements have a single point of failure. Armstrong wasn\'t peripheral to Livestrong — he WAS the brand. One confession undid 500 million wristbands. The brand was the person, there was no mission firewall, Nike dependency meant the signal mechanism died when Nike withdrew, and $1 wristband buyers were consumers, not community members. For the Gates campaign: the movement identity must be rooted in a universal human truth, not a person.',
    imperativeScores: {
      imp1: {
        grade: 'A-',
        reason:
          '"Livestrong" as a phrase is one of the most efficient encodings of an orientation in cause marketing history. Imperative, personal, active. It doesn\'t say "survive cancer" — it says "live, and live strongly." Universally applicable.',
      },
      imp2: {
        grade: 'A',
        reason:
          'At peak, Livestrong was not a charity — it was culture. The yellow wristband was simultaneously a fashion object, sports accessory, political signal, and solidarity symbol. The clearest proof of what "behave as culture, not cause" looks like.',
      },
      imp3: {
        grade: 'B+',
        reason:
          '$1 was low enough to be easy but high enough to be intentional. Wearing it felt like belonging to a community of people who\'ve chosen to be strong. Efficient delivery of a winning feeling.',
      },
      imp4: {
        grade: 'D',
        reason:
          'The funnel was flat. Buy a wristband. That\'s it. No $10 tier, no monthly giving, no active participation mechanic beyond the purchase. This is Livestrong\'s structural failure — the entire movement stuck at one level.',
      },
      imp5: {
        grade: 'B',
        reason:
          'Stronger policy record than most cause brands at peak — Congressional lobbying, NIH funding, fertility preservation policy. But post-Armstrong, policy work continues at severely reduced scale. The peak was real; the sustainability was not.',
      },
    },
  },

  'comic-relief': {
    overview:
      'Founded in 1985 by Richard Curtis and Sir Lenny Henry in response to the Ethiopian famine. For nearly 40 years, Red Nose Day was a fixture of British cultural life. Total raised: £1.6B (UK) + $370M (USA since 2015). The red plastic nose — wearable, cheap, coded as playful rather than earnest — is the most effective dual-coded cause signal in British charity history. Recent totals: £38.6M (2024), £34M (2025), significantly down from the £100M+ peak in 2011.',
    mechanic:
      'Bimodal mechanic: retail (buy a red nose for £1) plus community performance (dress up, bake sales, school events, office stunts). The BBC telethon is the anchor event — live broadcast from 7PM featuring celebrity sketches, challenges, and phone-in donations. The US expansion through NBC and Walgreens ($1 red noses at 9,000 locations) is the most instructive cross-market adaptation.',
    signal:
      'The red plastic nose. Wearable, cheap, highly visible, and coded as playful rather than earnest. It signals both charitable intent AND British humor simultaneously — a rare dual-coded signal. "I am good AND I don\'t take myself too seriously." It requires no explanation and is universally recognized by the British public.',
    reward:
      'Social belonging within a nationwide collective joke. The red nose says: I am part of something large and British today. Celebrity performances donate their cachet. Humor functions as social permission — you don\'t have to be solemn to be charitable. The reward is community laughter and shared national identity.',
    coding:
      'Distinctly and self-consciously British. Comedy as the vehicle for compassion is a deeply British cultural pattern — anti-sentimentality as cover for genuine feeling. The event is coded as national institution, more culturally sophisticated than earnest charity. The 2019 Stacey Dooley controversy marked the cultural inflection: the "celebrity goes to Africa" format was publicly delegitimized.',
    durability:
      'Forty years, but with real fractures. TV viewership collapsed from 11M (2003) to ~3M (2022). The biennial model was abandoned. The Stacey Dooley controversy in 2019 delegitimized the "celebrity goes overseas" format and cost ~£10M in donations. The 2013 Panorama exposé revealed reserves invested in tobacco, arms, and alcohol. The shift to year-round digital engagement is underway but unproven.',
    scalability:
      'The US expansion (2015, NBC/Walgreens, $370M in 10 years) is the most instructive localization case. Key adaptation: retained the symbol, localized the cause (US child poverty), replaced BBC with NBC. But NBC viewership faces the same structural fragility as BBC. The model requires mass simultaneous broadcast — without it, it fractures into undifferentiated digital noise.',
    ladder:
      'No equivalent policy influence to Band Aid/G8. Comic Relief operates as a grantmaker, not a political advocacy organization. It has influenced UK aid matching policy but not at the systems level. The "Golden Pound Principle" (every donated pound goes to programs) was a trust mechanism that became a scandal when reserves were found in contradictory investments.',
    synthesis:
      'Steal the red nose mechanic — a cheap, wearable, nationally distributed physical signal that is playful (not pious). The dual-coding of generosity plus humor is rare and powerful. Steal the US localization model: retain the symbol, replace the cause narrative with domestic relevance. Steal the retail activation channel (Walgreens/Boots equivalent) for ambient cultural presence.',
    cautionary:
      'The "celebrity goes to Africa" formula is exhausted and actively toxic in social media. BBC dependency is a structural risk — the model requires mass simultaneous broadcast that is collapsing. There is no ladder of commitment — just a single-day transactional event. And the investments scandal showed that transparency promises must be real, not marketing claims.',
    imperativeScores: {
      imp1: {
        grade: 'B',
        reason:
          'The red nose makes caring visible and adds humor as permission. But it\'s more of an event badge than a deep identity claim. "I participated in Red Nose Day" is less identity-defining than a true orientation.',
      },
      imp2: {
        grade: 'A',
        reason:
          'The red nose IS culture. Comedy as charity vehicle is deeply British. At peak, Comic Relief was a genuine national institution — not a charity event but a cultural fixture as recognizable as bonfire night.',
      },
      imp3: {
        grade: 'A-',
        reason:
          'Humor as the primary reward system makes every level of participation feel fun, not dutiful. Community belonging, collective laughter, and celebrity entertainment are powerful rewards. No participation feels like sacrifice.',
      },
      imp4: {
        grade: 'D+',
        reason:
          'There is no ladder of commitment. Buy a nose, watch the show, call in a donation. No clear path from "I wore a red nose" to "I\'m a recurring advocate who influences policy." Single-tier transactional event.',
      },
      imp5: {
        grade: 'C',
        reason:
          'Operates as a grantmaker, not an advocacy organization. Has influenced UK aid matching policy at execution level but not at systems level. £1.6B raised is real impact, but no structural policy change attributed.',
      },
    },
  },

  'children-in-need': {
    overview:
      'BBC Children in Need has run annually since 1980 — 45 years, making it the longest-running case in this set. Pudsey Bear (created 1985, distinctive yellow with bandaged right eye) is one of the most recognized charity symbols in Britain. Total raised: over £1.2B. Focus is exclusively UK children — a critical differentiator from Comic Relief\'s global scope. The school-based socialization mechanic (Pudsey Day in primary schools) is the source of extraordinary durability.',
    mechanic:
      'Three interlocking mechanics: school participation (Pudsey Day — dress as Pudsey, wear spots, pay a pound, embedded in the school calendar), community fundraising (bake sales, sponsored runs), and the BBC telethon (annual Friday evening in November, three hours). The school mechanic is ambient — it requires no parental decision-making. British adults who donate in 2025 very likely wore Pudsey ears in primary school in the 1990s.',
    signal:
      'Pudsey Bear ears and spot-pattern clothing. Yellow with brown spots — distinctive on both children and adults. Pudsey\'s bandaged eye is a sophisticated design choice: it signals "in need" without showing actual poverty or trauma. The bear carries the vulnerability so human children don\'t have to be depicted suffering. A displacement object of real design intelligence.',
    reward:
      'For children: belonging, excitement, and normalization of giving as a social norm from age 5-7. This is the real achievement — it socializes generosity, pre-loading adult donors. For adults: the collective national moment mechanic through BBC telethon, with a more earnest, sentimental register than Comic Relief. Terry Wogan\'s warmth was the emotional heart for decades.',
    coding:
      'Thoroughly domestic and BBC-institutional. Coded as civic obligation rather than cultural event — "the thing Britain does for its children." Bipartisan, uncontroversial, tied to the BBC\'s public service mandate. Lacks Comic Relief\'s cultural edge but has deeper institutional legitimacy. The BBC regional structure creates distributed local ownership through regional segments.',
    durability:
      'Forty-five years — longer than any other case. The school-based socialization mechanic renews the audience with every generation of schoolchildren. But: telethon viewership has followed the same linear TV collapse as Comic Relief. The 2025 recovery to £45.5M came despite declining viewership, driven by Sara Cox\'s endurance challenge raising £9.5M alone — the celebrity individual challenge is now the fundraising engine.',
    scalability:
      'Essentially zero. Children in Need is constitutively a UK domestic charity. It has no international ambition and the BBC brand is not an internationally transferable mechanism. This is the fundamental strategic difference from Comic Relief.',
    ladder:
      'No policy or funding ladder. Children in Need is a grantmaker to local UK charities — it operates below the policy level entirely. Its influence is community-level, not systemic. This is intentional: the BBC cannot be seen to be politically advocating. The impact is distributed across thousands of local grants.',
    synthesis:
      'Steal the school-based socialization mechanic — embedding giving as a childhood social norm is extraordinarily durable and pre-loads adult donors before they have adult budgets. Steal Pudsey\'s design logic — a displacement object that carries the cause\'s emotional weight without showing actual suffering. Steal the community grantmaking structure as distributed trust-building.',
    cautionary:
      'Domestic focus is a feature for CiN but would be a bug for a global campaign. CiN has trained the British public to ask "why foreign children when UK children are struggling?" — which a Gates-backed global child survival campaign must navigate. The telethon model is a distribution channel, not a participation system. And there is no youth activation — once you age out of school, the main option is watching TV and calling a number.',
    imperativeScores: {
      imp1: {
        grade: 'A-',
        reason:
          'Pudsey makes caring about children a visible British identity. The school-based socialization normalizes this orientation from childhood. The civic obligation coding makes it a national identity claim.',
      },
      imp2: {
        grade: 'B',
        reason:
          'Institutional rather than cultural. CiN feels like a civic obligation more than a cultural event. It lacks Comic Relief\'s cultural edge (humor, celebrity stunts, irony) but has deeper institutional legitimacy.',
      },
      imp3: {
        grade: 'A-',
        reason:
          'The school ritual makes participation feel like belonging, not sacrifice. Children experience excitement and community. The normalization of giving from age 5-7 makes the act feel natural, not burdensome.',
      },
      imp4: {
        grade: 'D+',
        reason:
          'Same single-tier transaction problem as Comic Relief. No adult participation ritual with cultural weight. Once you age out of school, the main option is watching TV and calling in. The 16-24 gap (36% participation, down from 55%) demonstrates the funnel failure.',
      },
      imp5: {
        grade: 'C-',
        reason:
          'Operates below the policy level entirely — grantmaker to local charities, not an advocacy organization. The BBC cannot be seen to politically advocate. Community-level impact through distributed grants, not systemic change.',
      },
    },
  },

  toms: {
    overview:
      'Blake Mycoskie founded TOMS in 2006 after encountering shoeless children in Argentina. The One for One model (buy a pair, a child gets a pair) was marketing-native from inception. Valued at $625M by Bain Capital in 2014, it collapsed to creditor takeover in 2019 under $350M in debt. The model that made it legible (one-for-one) also made it copyable and its margins unsustainable. Academic research found zero measurable impact on health, education, or self-esteem in El Salvador.',
    mechanic:
      'Direct cause-and-effect: buy one pair, a child gets one pair. Concrete, countable, immediate. "One Day Without Shoes" (annual April 10 event) extended the mechanic into non-transactional participation — go barefoot for a day, post a photo with #withoutshoes. By 2014: 280 campus clubs at universities, creating a distributed chapter model of brand advocates that almost no commercial brand has achieved.',
    signal:
      'The TOMS alpargata became one of the most legible brand signals of the millennial era — readable off someone\'s feet across a room. The signal communicated social consciousness, non-ostentation, and community belonging. Affordable product ($44-55), premium values identity. The barefoot photo campaigns created a different signal: visible non-consumption as a statement. The signal degraded as Skechers and others copied the model.',
    reward:
      'Guilt elimination as primary psychological mechanic — the purchase absolved the guilt of consumption. Immediate, visual mental image (child gets shoes). Community belonging through 280 campus clubs. The "facilitator not hero" positioning let consumers feel like the agents of change, not the brand. The reward degraded when effectiveness research emerged and the product became a fad.',
    coding:
      'Coded as conscious millennial entrepreneurship, not charity. Blake Mycoskie\'s Argentina founding story was Silicon Valley coding applied to footwear. The brand positioned the consumer\'s agency, not the organization\'s virtue. Visual coding was deliberately anti-luxury: natural canvas, jute soles, earthy tones. 280 campus clubs made it feel grassroots even though it was a for-profit company.',
    durability:
      'Peaked 2011-2014 ($250M annual revenue). Bain Capital acquired 50% at $625M in 2014. By 2019: $350M in debt, creditor takeover. Formally abandoned One for One in 2020, pivoting to 1/3-of-profits giving. 2025 shows double-digit growth but from a severely diminished base (285 employees vs. 500 in 2019). The model was killed by debt leverage, product commoditization, effectiveness research, and social-currency erosion.',
    scalability:
      'Primarily US with significant UK presence. Scaled horizontally (shoes to eyewear to coffee to water) more than geographically. The campus club model — 280 clubs at peak — was the most scalable infrastructure ever built but never systematically exploited. "One Day Without Shoes" demonstrated international scalability through social media but TOMS never built on it into a global community.',
    ladder:
      'TOMS did not pursue policy influence. The model was explicitly transactional: purchase equals donation. The effectiveness research (Wydick et al., 2014 and 2018) found no statistically significant impact on health, school attendance, or self-esteem — and increased likelihood of children saying "outsiders should provide for my family\'s needs." The model was transactionally complete and systemically inert.',
    synthesis:
      'Steal guilt elimination as psychological mechanic — make participation feel like relief, not sacrifice. Steal the origin story architecture (specific witnessing moment plus practical response). Steal the campus club chapter model of distributed brand advocates. Steal "One Day Without Shoes" as template for annual ritual non-purchase participation. Steal the "facilitator not hero" positioning.',
    cautionary:
      'Don\'t build brand identity around a single product category that can become a fad. Don\'t use a giving mechanic that can be academically debunked. Private equity leverage on a mission-constrained margin structure is fatal. The 280 campus clubs at peak were extraordinary infrastructure that was allowed to disappear. Expanding product lines without the founding story\'s specificity dilutes cause-brand coherence.',
    imperativeScores: {
      imp1: {
        grade: 'A',
        reason:
          '"You care about the world" as legible identity. The alpargata was a visible values signal. Campus clubs were identity communities. "Start Something That Matters" was a philosophy, not a tagline.',
      },
      imp2: {
        grade: 'A-',
        reason:
          'Entrepreneurship coding, not charity coding. Blake Mycoskie as culture figure. Campus club organic spread made it feel like a grassroots movement even as a for-profit company.',
      },
      imp3: {
        grade: 'A',
        reason:
          'Guilt elimination at purchase is the most efficient reward mechanism in cause marketing. Immediate visual mental image of impact. Community belonging through clubs. One Day Without Shoes as participatory ritual.',
      },
      imp4: {
        grade: 'B',
        reason:
          'Campus clubs as a deeper tier, One Day Without Shoes as non-purchase tier. But no escalation path from club member to advocate to change-maker. Three tiers is better than most, but the ladder stopped there.',
      },
      imp5: {
        grade: 'D',
        reason:
          'No policy influence. Academic research found zero measurable development impact. Increased dependency attitudes among recipients. The model was transactionally complete and systemically inert.',
      },
    },
  },

  'earth-hour': {
    overview:
      'Earth Hour began March 31, 2007 in Sydney, organized by WWF Australia and Leo Burnett Sydney. In year one, 2.2 million Sydney residents turned off lights for an hour. By year two: 50 million people across 35 countries. By 2025: 180+ countries with iconic landmarks (Eiffel Tower, Burj Khalifa, Sydney Opera House) switching off simultaneously. Nearly 3 million hours pledged in 2025 — double the 2024 record. Nineteen years running.',
    mechanic:
      'The most elegant and most limiting mechanic: turn off your lights for one hour. Zero cost, zero friction, instantly understood across languages and cultures. In 2023, WWF introduced the Hour Bank — pledging an hour doing something positive (planting trees, zero-waste cooking, beach cleanups) — shifting from "do nothing for an hour" to "do something for an hour." The lights-off remains but is now one expression among many.',
    signal:
      'The most spectacular in the entire set. Landmarks going dark is a globally televised, visually unmissable signal — the Eiffel Tower, Empire State Building, Burj Khalifa. No other movement brand achieves this level of physical spectacle at global scale. In 2025, Earth Hour trended on social media in 31 countries simultaneously. The signal architecture is built around spectacle that generates earned media dwarfing any paid budget.',
    reward:
      'Almost entirely identity-based. Individuals get environmental identity and community belonging at very low effort — the reward-to-effort ratio is extremely high. Organizations and landmarks get public relations and stakeholder goodwill. WWF gets fundraising, petition signatures, and volunteer recruitment. There is no financial reward or community capital — purely about being seen to care and feeling part of something global.',
    coding:
      'The most sophisticated visual coding in the set — darkness and light is one of the most primal symbolic languages, universally understood. "We turn off the lights to see the planet differently" is a poetic frame that works across cultures. But Earth Hour has struggled to transcend its "event" coding — it still codes primarily as "the lights-off thing" rather than a lifestyle posture.',
    durability:
      'Nineteen years running with consistent growth in the Hour Bank metric (1.4M hours in 2024, 3M in 2025). Landmark participation remains consistent. However, a study in Ecological Economics found no evidence of systematic relationship between participation and lasting environmental attitude changes. The event captures attention but doesn\'t convert it to durable behavior change.',
    scalability:
      'The most globally distributed at launch — reached 35 countries in year two, faster than GivingTuesday or any other case. The reason: the mechanic requires no infrastructure, no payment systems, no cultural context. Turning off a light is universal. This makes it uniquely scalable but also uniquely thin — it\'s the easiest thing to do globally precisely because it asks the least.',
    ladder:
      'The strongest documented policy record among the "create a moment" cases. WWF attributes 620,000+ actions: Russia\'s first law ignited by Earth Hour protecting seas from oil pollution, Argentina\'s 3.4M hectare marine protected area, Galapagos banning single-use plastic, French Polynesia\'s 5M sq km Marine Area, and 50,000 Spanish citizens pressuring government on Paris Agreement. The mechanism: Earth Hour builds petition infrastructure around its event.',
    synthesis:
      'Steal the landmark architecture — making famous institutions participate creates global earned media at zero cost. The visual of a building going dark is simultaneously intimate and global. Steal using the moment as a petition and signature collection mechanism — Earth Hour is the funnel top for a sustained advocacy pipeline. Steal the global synchronization as a cultural spectacle.',
    cautionary:
      'When the act is purely symbolic and subtractive (do less, turn off), it cannot ladder to behavior change on its own. Earth Hour has never demonstrably shifted energy consumption patterns — because turning off a light for an hour is not a proxy for meaningful action. The moment is spectacular but hollow unless the organization has a genuine follow-through pipeline. The thin mechanic trades depth for universal reach.',
    imperativeScores: {
      imp1: {
        grade: 'B+',
        reason:
          'Turning off lights is a visible declaration of where you stand on the planet\'s future. But the orientation is broad ("I care about the environment") rather than specific. The identity claim is real but undifferentiated.',
      },
      imp2: {
        grade: 'A',
        reason:
          'The most purely cultural of the "create a moment" cases. Created a global annual ritual that transcends any organizational owner. The Eiffel Tower going dark is not a charity appeal — it is a cultural act.',
      },
      imp3: {
        grade: 'B+',
        reason:
          'The reward-to-effort ratio is extremely high — requires almost nothing, signals significant values alignment. Identity as environmentalist and community belonging are rewarding. But the reward is thin because the effort is thin.',
      },
      imp4: {
        grade: 'B+',
        reason:
          'Earth Hour uses the moment as funnel top for sustained WWF campaigns — petition collection, volunteer recruitment, policy advocacy. The "moment to systemic change" pipeline is the most sophisticated of the "create a day" cases.',
      },
      imp5: {
        grade: 'A-',
        reason:
          '620,000+ attributed actions including national legislation (Russia), marine protected areas (Argentina), and plastic bans (Galapagos). The strongest policy pipeline among moment-based movements, using the annual event as entry point to sustained advocacy.',
      },
    },
  },

  'rock-the-vote': {
    overview:
      'Founded in 1990 by Virgin Records Co-Chairman Jeff Ayeroff. The origin was a defense of artistic freedom — record labels fighting proposed explicit-lyrics legislation found a natural bridge to youth civic engagement. Rock the Vote was the first organization to launch an online voter registration platform (1999). It has registered 14 million young voters over 35 years. The 1992 campaign helped drive youth turnout from 36% to 43%, credited with helping elect Bill Clinton.',
    mechanic:
      'Register to vote. Extremely low friction — signing a form, later clicking online. The participation is declared, not performed. Rock the Vote stayed ahead of friction reduction through early online registration. The mechanic is simple and perennial but essentially invisible — there is no physical performance, no visible signal, no social broadcast inherent in the act itself.',
    signal:
      'T-shirts, stickers, and celebrity PSAs on MTV. The visibility was parasitic on existing cultural platforms (music videos, concert venues, MTV programming). There was no intrinsic physical signal — you had to witness the celebrity endorsement or see the merchandise. Madonna wrapping herself in the American flag was the peak signal moment. The signal was dependent on media concentration (MTV reaching 90% of youth) that no longer exists.',
    reward:
      'Identity affiliation: "I am the kind of person who votes." Voting was coded as culturally cool rather than civically obligatory. In 1992, the reward was joining something urgent and insurgent — the act felt like rebellion, not compliance. The "Choose or Lose" framing leaned into agency and consequence rather than duty.',
    coding:
      'Decisively pop culture, not civics. The brand lived inside music, not politics. The strategic insight was that young people distrust institutional messages but trust cultural messengers — artists were proxies for peer trust. This was the first systematic use of cultural coding to drive civic behavior. The campaign made voting feel like a cultural act rather than a bureaucratic one.',
    durability:
      'Thirty-five years and still operating. Survived near-bankruptcy in 2006 (~$700K debt). The durability is structural — it sits at the intersection of a perennial problem (low youth voter turnout) and an evergreen cultural strategy. However, relevance has declined significantly in the social media era. The arbitrage that made it powerful — a single platform reaching 90% of youth — is gone.',
    scalability:
      'Not exported meaningfully beyond the US. The model is deeply tied to American electoral mechanics, celebrity culture, and the specific relationship between pop music and political identity. The "Choose or Lose" framing is US-specific. No significant UK or German adaptation exists.',
    ladder:
      'Modest policy impact. The 1992 campaign coincided with 43% youth turnout (up from 36%). But subsequent research is damning: a randomized experiment showed Rock the Vote TV ads had zero statistically significant effect on turnout in 2001. Facebook ad experiments in 2012-13 also showed no measurable lift. Self-reported numbers reflect selection bias. The ladder is cultural, not legislative.',
    synthesis:
      'The cultural coding strategy is the steal. Don\'t make child survival a "charity" — make it an identity claim. "I\'m the kind of parent who knows this." Frame participation as belonging to a tribe of people who see the world clearly. Rock the Vote didn\'t sell voting — it sold the self-image of a person who votes.',
    cautionary:
      'The model is entirely dependent on cultural arbitrage — finding the one channel where your audience concentrates and owning it. In 1992, that was MTV. No equivalent consolidation point exists in 2026. The attempt to replicate on fragmented social platforms has shown zero measured impact. Don\'t build the campaign around platform reach — build it around the act itself.',
    imperativeScores: {
      imp1: {
        grade: 'A-',
        reason:
          'Made "I vote" a cultural identity claim rather than a civic duty. The framing was about who you are, not what you should do. "Choose or Lose" was an orientation, not a command.',
      },
      imp2: {
        grade: 'A',
        reason:
          'The whole model is cultural coding. Music equaled proxy for peer trust equaled participation without institutional ask. Rock the Vote lived inside culture (MTV, concerts, music videos) not inside politics.',
      },
      imp3: {
        grade: 'B',
        reason:
          'Voting was reframed as winning — agency, cool, rebellion against apathy. But the actual act (registering, voting) is invisible and bureaucratic. The reward is the identity, not the act.',
      },
      imp4: {
        grade: 'C+',
        reason:
          'Single-tier mechanic (register to vote). No concentric circles from casual supporter to engaged advocate to policy champion. The registration is the floor and the ceiling. No visible signals distinguishing levels of commitment.',
      },
      imp5: {
        grade: 'C',
        reason:
          'Credited with helping the 1992 youth turnout spike but subsequent randomized experiments show zero measurable effect of the ads themselves. Cultural influence is real but not provably causal. The ladder is cultural reputation, not legislative outcome.',
      },
    },
  },
};
