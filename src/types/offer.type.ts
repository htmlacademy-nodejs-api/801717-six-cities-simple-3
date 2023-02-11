import { PropertyType } from './property.enum.js';
import { CityType } from './city.enum.js';
import {User} from './user.type.js';
import {Facilities} from './facilities.enum.js';

export type Offer = {
    title: string;
    description: string;
    postDate: Date;
    city: CityType;
    preview: string;
    photos: string[];
    isPremium: boolean;
    rating: number;
    property: PropertyType;
    rooms: number;
    guests: number;
    price: number;
    facilities: Facilities[];
    user: User;
    commentsCount: number;
    coordinates: string;
  }
