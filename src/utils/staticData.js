import { v4 as uuid } from 'uuid';

import artistLynx from '../assets/mockups/artist_lynx.png';
import bluesuitLynx from '../assets/mockups/bluesuit_lynx.png';
import cyborgLynx from '../assets/mockups/cyborg_lynx.png';
import greaserLynx from '../assets/mockups/greaser_lynx.png';
import gumLynx from '../assets/mockups/gum_lynx.png';
import labLynx from '../assets/mockups/lab_lynx.png';
import lebronLynx from '../assets/mockups/lebron_lynx.png';
import skiLynx from '../assets/mockups/ski_lynx.png';
import spaceLynx from '../assets/mockups/space_lynx.png';
import tuxLynx from '../assets/mockups/tux_lynx.png';

export const imageSet = [
  artistLynx,
  bluesuitLynx,
  cyborgLynx,
  greaserLynx,
  gumLynx,
  labLynx,
  lebronLynx,
  skiLynx,
  spaceLynx,
  tuxLynx,
];

export const coverImages = [
  {
    src: artistLynx,
  },
  {
    src: bluesuitLynx,
  },
  {
    src: cyborgLynx,
  },
  {
    src: greaserLynx,
  },
  {
    src: gumLynx,
  },
  {
    src: labLynx,
  },
  {
    src: lebronLynx,
  },
  {
    src: skiLynx,
  },
  {
    src: spaceLynx,
  },
  {
    src: tuxLynx,
  },
  {
    src: artistLynx,
  },
  {
    src: bluesuitLynx,
  },
  {
    src: cyborgLynx,
  },
];

export const questions = [
  {
    title: 'What is the Billionaire Lynx club?',
    description:
      'The Billionaire Lynx Club is an NFT collection of 10,000 randomly generated lynx, out of the Billionaire Lynx Club, with proof of ownership stored on the Ethereum network, as an ERC 721 mint.',
  },
  {
    title: 'Why did we choose the name Billionaire Lynx Club?',
    description: `The term billionaire is most often associated with a monetary amount but for us, billionaire is a mindset. Ambitions that for most may seem unachievable but for us, something we strive for every day.
    In mythology and folklore, the lynx is considered one of the most powerful spirit animals due to their ability to see things others cannot. Along with this, they seek personal freedom at the highest level and is vital to their overall harmony. We as lynx are able to see opportunities where others may not and desire personal freedom as a token of success.`,
  },
  {
    title: 'Why did we create this community?',
    description:
      "We created this community because we know how tough it is to find other like-minded people who want to support your goals. On top of this, one of the biggest factors in a persons success is the people they surround themselves with. Even if you're still on your journey this will be a place to surround yourself with people who have achieved their goals and others who are also still on their path. We want our member to network with each-other as much as possible.",
  },
  {
    title: 'What can I do with my Lynx?',
    description:
      'Acquiring one of them will give you access to an ever-growing community of investors, entrepreneurs, musicians, content creators, real estate professionals, e-commerce experts and more! As they say, "your network is your net worth." Owning one will also give you exclusive access to investment opportunities through our DAO. Your Lynx serves as your ticket to everything.',
  },
  {
    title: 'How can I get a Billionaire Lynx?',
    description:
      'You will be able to mint Billionaire Lynxes on our website billionairelynxclub.com or directly through the smart contract via our discord server. Our mint is scheduled for early Q1 of 2022, but if you miss out on that they will be available for purchase on Opensea.',
  },
  {
    title: 'How much will it cost to buy one?',
    description:
      'Each Lynx will be minted at 0.12 ETH + Gas and will be limited to 5 per transaction. Mint day is planned for early Q1 of 2022 and a more specific date will be announced soon.',
  },
  {
    title: 'Will there be a pre-sale?',
    description:
      'Yes, there will be pre-sale for whitelisted members. There is a max of 2 Lynxes for whitelist members. The whitelist supply will be 2000.',
  },
  {
    title: 'How are we different?',
    description: `This is not a project just built off celebrity endorsement/influencer pumps, we are building a brand that is here to stay. Something that members can be proud to say they are a part of.
    We are a team that truly prides ourselves on delivering a quality product. We are a group of entrepreneurs ourselves and who know that the road to success can be lonely at times. This community is being formed to directly solve that issue. Together we can help each other in achieving their biggest dreams.`,
  },
  {
    title: 'What will the charity fund be used for?',
    description:
      'Our team believes that everyone should have the opportunity to go out and achieve their dreams. As we know, this is not always the case and some people just need an extra boost. To do so, we are going to donate to existing charities and also potentially create our own. Both with the goal to help young entrepreneurs go after their dreams. By being a part of the Billionaire Lynx Club, you are directly impacting the lives of others.',
  },
  {
    title: 'What will the community fund be used for?',
    description:
      "The community fund will be used for promotions, future merch development, partnerships, giveaways, and building value for the community. We will also help support some of our own members' projects and innovations through a shark tank style event. We are also very open to hearing suggestions from our community.",
  },
  {
    title: 'Are any tokens withheld from the Sale?',
    description:
      'Yes, 300 will be help for the team, giveaways, marketing and brand awareness.',
  },
  {
    title: 'Why do we need royalties?',
    description:
      'To start, our royalties will be set at 10%. We have very ambitious goals that will require the capital to take on such ventures. These ventures have the sole purpose of strengthening this community and providing as much value to our holders as possible.',
  },
];

export const roadmapData = [
  {
    id: uuid(),
    title: 'Welcome, Bilionaire Lynx',
    description:
      'Welcome to the Billionaire Lynx Club! You are now part of an exclusive club of other like-minded lynx who desire to help each other succeed.',
    checkpoint: '10%',
    halfWhiteBackground: false,
    whiteBackground: false,
  },
  {
    id: uuid(),
    title: 'Worldwide Recognition',
    description:
      'The BLC will use funds from our pre-sale to invest in promotional campaigns to spread brand awareness and drive top tier talent to our project. We will also be using these funds to purchase a rarity.tools ranking for the project.',
    checkpoint: '20%',
    halfWhiteBackground: false,
    whiteBackground: false,
  },
  {
    id: uuid(),
    title: 'Billionaire Lynx Charity',
    description:
      '$20,000 donation fund will be established and as a community, we will vote on the charity of choice to partner with. The charities we will be selecting will have the mission to help promote entrepreneurship and creative ventures amongst our youth.',
    checkpoint: '40%',
    halfWhiteBackground: false,
    whiteBackground: false,
  },
  {
    id: uuid(),
    title: 'Billionaire Lynx Fund',
    description:
      'We will set up the BLC community fund and deposit $50,000 for ongoing project      developments, marketing campaigns, merchandise, and more.',
    checkpoint: '60%',
    halfWhiteBackground: false,
    whiteBackground: false,
  },
  {
    id: uuid(),
    title: 'Billionaire Lynx Merch',
    description:
      'Exclusive member-only merch store begins construction. We want this merchandise to make our community proud to wear it.',
    checkpoint: '80%',
    halfWhiteBackground: false,
    whiteBackground: false,
  },
  {
    id: uuid(),
    title: 'Holders Rewarded',
    description:
      'Exclusive BLC giveaways/airdrops that include sporting/music tickets, laptops, phones, NFTs, and more! We want you to experience amazing events firsthand and to be given the tools to go after your creative ventures.',
    checkpoint: '90%',
    halfWhiteBackground: true,
    whiteBackground: false,
  },
  {
    id: uuid(),
    title: 'Sold Out',
    description:
      'Another $30,000 worth of funds will be deposited to the BLC fund, which is set for ongoing project developments, marketing campaigns, merchandise, and more.',
    checkpoint: '100%',
    halfWhiteBackground: false,
    whiteBackground: true,
  },
];

export const developmentRoadmapData = [
  {
    id: uuid(),
    title: 'BLC DAO  ',
    description:
      'The Billionaire Lynx DAO (decentralized autonomous organization) is formed with our native token $LYNX. This DAO will be used for a multitude of things starting with the fractionalization of blue-chip NFTs (using fractional.art) that we as a community we will vote on as a whole. This will give members of our community the ability to make investments that otherwise they would not be able to make on their own. Future plans of our DAO will include the opportunity to invest in both physical and digital assets including real estate, sports cards, musicians, creators, and business opportunities. This will be done mainly through board meetings and shark-tank style event where people will come and pitch our community.',
  },
  {
    id: uuid(),
    title: 'In-Person Events',
    description:
      'The most active members of our community will be invited to a private in-person event (Location to be announced). We also plan to host more in person events if demand is high. (Your token serves as your admission). We have a lot of future plans that together as a community we will vote on.',
  },
  {
    id: uuid(),
    title: 'Guest Speakers',
    description:
      'We plan to have many influential people come and speak directly to our community. Speakers will include but are not limited to C-Suite executives, real estate investors, e-commerce experts, musicians and more. These speakers will be able to offer invaluable advice and guidance to our community. We also plan on having the community vote on desired guests.',
  },
  {
    id: uuid(),
    title: 'Billionaire Lynx Concierge',
    description:
      'As a member of the Billionaire Lynx Club, you get direct access to the Billionaire Lynx Concierge. A concierge service that prides itself on securing assets to unique experiences for members. This includes but is not limited to sporting events, concerts, luxury items, VIP events, restaurant reservations, vacations and more.',
  },
  {
    id: uuid(),
    title: 'Metaverse Development',
    description: `Although we plan on having in-person events, we also plan on developing events in the Metaverse through virtual worlds like The Sandbox and Decentraland. Events will have stages where people will come and speak, along with networking events and special musical guests. There is also potential for your Lynx to be your avatar. Consider this the “Metaverse Mastermind.”

      We also have plans to develop a play-to-earn entrepreneur style game where your NFT will be serve as your character in the game. By doing so we hope to create another stream of revenue for our holders.`,
  },
  {
    id: uuid(),
    title: 'Community Competitions',
    description:
      'We will have competitions within our community with special prices for the winners. With this we hope to build a greater sense of community.',
  },
];

export const teamMembers = [
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: artistLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: bluesuitLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: cyborgLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: greaserLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: gumLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: labLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: lebronLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: skiLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: spaceLynx,
  },
  {
    id: uuid(),
    name: 'Rikong',
    role: 'CO-FOUNDER',
    image: tuxLynx,
  },
];
