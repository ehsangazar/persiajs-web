// TypeScript type definitions for PersiaJS website data structures

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Person {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
}

export interface TeamMember extends Person {
  id: string;
}

export interface Speaker extends Person {
  id: string;
}

export interface ActionCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
}

export interface Navigation {
  links: NavLink[];
}

export interface SocialMedia {
  links: SocialLink[];
  speakerApplicationForm?: string;
  sponsorForm?: string;
}
