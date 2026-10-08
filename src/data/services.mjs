// The six services. Drives the home page carousel, the /services index,
// the footer links and one page per service at /services/<slug>/.

export const services = [
  {
    slug: 'seo-aeo',
    // Snowcone's main service: listed first everywhere, featured on the home and services pages.
    featured: true,
    name: 'AI Search & SEO',
    tab: 'AI Search',
    label: 'AI Search & SEO (AEO)',
    icon: 'search',
    platforms: ['ChatGPT', 'Google AI Overviews', 'Gemini', 'Perplexity', 'Copilot'],
    card: {
      title: 'Be The Cherry On Top In Search And AI',
      text: 'We get you found on Google and mentioned in AI answers. Visibility like that keeps paying off long after the work is done.',
    },
    index: 'Get recommended by ChatGPT, Gemini and Google’s AI answers, and rank on Google as well, so you show up wherever people look.',
    hero: {
      title: 'Get Found. By People <em>And By AI</em>',
      text: 'Ranking on Google still matters. But plenty of people now ask ChatGPT instead. We get you showing up in both, so whether someone searches or asks, your name comes up.',
    },
    problem: {
      title: 'If You’re Not The Answer, You’re <em>Invisible</em>',
      text: 'Search is changing fast. Most of your customers still Google you. More of them now ask an AI as well, and if it doesn’t know you exist, you’re not even in the running. Plenty of business websites aren’t set up for either. Slow pages, thin content, no plan. So they sit on page three while competitors get quoted by Google and ChatGPT alike.',
    },
    solution: {
      title: 'We Make You The Obvious <em>Answer</em>',
      text: 'First, the SEO groundwork that gets you ranking. Technical fixes, content that answers what people are really asking, and the kind of authority Google trusts. Then we add AEO (Answer Engine Optimisation), so the AI tools your customers use start recommending you as well. It’s a slower game than ads, but it compounds. Rankings you earn keep bringing people in for years.',
    },
    steps: {
      title: 'Three Steps To Being <em>Found</em>',
      items: [
        ['Audit and find the gaps', 'We map where you rank, where you don’t and where the easy wins are hiding.'],
        ['Fix, build and publish', 'We sort out the technical issues, then write content that ranks and gets cited.'],
        ['Track rankings and citations', 'We keep an eye on your Google positions and your mentions in AI tools, and keep pushing both up.'],
      ],
    },
    why: 'SEO has a bad reputation thanks to vague reports and work nobody can point to. We’d rather show you. Every fix, page and article we publish goes in your dashboard, right next to the rankings it’s meant to move. If something isn’t working, you’ll hear it from us first.',
    faqIntro: 'Ranking on Google and getting mentioned by AI, explained without the jargon. Anything we’ve missed, just ask.',
    faqs: [
      ['How long until I rank?', 'Usually three to six months before you see meaningful movement, sometimes sooner for easier terms. Anyone promising page one in a few weeks is telling you porkies. We’ll map out a realistic timeline in your audit.'],
      ['What even is AEO?', 'Answer Engine Optimisation. It’s the work that helps AI tools like ChatGPT, Gemini and Google’s AI Overviews understand your business, trust it and recommend it when people ask for help.'],
      ['Is this the same as GEO or LLM optimisation?', 'Yes. AEO, GEO (Generative Engine Optimisation) and LLM optimisation are different names for the same goal: getting AI tools to mention and recommend your business. We use AEO because it’s the simplest to say.'],
      ['Is SEO still worth it with AI around?', 'More than ever. AI answers lean on the same things good SEO builds, like clear content, a healthy site and a solid reputation. Do both and you show up however people look.'],
      ['Will I see what’s happening?', 'Yes. You get a live dashboard with your rankings, traffic and AI citations, plus regular updates on what we’ve done and what’s moved.'],
    ],
    audit: ['Where you’re losing visibility right now, on Google and in AI', 'Your three biggest search opportunities', 'A clear picture of what ranking could be worth to you'],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    tab: 'Meta Ads',
    label: 'Meta Ads: Paid Social',
    icon: 'meta',
    card: {
      title: 'Whip Up Ads People Stop Scrolling For',
      text: 'We put your business in front of the right people on Facebook and Instagram, then turn that attention into enquiries.',
    },
    index: 'Facebook and Instagram ads that make people stop scrolling and start enquiring.',
    hero: {
      title: 'Ads That Stop <em>The Scroll</em>',
      text: 'Your customers spend hours a day on Facebook and Instagram. We make sure they see you there, with ads worth stopping for and targeting that finds the people most likely to book.',
    },
    problem: {
      title: 'Boosting Posts Isn’t A <em>Strategy</em>',
      text: 'A lot of businesses boost a post, watch the likes roll in and wonder why the phone stays quiet. Likes don’t pay wages. Without proper targeting, good creative and a plan to scale, Meta ads chew through budget and leave you thinking they don’t work for your business. They can. They just need to be run properly.',
    },
    solution: {
      title: 'We Turn Feeds Into <em>Funnels</em>',
      text: 'We build Meta campaigns to win you customers at a cost that stacks up. That means ads people stop for, audiences built from your real customer data, and a clear path from a lazy scroll to a booked enquiry. We run the ads. You handle the extra work coming in.',
    },
    steps: {
      title: 'Three Steps To A Full <em>Pipeline</em>',
      items: [
        ['Audit your audience', 'We go through your numbers and your best customers to find the angles and audiences worth spending on.'],
        ['Build and launch creative', 'We write, design and launch ads made for each placement, so they look right wherever they show up.'],
        ['Scale what works', 'We put more behind the winners, switch off the duds and keep pushing your cost-per-lead down as spend grows.'],
      ],
    },
    why: 'Plenty of agencies can set up an ad. Keeping it working is the hard part, because creative wears out fast on Meta. We keep new ads coming, check the numbers every week and spend your budget like it’s coming out of our own pocket. You can see all of it in your account, any time.',
    faqIntro: 'A few things worth knowing before you run Meta ads with us. If your question isn’t here, flick us an email.',
    faqs: [
      ['How much should I budget for Meta ads?', 'It depends on your goals and margins. For a lot of service businesses, a few thousand dollars a month in ad spend (plus our management fee) is a sensible place to start. We’ll run realistic numbers for your business in the free growth audit, before you spend a cent.'],
      ['How quickly will I see results from Facebook and Instagram ads?', 'You’ll usually see early signals in the first couple of weeks while we test creative and audiences. It normally takes two to three months for an account to settle into a cost-per-lead you can rely on and scale.'],
      ['I’ve tried boosting posts and it didn’t work. Why is this different?', 'A boost asks Meta for likes and comments, so that’s what you get. We set campaigns up to chase enquiries instead, with conversion tracking, properly tested creative and audiences built from your customer data.'],
      ['Do you handle the creative, or do I need to supply it?', 'We handle it. We write, design and edit ads to suit each placement. If you’ve got photos, video or brand assets, send them over and we’ll put them to good use.'],
      ['What do you need from me to get started?', 'Not a lot. Admin access to your Facebook page and ad account (we’ll walk you through it), any photos or video you’re happy for us to use, and a quick chat about who your best customers are and what a good lead looks like. We set up the tracking and take it from there.'],
    ],
    audit: ['Where your ad money is going to waste right now', 'Your three biggest growth opportunities on Meta', 'A realistic number for what’s possible'],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    tab: 'Google Ads',
    label: 'Google Ads: Paid Search',
    icon: 'google',
    card: {
      title: 'Pour High-Intent Traffic Into The Funnel',
      text: 'We show up when people are already searching for what you do, and turn those searches into calls and enquiries.',
    },
    index: 'Search, Performance Max and local campaigns that put you in front of people the moment they go looking.',
    hero: {
      title: 'Be There The Moment <em>They Search</em>',
      text: 'Someone typing “emergency plumber near me” or “best physio in Fremantle” is ready to book. We make sure your business is the one they find, at a cost-per-lead that still leaves you making money.',
    },
    problem: {
      title: 'Google’s Happy To Take Your <em>Money</em>',
      text: 'Google Ads is brutal when it’s run badly. Broad keywords, weak landing pages and no conversion tracking add up to a very generous donation to Google. A lot of businesses either give up after burning through a budget, or keep paying an agency that can’t tell them which clicks became customers. Meanwhile, every wasted click is someone your competitor picked up instead.',
    },
    solution: {
      title: 'We Turn Searches Into <em>Sales</em>',
      text: 'We build campaigns around the searches your buyers are already making. Tight keyword lists, sensible campaign structure and landing pages that convert. Then we keep tuning all of it against cost-per-lead, because that’s the number that pays your bills.',
    },
    steps: {
      title: 'Three Steps To High-Intent <em>Leads</em>',
      items: [
        ['Map your keywords', 'We find the searches your best customers make, and skip the ones that only cost you money.'],
        ['Structure the campaigns', 'We build tidy, logical campaigns so every dollar is easy to track and hard to waste.'],
        ['Optimise for cost-per-lead', 'We tune bids, ads and landing pages until each lead costs as little as it profitably can.'],
      ],
    },
    why: 'Anyone can spend your money on Google. We’re here to make it come back with friends. You’ll see every search term we pay for, the leads it brought in and every change we make. If something isn’t pulling its weight, we switch it off and tell you why.',
    faqIntro: 'Good questions to ask before anyone touches your Google Ads account. If yours isn’t covered, send it through.',
    faqs: [
      ['Isn’t Google Ads really expensive?', 'Only when it’s run badly. Done properly, it’s one of the most profitable channels around, because you’re only paying to reach people who are already searching for what you do.'],
      ['How is this different from what I’m doing now?', 'We start with conversion tracking, so we know which clicks turn into customers. Then we rebuild your campaigns around buyer intent and cut whatever spend isn’t paying its way.'],
      ['How long until it works?', 'Search campaigns can start bringing in enquiries within days of going live. The first month is mostly about learning and tightening things up, and cost-per-lead should keep improving from there.'],
      ['Will I know what’s working?', 'Always. You get live access to your account and dashboard, plus a short weekly update in plain English on what we changed and why.'],
    ],
    audit: ['Where your ad spend is leaking right now', 'Your three biggest opportunities in paid search', 'A realistic number for what your cost-per-lead could be'],
  },
  {
    slug: 'web-design',
    name: 'Website Design & Development',
    tab: 'Websites',
    label: 'Website Design & Development',
    icon: 'web',
    card: {
      title: 'A Site That Earns Its Keep',
      text: 'We design and build fast, sharp websites that turn visitors into enquiries.',
    },
    index: 'Fast, good-looking websites that make it easy for visitors to pick up the phone.',
    hero: {
      title: 'A Website That <em>Actually Sells</em>',
      text: 'A pretty site that doesn’t convert is just an expensive business card. We build fast, sharp websites that get visitors picking up the phone and filling in the form.',
    },
    problem: {
      title: 'Your Website Might Be Your Biggest <em>Leak</em>',
      text: 'You’re paying for ads and SEO to get people to your site. Then a slow page, a confusing layout or a buried button sends them right back out. Plenty of sites are built to look good in a portfolio, with very little thought for whether anyone enquires. Every visitor who lands and leaves is money you’ve already spent, melting away at the final step.',
    },
    solution: {
      title: 'We Build Sites That <em>Convert</em>',
      text: 'Every site we build is designed to turn visitors into enquiries. Pages load fast, the layout leads people to the next step, the copy does some selling, and it works just as well on a phone as on a laptop. It’ll look great too, because that matters. We just make sure good looks never get in the way of the phone ringing.',
    },
    steps: {
      title: 'Three Steps To A Site That <em>Works</em>',
      items: [
        ['Plan and wireframe', 'We map the path from landing to enquiry before we design a single pixel.'],
        ['Design and build', 'We turn the plan into a fast, on-brand site that nudges people toward getting in touch.'],
        ['Launch and optimise', 'We go live, watch how people use it and keep improving whatever brings in enquiries.'],
      ],
    },
    why: 'A lot of web agencies hand over a nice site and vanish. We stick around. Because we run ads and SEO too, we build your site to help those channels, and we keep tweaking it once real visitors start coming through. It’s all one team, so nothing gets lost between the ads and the website.',
    faqIntro: 'The practical stuff, before we build your site. If something’s not covered, ask away.',
    faqs: [
      ['How long does a website take?', 'Plan on four to eight weeks for most builds, depending on how many pages you need and how much content we’re writing. You’ll get a clear timeline before we start.'],
      ['Will I be able to update it myself?', 'Yes. We build on platforms that make it easy to change text, images and pages yourself, and we’ll show you how before handover.'],
      ['Do you do copy too?', 'We do. Good copy is half of what makes a site convert, so we write it alongside the design instead of cramming words into a template at the end.'],
      ['What happens after launch?', 'We watch how real visitors use the site, test changes and keep lifting your conversion rate. Ongoing support is there whenever you need it.'],
    ],
    // Replaces the site-wide results band (src/config.mjs) on this page.
    results: [
      { value: '100%', count: true, label: 'Ownership of your site, design files and content' }, // TODO: confirm
      { value: 'Mobile', label: 'Built and tested on phones first, then desktop' },
      { value: 'Weekly', label: 'Progress updates from kickoff to launch' },
      { value: 'Tracked', label: 'Every enquiry form and call button, from launch day' }, // TODO: confirm
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
      text: 'We keep in touch with your leads and past customers, with emails that sound like you and bring them back when they’re ready.',
    },
    index: 'Automated flows and regular sends that turn one-off customers into regulars.',
    hero: {
      title: 'The Channel That <em>Pays For Itself</em>',
      text: 'Your email list is the one audience you own outright. We turn it into a proper sales channel, with automated emails that keep working in the background while you get on with the job.',
    },
    problem: {
      title: 'You’re Sitting On Money And Not <em>Opening It</em>',
      text: 'A lot of businesses have an email list just sitting in the freezer. Maybe a newsletter goes out when someone remembers. That same list could be welcoming new leads, following up quotes and bringing old customers back, all on autopilot. Instead, past customers forget you and warm leads drift off to someone else. It’s the cheapest channel you’ve got.',
    },
    solution: {
      title: 'We Turn Your List Into <em>Revenue</em>',
      text: 'We build email systems that do a lot of the selling for you. Welcome emails for new subscribers, follow-ups for leads who haven’t booked yet, win-backs for customers you haven’t seen in a while, plus regular sends so you stay front of mind. You own the list, so there’s no paying per click. Set it up properly once and it keeps earning.',
    },
    steps: {
      title: 'Three Steps To Automated <em>Revenue</em>',
      items: [
        ['Map the flows', 'We work out which automated emails will make you the most money, soonest.'],
        ['Write and automate', 'We write the emails and set up the automation so it runs without you lifting a finger.'],
        ['Test and refine', 'We test subject lines, timing and offers, and keep whatever lifts the numbers.'],
      ],
    },
    why: 'Bad email is spam. Good email feels like a note from a business you’re glad to hear from. We write in your voice, keep it short and only send when there’s something worth saying. You’ll see which emails bring in bookings and which ones we’re retiring.',
    faqIntro: 'Worth knowing before we switch your list on. Anything else, just ask.',
    faqs: [
      ['I don’t have a big list. Is it still worth it?', 'Yes. A small list that hears from you regularly often beats a big one that’s been ignored. We’ll help you grow it as we go, too.'],
      ['Won’t I annoy people?', 'Not if every email earns its place. We send things people want, at a sensible pace, and keep a close eye on engagement so nobody gets buried.'],
      ['How is this different from a newsletter?', 'A newsletter goes to everyone at once. Flows go to one person at the right moment, triggered by something they’ve done, like signing up or asking for a quote. That timing is why they convert so much better.'],
      ['How soon does it pay off?', 'Welcome and win-back flows can start earning within weeks of switching on, and they keep running in the background from then on.'],
    ],
    audit: ['The revenue your list is leaving on the table right now', 'The three flows that would earn you the most, fastest', 'A realistic number for what email could add to your bottom line'],
  },
  {
    slug: 'strategy',
    name: 'Strategy & Planning',
    tab: 'Strategy',
    label: 'Strategy & Planning',
    icon: 'strategy',
    card: {
      title: 'The Thinking That Ties It All Together',
      text: 'We map out the plan that connects every channel, so all your marketing pulls in the same direction.',
    },
    index: 'Positioning, channel mix and budgets, worked out properly so you know where to spend and what to expect.',
    hero: {
      title: 'Know Exactly Where <em>The Growth Is</em>',
      text: 'Spending on marketing without a plan is guessing with a budget. We build you a clear, costed roadmap for your next stage of growth, so every dollar has a job to do.',
    },
    problem: {
      title: 'Busy Isn’t The Same As <em>Growing</em>',
      text: 'Plenty of businesses are running ads, posting content and sending the odd email, and still not really growing. It feels like progress. Without a plan tying it together, it’s mostly motion. You end up spread thin across channels that don’t talk to each other, with a bit of every flavour and no idea which one’s selling.',
    },
    solution: {
      title: 'We Build The <em>Roadmap</em>',
      text: 'We take a hard look at your business, your market and your numbers, then build a growth plan you can follow. Which channels to back, how much to spend, what to expect and in what order. Run it yourself or hand it to us. Either way, you’ll have a costed, prioritised roadmap instead of a hunch.',
    },
    steps: {
      title: 'Three Steps To A Clear <em>Plan</em>',
      items: [
        ['Diagnose the business', 'We dig into your numbers, your market and what’s working now, so the plan starts from reality.'],
        ['Model the opportunities', 'We work out where the growth is and what it’ll take to get there.'],
        ['Build the roadmap', 'We hand you a costed, prioritised plan you can start on straight away.'],
      ],
    },
    why: 'A lot of strategy decks end up as expensive PDFs nobody opens again. Ours are written by the same people who run the campaigns, so every recommendation has to hold up in the real world. We’ll tell you straight where the growth is, even when it’s not what you were hoping to hear.',
    faqIntro: 'Good to know before we map out your growth. If we’ve missed something, ask.',
    faqs: [
      ['Can you run the plan for us as well?', 'Yes. We built it, so we can get moving quickly, and we’ll quote for that once you’ve seen the plan. If you’d rather keep it in-house, it’s written so your team can pick it up and go.'],
      ['How is this different from the free growth audit?', 'The audit shows where you’re losing leads and the quickest fixes. Strategy goes a lot deeper, into your market, positioning, channel mix, budgets and forecasts, and pulls it all into a full plan.'],
      ['I’m a small business. Is this overkill?', 'Not at all. A smaller budget has less room for waste, so knowing exactly where to spend matters even more. We scale the work to the size of the business.'],
      ['What will I actually walk away with?', 'A costed, prioritised roadmap. It covers which channels to back, what to spend, what to expect and in what order, with our reasoning behind every call.'],
    ],
    // Replaces the site-wide results band (src/config.mjs) on this page.
    results: [
      { value: '100%', count: true, label: 'The roadmap, models and research are yours to keep' },
      { value: 'Costed', label: 'Every recommendation comes with a budget attached' },
      { value: 'Ranked', label: 'Opportunities in priority order, so you know what to do first' },
      { value: 'Live', label: 'Walkthrough of the whole plan with the people who built it' }, // TODO: confirm
    ],
    audit: ['Where your current approach is holding you back', 'Your three biggest growth opportunities, ranked', 'A clear picture of what your next stage could look like'],
  }
];

// The home page carousel opens on the first service (AI Search).
export const homeServiceStart = 0;
