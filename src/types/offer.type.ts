import { PropertyType } from './property.enum.js';

export type Offer = {
    title: string;
    description: string;
    postDate: Date;
    city: string;
    preview: string;
    photos: string[];
    isPremium: boolean;
    rating: number;
    property: PropertyType;
    rooms: number;
    guests: number;
    price: number;
    facilities: string[];
    user: string;
    commentsCount: number;
    coordinates: string;
  }
