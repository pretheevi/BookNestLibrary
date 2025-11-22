const bookDatas = [
  // Fiction
  {
    id: 1,
    genre: "fiction",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "./bookcovers/fiction/harry-potter-and-the-sorcerers-stone.jpg",
    rating: 4.8,
    theme: ["magic", "adventure", "friendship", "coming-of-age"],
    about: "A young boy discovers he is a wizard and attends Hogwarts, unraveling the mystery of the Sorcerer's Stone.",
    info: "Set in a magical world, Harry, with friends Ron and Hermione, faces danger and friendship at Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id: 2,
    genre: "fiction",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "./bookcovers/fiction/the-great-gatsby.jpg",
    rating: 4.2,
    theme: ["classic", "drama", "romance", "wealth"],
    about: "Jay Gatsby pursues wealth and love during the Roaring Twenties, in a tale of obsession and tragedy.",
    info: "In 1920s New York, Gatsby throws lavish parties hoping to reunite with Daisy Buchanan, exploring themes of class and the American Dream."
  },
  {
    id: 3,
    genre: "fiction",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "./bookcovers/fiction/to-kill-a-mockingbird.jpg",
    rating: 4.7,
    theme: ["justice", "family", "race", "coming-of-age"],
    about: "Scout Finch witnesses her father's struggle for justice in the racially divided South.",
    info: "Set in Alabama during the 1930s, this novel explores racial injustice and moral growth through the perspective of young Scout Finch."
  },
  {
    id: 4,
    genre: "fiction",
    title: "1984",
    author: "George Orwell",
    image: "./bookcovers/fiction/1984.jpg",
    rating: 4.4,
    theme: ["dystopian", "politics", "oppression", "surveillance"],
    about: "Winston Smith resists a totalitarian regime in a world where every thought is controlled.",
    info: "A haunting vision of a future where government surveillance and mind control erase individuality and freedom."
  },
  {
    id: 5,
    genre: "fiction",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "./bookcovers/fiction/the-catcher-in-the-rye.jpg",
    rating: 4.0,
    theme: ["coming-of-age", "rebellion", "alienation"],
    about: "Holden Caulfield recounts his journey through New York City after leaving prep school.",
    info: "An iconic tale reflecting adolescent alienation and critique of adult society through Holden's eyes."
  },
  {
    id: 6,
    genre: "fiction",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "./bookcovers/fiction/the-hobbit.jpg",
    rating: 4.7,
    theme: ["fantasy", "adventure", "heroism", "friendship"],
    about: "Bilbo Baggins joins a quest to reclaim a treasure from a dragon.",
    info: "A classic fantasy adventure in Middle Earth, featuring trolls, goblins, and a magical ring."
  },

  // Non-Fiction
  {
    id: 7,
    genre: "nonFiction",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "./bookcovers/nonFiction/sapiens.jpg",
    rating: 4.7,
    theme: ["history", "evolution", "philosophy", "society"],
    about: "A brief history of humankind from hunter-gatherers to the modern age.",
    info: "Harari explores the cognitive, agricultural, and scientific revolutions that shaped human development."
  },
  {
    id: 8,
    genre: "nonFiction",
    title: "Educated",
    author: "Tara Westover",
    image: "./bookcovers/nonFiction/educated.jpg",
    rating: 4.6,
    theme: ["memoir", "family", "self-discovery"],
    about: "A woman escapes her survivalist upbringing and learns the power of education.",
    info: "Westover chronicles her journey from rural Idaho to earning a PhD at Cambridge, defying family and tradition."
  },
  {
    id: 9,
    genre: "nonFiction",
    title: "Atomic Habits",
    author: "James Clear",
    image: "./bookcovers/nonFiction/atomic-habits.jpg",
    rating: 4.6,
    theme: ["self-help", "productivity", "behavior-change"],
    about: "A guide to forming good habits and breaking bad ones using small changes.",
    info: "James Clear blends research and advice for lasting behavioral improvements."
  },
  {
    id: 10,
    genre: "nonFiction",
    title: "Becoming",
    author: "Michelle Obama",
    image: "./bookcovers/nonFiction/becoming.jpg",
    rating: 4.7,
    theme: ["memoir", "inspiration", "politics", "identity"],
    about: "The story of Michelle Obama's childhood, career, and time as First Lady.",
    info: "An intimate memoir about growth, resilience, and leadership by one of America's most admired women."
  },
  {
    id: 11,
    genre: "nonFiction",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    image: "./bookcovers/nonFiction/the-power-of-habit.jpg",
    rating: 4.5,
    theme: ["psychology", "productivity", "behavior"],
    about: "How habits are formed, changed, and their impact on life and business.",
    info: "Duhigg draws on neuroscience and stories to explain how habits work and how to transform them."
  },
  {
    id: 12,
    genre: "nonFiction",
    title: "The Subtle Art of Not Giving a Fck",
    author: "Mark Manson",
    image: "./bookcovers/nonFiction/the-subtle-art-of-not-giving-a-fck.jpg",
    rating: 4.4,
    theme: ["self-help", "life-lessons", "personal-growth"],
    about: "A blunt guide to living a better life by caring less about things that don’t matter.",
    info: "Mark Manson offers realistic advice for finding meaning in everyday life and embracing challenges."
  },

  // Mystery
  {
    id: 13,
    genre: "mystery",
    title: "Gone Girl",
    author: "Gillian Flynn",
    image: "./bookcovers/mystery/gone-girl.jpg",
    rating: 4.4,
    theme: ["thriller", "psychological", "crime", "marriage"],
    about: "A wife disappears, and her husband becomes the prime suspect as secrets unravel.",
    info: "Flynn explores deception and manipulation in a marriage with shocking twists."
  },
  {
    id: 14,
    genre: "mystery",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    image: "./bookcovers/mystery/the-girl-with-the-dragon-tattoo.jpg",
    rating: 4.3,
    theme: ["crime", "investigation", "technology", "revenge"],
    about: "A journalist and hacker team up to solve a wealthy family's decades-old disappearance.",
    info: "Larsson blends intrigue and complex characters in this gripping Swedish thriller."
  },
  {
    id: 15,
    genre: "mystery",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image: "./bookcovers/mystery/the-da-vinci-code.jpg",
    rating: 4.2,
    theme: ["conspiracy", "history", "art", "religion"],
    about: "A symbologist uncovers secrets hidden in works of Leonardo da Vinci.",
    info: "Fast-paced mystery involving cryptic clues, religious history, and secret societies."
  },
  {
    id: 16,
    genre: "mystery",
    title: "And Then There Were None",
    author: "Agatha Christie",
    image: "./bookcovers/mystery/and-then-there-were-none.jpg",
    rating: 4.6,
    theme: ["suspense", "whodunit", "crime", "isolation"],
    about: "Ten strangers are invited to a remote island and are mysteriously killed one by one.",
    info: "Christie's masterwork of suspense keeps readers guessing until the last page."
  },
  {
    id: 17,
    genre: "mystery",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    image: "./bookcovers/mystery/the-silent-patient.jpg",
    rating: 4.3,
    theme: ["psychological", "suspense", "therapy", "crime"],
    about: "A painter becomes mute after being accused of her husband's murder.",
    info: "A psychological thriller where uncovering the truth is as tense as the silent protagonist."
  },
  {
    id: 18,
    genre: "mystery",
    title: "Sherlock Holmes: The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    image: "./bookcovers/mystery/sherlock-holmes-the-hound-of-the-baskervilles.jpg",
    rating: 4.5,
    theme: ["detective", "classic", "villain", "supernatural"],
    about: "Sherlock Holmes investigates a legendary beast haunting a British family.",
    info: "A suspenseful detective adventure pitting Holmes against folklore and logic."
  },

  // Science Fiction
  {
    id: 19,
    genre: "scienceFiction",
    title: "Dune",
    author: "Frank Herbert",
    image: "./bookcovers/scienceFiction/dune.jpg",
    rating: 4.6,
    theme: ["epic", "politics", "environment", "adventure"],
    about: "Young Paul Atreides rises among desert warriors on an arid planet fighting for resources.",
    info: "A grand space saga of power struggles, prophecy, and survival in the harsh ecosystem of Arrakis."
  },
  {
    id: 20,
    genre: "scienceFiction",
    title: "Ender's Game",
    author: "Orson Scott Card",
    image: "./bookcovers/scienceFiction/sender-game.jpg",
    rating: 4.4,
    theme: ["war", "strategy", "youth", "training"],
    about: "A gifted boy is recruited to defend humanity from an alien invasion through tactical training.",
    info: "A brilliant exploration of leadership, morality, and the price of victory in war."
  },
  {
    id: 21,
    genre: "scienceFiction",
    title: "Neuromancer",
    author: "William Gibson",
    image: "./bookcovers/scienceFiction/neuromancer.jpg",
    rating: 4.2,
    theme: ["cyberpunk", "technology", "crime", "future"],
    about: "A washed-up computer hacker is hired to pull off an impossible cybercrime.",
    info: "Gibson’s groundbreaking novel established cyberpunk and the future of virtual reality."
  },
  {
    id: 22,
    genre: "scienceFiction",
    title: "The Martian",
    author: "Andy Weir",
    image: "./bookcovers/scienceFiction/the-martian.jpg",
    rating: 4.5,
    theme: ["survival", "science", "space", "humor"],
    about: "Stranded on Mars, an astronaut uses ingenuity and humor to try and survive.",
    info: "Hard science fiction combining realistic problem-solving and optimism in isolation."
  },
  {
    id: 23,
    genre: "scienceFiction",
    title: "Ready Player One",
    author: "Ernest Cline",
    image: "./bookcovers/scienceFiction/ready-player-one.jpg",
    rating: 4.3,
    theme: ["virtual-reality", "gaming", "adventure", "nostalgia"],
    about: "A teenager struggles to win a contest in a virtual world obsessed with 80s pop culture.",
    info: "Action-packed race through puzzles, pop references, and digital fantasy."
  },
  {
    id: 24,
    genre: "scienceFiction",
    title: "Foundation",
    author: "Isaac Asimov",
    image: "./bookcovers/scienceFiction/foundation.jpg",
    rating: 4.4,
    theme: ["empire", "history", "future", "strategy"],
    about: "Scientists try to preserve knowledge and build a new civilization as an empire collapses.",
    info: "A milestone in science fiction exploring politics, sociology, and the survival of civilization."
  },

  // History
  {
    id: 25,
    genre: "history",
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    image: "./bookcovers/history/the-diary-of-a-young-girl.jpg",
    rating: 4.5,
    theme: ["war", "family", "survival", "memoir"],
    about: "Anne Frank recounts her daily life hiding from Nazis in occupied Holland.",
    info: "A moving firsthand account of Jewish persecution, resilience, and hope."
  },
  {
    id: 26,
    genre: "history",
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    image: "./bookcovers/history/the-guns-of-august.jpg",
    rating: 4.3,
    theme: ["war", "strategy", "political", "WWI"],
    about: "Explores the decisions and missteps that led to World War I.",
    info: "Tuchman analyzes the diplomatic failures and battles that shaped modern conflict."
  },
  {
    id: 27,
    genre: "history",
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    image: "./bookcovers/history/team-of-rivals.jpg",
    rating: 4.6,
    theme: ["leadership", "US history", "politics", "biography"],
    about: "Abraham Lincoln assembles a cabinet of his fiercest political opponents.",
    info: "Reveals how collaboration and empathy built one of America’s strongest administrations."
  },
  {
    id: 28,
    genre: "history",
    title: "The Wright Brothers",
    author: "David McCullough",
    image: "./bookcovers/history/the-wright-brothers.jpg",
    rating: 4.5,
    theme: ["innovation", "biography", "science", "flight"],
    about: "The story of Wilbur and Orville Wright’s invention of the airplane.",
    info: "Chronicles the trials, ideas, and breakthrough that launched modern aviation."
  },
  {
    id: 29,
    genre: "history",
    title: "Genghis Khan and the Making of the Modern World",
    author: "Jack Weatherford",
    image: "./bookcovers/history/genghis-khan-and-the-making-of-the-modern-world.jpg",
    rating: 4.4,
    theme: ["empire", "Mongol", "culture", "global-impact"],
    about: "The rise and legacy of Genghis Khan's empire and its impact worldwide.",
    info: "Highlights the Mongol role in shaping trade, culture, and technology."
  },
  {
    id: 30,
    genre: "history",
    title: "1776",
    author: "David McCullough",
    image: "./bookcovers/history/1776.jpg",
    rating: 4.3,
    theme: ["US history", "revolution", "war", "biography"],
    about: "A dramatic narrative of the year America declared independence.",
    info: "Focuses on George Washington and the events surrounding the birth of a nation."
  },

  // Children's Books
  {
    id: 31,
    genre: "childrensBooks",
    title: "Charlotte's Web",
    author: "E.B. White",
    image: "./bookcovers/childrensBooks/charlottes-web.jpg",
    rating: 4.8,
    theme: ["friendship", "farm", "animals", "classic"],
    about: "A pig named Wilbur is saved from slaughter by a clever spider, Charlotte.",
    info: "A heartfelt tale about kindness, hope, and the bonds formed between unlikely friends."
  },
  {
    id: 32,
    genre: "childrensBooks",
    title: "Matilda",
    author: "Roald Dahl",
    image: "./bookcovers/childrensBooks/matilda.jpg",
    rating: 4.7,
    theme: ["magic", "school", "family", "empowerment"],
    about: "Matilda, a gifted child, stands up to injustice with courage and telekinetic powers.",
    info: "A celebration of intelligence, resilience, and childhood wonder."
  },
  {
    id: 33,
    genre: "childrensBooks",
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    image: "./bookcovers/childrensBooks/the-cat-in-the-hat.jpg",
    rating: 4.6,
    theme: ["rhymes", "fun", "chaos", "learning"],
    about: "A mischievous cat shakes up a dull day for two children with incredible antics.",
    info: "Dr. Seuss brings whimsy and laughter through engaging rhymes and playful characters."
  },
  {
    id: 34,
    genre: "childrensBooks",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image: "./bookcovers/childrensBooks/the-little-prince.jpg",
    rating: 4.7,
    theme: ["philosophy", "imagination", "adventure", "friendship"],
    about: "A prince visits planets and meets memorable characters, seeking meaning and connection.",
    info: "A poetic and philosophical tale reflecting on life, childhood, and innocence."
  },
  {
    id: 35,
    genre: "childrensBooks",
    title: "Winnie-the-Pooh",
    author: "A.A. Milne",
    image: "./bookcovers/childrensBooks/winnie-the-pooh.jpg",
    rating: 4.8,
    theme: ["adventure", "forest", "animals", "friendship"],
    about: "Pooh and friends explore the Hundred Acre Wood and go on delightful adventures.",
    info: "Charming stories of joy, friendship, and imagination beloved by all ages."
  },
  {
    id: 36,
    genre: "childrensBooks",
    title: "Coraline",
    author: "Neil Gaiman",
    image: "./bookcovers/childrensBooks/coraline.jpg",
    rating: 4.5,
    theme: ["fantasy", "bravery", "dark", "adventure"],
    about: "Coraline stumbles into a parallel world that’s dangerously alluring.",
    info: "A brave girl faces her fears in a mysterious and eerie alternate universe."
  },

  // Fantasy
  {
    id: 37,
    genre: "fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "./bookcovers/fantasy/harry-potter-and-the-sorcerers-stone.jpg",
    rating: 4.8,
    theme: ["magic", "adventure", "school", "friendship"],
    about: "Harry Potter discovers the magical world and faces the evil Voldemort for the first time.",
    info: "An enchanting introduction to the wizarding world, friendship, and destiny."
  },
  {
    id: 38,
    genre: "fantasy",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "./bookcovers/fantasy/the-hobbit.jpg",
    rating: 4.7,
    theme: ["fantasy", "quest", "courage", "dragons"],
    about: "Bilbo Baggins sets forth on a daring adventure with dwarves to reclaim treasure guarded by Smaug.",
    info: "A legendary journey with memorable creatures and epic battles."
  },
  {
    id: 39,
    genre: "fantasy",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    image: "./bookcovers/fantasy/the-name-of-the-wind.jpg",
    rating: 4.6,
    theme: ["magic", "music", "adventure", "school"],
    about: "Kvothe grows from a child of tragedy into a legendary wizard and musician.",
    info: "Rothfuss crafts a beautifully detailed world of magic, stories, and struggle."
  },
  {
    id: 40,
    genre: "fantasy",
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    image: "./bookcovers/fantasy/the-way-of-kings.jpg",
    rating: 4.7,
    theme: ["epic", "war", "power", "magic"],
    about: "Multiple heroes fight for survival, honor, and understanding in a world at war.",
    info: "A sweeping epic introducing the Stormlight Archive’s powerful magic and philosophies."
  },
  {
    id: 41,
    genre: "fantasy",
    title: "Percy Jackson: The Lightning Thief",
    author: "Rick Riordan",
    image: "./bookcovers/fantasy/percy-jackson-the-lightning-thief.jpg",
    rating: 4.5,
    theme: ["mythology", "adventure", "humor", "friendship"],
    about: "Percy discovers he’s a demigod and embarks on a quest to recover Zeus’s lost lightning bolt.",
    info: "Fast-paced mix of modern life, Greek mythology, and witty characters."
  },
  {
    id: 42,
    genre: "fantasy",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    image: "./bookcovers/fantasy/a-game-of-thrones.jpg",
    rating: 4.6,
    theme: ["politics", "war", "family", "betrayal"],
    about: "Noble families of Westeros vie for control of the Iron Throne through war and intrigue.",
    info: "A sprawling epic of betrayal, loyalty, and survival in a cold, brutal kingdom."
  },

  // Romance
  {
    id: 43,
    genre: "romance",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "./bookcovers/romance/pride-and-prejudice.jpg",
    rating: 4.7,
    theme: ["classic", "love", "society", "family"],
    about: "Elizabeth Bennet navigates social pressures and romance in Regency England.",
    info: "A witty, subtle exploration of love, class, and the misunderstandings of courtship."
  },
  {
    id: 44,
    genre: "romance",
    title: "Me Before You",
    author: "Jojo Moyes",
    image: "./bookcovers/romance/me-before-you.jpg",
    rating: 4.3,
    theme: ["contemporary", "emotional", "family", "disability"],
    about: "Louisa becomes caretaker to Will, a man facing life-changing disability.",
    info: "A moving story of hope, heartbreak, and finding meaning in adversity."
  },
  {
    id: 45,
    genre: "romance",
    title: "The Fault in Our Stars",
    author: "John Green",
    image: "./bookcovers/romance/the-fault-in-our-stars.jpg",
    rating: 4.5,
    theme: ["young-adult", "tragedy", "love", "hope"],
    about: "Hazel and Gus, both teens with cancer, fall in love against the odds.",
    info: "Bittersweet, humorous, and ultimately uplifting story about love and loss."
  },
  {
    id: 46,
    genre: "romance",
    title: "Outlander",
    author: "Diana Gabaldon",
    image: "./bookcovers/romance/outlander.jpg",
    rating: 4.4,
    theme: ["historical", "adventure", "passion", "time-travel"],
    about: "Claire Randall time-travels to 18th-century Scotland and falls for Jamie Fraser.",
    info: "A sweeping romantic adventure full of history, fantasy, and passion."
  },
  {
    id: 47,
    genre: "romance",
    title: "It Ends With Us",
    author: "Colleen Hoover",
    image: "./bookcovers/romance/it-ends-with-us.jpg",
    rating: 4.3,
    theme: ["contemporary", "family", "emotional", "survival"],
    about: "Lily falls for Ryle, but faces difficult truths about love, pain, and resilience.",
    info: "A powerful exploration of relationships, choices, and strength to break cycles."
  },
  {
    id: 48,
    genre: "romance",
    title: "The Notebook",
    author: "Nicholas Sparks",
    image: "./bookcovers/romance/the-notebook.jpg",
    rating: 4.4,
    theme: ["classic", "love", "loss", "memory"],
    about: "Noah and Allie rekindle a summer love decades later, defying social obstacles.",
    info: "A deeply emotional story about lasting love and the passage of time."
  }
];

export default bookDatas;
