/** Google reviews sourced from the clinic's public Google listing (via Birdeye aggregator). 5-star only. */
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
    author: "Janette Guilette",
    rating: 5,
    source: "Google",
    relativeTime: "9 months ago",
    text: "I have been a patient of Dr. Luke for over 25 years. I was a chiropractic skeptic, and had tried a couple of others with no success for any aches & pains. I was having such stiff pain in my knees in my 20s, and thought I was developing early arthritis. My husband was already seeing Dr. Luke, and insisted I try him. On my very first visit, Dr. Luke adjusted my knees, and my stiffness and pain was gone before I walked out of the office. Amazing! My husband, children, and I continue to be patients.",
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
