export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  year: string;
  /** Photo for the card (e.g. bootcamp/hackathon photo). Falls back to the icon when omitted. */
  image?: string;
}
