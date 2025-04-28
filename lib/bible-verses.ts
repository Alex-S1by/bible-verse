// Assign colors to verses: yellow, pink, and blue




interface Verse {
  id: number;
  reference: string;
  text: string;
}



const assignColors = (verses:Verse[]) => {
  return verses.map((verse, index) => {
    let color
    if (index < 20) {
      color = "yellow"
    } else if (index < 35) {
      color = "pink"
    } else {
      color = "blue"
    }
    return { ...verse, color }
  })
}

const rawVerses = [
  {
    id: 1,
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
  {
    id: 2,
    reference: "Jeremiah 29:11",
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    id: 3,
    reference: "Romans 8:28",
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  },
  {
    id: 4,
    reference: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
  },
  {
    id: 5,
    reference: "Psalm 23:1",
    text: "The LORD is my shepherd, I lack nothing.",
  },
  {
    id: 6,
    reference: "Proverbs 3:5-6",
    text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
  },
  {
    id: 7,
    reference: "Isaiah 40:31",
    text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
  {
    id: 8,
    reference: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  },
  {
    id: 9,
    reference: "Romans 12:2",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will.",
  },
  {
    id: 10,
    reference: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    id: 11,
    reference: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
  },
  {
    id: 12,
    reference: "Hebrews 11:1",
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
  },
  {
    id: 13,
    reference: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
  },
  {
    id: 14,
    reference: "1 John 4:7",
    text: "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God.",
  },
  {
    id: 15,
    reference: "Joshua 1:9",
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
  },
  {
    id: 16,
    reference: "Romans 5:8",
    text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
  },
  {
    id: 17,
    reference: "Psalm 119:105",
    text: "Your word is a lamp for my feet, a light on my path.",
  },
  {
    id: 18,
    reference: "Ephesians 2:8-9",
    text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
  },
  {
    id: 19,
    reference: "Matthew 28:19-20",
    text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
  },
  {
    id: 20,
    reference: "Psalm 37:4",
    text: "Take delight in the LORD, and he will give you the desires of your heart.",
  },
  {
    id: 21,
    reference: "John 14:6",
    text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
  },
  {
    id: 22,
    reference: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
  },
  {
    id: 23,
    reference: "Galatians 2:20",
    text: "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
  },
  {
    id: 24,
    reference: "1 Corinthians 10:13",
    text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.",
  },
  {
    id: 25,
    reference: "James 1:2-3",
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
  },
  {
    id: 26,
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
  },
  {
    id: 27,
    reference: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
  },
  {
    id: 28,
    reference: "Romans 10:9",
    text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",
  },
  {
    id: 29,
    reference: "Matthew 5:16",
    text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
  },
  {
    id: 30,
    reference: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
  },
  {
    id: 31,
    reference: "2 Timothy 3:16-17",
    text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.",
  },
  {
    id: 32,
    reference: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
  },
  {
    id: 33,
    reference: "Colossians 3:23",
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
  },
  {
    id: 34,
    reference: "Hebrews 13:8",
    text: "Jesus Christ is the same yesterday and today and forever.",
  },
  {
    id: 35,
    reference: "John 10:10",
    text: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
  },
  {
    id: 36,
    reference: "Matthew 6:33",
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
  },
  {
    id: 37,
    reference: "James 5:16",
    text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.",
  },
  {
    id: 38,
    reference: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
  },
  {
    id: 39,
    reference: "Psalm 34:8",
    text: "Taste and see that the LORD is good; blessed is the one who takes refuge in him.",
  },
  {
    id: 40,
    reference: "Revelation 3:20",
    text: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
  },
  {
    id: 41,
    reference: "John 15:13",
    text: "Greater love has no one than this: to lay down one's life for one's friends.",
  },
  {
    id: 42,
    reference: "Psalm 56:3",
    text: "When I am afraid, I put my trust in you.",
  },
  {
    id: 43,
    reference: "1 Thessalonians 5:16-18",
    text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
  },
  {
    id: 44,
    reference: "Proverbs 22:6",
    text: "Start children off on the way they should go, and even when they are old they will not turn from it.",
  },
  {
    id: 45,
    reference: "Micah 6:8",
    text: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.",
  },
  {
    id: 46,
    reference: "Lamentations 3:22-23",
    text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
  },
  {
    id: 47,
    reference: "John 13:34-35",
    text: "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.",
  },
  {
    id: 48,
    reference: "Zephaniah 3:17",
    text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
  },
  {
    id: 49,
    reference: "Psalm 19:14",
    text: "May these words of my mouth and this meditation of my heart be pleasing in your sight, LORD, my Rock and my Redeemer.",
  },
  {
    id: 50,
    reference: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
  },
]

export const bibleVerses = assignColors(rawVerses)
