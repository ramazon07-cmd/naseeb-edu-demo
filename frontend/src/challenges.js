// GENERATED from the TestMind item banks -- do not edit by hand.
// Sources: TestMind-site/test.html + assets/test-en.js (Big Five, public domain
// IPIP), assets/career.js (Holland RIASEC / O*NET Interest Profiler, CC BY 4.0),
// assets/values.js (work values, written in-house).
//
// One challenge per instrument. Each bank uses a DIFFERENT response scale, so
// the scale travels with the challenge -- personality is answered on agreement,
// interests on liking, values on importance.
//
// Big Five scoring matches TestMind exactly, ES = 6 - mean(N) included, so a
// student who takes both does not get two different answers.

export const CHALLENGES = [
  {
    "key": "personality",
    "number": 1,
    "instrument": "IPIP Big Five",
    "licence": "Public domain",
    "title": "Personality",
    "blurb": "Fifty statements about how you usually are. There are no right answers and no better score.",
    "scale": [
      "Disagree",
      "Slightly disagree",
      "Neutral",
      "Slightly agree",
      "Agree"
    ],
    "scoring": "bigfive",
    "items": [
      {
        "id": 0,
        "text": "I make new friends easily.",
        "trait": "E",
        "reverse": false
      },
      {
        "id": 1,
        "text": "I have a very vivid imagination.",
        "trait": "O",
        "reverse": false
      },
      {
        "id": 2,
        "text": "I trust people easily.",
        "trait": "A",
        "reverse": false
      },
      {
        "id": 3,
        "text": "I worry a lot, even about small things.",
        "trait": "N",
        "reverse": false
      },
      {
        "id": 4,
        "text": "I do the tasks I am given properly.",
        "trait": "C",
        "reverse": false
      },
      {
        "id": 5,
        "text": "I get annoyed over little things.",
        "trait": "N",
        "reverse": false
      },
      {
        "id": 6,
        "text": "I like being in busy, crowded places.",
        "trait": "E",
        "reverse": false
      },
      {
        "id": 7,
        "text": "Art and creativity matter a lot in my life.",
        "trait": "O",
        "reverse": false
      },
      {
        "id": 8,
        "text": "I sometimes use other people for my own benefit.",
        "trait": "A",
        "reverse": true
      },
      {
        "id": 9,
        "text": "I keep my room and my home clean and tidy.",
        "trait": "C",
        "reverse": false
      },
      {
        "id": 10,
        "text": "My mood often drops and I feel sad.",
        "trait": "N",
        "reverse": false
      },
      {
        "id": 11,
        "text": "I like helping other people.",
        "trait": "A",
        "reverse": false
      },
      {
        "id": 12,
        "text": "I always keep my word and my promises.",
        "trait": "C",
        "reverse": false
      },
      {
        "id": 13,
        "text": "I prefer variety to doing the same thing every day.",
        "trait": "O",
        "reverse": false
      },
      {
        "id": 14,
        "text": "I enjoy deep books that make me think.",
        "trait": "O",
        "reverse": false
      },
      {
        "id": 15,
        "text": "I make a careful plan before starting anything.",
        "trait": "C",
        "reverse": false
      },
      {
        "id": 16,
        "text": "I do not open up to people quickly; I keep my inner world to myself.",
        "trait": "E",
        "reverse": true
      },
      {
        "id": 17,
        "text": "I am not very interested in what other people are feeling.",
        "trait": "A",
        "reverse": true
      },
      {
        "id": 18,
        "text": "I tell the truth in any situation.",
        "trait": "A",
        "reverse": false
      },
      {
        "id": 19,
        "text": "My life feels the same every day and a little dull.",
        "trait": "E",
        "reverse": true
      },
      {
        "id": 20,
        "text": "I argue against other people to get my own view across.",
        "trait": "A",
        "reverse": true
      },
      {
        "id": 21,
        "text": "I try to achieve more than is expected of me.",
        "trait": "C",
        "reverse": false
      },
      {
        "id": 22,
        "text": "I am often dissatisfied with myself.",
        "trait": "N",
        "reverse": false
      },
      {
        "id": 23,
        "text": "I think the world is made of different points of view, not only of \"facts\" and \"mistakes\".",
        "trait": "O",
        "reverse": false
      },
      {
        "id": 24,
        "text": "I stay calm even in an accident or a difficult situation.",
        "trait": "N",
        "reverse": true
      },
      {
        "id": 25,
        "text": "I wait for other people to act rather than making the first move myself.",
        "trait": "E",
        "reverse": true
      },
      {
        "id": 26,
        "text": "Reading or listening to poetry does not give me much pleasure.",
        "trait": "O",
        "reverse": true
      },
      {
        "id": 27,
        "text": "I leave my things scattered around and my room untidy.",
        "trait": "C",
        "reverse": true
      },
      {
        "id": 28,
        "text": "I rarely get nervous.",
        "trait": "N",
        "reverse": true
      },
      {
        "id": 29,
        "text": "I get around the rules and the order that society has set.",
        "trait": "C",
        "reverse": true
      },
      {
        "id": 30,
        "text": "I take on the leading role in a group or a team.",
        "trait": "E",
        "reverse": false
      },
      {
        "id": 31,
        "text": "I find abstract, theoretical and philosophical ideas hard to understand.",
        "trait": "O",
        "reverse": true
      },
      {
        "id": 32,
        "text": "I rely on tried and tested methods rather than unfamiliar experiences.",
        "trait": "O",
        "reverse": true
      },
      {
        "id": 33,
        "text": "I genuinely feel for people who are in a hard situation.",
        "trait": "A",
        "reverse": false
      },
      {
        "id": 34,
        "text": "I act on chance instead of thinking everything through first.",
        "trait": "C",
        "reverse": true
      },
      {
        "id": 35,
        "text": "I very rarely get upset or go around in a bad mood.",
        "trait": "N",
        "reverse": true
      },
      {
        "id": 36,
        "text": "I like new adventures with plenty of risk in them.",
        "trait": "E",
        "reverse": false
      },
      {
        "id": 37,
        "text": "I really enjoy life and every day of it.",
        "trait": "E",
        "reverse": false
      },
      {
        "id": 38,
        "text": "I do not feel awkward or shy even in uncomfortable situations.",
        "trait": "N",
        "reverse": true
      },
      {
        "id": 39,
        "text": "I find very sensitive and emotional people hard to understand.",
        "trait": "O",
        "reverse": true
      },
      {
        "id": 40,
        "text": "I suspect there is always a hidden motive behind what people do.",
        "trait": "A",
        "reverse": true
      },
      {
        "id": 41,
        "text": "I cannot keep the word and the promises I have given.",
        "trait": "C",
        "reverse": true
      },
      {
        "id": 42,
        "text": "I do not enjoy crowded, noisy events.",
        "trait": "E",
        "reverse": true
      },
      {
        "id": 43,
        "text": "I think about my problems for a long time and cannot get away from them.",
        "trait": "N",
        "reverse": false
      },
      {
        "id": 44,
        "text": "I do not throw myself into things with much energy or enthusiasm.",
        "trait": "E",
        "reverse": true
      },
      {
        "id": 45,
        "text": "When I get angry I say harsh and hurtful things to other people.",
        "trait": "A",
        "reverse": true
      },
      {
        "id": 46,
        "text": "Getting past obstacles and difficulties in life is not hard for me.",
        "trait": "N",
        "reverse": true
      },
      {
        "id": 47,
        "text": "I think the decisions of elders and leaders should be respected without question.",
        "trait": "O",
        "reverse": true
      },
      {
        "id": 48,
        "text": "I prefer working together in harmony to competing with others.",
        "trait": "A",
        "reverse": false
      },
      {
        "id": 49,
        "text": "I do things in a rush.",
        "trait": "C",
        "reverse": true
      }
    ]
  },
  {
    "key": "interests",
    "number": 2,
    "instrument": "Holland RIASEC / O*NET Interest Profiler",
    "licence": "CC BY 4.0",
    "title": "Interests",
    "blurb": "Forty-eight activities. Not whether you would be good at them — only whether you would enjoy them.",
    "scale": [
      "Strongly dislike",
      "Dislike",
      "Neutral",
      "Like",
      "Strongly like"
    ],
    "scoring": "riasec",
    "items": [
      {
        "id": 50,
        "text": "Repair a broken bicycle or motorbike",
        "scale": "R"
      },
      {
        "id": 51,
        "text": "Build a table, a shelf or a chair out of wood",
        "scale": "R"
      },
      {
        "id": 52,
        "text": "Open up a broken phone and see what is inside",
        "scale": "R"
      },
      {
        "id": 53,
        "text": "Grow trees and vegetables in a garden",
        "scale": "R"
      },
      {
        "id": 54,
        "text": "Wire a socket or run cable in a house",
        "scale": "R"
      },
      {
        "id": 55,
        "text": "Lay brick or plaster a wall on a building site",
        "scale": "R"
      },
      {
        "id": 56,
        "text": "Drive a tractor or a lorry",
        "scale": "R"
      },
      {
        "id": 57,
        "text": "Work outdoors, physically, all day",
        "scale": "R"
      },
      {
        "id": 58,
        "text": "Run experiments in a laboratory",
        "scale": "I"
      },
      {
        "id": 59,
        "text": "Solve a difficult mathematics problem",
        "scale": "I"
      },
      {
        "id": 60,
        "text": "Work through test results to find the cause of an illness",
        "scale": "I"
      },
      {
        "id": 61,
        "text": "Understand exactly why something works the way it does",
        "scale": "I"
      },
      {
        "id": 62,
        "text": "Study the stars, the planets and space",
        "scale": "I"
      },
      {
        "id": 63,
        "text": "Analyse numbers and statistics and draw conclusions",
        "scale": "I"
      },
      {
        "id": 64,
        "text": "Work on a new medicine or vaccine",
        "scale": "I"
      },
      {
        "id": 65,
        "text": "Watch natural events and look for the pattern in them",
        "scale": "I"
      },
      {
        "id": 66,
        "text": "Draw, or paint a portrait",
        "scale": "A"
      },
      {
        "id": 67,
        "text": "Play an instrument or write songs",
        "scale": "A"
      },
      {
        "id": 68,
        "text": "Write a story, a poem or a screenplay",
        "scale": "A"
      },
      {
        "id": 69,
        "text": "Film video and edit it",
        "scale": "A"
      },
      {
        "id": 70,
        "text": "Design clothes or jewellery",
        "scale": "A"
      },
      {
        "id": 71,
        "text": "Act in a play or a film",
        "scale": "A"
      },
      {
        "id": 72,
        "text": "Design the inside of a room or a building",
        "scale": "A"
      },
      {
        "id": 73,
        "text": "Choreograph a dance or a stage movement",
        "scale": "A"
      },
      {
        "id": 74,
        "text": "Teach younger children",
        "scale": "S"
      },
      {
        "id": 75,
        "text": "Explain a topic to a classmate who did not understand it",
        "scale": "S"
      },
      {
        "id": 76,
        "text": "Listen to someone having a hard time, and help them",
        "scale": "S"
      },
      {
        "id": 77,
        "text": "Look after someone who is ill or elderly",
        "scale": "S"
      },
      {
        "id": 78,
        "text": "Volunteer and work on charity projects",
        "scale": "S"
      },
      {
        "id": 79,
        "text": "Work with children who have disabilities",
        "scale": "S"
      },
      {
        "id": 80,
        "text": "Bring two people who have fallen out back together",
        "scale": "S"
      },
      {
        "id": 81,
        "text": "Coach children at a sports club",
        "scale": "S"
      },
      {
        "id": 82,
        "text": "Start your own business and run it",
        "scale": "E"
      },
      {
        "id": 83,
        "text": "Sell a product and close a deal with a customer",
        "scale": "E"
      },
      {
        "id": 84,
        "text": "Lead a group and divide the work between people",
        "scale": "E"
      },
      {
        "id": 85,
        "text": "Speak in front of people and win them over",
        "scale": "E"
      },
      {
        "id": 86,
        "text": "Organise a large event and find a sponsor for it",
        "scale": "E"
      },
      {
        "id": 87,
        "text": "Argue your position through to the end",
        "scale": "E"
      },
      {
        "id": 88,
        "text": "Present a new idea to people and get them behind it",
        "scale": "E"
      },
      {
        "id": 89,
        "text": "Think up an advertising campaign and run it",
        "scale": "E"
      },
      {
        "id": 90,
        "text": "Put documents in order and file them properly",
        "scale": "C"
      },
      {
        "id": 91,
        "text": "Keep the accounts and prepare a report",
        "scale": "C"
      },
      {
        "id": 92,
        "text": "Fill in tables and lists",
        "scale": "C"
      },
      {
        "id": 93,
        "text": "Enter data into a database without a single mistake",
        "scale": "C"
      },
      {
        "id": 94,
        "text": "Draw up a work schedule and keep track of deadlines",
        "scale": "C"
      },
      {
        "id": 95,
        "text": "Keep stock records in a warehouse",
        "scale": "C"
      },
      {
        "id": 96,
        "text": "Get the books in a library into a proper system",
        "scale": "C"
      },
      {
        "id": 97,
        "text": "Work strictly to a set of established rules",
        "scale": "C"
      }
    ]
  },
  {
    "key": "values",
    "number": 3,
    "instrument": "Work values",
    "licence": "Written in-house",
    "title": "What you want from work",
    "blurb": "Ten things a job can give you. Not what you are good at — what you actually want.",
    "scale": [
      "Not important at all",
      "Not very important",
      "Moderately important",
      "Important",
      "Very important"
    ],
    "scoring": "values",
    "items": [
      {
        "id": 98,
        "text": "It matters to me that my future job pays well.",
        "dim": "income"
      },
      {
        "id": 99,
        "text": "It matters to me that I keep learning new things in my future job.",
        "dim": "learning"
      },
      {
        "id": 100,
        "text": "It matters to me that my work lets me help people.",
        "dim": "helping"
      },
      {
        "id": 101,
        "text": "It matters to me that I can plan my own work and work independently.",
        "dim": "independence"
      },
      {
        "id": 102,
        "text": "It matters to me that my job is stable and secure.",
        "dim": "stability"
      },
      {
        "id": 103,
        "text": "It matters to me that I can express my own ideas freely at work.",
        "dim": "creativity"
      },
      {
        "id": 104,
        "text": "It matters to me to work in a team, alongside other people.",
        "dim": "teamwork"
      },
      {
        "id": 105,
        "text": "It matters to me to make decisions and lead a team at work.",
        "dim": "leadership"
      },
      {
        "id": 106,
        "text": "It matters to me that there is time for family and a life outside work.",
        "dim": "balance"
      },
      {
        "id": 107,
        "text": "It matters to me that my work is useful to society.",
        "dim": "meaning"
      }
    ]
  },
  {
    "key": "subjects",
    "number": 4,
    "instrument": "Subject confidence",
    "licence": "Written in-house",
    "title": "How school feels",
    "blurb": "Eleven school subjects. Not your marks — how confident you feel when you sit down to each one.",
    "scale": [
      "Not at all",
      "Not very",
      "Neutral",
      "Fairly",
      "Very"
    ],
    "scoring": "subjects",
    "items": [
      {
        "id": 108,
        "subject": "math",
        "text": "I feel confident in Mathematics."
      },
      {
        "id": 109,
        "subject": "physics",
        "text": "I feel confident in Physics."
      },
      {
        "id": 110,
        "subject": "cs",
        "text": "I feel confident in Computer Science."
      },
      {
        "id": 111,
        "subject": "biology",
        "text": "I feel confident in Biology."
      },
      {
        "id": 112,
        "subject": "chemistry",
        "text": "I feel confident in Chemistry."
      },
      {
        "id": 113,
        "subject": "economics",
        "text": "I feel confident in Economics."
      },
      {
        "id": 114,
        "subject": "english",
        "text": "I feel confident in English."
      },
      {
        "id": 115,
        "subject": "literature",
        "text": "I feel confident in Native language and literature."
      },
      {
        "id": 116,
        "subject": "history",
        "text": "I feel confident in History."
      },
      {
        "id": 117,
        "subject": "geography",
        "text": "I feel confident in Geography."
      },
      {
        "id": 118,
        "subject": "art",
        "text": "I feel confident in Art and design."
      }
    ]
  },
  {
    "key": "workimportance",
    "number": 5,
    "instrument": "O*NET Work Importance Locator",
    "licence": "Public domain (US DOL)",
    "title": "What matters most",
    "blurb": "Twenty things a job can offer. You must place exactly four in each level — so you have to decide what matters more than what.",
    "scale": [
      "Least important",
      "Less important",
      "Middle",
      "More important",
      "Most important"
    ],
    "scoring": "wil",
    "interaction": "sort",
    "perColumn": 4,
    "items": [
      {
        "id": 119,
        "card": "A",
        "value": "achievement",
        "text": "On my ideal job it is important that… I make use of my abilities."
      },
      {
        "id": 120,
        "card": "B",
        "value": "support",
        "text": "On my ideal job it is important that… I would be treated fairly by the company."
      },
      {
        "id": 121,
        "card": "C",
        "value": "conditions",
        "text": "On my ideal job it is important that… I could be busy all the time."
      },
      {
        "id": 122,
        "card": "D",
        "value": "recognition",
        "text": "On my ideal job it is important that… The job would provide an opportunity for advancement."
      },
      {
        "id": 123,
        "card": "E",
        "value": "recognition",
        "text": "On my ideal job it is important that… I could give directions and instructions to others."
      },
      {
        "id": 124,
        "card": "F",
        "value": "achievement",
        "text": "On my ideal job it is important that… The work could give me a feeling of accomplishment."
      },
      {
        "id": 125,
        "card": "G",
        "value": "conditions",
        "text": "On my ideal job it is important that… My pay would compare well with that of other workers."
      },
      {
        "id": 126,
        "card": "H",
        "value": "relationships",
        "text": "On my ideal job it is important that… My co-workers would be easy to get along with."
      },
      {
        "id": 127,
        "card": "I",
        "value": "independence",
        "text": "On my ideal job it is important that… I could try out my own ideas."
      },
      {
        "id": 128,
        "card": "J",
        "value": "conditions",
        "text": "On my ideal job it is important that… I could work alone."
      },
      {
        "id": 129,
        "card": "K",
        "value": "relationships",
        "text": "On my ideal job it is important that… I would never be pressured to do things that go against my sense of right and wrong."
      },
      {
        "id": 130,
        "card": "L",
        "value": "recognition",
        "text": "On my ideal job it is important that… I could receive recognition for the work I do."
      },
      {
        "id": 131,
        "card": "M",
        "value": "independence",
        "text": "On my ideal job it is important that… I could make decisions on my own."
      },
      {
        "id": 132,
        "card": "N",
        "value": "conditions",
        "text": "On my ideal job it is important that… The job would provide for steady employment."
      },
      {
        "id": 133,
        "card": "O",
        "value": "relationships",
        "text": "On my ideal job it is important that… I could do things for other people."
      },
      {
        "id": 134,
        "card": "P",
        "value": "support",
        "text": "On my ideal job it is important that… I have supervisors who would back up their workers with management."
      },
      {
        "id": 135,
        "card": "Q",
        "value": "support",
        "text": "On my ideal job it is important that… I have supervisors who train their workers well."
      },
      {
        "id": 136,
        "card": "R",
        "value": "conditions",
        "text": "On my ideal job it is important that… I could do something different every day."
      },
      {
        "id": 137,
        "card": "S",
        "value": "conditions",
        "text": "On my ideal job it is important that… The job would have good working conditions."
      },
      {
        "id": 138,
        "card": "T",
        "value": "independence",
        "text": "On my ideal job it is important that… I could plan my work with little supervision."
      }
    ]
  }
]

// Researched, licence-checked, not yet built.
export const PLANNED = [
  {
    "number": 6,
    "title": "Career adaptability",
    "instrument": "CAAS (Savickas & Porfeli)",
    "licence": "Free for research",
    "blurb": "Concern, control, curiosity and confidence — 24 items, validated across 13 countries. Unlike personality it is meant to grow, so it is the one worth repeating every year.",
    "blocker": "Item wording needs a Vocopher account. The published chapter gives only the scoring key. Commercial use in a school product needs confirming separately."
  },
  {
    "number": 7,
    "title": "Character strengths",
    "instrument": "VIA Youth Survey",
    "licence": "Free for research",
    "blurb": "Twenty-four character strengths, built for ages 10–17. Kinder language for a fourteen-year-old than trait scores.",
    "blocker": "Items are distributed only through a registered VIA research site, and commercial use is licensed separately."
  },
  {
    "number": 8,
    "title": "Aptitude",
    "instrument": "Needs a research partner",
    "licence": "Build and validate",
    "blurb": "Measured ability rather than stated interest — the biggest gap against Morrisby and YouScience, and the one that finds students an interest inventory misses.",
    "blocker": "Cannot be borrowed. Needs item development, timing, norming on an Uzbek sample and fairness analysis. Years, not months."
  }
]

// Bump a challenge's version whenever ANY of its items change wording, and never
// edit items in place. Attempts are stored with the version they were answered
// under, so a comparison across two versions can be refused or marked instead of
// quietly pretending the same question was asked twice.
export const INSTRUMENT_VERSION = {
  "personality": "1",
  "interests": "1",
  "values": "1",
  "subjects": "1",
  "workimportance": "1"
}

export const TRAIT_ORDER = ['ES', 'E', 'O', 'A', 'C']
export const TRAIT_LABEL = {
  ES: 'Emotional steadiness',
  E: 'Extraversion',
  O: 'Openness',
  A: 'Agreeableness',
  C: 'Conscientiousness',
}
// Short forms for the polygon's corners. Hand-written rather than truncated,
// because "Conscientiousness" run through a splitter is still seventeen
// characters and overruns the chart box. The full name is always beside it.
export const TRAIT_SHORT = {
  ES: 'Steadiness',
  E: 'Extraversion',
  O: 'Openness',
  A: 'Agreeableness',
  C: 'Conscientious',
}

export const TRAIT_BLURB = {
  ES: 'How steady you stay when things get difficult.',
  E: 'How much energy you draw from other people.',
  O: 'Your appetite for ideas, art and the unfamiliar.',
  A: 'How readily you trust, help and give ground.',
  C: 'How you plan, organise and follow through.',
}

export const RIASEC_ORDER = ["R","I","A","S","E","C"]
export const RIASEC_NAME = {
  "A": "Creating",
  "C": "Order and accuracy",
  "E": "Leading and persuading",
  "I": "Investigating",
  "R": "Practical work",
  "S": "Helping people"
}
export const RIASEC_LEAD = {
  "A": "Making, drawing, writing, design and performance.",
  "C": "Working with records, numbers, order and clear rules.",
  "E": "Persuading, leading, selling and organising.",
  "I": "Finding reasons, analysing, solving difficult problems.",
  "R": "Working with your hands, machines, tools and the outdoors.",
  "S": "Teaching, helping and caring for people."
}
export const VALUE_NAME = {
  "balance": "Life outside work",
  "creativity": "Creative freedom",
  "helping": "Helping people",
  "income": "Income",
  "independence": "Independence",
  "leadership": "Leading",
  "learning": "Learning",
  "meaning": "Useful work",
  "stability": "Stability",
  "teamwork": "Working with others"
}
export const SUBJECT_NAME = {
  "art": "Art and design",
  "biology": "Biology",
  "chemistry": "Chemistry",
  "cs": "Computer Science",
  "economics": "Economics",
  "english": "English",
  "geography": "Geography",
  "history": "History",
  "literature": "Native language and literature",
  "math": "Mathematics",
  "physics": "Physics"
}

// Work Importance Locator. The multipliers are the published ones: they exist so
// values carried by 2, 3 and 6 cards all span the same 6..30 range.
export const WIL_ORDER = ["achievement","independence","recognition","relationships","support","conditions"]
export const WIL_MULTIPLIER = {"achievement":3,"independence":2,"recognition":2,"relationships":2,"support":2,"conditions":1}
export const WIL_NAME = {
  "achievement": "Achievement",
  "independence": "Independence",
  "recognition": "Recognition",
  "relationships": "Relationships",
  "support": "Support",
  "conditions": "Working conditions"
}
export const WIL_SHORT = {
  "achievement": "Achievement",
  "independence": "Independence",
  "recognition": "Recognition",
  "relationships": "Relationships",
  "support": "Support",
  "conditions": "Conditions"
}
export const WIL_LEAD = {
  "achievement": "Using your abilities and feeling you accomplished something.",
  "independence": "Deciding for yourself and working your own way.",
  "recognition": "Advancement, standing and being noticed for good work.",
  "relationships": "Colleagues you get on with, and work you can feel right about.",
  "support": "Being backed up, trained and treated fairly.",
  "conditions": "Pay, security, variety and the shape of the working day."
}

export const challengeDone = (challenge, answers) => challenge.items.every((item) => answers[item.id])

// Each scorer returns null unless its whole instrument is answered. A partial
// bank is never reported as a result.
export function scoreChallenge(challenge, answers) {
  if (!challengeDone(challenge, answers)) return null
  const items = challenge.items

  if (challenge.scoring === 'bigfive') {
    const sums = {}, counts = {}
    for (const item of items) {
      const value = item.reverse ? 6 - answers[item.id] : answers[item.id]
      sums[item.trait] = (sums[item.trait] || 0) + value
      counts[item.trait] = (counts[item.trait] || 0) + 1
    }
    const mean = (t) => sums[t] / counts[t]
    // Neuroticism is reported as its opposite so every trait reads "more is more".
    return { ES: 6 - mean('N'), E: mean('E'), O: mean('O'), A: mean('A'), C: mean('C') }
  }

  if (challenge.scoring === 'riasec') {
    const sums = {}, counts = {}
    for (const item of items) {
      sums[item.scale] = (sums[item.scale] || 0) + answers[item.id]
      counts[item.scale] = (counts[item.scale] || 0) + 1
    }
    const means = {}
    for (const scale of RIASEC_ORDER) means[scale] = sums[scale] / counts[scale]
    // Holland code: the three strongest, ties broken by the published order so
    // the same answers always give the same code.
    const code = [...RIASEC_ORDER].sort((a, b) => means[b] - means[a]).slice(0, 3)
    return { means, code }
  }

  if (challenge.scoring === 'values') {
    const byDim = {}
    for (const item of items) byDim[item.dim] = answers[item.id]
    const ranked = Object.keys(byDim).sort((a, b) => byDim[b] - byDim[a])
    return { byDim, ranked }
  }

  if (challenge.scoring === 'subjects') {
    const bySubject = {}
    for (const item of items) bySubject[item.subject] = answers[item.id]
    const ranked = Object.keys(bySubject).sort((a, b) => bySubject[b] - bySubject[a])
    return { bySubject, ranked }
  }

  if (challenge.scoring === 'wil') {
    // Refuse to score unless the sort is legal: exactly four cards per column.
    // An unequal sort is not this instrument and its scores would not mean what
    // the published norms say they mean.
    const perColumn = [0, 0, 0, 0, 0]
    for (const item of items) perColumn[answers[item.id] - 1]++
    if (perColumn.some((n) => n !== challenge.perColumn)) return null

    const totals = {}
    for (const item of items) totals[item.value] = (totals[item.value] || 0) + answers[item.id]
    const scores = {}
    for (const value of WIL_ORDER) scores[value] = totals[value] * WIL_MULTIPLIER[value]
    const ranked = [...WIL_ORDER].sort((a, b) => scores[b] - scores[a])
    return { scores, ranked }
  }

  return null
}
