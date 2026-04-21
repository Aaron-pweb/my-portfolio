export interface JournalPost {
  id: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
}

export const journalPosts: JournalPost[] = [
  {
    id: 'post-1',
    title: 'THE_ETERNAL_FUTURE_LOG',
    date: '2025-03-13',
    content: `
      "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away... 
      
      'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.' 
      
      He who was seated on the throne said, 'I am making everything new!'"
      
      — Revelation 21:1, 4-5
    `,
    tags: ['SCRIPTURE', 'FUTURE', 'HOPE']
  }
];
