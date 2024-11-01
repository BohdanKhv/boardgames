const commonGames = [
    {
        name: 'Among Us',
        description: 'Among Us is a multiplayer online game developed and published by American game studio InnerSloth. The game was released in 2018 but gained a massive following in 2020 due to the COVID-19 pandemic.',
    }
]

const categoriesEnum = [
    "Abstract Strategy",
    "Action / Dexterity",
    "Adventure",
    "Age of Reason",
    "American Civil War",
    "American Indian Wars",
    "American Revolutionary War",
    "American West",
    "Ancient",
    "Animals",
    "Arabian",
    "Aviation / Flight",
    "Bluffing",
    "Book",
    "Card Game",
    "Children's Game",
    "City Building",
    "Civil War",
    "Civilization",
    "Collectible Components",
    "Comic Book / Strip",
    "Deduction",
    "Dice",
    "Economic",
    "Educational",
    "Electronic",
    "Environmental",
    "Expansion for Base-game",
    "Exploration",
    "Fan Expansion",
    "Fantasy",
    "Farming",
    "Fighting",
    "Game System",
    "Horror",
    "Humor",
    "Industry / Manufacturing",
    "Korean War",
    "Mafia",
    "Math",
    "Mature / Adult",
    "Maze",
    "Medical",
    "Medieval",
    "Memory",
    "Miniatures",
    "Modern Warfare",
    "Movies / TV / Radio theme",
    "Murder/Mystery",
    "Music",
    "Mythology",
    "Napoleonic",
    "Nautical",
    "Negotiation",
    "Novel-based",
    "Number",
    "Party Game",
    "Pike and Shot",
    "Pirates",
    "Political",
    "Post-Napoleonic",
    "Prehistoric",
    "Print & Play",
    "Puzzle",
    "Racing",
    "Real-time",
    "Religious",
    "Renaissance",
    "Science Fiction",
    "Space Exploration",
    "Spies/Secret Agents",
    "Sports",
    "Territory Building",
    "Trains",
    "Transportation",
    "Travel",
    "Trivia",
    "Video Game Theme",
    "Vietnam War",
    "Wargame",
    "Word Game",
    "World War I",
    "World War II",
    "Zombies",
]

const mechanicsEnum = [
    "Acting",
    "Action Drafting",
    "Action Points",
    "Action Queue",
    "Action Retrieval",
    "Action Timer",
    "Action/Event",
    "Advantage Token",
    "Alliances",
    "Area Majority / Influence",
    "Area Movement",
    "Area-Impulse",
    "Auction Compensation",
    "Auction: Dexterity",
    "Auction: Dutch",
    "Auction: Dutch Priority",
    "Auction: English",
    "Auction: Fixed Placement",
    "Auction: Multiple Lot",
    "Auction: Once Around",
    "Auction: Sealed Bid",
    "Auction: Turn Order Until Pass",
    "Auction/Bidding",
    "Automatic Resource Growth",
    "Betting and Bluffing",
    "Bias",
    "Bids As Wagers",
    "Bingo",
    "Bribery",
    "Campaign / Battle Card Driven",
    "Card Play Conflict Resolution",
    "Catch the Leader",
    "Chaining",
    "Chit-Pull System",
    "Closed Drafting",
    "Closed Economy Auction",
    "Command Cards",
    "Commodity Speculation",
    "Communication Limits",
    "Connections",
    "Constrained Bidding",
    "Contracts",
    "Cooperative Game",
    "Crayon Rail System",
    "Critical Hits and Failures",
    "Cube Tower",
    "Deck Construction",
    "Deck, Bag, and Pool Building",
    "Deduction",
    "Delayed Purchase",
    "Dice Rolling",
    "Die Icon Resolution",
    "Different Dice Movement",
    "Drawing",
    "Elapsed Real Time Ending",
    "Enclosure",
    "End Game Bonuses",
    "Events",
    "Finale Ending",
    "Flicking",
    "Follow",
    "Force Commitment",
    "Grid Coverage",
    "Grid Movement",
    "Hand Management",
    "Hexagon Grid",
    "Hidden Movement",
    "Hidden Roles",
    "Hidden Victory Points",
    "Highest-Lowest Scoring",
    "Hot Potato",
    "I Cut, You Choose",
    "Impulse Movement",
    "Income",
    "Increase Value of Unchosen Resources",
    "Induction",
    "Interrupts",
    "Investment",
    "Kill Steal",
    "King of the Hill",
    "Ladder Climbing",
    "Layering",
    "Legacy Game",
    "Line Drawing",
    "Line of Sight",
    "Loans",
    "Lose a Turn",
    "Mancala",
    "Map Addition",
    "Map Deformation",
    "Map Reduction",
    "Market",
    "Matching",
    "Measurement Movement",
    "Melding and Splaying",
    "Memory",
    "Minimap Resolution",
    "Modular Board",
    "Move Through Deck",
    "Movement Points",
    "Movement Template",
    "Moving Multiple Units",
    "Multi-Use Cards",
    "Multiple Maps",
    "Narrative Choice / Paragraph",
    "Negotiation",
    "Neighbor Scope",
    "Network and Route Building",
    "Once-Per-Game Abilities",
    "Open Drafting",
    "Order Counters",
    "Ordering",
    "Ownership",
    "Paper-and-Pencil",
    "Passed Action Token",
    "Pattern Building",
    "Pattern Movement",
    "Pattern Recognition",
    "Physical Removal",
    "Pick-up and Deliver",
    "Pieces as Map",
    "Player Elimination",
    "Player Judge",
    "Point to Point Movement",
    "Predictive Bid",
    "Prisoner's Dilemma",
    "Programmed Movement",
    "Push Your Luck",
    "Questions and Answers",
    "Race",
    "Random Production",
    "Ratio / Combat Results Table",
    "Re-rolling and Locking",
    "Real-Time",
    "Relative Movement",
    "Resource Queue",
    "Resource to Move",
    "Rock-Paper-Scissors",
    "Role Playing",
    "Roles with Asymmetric Information",
    "Roll / Spin and Move",
    "Rondel",
    "Scenario / Mission / Campaign Game",
    "Score-and-Reset Game",
    "Secret Unit Deployment",
    "Selection Order Bid",
    "Semi-Cooperative Game",
    "Set Collection",
    "Simulation",
    "Simultaneous Action Selection",
    "Singing",
    "Single Loser Game",
    "Slide/Push",
    "Solo / Solitaire Game",
    "Speed Matching",
    "Spelling",
    "Square Grid",
    "Stacking and Balancing",
    "Stat Check Resolution",
    "Static Capture",
    "Stock Holding",
    "Storytelling",
    "Sudden Death Ending",
    "Tags",
    "Take That",
    "Targeted Clues",
    "Team-Based Game",
    "Tech Trees / Tech Tracks",
    "Three Dimensional Movement",
    "Tile Placement",
    "Track Movement",
    "Trading",
    "Traitor Game",
    "Trick-taking",
    "Tug of War",
    "Turn Order: Auction",
    "Turn Order: Claim Action",
    "Turn Order: Pass Order",
    "Turn Order: Progressive",
    "Turn Order: Random",
    "Turn Order: Role Order",
    "Turn Order: Stat-Based",
    "Turn Order: Time Track",
    "Variable Phase Order",
    "Variable Player Powers",
    "Variable Set-up",
    "Victory Points as a Resource",
    "Voting",
    "Worker Placement",
    "Worker Placement with Dice Workers",
    "Worker Placement, Different Worker Types",
    "Zone of Control",
]

export {
    commonGames,
    categoriesEnum,
    mechanicsEnum,
}