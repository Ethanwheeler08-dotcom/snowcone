// The six services. Drives the home page carousel, the /services index,
// the footer links and one page per service at /services/<slug>/.

export const services = [
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    tab: 'Meta Ads',
    label: 'Meta Ads: Paid Social',
    icon: 'meta',
    card: {
      title: 'Whip Up Engagement That Actually Converts',
      text: 'We put your business in front of the right people on Facebook and Instagram and turn their attention into enquiries.',
    },
    index: 'Facebook & Instagram ads that turn scroll-stopping creative into a steady stream of enquiries.',
    hero: {
      title: 'Ads That Stop <em>The Scroll</em>',
      text: 'Facebook and Instagram are where your customers spend hours a day. We turn that attention into a steady stream of enquiries, with creative that earns the click and targeting that finds the right people.',
    },
    problem: {
      title: 'Boosting Posts Isn’t A <em>Strategy</em>',
      text: 'Most businesses throw a bit of money at a promising post, watch the likes roll in, and wonder why the phone stays quiet. Likes don’t pay wages. Without proper targeting, sharp creative and a plan to scale, Meta ads just burn budget and leave you convinced “they don’t work for my business.” They do. You just haven’t run them properly yet.',
    },
    solution: {
      title: 'We Turn Feeds Into <em>Funnels</em>',
      text: 'We build Meta ad campaigns that do one job: get you customers at a price that makes sense. That means creative people actually stop for, audiences built from real buyer data, and a funnel that moves someone from a casual scroll to a booked enquiry. We handle the strategy, the creative, the targeting and the optimisation. You handle the extra work coming in.',
    },
    steps: {
      title: 'Three Steps To A Full <em>Pipeline</em>',
      items: [
        ['Audit your audience', 'We dig into your numbers, your buyers and your best customers to find the angles and audiences worth spending on.'],
        ['Build and launch creative', 'We write, design and ship ads built to stop the scroll and earn the click.'],
        ['Scale what works', 'We double down on the winners, cut the waste, and keep pushing your cost-per-lead down as we grow spend.'],
      ],
    },
    why: 'Plenty of agencies can run ads. Fewer will give you live access to your account, straight answers every week, and a team that treats your budget like their own money. We know how growth is supposed to work, and we’re not going anywhere. Clients are friends here. The team is family.',
    faqIntro: 'Everything you need to know before running Meta ads with us. Still unsure? Just ask.',
    faqs: [
      ['How much should I budget for Meta ads?', 'It depends on your goals and margins, but most businesses start with a few thousand dollars a month in ad spend on top of management. In your free growth audit we’ll model realistic numbers for your business before you commit a single dollar.'],
      ['How quickly will I see results from Facebook and Instagram ads?', 'You’ll usually see early signals within the first couple of weeks as we test creative and audiences. Most accounts settle into a reliable, scalable cost-per-lead within the first two to three months.'],
      ['I’ve tried boosting posts and it didn’t work. Why is this different?', 'Boosting is built for likes, not leads. We build proper campaigns with conversion tracking, tested creative and audiences built from real buyer data, all optimised for enquiries rather than engagement.'],
      ['Do you handle the creative, or do I need to supply it?', 'We handle it. Our team writes, designs and edits ads built for each placement. If you’ve got photos, video or brand assets, we’ll put them to work too.'],
      ['Am I locked into a long contract?', 'No. We earn your business every month. We’ll talk through the right starting term for your goals in the audit, but we don’t believe in trapping clients.'],
    ],
    audit: ['Where you’re losing money right now', 'Your three biggest growth opportunities on Meta', 'A clear number on what’s actually possible'],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    tab: 'Google Ads',
    label: 'Google Ads: Paid Search',
    icon: 'google',
    card: {
      title: 'Pour High-Intent Traffic Into The Funnel',
      text: 'We capture people actively searching for what you offer and turn that intent into booked calls and enquiries.',
    },
    index: 'Search, Performance Max and shopping campaigns that capture demand at the exact moment of intent.',
    hero: {
      title: 'Be There The Moment <em>They Search</em>',
      text: 'When someone types “emergency plumber near me” or “best accountant in town,” they’re ready to buy. We make sure it’s your business they find first, at a cost-per-lead that keeps you profitable.',
    },
    problem: {
      title: 'You’re Paying For Clicks, Not <em>Customers</em>',
      text: 'Google Ads is brutal when it’s run badly. Broad keywords, weak landing pages and no conversion tracking, and you’re basically donating money to Google. Most businesses either give up after burning through a budget, or keep paying an agency that can’t tell them which clicks actually turned into customers. Every wasted click is a customer your competitor just caught instead.',
    },
    solution: {
      title: 'We Turn Searches Into <em>Sales</em>',
      text: 'We build Google Ads campaigns that put you in front of people already looking for what you sell. That means the right keywords, tightly structured campaigns, landing pages that convert, and relentless optimisation on the one number that matters: cost-per-lead. No vanity clicks. Just enquiries you can bank.',
    },
    steps: {
      title: 'Three Steps To High-Intent <em>Leads</em>',
      items: [
        ['Map your keywords', 'We find the searches your best customers actually make, and skip the ones that just cost you money.'],
        ['Structure the campaigns', 'We build tight, logical campaigns so every dollar works as hard as it can.'],
        ['Optimise for cost-per-lead', 'We tune bids, copy and pages until your leads are as cheap as they can profitably get.'],
      ],
    },
    why: 'Anyone can spend your money on Google. We’re here to make it come back with friends. You get live account access, honest weekly reporting, and a team that obsesses over your cost-per-lead like it’s their own. Genuinely invested, and in it for the long haul.',
    faqIntro: 'Everything you need to know before running Google Ads with us. Still unsure? Just ask.',
    faqs: [
      ['Isn’t Google Ads really expensive?', 'It’s only expensive when it’s run badly. Done right, it’s one of the most profitable channels there is, because you only pay to reach people already searching for you.'],
      ['How is this different from what I’m doing now?', 'We start with conversion tracking, so every decision is based on which clicks turn into customers, not which ones are cheapest. Then we restructure campaigns around intent and cut the spend that isn’t pulling its weight.'],
      ['How long until it works?', 'Search campaigns can start producing enquiries within days of launch. Expect the first month to be about learning and tightening, with cost-per-lead improving steadily from there.'],
      ['Will I know what’s working?', 'Always. You get live access to your account and dashboard, plus a plain-English weekly update on what we changed, why, and what it did.'],
    ],
    audit: ['Where your ad spend is leaking right now', 'Your three biggest opportunities in paid search', 'A clear number on what your cost-per-lead could be'],
  },
  {
    slug: 'seo-aeo',
    name: 'SEO & AEO',
    tab: 'SEO & AEO',
    label: 'SEO & AEO',
    icon: 'search',
    card: {
      title: 'Be The Cherry On Top In Search And AI',
      text: 'We get you found in Google and in AI answers, building compounding organic visibility that keeps paying off.',
    },
    index: 'Rank in search and get recommended by AI answer engines, so you show up wherever buyers look.',
    hero: {
      title: 'Get Found. By People <em>And By AI</em>',
      text: 'Ranking on Google still matters. But now people ask ChatGPT too. We get you found in both places, so whether someone searches or asks, you’re the answer.',
    },
    problem: {
      title: 'If You’re Not The Answer, You’re <em>Invisible</em>',
      text: 'Search is changing fast. Half your customers still Google you. The other half ask an AI, and if that AI doesn’t know you exist, you’re not even in the running. Most businesses are optimised for neither. They’ve got a slow website, thin content and no plan, so they sit on page three while competitors get quoted by both Google and ChatGPT. Being invisible is expensive.',
    },
    solution: {
      title: 'We Make You The Obvious <em>Answer</em>',
      text: 'We do the traditional SEO work that gets you ranking: technical fixes, content that answers real questions, and authority that Google trusts. Then we go further with AEO, Answer Engine Optimisation, so the AI tools your customers now use recommend you too. It’s a long game, but it’s the one that compounds. Rankings you earn keep paying you back for years.',
    },
    steps: {
      title: 'Three Steps To Being <em>Found</em>',
      items: [
        ['Audit and find the gaps', 'We map where you rank, where you don’t, and where the easy wins are hiding.'],
        ['Fix, build and publish', 'We sort the technical issues and create content that ranks and gets cited.'],
        ['Track rankings and citations', 'We watch your positions on Google and your mentions in AI, and keep pushing both up.'],
      ],
    },
    why: 'SEO is full of agencies who’ll happily take your money for twelve months and show you nothing. Not us. We report honestly on what’s moving and what isn’t, give you live access to the data, and treat your growth like the long-term partnership it is.',
    faqIntro: 'Everything you need to know about ranking on Google and getting cited by AI. Still unsure? Just ask.',
    faqs: [
      ['How long until I rank?', 'Honestly? Usually three to six months for meaningful movement, sometimes sooner on easier terms. Anyone promising page one in weeks is lying to you. We’ll map a realistic timeline in your audit.'],
      ['What even is AEO?', 'Answer Engine Optimisation. It’s the work that makes AI tools like ChatGPT, Gemini and Google’s AI Overviews understand, trust and recommend your business when people ask them for help.'],
      ['Is SEO still worth it with AI around?', 'More than ever. AI answers are built on the same signals SEO strengthens: clear content, technical health and authority. Doing both means you show up however people look.'],
      ['Will I see what’s happening?', 'Yes. You get a live dashboard of rankings, traffic and AI citations, plus regular updates on what we shipped and what moved.'],
    ],
    audit: ['Where you’re losing visibility right now, on Google and in AI', 'Your three biggest search opportunities', 'A clear picture of what ranking could be worth to you'],
  },
  {
    slug: 'web-design',
    name: 'Website Design & Development',
    tab: 'Websites',
    label: 'Website Design & Development',
    icon: 'web',
    card: {
      title: 'A Site That Earns Its Keep',
      text: 'We design and build fast, sharp websites that turn visitors into customers, not just page views.',
    },
    index: 'Fast, conversion-focused websites that do the selling while you sleep.',
    hero: {
      title: 'A Website That <em>Actually Sells</em>',
      text: 'A pretty site that doesn’t convert is just an expensive business card. We build fast, sharp websites designed to turn visitors into customers, not just to look good in a portfolio.',
    },
    problem: {
      title: 'Your Website Might Be Your Biggest <em>Leak</em>',
      text: 'You’re paying for ads and SEO to send people to your site. Then a slow load, a confusing layout or a buried call-to-action sends them straight back out again. Most business websites are built by designers who care how it looks, not how it converts. So they’re beautiful and useless. Every visitor who lands and leaves is money you already spent, wasted at the last step.',
    },
    solution: {
      title: 'We Build Sites That <em>Convert</em>',
      text: 'We design and build websites with one job in mind: turning visitors into enquiries. That means fast load times, a layout that guides people to act, copy that sells, and a build that works as hard on mobile as it does on desktop. It’ll look great, because that matters too. But every design decision is made in service of conversions.',
    },
    steps: {
      title: 'Three Steps To A Site That <em>Works</em>',
      items: [
        ['Plan and wireframe', 'We map the journey from landing to enquiry before we design a single pixel.'],
        ['Design and build', 'We craft a fast, on-brand site built to guide visitors toward action.'],
        ['Launch and optimise', 'We ship it, watch how people use it, and keep improving what converts.'],
      ],
    },
    why: 'Most web agencies hand you a nice site and disappear. We build for results and stick around to improve them. Because we also run your ads and SEO, we build your site to make those channels work harder, not fight them. One team, one plan, everything pulling the same direction.',
    faqIntro: 'Everything you need to know before we build your site. Still unsure? Just ask.',
    faqs: [
      ['How long does a website take?', 'Most builds run four to eight weeks depending on size and complexity. We’ll give you a clear timeline in your audit.'],
      ['Will I be able to update it myself?', 'Yes. We build on platforms that make it easy to edit text, images and pages yourself, and we’ll show you how before handover.'],
      ['Do you do copy too?', 'We do. Conversion copy is half the job, so we write it alongside the design rather than pouring words into a template afterwards.'],
      ['What happens after launch?', 'We watch how real visitors use the site, test improvements and keep lifting your conversion rate. Ongoing support is available whenever you need it.'],
    ],
    audit: ['Where your current site is leaking customers', 'The three changes that would lift conversions fastest', 'A clear picture of what a converting site could be worth'],
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    tab: 'Email Marketing',
    label: 'Email Marketing',
    icon: 'mail',
    card: {
      title: 'Stay In The Conversation Until They Buy',
      text: 'We nurture your leads with email that sounds human and brings them back to buy when the timing is right.',
    },
    index: 'Automated flows and campaigns that turn one-off buyers into repeat revenue.',
    hero: {
      title: 'The Channel That <em>Pays For Itself</em>',
      text: 'Your email list is the one audience you actually own. We turn it into your most profitable sales channel, with automated flows and campaigns that sell while you sleep.',
    },
    problem: {
      title: 'You’re Sitting On Money And Not <em>Opening It</em>',
      text: 'Most businesses have an email list they barely touch. Maybe a newsletter now and then. Meanwhile the same list could be running automated sequences that welcome, nurture and sell on autopilot. Every day without proper email flows is a day past customers forget you exist and warm leads go cold. It’s the cheapest channel you’ve got, and it’s just sitting there.',
    },
    solution: {
      title: 'We Turn Your List Into <em>Revenue</em>',
      text: 'We build email systems that do the selling for you. Welcome sequences that convert new subscribers, nurture flows that warm up leads, win-back campaigns that revive old customers, and regular sends that keep you top of mind. You own the list, so unlike ads, this channel keeps paying without paying per click. Set it up right once, and it works forever.',
    },
    steps: {
      title: 'Three Steps To Automated <em>Revenue</em>',
      items: [
        ['Map the flows', 'We work out which automated sequences will make you the most money, fastest.'],
        ['Write and automate', 'We craft the emails and build the automation so it runs without you.'],
        ['Test and refine', 'We test subject lines, timing and offers to keep lifting your results.'],
      ],
    },
    why: 'Email done badly is spam. Email done well feels like a message from someone who gets you. We write emails people actually want to open, in a brand voice that sounds human, and we report honestly on what’s driving revenue. Genuinely invested, here for the long game.',
    faqIntro: 'Everything you need to know before we switch on your list. Still unsure? Just ask.',
    faqs: [
      ['I don’t have a big list. Is it still worth it?', 'Yes. A small, well-nurtured list often outperforms a big neglected one. And we’ll help you grow it while we’re at it.'],
      ['Won’t I annoy people?', 'Not if every email earns its place. We send things people actually want, at a sensible rhythm, and we watch engagement closely so nobody gets buried.'],
      ['How is this different from a newsletter?', 'A newsletter goes to everyone at once. Flows go to the right person at the right moment, triggered by what they’ve done, so they convert far better.'],
      ['How soon does it pay off?', 'Core flows like welcome and win-back usually start earning within weeks of switching on, and they keep earning every day after that.'],
    ],
    audit: ['The revenue your list is leaving on the table right now', 'The three flows that would earn you the most, fastest', 'A clear number on what email could add to your bottom line'],
  },
  {
    slug: 'strategy',
    name: 'Strategy & Planning',
    tab: 'Strategy',
    label: 'Strategy & Growth Planning',
    icon: 'strategy',
    card: {
      title: 'The Thinking That Ties It All Together',
      text: 'We build the growth strategy that connects every channel, so your marketing works as one system.',
    },
    index: 'Positioning, channel mix and budget plans that turn data into direction and compound your growth.',
    hero: {
      title: 'Know Exactly Where <em>The Growth Is</em>',
      text: 'Spending on marketing without a plan is guessing with a budget. We build you a clear, costed roadmap for your next stage of growth, so every dollar has a job.',
    },
    problem: {
      title: 'Busy Isn’t The Same As <em>Growing</em>',
      text: 'Plenty of businesses are running ads, posting content and sending the odd email, and still not really growing. The activity feels like progress, but without a strategy tying it together, it’s just motion. You end up spread thin across channels that don’t talk to each other, unsure what’s actually working. Effort without a plan is just expensive noise.',
    },
    solution: {
      title: 'We Build The <em>Roadmap</em>',
      text: 'We take a hard look at your business, your market and your numbers, and build a clear growth plan you can actually follow. Which channels to back, what to spend, what to expect, and in what order. Whether you run it yourself or hand it to us, you’ll leave with a costed, prioritised roadmap instead of a hunch. No more guessing which lever to pull next.',
    },
    steps: {
      title: 'Three Steps To A Clear <em>Plan</em>',
      items: [
        ['Diagnose the business', 'We dig into your numbers, your market and what’s working now, so the plan is built on reality.'],
        ['Model the opportunities', 'We map where the growth actually is and what it’ll take to get there.'],
        ['Build the roadmap', 'We hand you a costed, prioritised plan you can act on straight away.'],
      ],
    },
    why: 'A lot of “strategy decks” are just expensive PDFs that gather dust. Ours are built to be used, by people who then have to deliver the results. We think in outcomes not activity, and we give you straight answers about where your growth actually is, even when it’s not what you hoped to hear.',
    faqIntro: 'Everything you need to know before we map your growth. Still unsure? Just ask.',
    faqs: [
      ['Do I have to use you to execute the plan?', 'No. The roadmap is yours to keep and run however you like. Most clients ask us to execute because we built it, but there’s no lock-in.'],
      ['How is this different from the free growth audit?', 'The audit shows you where you’re losing leads and the quickest fixes. Strategy goes much deeper: market, positioning, channel mix, budgets and forecasts, built into a full plan.'],
      ['I’m a small business. Is this overkill?', 'Not at all. Smaller budgets have less room for waste, so knowing exactly where to spend matters even more. We scale the depth of the work to the size of the business.'],
      ['What will I actually walk away with?', 'A costed, prioritised growth roadmap: which channels to back, what to spend, what results to expect and in what order, plus the reasoning behind every call.'],
    ],
    audit: ['Where your current approach is holding you back', 'Your three biggest growth opportunities, ranked', 'A clear picture of what your next stage could look like'],
  },
];

// The home page carousel opens on SEO & AEO, matching the original layout.
export const homeServiceStart = 2;
