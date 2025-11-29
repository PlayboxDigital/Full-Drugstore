import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  label: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageClassName?: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}