/** Google reviews sourced from the clinic's public Google listing (via Birdeye). 5-star only. */
export type GoogleReview = {
  author: string;
  rating: 5;
  text: string;
  source: "Google";
  relativeTime?: string;
};

/** Only include reviews confirmed as 5-star on Google. */
export const googleFiveStarReviews: GoogleReview[] = [
  {
    author: "Renae Dubey",
    rating: 5,
    source: "Google",
    relativeTime: "2 months ago",
    text: "This review is to personally thank Dr. Staudenmaier and his wonderful staff. Highly professional office! Dr. Luke is kind, gentle and informative. I've been to many chiropractors over the last 25 years and hands down this office is put together and geared toward your over all health and wellness. Thank you again to the whole staff that make each visit welcoming and comfortable.",
  },
  {
    author: "Robin Cain",
    rating: 5,
    source: "Google",
    relativeTime: "3 months ago",
    text: "I love how everyone is so nice and professional. The staff works together without hesitation to keep things moving without eye rolls or sighs. Even though a very busy office, I never felt rushed or ignored. I appreciate their honesty as well. Dr. Luke is very caring, great at explaining things and a good listener. I would recommend him to anyone.",
  },
  {
    author: "Greg Cook",
    rating: 5,
    source: "Google",
    relativeTime: "4 months ago",
    text: "Great place, wonderful people- each with a job and very knowledgeable. Enjoy Dr Staudenmaier's knowledge and recommendations so far.",
  },
  {
    author: "Amy Paul",
    rating: 5,
    source: "Google",
    relativeTime: "5 months ago",
    text: "I've seen Dr. Luke for over 20 years and he has been a vital part of my health journey. His staff is has always been amazing too!",
  },
  {
    author: "Katie Abts",
    rating: 5,
    source: "Google",
    relativeTime: "6 months ago",
    text: "I cannot say enough good about Dr. Luke and his ladies up front! I've been going to him regularly for almost 2 years now. Thanks to him, I am no longer living in fear (or pain)! Thank you to each one of you!",
  },
  {
    author: "Tina Anderson",
    rating: 5,
    source: "Google",
    relativeTime: "6 months ago",
    text: "Wonderful place, kind, caring and compassionate girls and Dr. Staudenmier is the sweetest ever with a great sense humor! Love it here!",
  },
  {
    author: "Cynthea Krowas",
    rating: 5,
    source: "Google",
    relativeTime: "7 months ago",
    text: "Started October 31st and not going to lie I was hesitant. I thought all my aches and pains were only fixable by a surgical doctor. Dr. Luke proved me wrong within my first 4 weeks! I was in bad shape and within 3-5 years it probably would have been permanent. I not only feel better, but I no longer have those aches and pains that I thought, I would just have to live with.\n\nI wasn't able to lift my left arm above my head. I saw a doctor for almost a year. I was at the end of it, therapy, shots, medication, everything. The next step was surgery. The new peziowave not only helped my shoulder, I no longer need an unnecessary surgery! My muscle pain is almost to zero pain within the first treatment and after only 3 treatments I can raise my arm straight up and only have minor pain left in that arm.\n\nThe three beautiful and talented women that work with Dr Luke are just as amazing! Ashley, Jessica, and Alex have hearts of gold and always looking out for the best interest of their patients! Even if you're having a bad day I'm sure one or all of them can make you smile.\n\nDr Luke is down to earth and explains the issues that you have going on in a way that you understand. He might have the occasional dad joke, but he never jokes about your health! Hands down the only chiropractor I will ever recommend!",
  },
  {
    author: "Penny Price",
    rating: 5,
    source: "Google",
    relativeTime: "7 months ago",
    text: "My whole family sees Dr. Luke. We love the preventative tips he shares as well as the feeling of relief of aches and pains after our adjustments.",
  },
  {
    author: "Janette Guilette",
    rating: 5,
    source: "Google",
    relativeTime: "a year ago",
    text: "I have been a patient of Dr. Luke for over 25 years. I was a chiropractic skeptic, and had tried a couple of others with no success for any aches & pains. I was having such stiff pain in my knees in my 20s, and thought I was developing early arthritis. My husband was already seeing Dr. Luke, and insisted I try him. On my very first visit, Dr. Luke adjusted my knees, and my stiffness and pain was gone before I walked out of the office. Amazing! My husband, children, and I continue to be patients. He is the most empathetic person I know, and will go out of his way to make sure we stay healthy and pain free.",
  },
  {
    author: "Jennifer Levendusky",
    rating: 5,
    source: "Google",
    relativeTime: "a year ago",
    text: "Dr. Luke has been treating families in our area for many years. He's an expert in pediatric chiropractic care. He helped my daughter with her migraines and me after a fall. I literally couldn't move my head until he adjusted my spine. I've been seeing him for over 25 years now. He is so caring. Get in to see him if you need help.",
  },
  {
    author: "Sondra Asher",
    rating: 5,
    source: "Google",
    relativeTime: "10 months ago",
    text: "Dr Luke has been phenomenal anytime I have questions or need adjustments. Shows what is going on as well as explains it in terms that I can relate to.",
  },
  {
    author: "Pam Zeller",
    rating: 5,
    source: "Google",
    relativeTime: "10 months ago",
    text: "Very pleased. They did a very thorough work up before planning a treatment course. Dr. Luke and staff are very caring.",
  },
  {
    author: "Sandy Sternard",
    rating: 5,
    source: "Google",
    relativeTime: "10 months ago",
    text: "Love going to Dr Luke. He has fixed me up on many occasions. Really enjoy the information he provides on the daily health epidemic. The staff are very friendly and always have me in a good mood before leaving.",
  },
  {
    author: "Ryan Blasier",
    rating: 5,
    source: "Google",
    relativeTime: "6 months ago",
    text: "Would definitely recommend!! And I have.",
  },
];

export const googleReviewsSummary = {
  rating: 4.8,
  count: 58,
  placeQuery: "Staudenmaier Chiropractic Wellness Center Sturgeon Bay",
} as const;
