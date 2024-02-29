import { accordingIcons } from "@/lib/icons";
type AccordionItem = {
  title: string;
  icon: JSX.Element;
  icon2?: JSX.Element;
  content: string | JSX.Element;
};

export const AccordingItems: AccordionItem[] = [
  {
    title: "Sportsbook",
    icon: accordingIcons.roam2,
    content:
      "Dive into the thrilling world of sports betting with Sharkroll, where you can bet on the unpredictable, just like a shark sensing its prey. Be among the first to experience the rush with our initial focus on soccer and basketball, the titans of the sports world. Whether it's the global fervor of a soccer match or the dynamic play of a basketball game, place your bets and feel the adrenaline surge.",
  },
  {
    title: "Prediction Systems",
    icon: accordingIcons.roam3,
    content: `Quick, cunning, and precise - place your bets on Crypto, Forex or on Indexes like US500 and Nasdaq in a dynamic market environment. Predict whether the price (e.g. BTC/USDT) will rise (go "up") or fall (go "down") after a certain period.`,
  },
  {
    title: "NFT Marketplace - Spin & Win",
    icon: accordingIcons.roam4,
    content:
      "Besides general marketplace features, you can create your own Spin Game andearn 85% of the fees of it.",
  },
  {
    title: "SharkSwap - Mini DEX",
    icon: accordingIcons.roam5,
    content:
      "Provide liquidity to the SharkSwap DEX pool or create your own pools for various token pairs, and receive a share of the transaction fees.",
  },
  {
    title: "Lucky Loot Day",
    icon: accordingIcons.roam6,
    content:
      "Every day, a chance to win 0.01% of the casino's total daily revenue.",
  },
  {
    title: "Elite Gamers Club",
    icon: accordingIcons.roam7,
    content: (
      <div className="flex flex-col gap-10">
        <p className="font-light text-[20px]">
          VIP Tier Based Subscription only for those who dare to rule the
          depths.
        </p>
        <h1 className="text-[#69EAFF] text-[24px] font-bold">Key Features</h1>
        <p className="text-[20px] font-light">
          <span className="text-[#69EAFF] "> Customizable Avatars:</span>{" "}
          Provide an array of unique outfits and accessories for avatars,
          exclusive to VIP members.
        </p>
        <p className="text-[20px] font-light">
          <span className="text-[#69EAFF] "> Weekly Jackpot Draw:</span> As a
          VIP member, you automatically enter in a weekly draw where 2.5% of all
          subscription fees form a lucrative jackpot. The most active user of
          the week wins, turning your regular engagement into a potential
          treasure trove.{" "}
        </p>
        <p className="text-[20px] font-light">
          <span className="text-[#69EAFF] "> Monthly NFT Drops:</span> Engage in
          the ecosystem and be part of monthly NFT drops, where 5% of
          subscription fees go towards creating unique digital collectibles that
          offer additional perks and bonuses.
        </p>
        <p className="text-[20px] font-light">
          <span className="text-[#69EAFF] ">Token Drops:</span> Look forward to
          monthly token drops, where another 5% of subscription fees fund this
          bounty. These tokens aren't just currency; they're keys to a kingdom
          of reduced fees, higher payouts, and special access.
        </p>
        <p className="text-[20px] font-light">
          <span className="text-[#69EAFF] "> VIP Community Access:</span> Create
          a VIP-only forum or chat group for members to share strategies,
          experiences, and network.
        </p>
      </div>
    ),
  },
  {
    title: "Daily, Weekly, Monthly Bonuses",
    icon: accordingIcons.roam8,
    content: (
      <div className="flex flex-col gap-10">
        <p className="font-light text-[20px]">
          Step into the Sharkroll ecosystem, where your journey is not just
          about playing games; it's about navigating a sea of meticulously
          crafted bonuses designed to enrich your experience at every turn.
        </p>
        <h1 className="text-[#69EAFF] text-[20px] font-bold">
          Daily Bonus System - A Daily Dose of Delight
        </h1>
        <p className="text-[20px] font-light">
          Login Bonus: Each day you enter the Sharkroll waters, you're greeted
          with rewards. From free spins on select slot games to bonus credits or
          tokens, every login is a chance to net a freshbounty.
        </p>
        <p className="text-[20px] font-light">
          Random Daily Prize Draw: Stay active and engaged, and find yourself
          entered into daily draws where active users can win additional
          surprises, keeping the excitement just a ripple away.{" "}
        </p>
        <h1 className="text-[#69EAFF] text-[20px] font-bold">
          Weekly Bonus System - Seven Days of Splendor
        </h1>

        <p className="text-[20px] font-light">
          Weekly Streak Bonus: Commit to a week of consecutive logins and watch
          your rewards escalate. More than just daily bonuses, this streak
          brings you increased free spins, higher-value credits, and entry into
          exclusive weekly prize draws.
        </p>
        <p className="text-[20px] font-light">
          Weekly Tournament Participation: Dive into at least one tournament
          during the week and unlock access to a special tournament pool. This
          isn't just about competition; it's about accessing a sea of extra
          rewards.
        </p>
        <h1 className="text-[#69EAFF] text-[20px] font-bold">
          Monthly Bonus System - A Month of Marvels
        </h1>

        <p className="text-[20px] font-light">
          Monthly Loyalty Bonus: Show your dedication with daily logins
          throughout the month and be rewarded handsomely. This could be a
          high-value free bet, a significant number of credits, or entry into a
          mega prize draw - the treasures are as vast as the ocean.
        </p>
        <p className="text-[20px] font-light">
          Monthly Achievement System: Complete a set of monthly challenges or
          objectives and receive exclusive rewards. From custom avatars to
          access to high-stake games, each achievement is a step towards greater
          glory and rewards.
        </p>
      </div>
    ),
  },
  {
    title: "Ranking System for Rakebacks",
    icon: accordingIcons.roam9,
    content: (
      <div className="flex flex-col gap-10">
        <p className="font-light text-[20px]">
          Climb the tiers from a Bronze Shark to the elusive Platinum Predator.
          - Tiered Rakeback: Your every wager, tournament participation, and
          sportsbook engagement earns you points. Climb from Bronze to Platinum
          and watch as your rakeback percentage rises, turning every game into a
          more rewarding experience.
        </p>

        <h1 className="text-[#69EAFF] text-[20px] font-bold">Tier Levels</h1>

        <h1 className="text-[24px] font-bold ">1. Bronze Tier</h1>
        <p className="text-[20px] font-light">
          Volume Requirement:{" "}
          <span className="text-[#69EAFF] font-bold">$100,000 - $249,999</span>
          <br></br>
          Rakeback Percentage: 1%
        </p>

        <h1 className="text-[24px] font-bold ">2. Silver Tier</h1>
        <p className="text-[20px] font-light">
          Volume Requirement:{" "}
          <span className="text-[#69EAFF] font-bold">$250,000 - $499,999</span>
          <br></br>
          Rakeback Percentage: 3%
        </p>

        <h1 className="text-[24px] font-bold ">3. Gold Tier</h1>
        <p className="text-[20px] font-light">
          Volume Requirement:{" "}
          <span className="text-[#69EAFF] font-bold">$500,000 - $999,999</span>
          <br></br>
          Rakeback Percentage: 4%
        </p>

        <h1 className="text-[24px] font-bold ">4. Platinum Tier</h1>
        <p className="text-[20px] font-light">
          Volume Requirement:{" "}
          <span className="text-[#69EAFF] font-bold">$1,000,000 and above</span>
          <br></br>
          Rakeback Percentage: 5%
        </p>

        <h1 className="text-[#69EAFF] text-[24px] font-bold">
          Special Rakeback Bonuses
        </h1>
        <ul className="text-[20px] font-light">
          <li>
            {" "}
            VIP Subscription: VIP members (Silver, Gold, Platinum tiers) receive
            additional rakeback bonuses.
          </li>
          <li>
            {" "}
            High-Stake Games: Higher rakeback percentages for high-stake games
            or trading competitions.
          </li>
          <li>
            {" "}
            Special Events: During tournaments or seasonal challenges, increased
            rakeback rates or bonus points.
          </li>
        </ul>

        <h1 className="text-[#69EAFF] text-[24px] font-bold">
          Rakeback Redemption
        </h1>
        <ul className="text-[20px] font-light">
          <li>
            {" "}
            Rakebacks can be redeemed as credits for more play, direct cashback,
            or special rewards like NFTs, token drops, or exclusive access to
            events.
          </li>
          <li> A minimum threshold of points is required for redemption.</li>
        </ul>

        <h1 className="text-[#69EAFF] text-[24px] font-bold">
          Activity Tracking and Transparency
        </h1>
        <ul className="text-[20px] font-light">
          <li>
            {" "}
            A transparent system to track player activity and rakeback earnings.
          </li>
          <li>
            {" "}
            Regular updates and detailed reports for players on their rakeback
            status.
          </li>
        </ul>

        <p className="text-[20px] font-light">
          In the Sharkroll ecosystem, the $SKR token and VIP subscriptions are
          your vessels through a sea of bonuses. With daily, weekly, and monthly
          treasures waiting to be claimed, every moment you spend with us is a
          step towards a bounty of rewards. Are you ready to navigate these
          rewarding waters and claim the riches that await?
        </p>
      </div>
    ),
  },
];

export const GeneralAccordingItems: AccordionItem[] = [
  {
    title: "What is Sharkroll Casino?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Sharkroll Casino is an online gaming and betting platform offering a wide range of casino
      games, live betting, tournaments, prediction systems, and a unique NFT marketplace. Our
      aim is to provide a fun, fair, and secure gaming environment for all users.`,
  },
  {
    title: "How do I sign up?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Simply click the ‘Sign Up’ button on our homepage and follow the instructions. You’ll
      need to provide some basic information and verify your email to get started.`,
  },
  {
    title: "Is Sharkroll Casino legal and secure?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Yes, Sharkroll Casino operates under strict regulatory standards and employs advanced
      security measures to protect user data and transactions. Ensure online gambling is legal in
      your jurisdiction before participating.`,
  },
];

export const AccountAccordingItems: AccordionItem[] = [
  {
    title: "What deposit methods are available?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `We accept a variety of payment methods including cryptocurrencies, credit/debit cards,
      and e-wallets. For a full list, please visit the ‘Payments’ section of our website.`,
  },
  {
    title: "How do I withdraw my winnings?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `You can withdraw your winnings through the ‘My Account’ section. Select ‘Withdraw’ choose your preferred method, and follow the instructions. Withdrawal times may vary
      based on the method.`,
  },
  {
    title: "Are there any fees for depositing or withdrawing?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Sharkroll Casino doesn’t charge any fees for depositing. However, there might be small
      fees for withdrawals depending on the method and amount.`,
  },
];

export const GamesAccordingItems: AccordionItem[] = [
  {
    title: "What types of games are available?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `We offer a wide range of games including slots, table games, live dealer games, unique
      Sharkroll originals, and more. Check our ‘Games’ section for the full list.`,
  },
  {
    title: "How do the prediction markets work?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `In our prediction markets, you can bet on the future price of certain assets like
      cryptocurrencies. If your prediction is correct, you win a portion of the total bet pool. Read
      more in our ‘Prediction System’ guide.`,
  },
  {
    title: "Can I participate in tournaments?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Yes! We host various tournaments with different games and prize structures. Check the
      ’Tournaments’ section for active, upcoming, and closed tournaments.`,
  },
];

export const BonusesAccordingItems: AccordionItem[] = [
  {
    title: "Do you offer any welcome bonuses?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Yes, we offer a welcome bonus to new users. The current offer details can be found on
      our ‘Promotions’ page. Terms and conditions apply.`,
  },
  {
    title: "How do I become a VIP member?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Our VIP program is open to all users. You can join by subscribing to one of our VIP tiers.
      Each tier offers different benefits and rewards.`,
  },
];

export const SupportAccordingItems: AccordionItem[] = [
  {
    title: "I’m experiencing issues. How can I get help?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `Our customer support team is available 24/7. You can reach us via live chat, email, or
      phone. Visit the ‘Support&’ section for contact details.`,
  },
  {
    title: "Where can I find the rules and regulations?",
    icon: accordingIcons.vector,
    icon2: accordingIcons.blueVector,
    content: `All rules and regulations are available in the ‘Terms and Conditions’ section at the
      bottom of our website. We recommend all users read these thoroughly.`,
  },
];
